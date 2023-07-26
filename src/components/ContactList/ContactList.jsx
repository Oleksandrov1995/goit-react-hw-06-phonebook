import { deleteContact } from 'redux/contactsSlice';
import css from '../ContactList/ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/store';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  if (!filteredContacts?.length) {
    return 'No contacts found.';
  }

  return (
    <div className={css.contacts}>
      <ul className={css.contacts__list}>
        {filteredContacts.map(({ id, name, number }) => (
          <li className={css.contacts__item} key={id}>
            <p className={css.contacts__name}>{name}</p>
            <p className={css.contacts__number}> {number}</p>
            <button
              onClick={() => {
                onDeleteContact(id);
              }}
              className={css.contacts__btn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
