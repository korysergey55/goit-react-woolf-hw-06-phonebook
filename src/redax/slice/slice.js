import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  contacts: [],
  filter: '',
}

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    createContact: (state, { payload }) => {
      state.contacts.push({ ...payload, id: nanoid() })
    },

    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter((item) => (item.id !== payload))
    },

    setFilter: (state, { payload }) => {
      state.filter = payload
    },

    resetFilter: (state) => {
      state.filter = ''
    },
  },
})
export const { createContact, deleteContact, setContacts, setFilter, resetFilter } = phonebookSlice.actions
export const phonebookReducer = phonebookSlice.reducer

