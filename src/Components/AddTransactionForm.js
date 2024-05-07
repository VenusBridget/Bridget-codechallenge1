import React, { useState } from 'react';
import './AddTransactionForm.css';

function AddTransactionForm() {
    const [transactions, setTransactions] = useState([]);
    const [addedTransaction, setAddedTransaction] = useState({
        date: "",
        description: "",
        category: "",
        amount: "",
    });

    function handleChange(e) {
        setAddedTransaction({
            ...addedTransaction,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (addedTransaction.date && addedTransaction.description && addedTransaction.category && addedTransaction.amount !== '') {
            const updatedTransactions = [...transactions, addedTransaction];
            setTransactions(updatedTransactions);
            setAddedTransaction({
                date: "",
                description: "",
                category: "",
                amount: "",
            });
        }
    }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <input
                    type="date"
                    name='date'
                    placeholder='Enter date'
                    className='input'
                    value={addedTransaction.date}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name='description'
                    placeholder='Enter description'
                    className='input'
                    value={addedTransaction.description}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name='category'
                    placeholder='Enter category'
                    className='input'
                    value={addedTransaction.category}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name='amount'
                    placeholder='Enter amount'
                    className='input'
                    value={addedTransaction.amount}
                    onChange={handleChange}
                />
                <div>
                    <button type="submit" >Add Transaction</button>
                </div>
            </form>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{transaction.date}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.category}</td>
                            <td>ksh. {transaction.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AddTransactionForm;