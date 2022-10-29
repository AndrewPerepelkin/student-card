import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  className,
  error
}) => {

  return (
    <div className='mb-4'>
      <label
        htmlFor={name}
        className='mb-2'
      >
        {label}
      </label>
      <div className='mb-3'>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={className}
        />
        {error && <div className='mb-2 text-red-400'>{error}</div>}
      </div>
    </div>
  );
};

InputField.defaultProps = {
  type: 'text'
};

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
};

export default InputField;
