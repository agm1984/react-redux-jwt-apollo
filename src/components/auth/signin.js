import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { reduxForm } from 'redux-form'
import * as actions from '../../actions'
import LOGIN_MUTATION from '../../mutations/login'

class SignIn extends Component {
    handleFormSubmit({ email, password }) {
        this.props.mutate({
            variables: {
                b404cb368ffdb87f0bca27d7b3270f58aa4ec12f306baa4307e7651a1fc40a18: email,
                da02f6d566901e0a7a5181ab82993b6603a855ee6762faa976d739c6ad0c7698: password
            }
        })
        .then((res) => {
            const token = res.data.b9c015658e6693e9025192126f54bccb5e80ac1305e9b2d91583a135569bb27c.token
            this.props.signinUser(token)
        })
        .catch((err) => this.props.authError(err))
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="form-control-feedback">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            )
        }
    }

    render() {
        const { handleSubmit, fields: { email, password } } = this.props

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email</label>
                    <input {...email} className="form-control" type="email" />
                </fieldset>

                <fieldset className="form-group">
                    <label>Password</label>
                    <input {...password} className="form-control" type="password" />
                </fieldset>

                {this.renderAlert()}

                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return { errorMessage: state.auth.error }
}

export default reduxForm({
    form: 'SignInForm',
    fields: ['email', 'password']
}, mapStateToProps, actions)(graphql(LOGIN_MUTATION)(SignIn))