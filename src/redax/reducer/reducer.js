import { combineReducers } from 'redux'
import { phonebookReducer } from '../slice/slice'

const randomReducer = (state = null, _) => {
  return state
}

export const rootReducer = combineReducers({
  contacts: phonebookReducer,
  random: randomReducer,
})