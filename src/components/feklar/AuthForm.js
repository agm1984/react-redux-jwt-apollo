import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import LOGIN_MUTATION from '../mutations/Login'

class AuthForm extends Component {
    constructor(props) {
        super(props)

        this.state = { b404cb368ffdb87f0bca27d7b3270f58aa4ec12f306baa4307e7651a1fc40a18: '', da02f6d566901e0a7a5181ab82993b6603a855ee6762faa976d739c6ad0c7698: '' }
    }

    onSubmit(event) {
        event.preventDefault()

        const { b404cb368ffdb87f0bca27d7b3270f58aa4ec12f306baa4307e7651a1fc40a18, da02f6d566901e0a7a5181ab82993b6603a855ee6762faa976d739c6ad0c7698 } = this.state
        this.props.onSubmit({ b404cb368ffdb87f0bca27d7b3270f58aa4ec12f306baa4307e7651a1fc40a18, da02f6d566901e0a7a5181ab82993b6603a855ee6762faa976d739c6ad0c7698 })
    }
    render() {
        return (
            <div className="row">
                <form className="col s4" onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input
                            placeholder="Email"
                            type="email"
                            value={this.state.b404cb368ffdb87f0bca27d7b3270f58aa4ec12f306baa4307e7651a1fc40a18}
                            onChange={(event) => this.setState({ b404cb368ffdb87f0bca27d7b3270f58aa4ec12f306baa4307e7651a1fc40a18: event.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <input
                            placeholder="Password"
                            type="password"
                            value={this.state.da02f6d566901e0a7a5181ab82993b6603a855ee6762faa976d739c6ad0c7698}
                            onChange={(event) => this.setState({ da02f6d566901e0a7a5181ab82993b6603a855ee6762faa976d739c6ad0c7698: event.target.value })}
                        />
                    </div>
                    <div className="errors">
                        {this.props.errors.map((error) => <div key={error}>{error}</div>)}
                    </div>

                    <button className="btn">Submit</button>
                </form>
            </div>
        )
    }
}

export default AuthForm