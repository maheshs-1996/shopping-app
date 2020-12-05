import React from 'react';
import './search-box.css';

export default function searchBox(props) {
    const { placeholder, onChange } = props
    return (
        <input className="search-box" type="search" placeholder={placeholder} onChange={onChange} />
    )
}
