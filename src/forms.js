// import React, { useState } from 'react'
// import './App.css'
// const App = () => {

//   const [fullName, setFulName] = useState({
//     fName: '',
//     lName: '',

//   })
//   const handleChange = (e) => {
//     console.log(e.target.value);
//     const value = e.target.value;
//     const name = e.target.name;
//     setFulName((prevValue) => {
//       // console.log(prevValue);
//       if (name === 'fName') {
//         return {
//           fName: value,
//           lName: prevValue.lName
//         }
//       }
//       else if (name === 'lName') {
//         return {
//           fName: prevValue.fName,
//           // lName: value
//         }
//       }

//     })
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   }

//   return (
//     <>
//       <div className='div'>
//         <h1 className='heading'>Hello {fullName.fName} {fullName.LName}</h1>
//         <form action="#" onSubmit={handleSubmit}>
//           <input name='fName' type="text" placeholder='Enter Your firstName' value={fullName.fName} onChange={handleChange} />
//           <input name='lName' type="text" placeholder='Enter Your lastName' value={fullName.lName} onChange={handleChange} />
//           <input name='email' type="text" placeholder='Enter Your Email' onChange={handleChange} />
//           <button type='submit'>Click Me</button>
//         </form>
//       </div>
//     </>
//   )
// }

// export default App

import { useState } from 'react';

const App = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Enter your name:
                    <input
                        type="text"
                        name="username"
                        value={inputs.username || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>Enter your age:
                    <input
                        type="number"
                        name="age"
                        value={inputs.age || ""}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" />
            </form>
        </>
    )
}

export default App