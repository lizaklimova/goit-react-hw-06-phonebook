import { useSelector } from 'react-redux';
import ContactsForm from '../ContactsForm';
import { Container, ContactsSection } from './App.styled';
import ContactsList from 'components/ContactsList/ContactsList';
import { getContacts } from '../../redux/selectors';
import FilterSearch from 'components/FilterSearch/FilterSearch';
import { useEffect } from 'react';

export default function App() {
  const contacts = useSelector(getContacts);

  useEffect(() => {
    localStorage.setItem('contacts', contacts);
  }, [contacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactsForm />

      <ContactsSection>
        <h2>Contacts</h2>
        <FilterSearch />
        {contacts.length ? <ContactsList /> : <p>No contacts found</p>}
        <ContactsList />
      </ContactsSection>
    </Container>
  );
}
