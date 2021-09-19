import React from 'react';

const Select = ({options, onChange}) => {

    return (
        <select onChange={e => onChange(e.target.value)}>
            {
                options.map(({label, value}) => (
                    <option value={value} key={value}>{label}</option>
                ))
            }
        </select>
    );
};

export default Select;
