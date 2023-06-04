import PropTypes from 'prop-types';
import {
  ContactsUl,
  ContactsLi,
  ContactsText,
  ContactsButton,
} from './ContactList.styled.jsx';

export const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ContactsUl>
      {contacts.map(({ name, number, id }) => (
        <ContactsLi key={id}>
          <ContactsText>{name}</ContactsText>
          <ContactsText>{number}</ContactsText>
          <ContactsButton onClick={() => handleDeleteContact(id)}>
            Delete
          </ContactsButton>
        </ContactsLi>
      ))}
    </ContactsUl>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};
