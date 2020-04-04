import React from 'react';
import './search-box.components.styles.css'
export const SearchBox = ({placeholder,handleChange}) => (
    
        // eslint-disable-next-line no-unused-expressions
        <input
        className='search'
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
       
    />
    
);