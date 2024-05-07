import React from 'react';
import './Search.css';

function Search({ transactions, setTransactions }) {

    function handleChange(e) {
        const searchInput = e.target.value
        if (searchInput.length > 0) {
            const filter = transactions.filter((transaction) => {
                return transaction.description.toLowerCase().includes(searchInput.toLowerCase())
            })
            setTransactions([...filter])
        }
    }
    return (
        <div>
            <input
                type="text"
                className='searchcontainer'
                placeholder='Search transactions'
                onChange={handleChange}
            />
        </div>
    )
}

export default Search