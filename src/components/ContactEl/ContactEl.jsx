import { useDispatch, useSelector } from 'react-redux';
import {
  ContactLi,
  ContactWrapper,
  ContactDeleteBtn,
  ContactIcon,
} from './ContactEl.styled';
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
            <ContactWrapper>
              <ContactIcon>
                {name && name.slice(0, 1).toUpperCase()}
              </ContactIcon>
              <p>
                {name}: {number}
              </p>
            </ContactWrapper>
            <ContactDeleteBtn
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete ❌
            </ContactDeleteBtn>
          </ContactLi>
        ))
      ) : (
        <div>No contacts found on filter {filter}</div>
      )}
    </>
  );
}
