import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

// We could display some kind of marketing message upon sign out
class SignOut extends Component {
    componentWillMount() {
        this.props.signoutUser()
    }

    render() {
        return (
            <div>Sorry to see you go... (not)</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { authenticated: state.auth.authenticated }
}

export default connect(null, actions)(SignOut)