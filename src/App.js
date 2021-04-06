import { Component } from 'react';
import { v4 as uuid } from 'uuid';
// import css from './styles/App.module.scss';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

class App extends Component {
    state = {
        contacts: [],
    };

    addContact = ({ name, number }) => {
        const newContact = { id: uuid(), name, number };

        this.setState(({ contacts }) => ({
            contacts: [newContact, ...contacts],
        }));
    };

    render() {
        const { contacts } = this.state;

        return (
            <div className="container">
                <h1>Телефонная книга</h1>
                <ContactForm onSubmit={this.addContact} />

                <h2>Контакты</h2>
                <ContactList contacts={contacts} />
            </div>
        );
    }
}

export default App;
