// import React , {useState} from 'react';

// function Tforms({onAddTransaction}){
//     const [formData, setFormData] = useState({date: '', description:'', category: '',amount: '',});
    
//     function handleChange(e){
//         e.preventDefault();
//         setFormData({...formData, [e.target.name]: e.target.value});
//     };

//     function handleSubmit(e){
//         e.preventDefault();
//         if(formData.date && formData.description && formData.category && formData.amount){
//         onAddTransaction(formData);
//         setFormData({date: '', description:'', category: '',amount: '',});
//     } else {
//       alert('Please fill in all fields.');
//     }

// };

// return(
//     <form className='form-container' onSubmit={handleSubmit}>
//     <input type="Date" name="date" value={formData.date} onChange={handleChange} placeholder='Date'/>
//     <input type='text' name="description" value={formData.description} onChange={handleChange} placeholder="Description"/>
//     <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category"/>
//     <input tpye="number" name="amount" value={formData.amount} onChange={handleChange} placeholder='Amount'/>
//     <button type="submit">Add Transaction</button>
//     </form>
// );
// }
// export default Tforms;
