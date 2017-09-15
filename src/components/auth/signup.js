import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import * as actions from '../../actions'

class SignUp extends Component {
    handleFormSubmit(formProps) {
        this.props.signupUser(formProps)
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-message">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            )
        }
    }
    render() {
        const { handleSubmit, fields: { email, password, passwordConfirm } } = this.props
        // password.error below comes from this.props.password.error
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" {...email} />
                    {email.touched && email.error && <div className="form-control-feedback">{email.error}</div>}
                </fieldset>

                <fieldset className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" {...password} />
                    {password.touched && password.error && <div className="form-control-feedback">{password.error}</div>}
                </fieldset>

                <fieldset className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control form-control-dange" {...passwordConfirm} />
                    {passwordConfirm.touched && passwordConfirm.error && <div className="form-control-feedback">{passwordConfirm.error}</div>}
                </fieldset>

                {this.renderAlert()}

                <button action="submit" className="btn btn-primary">Sign up!</button>
            </form>
        )
    }
}

const validate = (formProps) => {
    //console.log(formProps)
    let errors = {}

    if (!formProps.email) errors.email = `Don't forget your Email!`
    if (!formProps.password) errors.password = 'You must supply a Password.'
    if (formProps.password && formProps.password.length < 8) errors.password = 'Your Password must be at least 8 characters.'
    if (!formProps.passwordConfirm) errors.passwordConfirm = 'You must confirm your Password.'
    if (formProps.password !== formProps.passwordConfirm) errors.passwordConfirm = 'Your Passwords must match.'

    return errors
}

const mapStateToProps = (state) => {
    return { errorMessage: state.auth.error }
}

export default reduxForm({
    form: 'SignUpForm',
    fields: ['email', 'password', 'passwordConfirm'],
    validate: validate
}, mapStateToProps, actions)(SignUp)

// export default reduxForm({
//     form: 'SignUpForm',
//     fields: ['email', 'password', 'passwordConfirm'],
//     validate: validate
// }, null, actions)(SignUp)

// null can be mapStateToProps