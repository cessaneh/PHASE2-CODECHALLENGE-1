import './App.css';
import React,{useState,useEffect } from 'react';
import Ttables from '../src/components/Ttables';
import Tsearch from '../src/components/Tsearch';
import Tforms from '../src/components/Tforms';

function App() {
  const initialTransactions = [
    {date: '2024-12-02', description:"ordered pizza",category: "Food", amount:2250},
    {date: '2024-11-06', description:"paid for movie tickets",category: "Entertainment", amount:850},
    {date: '2024-06-14', description:"bought clothes",category: "Clothing", amount:8000},
    {date: '2024-02-18', description:"fueled my bentley",category: "Transport", amount:6700},
    {date: '2024-12-05', description:"bought make-up",category: "Beauty and skincare", amount:14000},
    

  ];
  const [transactions,setTransactions] = useState(initialTransactions);
  const [filteredTransactions,setFilteredTransactions] =useState(transactions);


  function handleAddTransaction(formData){
    setTransactions([...transactions, formData]);
    setFilteredTransactions([...transactions, formData]);
  };

  function handleSearch(searchTerm){
    const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredTransactions(filteredTransactions);
  };

  return (
    <div>
      <h1>BANK TRANSACTION</h1>
      <Tforms onAddTransaction={handleAddTransaction} />
      <Tsearch onSearch={handleSearch} />
      <Ttables transactions={filteredTransactions} />
    </div>
   
  );
}
export default App;