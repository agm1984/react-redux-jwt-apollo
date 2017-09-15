import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import App from './components/App'
import Index from './components/Index'
import SignIn from './components/auth/signin'
import SignUp from './components/auth/signup'
import SignOut from './components/auth/signout'
import Dashboard from './components/Dashboard'
import requireAuth from './components/auth/require_auth'
import reducers from './reducers'
import { AUTH_USER } from './actions/types'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)
const token = localStorage.getItem('token')
if (token) store.dispatch({ type: AUTH_USER })

const networkInterface = createNetworkInterface({
    uri: 'http://localhost:8000/graphql',
    opts: {
        credentials: 'same-origin',
        mode: 'cors'
    }
})

networkInterface.use([{
    applyMiddleware(req, next) {
        if (!req.options.headers) req.options.headers = {}
        const token = localStorage.getItem('token')
        req.options.headers.authorization = token ? token : null
        next()
    }
}])

export const client = new ApolloClient({
    networkInterface,
    dataIdFromObject: (o) => o.id
})

const Root = () => {
    return (
        <ApolloProvider store={store} client={client}>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Index} />
                    <Route path="signin" component={SignIn} />
                    <Route path="signout" component={SignOut} />
                    <Route path="signup" component={SignUp} />
                    <Route path="dashboard" component={requireAuth(Dashboard)} />
                </Route>
            </Router>
        </ApolloProvider>
    )
}

ReactDOM.render(
    <Root />
    ,document.querySelector('#root')
)
