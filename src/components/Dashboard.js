import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        return (
            <div>YOU ARE LOGGED IN.</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        prop: state
    }
}

export default connect(mapStateToProps)(Dashboard)