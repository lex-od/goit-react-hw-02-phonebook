import PropTypes from 'prop-types';
// import css from './ContactItem.module.scss';

const ContactItem = ({ name, number }) => (
    <>
        <span>{name}: </span>
        <span>{number}</span>
    </>
);

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default ContactItem;
