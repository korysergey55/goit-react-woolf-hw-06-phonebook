import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redax/slice/slice';
import { getFilteredContacts } from 'redax/selectors/selectors';

import { toast } from 'react-toastify';
import styles from './styles.module.css'

const ContactList = () => {
  const dispatch = useDispatch()
  const filteredContacts = useSelector(getFilteredContacts)

  const handleDelete = (id) => {
    dispatch(deleteContact(id))
    toast.success(`Contact was successfuly deleted!`, {
      theme: 'colored',
    })
  }

  return (
    <div className={styles.container}>
      <ul className={styles.list} >
        {filteredContacts?.map((item) => (
          <li className={styles.item} key={item.id}>
            <p className={styles.text}> {item.name}: {item.number}</p>
            <button
              type="button"
              className={styles.btn}
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul >
    </div>
  );
}

export default ContactList;