import { useState } from 'react';
import DisplayGeneral from './DisplayGeneral.jsx';

export default function General(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)

    return (
        <div>
        { isSubmit ? <DisplayGeneral name={name} 
        email={email} 
        phone={phone} 
        isSubmit={isSubmit} 
        setIsSubmit={setIsSubmit} /> : 
        (<form className="general-form">
            <label>Enter your name:
                <input type="text"
                value={name}
                onChange={(e) => {setName(e.target.value)}}></input>
            </label>
            <label>Enter your email(optional): 
                <input type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}></input>
            </label>
            <label>
                Enter your phone number(optional):
                <input type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}></input>
            </label>
            <button onClick={() => setIsSubmit(!isSubmit)} >Submit</button>
        </form>
    )}
    </div>
    )
}