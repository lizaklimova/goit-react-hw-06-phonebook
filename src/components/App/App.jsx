import { useSelector } from 'react-redux';
import ContactsForm from '../ContactsForm';
import { Container, ContactsSection } from './App.styled';
import ContactsList from 'components/ContactsList/ContactsList';
import { getContacts } from '../../redux/contactsSlice';
import FilterSearch from 'components/FilterSearch/FilterSearch';

export default function App() {
  const { contacts } = useSelector(getContacts);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactsForm />

      <ContactsSection>
        <h2>Contacts</h2>
        <FilterSearch />
        {contacts.length > 0 ? <ContactsList /> : <p>No contacts found</p>}
      </ContactsSection>
    </Container>
  );
}
