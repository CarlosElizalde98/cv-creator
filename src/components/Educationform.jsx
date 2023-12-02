
import {useState} from 'react';

export default function Eduation() {
    const [schoolName, setSchoolName] = useState('')
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('')
    const [isSubmit, setIsSubmit] = useState(false);

    return (
        <div className='education-form'>
            { isSubmit ? (null) : 
            <form className='general-form'>
                <label>Enter your school name: 
                    <input type="text" value={schoolName} onChange={(e) => setSchoolName(e.target.value)}/>
                </label>
                <label>Enter your title of study:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </label>
                <label>Enter your date of study: 
                    <input type="date" value={date} onChange={(e) =>  setDate(e.target.value)} />
                </label>
                <button onClick={() => setIsSubmit(!isSubmit)} />
            </form>
            }
        </div>
    )
};