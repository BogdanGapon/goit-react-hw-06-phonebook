import { AppWrapper } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <AppWrapper>
      <h2>Phonebook</h2>
      <ContactForm />
      <h3>Contacts</h3>
      <ContactFilter />

      <ContactList />
    </AppWrapper>
  );
};
