import { Component } from 'react';
import { v4 as uuid } from 'uuid';
// import css from './styles/App.module.scss';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

class App extends Component {
    state = {
        contacts: [],
    };

    addContact = name => {
        const newContact = { id: uuid(), name };

        this.setState(actState => ({
            contacts: [newContact, ...actState.contacts],
        }));
    };

    render() {
        const { contacts } = this.state;

        return (
            <div className="container">
                <ContactForm onSubmit={this.addContact} />

                <ContactList contacts={contacts} />
            </div>
        );
    }
}

export default App;
