import PropTypes from 'prop-types';
// import css from './Filter.module.scss';

const Filter = ({ value, onChange }) => (
    <label>
        Найти контакты по имени
        <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;
