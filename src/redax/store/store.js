import { configureStore } from '@reduxjs/toolkit'
// import { rootReducer } from 'redax/reducer/reducer'
import { phonebookReducer } from 'redax/slice/slice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'contacts',
  storage,
}

const persistedReducer = persistReducer(persistConfig, phonebookReducer)

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  }
})

export const persistor = persistStore(store)


