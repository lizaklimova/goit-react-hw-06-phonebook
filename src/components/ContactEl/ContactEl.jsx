import { useDispatch, useSelector } from 'react-redux';
import { ContactLi, ContactDeleteBtn } from './ContactEl.styled';
import { deleteContact } from '../../redux/contactsSlice';
import { getContacts, getFilterSearch } from '../../redux/selectors';

export default function ContactEl() {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterSearch);

  const filteredContacts = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(filter);
  });

  return filteredContacts.map(({ id, name, number }, i) => (
    <ContactLi key={id}>
      <p>
        {i + 1}. {name}: {number}
      </p>
      <ContactDeleteBtn
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete ❌
      </ContactDeleteBtn>
    </ContactLi>
  ));
}
