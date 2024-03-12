import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.contacts.contacts
export const getFilter = state => state.contacts.filter

export const getFilteredContacts = createSelector([getContacts, getFilter], (getContacts, getFilter) => {
  return getContacts?.filter((item) =>
    item.name
      .toLocaleLowerCase()
      .trim()
      .includes(getFilter?.toLocaleLowerCase().trim()))
})



