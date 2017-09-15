// #################################################################
// ### WE HAVE TO RETURN A NEW OBJECT EVERY TIME WE RETURN STATE ###
// #################################################################

import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR
} from '../actions/types'


export default function (state = {}, action) {
    // Note how errors are cleared when other actions are successful.
    // This clears any rendered errors.
    switch (action.type) {
        case AUTH_USER:
            return { ...state, error: '', authenticated: true }

        case UNAUTH_USER:
            return { ...state, error: '', authenticated: false }

        case AUTH_ERROR:
            return { ...state, error: action.payload }
    }

    return state
}