import { Component } from 'react';
import { v4 as uuid } from 'uuid';
// import css from './styles/App.module.scss';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
    state = {
        contacts: [],
        filter: '',
    };

    addContact = ({ name, number }) => {
        const newContact = { id: uuid(), name, number };

        this.setState(({ contacts }) => ({
            contacts: [newContact, ...contacts],
        }));
    };

    changeFilter = e => {
        this.setState({ filter: e.target.value });
    };

    getFilteredContacts() {
        const normFilter = this.state.filter.toLowerCase();

        return this.state.contacts.filter(({ name }) =>
            name.toLowerCase().includes(normFilter),
        );
    }

    render() {
        const { filter } = this.state;
        const filteredContacts = this.getFilteredContacts();

        return (
            <div className="container">
                <h1>Телефонная книга</h1>
                <ContactForm onSubmit={this.addContact} />

                <h2>Контакты</h2>
                <Filter value={filter} onChange={this.changeFilter} />
                <ContactList contacts={filteredContacts} />
            </div>
        );
    }
}

export default App;
