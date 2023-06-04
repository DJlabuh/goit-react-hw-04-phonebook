import { Component } from 'react';
import { Container, SectionComponents, Title, WarningText } from './App.styled';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

import { nanoid } from 'nanoid';

const LOCALSTORAGE_KEY_CONTACTS = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem(LOCALSTORAGE_KEY_CONTACTS);
    const extractedContacts = JSON.parse(contacts);
    if (extractedContacts) {
      this.setState({ contacts: extractedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LOCALSTORAGE_KEY_CONTACTS, JSON.stringify(this.state.contacts));
    }
  }

  createUser = data => {
    const { name } = data;

    const userExists = this.state.contacts.some(
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
    this.setState(({ contacts }) => ({ contacts: [newUser, ...contacts] }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <SectionComponents>
          <Title>Phonebook</Title>
          <ContactForm createUser={this.createUser} />
        </SectionComponents>
        <SectionComponents>
          <Title>Contacts</Title>
          <Filter value={filter} onChange={this.changeFilter} />
          {visibleContacts.length ? (
            <ContactList
              contacts={visibleContacts}
              handleDeleteContact={this.deleteContact}
            />
          ) : (
            <WarningText>Contact not found!</WarningText>
          )}
        </SectionComponents>
      </Container>
    );
  }
}
