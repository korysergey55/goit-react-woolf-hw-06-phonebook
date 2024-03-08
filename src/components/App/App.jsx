import { useEffect, useState } from 'react'
import styles from './styles.module.css'

import ContactForm from '../contactForm/ContactForm';
import ContactList from 'components/contactList/ContactList';
import Filter from 'components/filter/Filter';

import { useSelector } from 'react-redux';

const App = () => {
  const { contacts } = useSelector((state) => state.contacts)
  const [filter, setFilter] = useState('')

  // const getLocalData = () => {
  //   const localData = localStorage.getItem('contacts')
  //   if (localData) {
  //     return JSON.parse(localData)
  //   }
  //   return []
  // }
  // const [contacts, setContacts] = useState(() => getLocalData())

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts])

  const handleFilter = (evt) => {
    setFilter(evt.target.value)
  }


  const getFilteredContacts = () => {
    return contacts?.filter((item) =>
      item.name
        .toLocaleLowerCase()
        .trim()
        .includes(filter.toLocaleLowerCase().trim()))
  }

  const filteredComtacts = getFilteredContacts()

  return (
    <div className={styles.container} >

      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />

      <h1 className={styles.title}>Contacts</h1>
      <Filter
        filter={filter}
        handleFilter={handleFilter} />

      {filteredComtacts.length > 0 && < ContactList />}

    </div>
  );
};
export { App }
