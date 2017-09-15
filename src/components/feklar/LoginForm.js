import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import { graphql } from 'react-apollo'
import jwtDecode from 'jwt-decode'
//import { requestLogin } from '../actions'
import AuthForm from './AuthForm'
import CURRENT_USER_QUERY from '../queries/CurrentUser'
import LOGIN_MUTATION from '../mutations/Login'

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = { errors: [] }
    }

    // This fires when the component re-renders for any reason
    componentWillUpdate(nextProps) {
        // When the component re-renders:
        // this.props // The old props
        // nextProps // The next props that will be in place
        //console.log(this.props, nextProps)
        // if (!this.props.data.user && nextProps.data.user) {
        //     // Redirect to Dashboard! (detect delta between the two)
        //     browserHistory.push('/dashboard')
        // }
    }

    onSubmit({ b404cb368ffdb87f0bca27d7b3270f58aa4ec12f306baa4307e7651a1fc40a18, da02f6d566901e0a7a5181ab82993b6603a855ee6762faa976d739c6ad0c7698 }) {
        this.props.mutate({
                variables: {
                    b404cb368ffdb87f0bca27d7b3270f58aa4ec12f306baa4307e7651a1fc40a18: b404cb368ffdb87f0bca27d7b3270f58aa4ec12f306baa4307e7651a1fc40a18,
                    da02f6d566901e0a7a5181ab82993b6603a855ee6762faa976d739c6ad0c7698: da02f6d566901e0a7a5181ab82993b6603a855ee6762faa976d739c6ad0c7698
                }/*,
                    refetchQueries: [{ query: CURRENT_USER_QUERY }]*/
            })
            .then((response) => {
                console.log('RESPONSE', response.data.b9c015658e6693e9025192126f54bccb5e80ac1305e9b2d91583a135569bb27c)
                const loggedIn = jwtDecode(response.data.b9c015658e6693e9025192126f54bccb5e80ac1305e9b2d91583a135569bb27c.token)
                localStorage.setItem('token', response.data.b9c015658e6693e9025192126f54bccb5e80ac1305e9b2d91583a135569bb27c.token)
                localStorage.setItem('wallet', loggedIn.wallet)
                browserHistory.push('/dashboard')
            })
            .catch((error) => {
                console.log('errorz', error)
                // const errors = error.graphQLErrors.map((e) => e.message)
                // this.setState({ errors })
            })
    }

    render() {
        // console.log('props', this.props.requestLogin({
        //     email: 'adamtest@testaction.com',
        //     password: 'secure123'
        // }))
        return (
            <div>
                <h3>Login</h3>
                <AuthForm
                    errors={this.state.errors}
                    onSubmit={this.onSubmit.bind(this)}
                />
            </div>
        )
    }
}

// This is needed to login properly, to ensure view loads correct
// export default graphql(CURRENT_USER_QUERY)(
//     graphql(LOGIN_MUTATION)(LoginForm)
// )

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ requestLogin }, dispatch)
// }

// export default connect(null, mapDispatchToProps)(LoginForm)

export default LoginForm