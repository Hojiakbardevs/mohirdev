import React, { useState } from 'react'

const MyForms = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(name, email, password);
    }
  return (
    <form onSubmit={handlerSubmit}>
        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default MyForms