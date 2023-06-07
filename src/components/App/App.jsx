import React, { useState, useEffect } from 'react';
import { Container, SectionComponents, Title, WarningText } from './App.styled';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { nanoid } from 'nanoid';

const LOCALSTORAGE_KEY_CONTACTS = 'contacts';
const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem(LOCALSTORAGE_KEY_CONTACTS);
    return storedContacts ? JSON.parse(storedContacts) : initialState;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY_CONTACTS, JSON.stringify(contacts));
  }, [contacts]);

  const createUser = data => {
    const { name } = data;

    const userExists = contacts.some(
      user => user.name.toLowerCase() === name.toLowerCase()
    );

    if (userExists) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newUser = {
      id: nanoid(),
      ...data,
    };
    setContacts(prevContacts => [newUser, ...prevContacts]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <SectionComponents>
        <Title>Phonebook</Title>
        <ContactForm createUser={createUser} />
      </SectionComponents>
      <SectionComponents>
        <Title>Contacts</Title>
        <Filter value={filter} onChange={changeFilter} />
        {visibleContacts.length ? (
          <ContactList
            contacts={visibleContacts}
            handleDeleteContact={deleteContact}
          />
        ) : (
          <WarningText>Contact not found!</WarningText>
        )}
      </SectionComponents>
    </Container>
  );
};
