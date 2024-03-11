import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redax/slice/slice';

const ContactList = () => {
  const dispatch = useDispatch()
  const { contacts } = useSelector((state) => state.contacts)

  const handleDelete = (id) => {
    dispatch(deleteContact(id))
  }

  return (
    <div className={styles.container}>
      <ul className={styles.list} >
        {contacts?.map((item) => (
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