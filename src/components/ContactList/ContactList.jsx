import { useDispatch, useSelector } from 'react-redux';
import { ContactItem } from './ContactList.styled.js';
import { deleteContact } from 'redux/contactSlice.js';
import PropTypes from 'prop-types';

export const ContactList = () => {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts.contacts);

  const dispatch = useDispatch();

  const createMarkupByFoundContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  return (
    <ul>
      {createMarkupByFoundContacts().map(contact => {
        return (
          <ContactItem key={contact.id}>
            {contact.name}: {contact.number}
            <button
              type="button"
              onClick={() => {
                dispatch(deleteContact(contact.id));
              }}
            >
              Delete
            </button>
          </ContactItem>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.array,
};
