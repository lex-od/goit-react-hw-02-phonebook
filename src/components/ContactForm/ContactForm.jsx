import { Component } from 'react';
import PropTypes from 'prop-types';
// import css from './ContactForm.module.scss';
import config from '../../json/ContactFormConfig.json';

class ContactForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    state = { name: '' };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.name);

        this.setState({ name: '' });
    };

    render() {
        const { name } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern={config.INPUT_NAME_PATTERN}
                        title={config.INPUT_NAME_TITLE}
                        value={name}
                        onChange={this.handleChange}
                        required
                    />
                </label>
                <button>Добавить контакт</button>
            </form>
        );
    }
}

export default ContactForm;
