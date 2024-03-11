import { createSlice, nanoid } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
  contacts: [],
  filter: '',
}

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    createContact: (state, { payload }) => {
      if (state.contacts?.some((contact) => contact.name.toLocaleLowerCase() === payload.name.toLocaleLowerCase())) {
        toast.error(`This Name - ${payload.name} already exist!`, {
          theme: 'colored',
        })
        return;
      }
      if (state.contacts?.some((contact) => contact.number === payload.number)) {
        toast.error(`This Number - ${payload.number} already exist!`, {
          theme: 'colored',
        })
        return;
      }
      state.contacts.push({ ...payload, id: nanoid() })
    },

    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter((item) => (item.id !== payload))
      toast.success(`Contact was successfuly deleted!`, {
        theme: 'colored',
      })
    },

    setContacts: (state, { payload }) => {
      state.contacts = [...payload]
    },

    setFilter: (state, { payload }) => {
      state.filter = payload
    },

    resetFilter: (state) => {
      state.filter = ''
    },
    setEditedContact: (state, { payload }) => {
      state.editedContact = state.contacts.find((item) => (item.id === payload))
    },
  },
})
export const { createContact, deleteContact, setContacts, setFilter, resetFilter } = phonebookSlice.actions
export const phonebookReducer = phonebookSlice.reducer

