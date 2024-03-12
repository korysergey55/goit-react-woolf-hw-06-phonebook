import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import { phonebookReducer } from '../slice/slice'
import storage from 'redux-persist/lib/storage'

const persistConfigContacts = {
  key: 'contacts',
  storage,
  blacklist: ['filter']
}

const persistConfigAuth = {
  key: 'auth',
  storage,
  blacklist: ['contacts'],
};

const AuthReducer = (state = null, action) => {
  return state
}

export const rootReducer = combineReducers({
  contacts: persistReducer(persistConfigContacts, phonebookReducer),
  random: persistReducer(persistConfigAuth, AuthReducer)
})