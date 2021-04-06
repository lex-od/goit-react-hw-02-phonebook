import PropTypes from 'prop-types';
// import css from './ContactItem.module.scss';

const ContactItem = ({ name }) => <span>{name}</span>;

ContactItem.propTypes = { name: PropTypes.string.isRequired };

export default ContactItem;
