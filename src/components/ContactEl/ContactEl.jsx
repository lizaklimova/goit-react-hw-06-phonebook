import { useDispatch, useSelector } from 'react-redux';
import { ContactLi, ContactDeleteBtn } from './ContactEl.styled';
import { deleteContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/contactsSlice';
import { getFilterSearch } from '../../redux/filterSearchSlice';

export default function ContactEl() {
  const dispatch = useDispatch();

  const { contacts } = useSelector(getContacts);
  const { filter } = useSelector(getFilterSearch);

  const filteredContacts = contacts.filter(({ name }) => {
    return name.toLowerCase().trim().includes(filter);
  });

  return (
    <>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(({ id, name, number }, i) => (
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
        ))
      ) : (
        <div>No</div>
      )}
    </>
  );
}
