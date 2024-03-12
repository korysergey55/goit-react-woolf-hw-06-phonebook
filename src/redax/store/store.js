import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import { rootReducer } from 'redax/reducer/reducer'
// import {  persistReducer } from 'redux-persist'
// import { phonebookReducer } from 'redax/slice/slice'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter']
// }
// const persistedReducer = persistReducer(persistConfig, phonebookReducer)

// export const store = configureStore({
//   reducer: {
//     contacts: persistedReducer,
//   }
// })

export const store = configureStore({
  reducer: rootReducer
})

export const persistor = persistStore(store)


