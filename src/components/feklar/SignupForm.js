import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { graphql } from 'react-apollo'
import AuthForm from './AuthForm'
import CURRENT_USER_QUERY from '../queries/CurrentUser'
import SIGNUP_MUTATION from '../mutations/Signup'

class SignupForm extends Component {
    constructor(props) {
        super(props)
        this.state = { errors: [] }
    }

    componentWillUpdate(nextProps) {
        //if (!this.props.data.user && nextProps.data.user) browserHistory.push('/dashboard')
    }

    onSubmit({ b404cb368ffdb87f0bca27d7b3270f58aa4ec12f306baa4307e7651a1fc40a18, da02f6d566901e0a7a5181ab82993b6603a855ee6762faa976d739c6ad0c7698 }) {
        this.props.mutate({
                variables: {
                    b404cb368ffdb87f0bca27d7b3270f58aa4ec12f306baa4307e7651a1fc40a18,
                    da02f6d566901e0a7a5181ab82993b6603a855ee6762faa976d739c6ad0c7698
                }/*,
                refetchQueries: [{ query: CURRENT_USER_QUERY }]*/
            })
            .then((response) => {
                browserHistory.push('/login')
            })
            .catch((error) => {
                console.log('errorz', error)
                // const errors = error.graphQLErrors.map((e) => e.message)
                // this.setState({ errors })
            })
    }

    render() {
        return (
            <div>
                <h3>Sign Up</h3>
                <AuthForm 
                    errors={this.state.errors}
                    onSubmit={this.onSubmit.bind(this)}
                />
            </div>
        )
    }
}

export default graphql(CURRENT_USER_QUERY)(
    graphql(SIGNUP_MUTATION)(SignupForm)
)