import PropTypes from 'prop-types';
// import css from './ContactList.module.scss';
import ContactItem from '../ContactItem';

const ContactList = ({ contacts }) => (
    <ul>
        {contacts.map(({ id, name }) => (
            <li key={id}>
                <ContactItem name={name} />
            </li>
        ))}
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default ContactList;
