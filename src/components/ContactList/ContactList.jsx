import { useDispatch, useSelector } from 'react-redux';
import { ContactItem } from './ContactList.styled.js';
import { deleteContact } from 'redux/contactSlice.js';

export const ContactList = () => {
  //   const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(contact => {
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
