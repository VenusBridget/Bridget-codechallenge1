import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Search from './Components/Search'
import AddTransactionForm from './Components/AddTransactionForm'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Search/>
      <AddTransactionForm/>
    </div>
  )
}

export default App