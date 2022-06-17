import React from 'react';
import close from '../assets/images/icon-remove.svg';

const Filter = ({ keywords, removeKeywords, clearAll }) => {
    return (
        <div className='filter-container'>
            <ul>
                {keywords.map((key, id) => {
                    return (
                        <li key={id}>
                            {key}
                            <button type="submit" className='close' onClick={() => removeKeywords()}>
                                <img src={close} alt="close" />
                            </button>
                        </li>
                    )
                })}
                <a href="/" onClick={() => clearAll()} >Clear</a>
            </ul>
        </div>
    )
}

export default Filter