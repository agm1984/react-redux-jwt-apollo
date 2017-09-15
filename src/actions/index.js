import gql from 'graphql-tag'
import { browserHistory } from 'react-router'
import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
} from './types'

export const signinUser = (token) => {
    return (dispatch) => {
        dispatch({ type: AUTH_USER })
        localStorage.setItem('token', token)
        browserHistory.push('/dashboard')
    }
}

export const authError = (error) => {
    const message = error.graphQLErrors.map((e) => e.message)

    return (dispatch) => dispatch({ type: AUTH_ERROR, payload: message })
}

export const signoutUser = () => {
    localStorage.removeItem('token')

    return { type: UNAUTH_USER }
}

export function signupUser({ email, password }) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/signup`, { email, password })
            .then((response) => {
                dispatch({ type: AUTH_USER })
                localStorage.setItem('token', response.data.token)
                browserHistory.push('/dashboard')
            })
            .catch((error) => dispatch(authError(error.data.error)))
    }
}