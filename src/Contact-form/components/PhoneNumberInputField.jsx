import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import PropTypes from 'prop-types';

const PhoneNumberInputField = ({ required, onChange  }) => {
  return (
    <PhoneInput
    country="ke"
    value=""
    enableSearch
    enableAreaCodes
    autoFormat
    autocompleteSearch
    inputProps={{
        name: 'phone',
        required: required ? 'required' : false,
        autoComplete: 'tel'
    }}
    // onChange={()}
    containerClass='border py-2 border-black rounded outline-none focus:outline-none'
    inputClass="text-black !border-none"
    
    />
  )
}

PhoneNumberInputField.propTypes = {
    required: PropTypes.bool,
    onChange: PropTypes.func
}

export default PhoneNumberInputField