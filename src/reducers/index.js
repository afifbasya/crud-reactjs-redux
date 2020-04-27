import { combineReducers } from 'redux'
import users from './users'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    users,
    form: formReducer
})