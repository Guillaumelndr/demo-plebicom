import React from 'react';
import {select} from './style'

const Select = ({options, onChange, placeholder}) => {

    return (
        <div className={select}>
            <select onChange={e => onChange(e.target.value)}>
                {
                    placeholder && <option value="" disabled selected>{placeholder}</option>
                }
                {
                    options.map(({label, value}) => (
                        <option value={value} key={value}>{label}</option>
                    ))
                }
            </select>
        </div>
    );
};

export default Select;
