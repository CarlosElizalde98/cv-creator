import React from 'react';

export default function DisplayGeneral({name, email, phone, isSubmit, setIsSubmit}) {
    return (
        <div className="display-general">
            <h1>Name: {name}</h1>
            <h2>Email: {email}</h2>
            <h2>Phone: {phone}</h2>
            <button onClick={() => setIsSubmit(!isSubmit)}>Edit</button>
        </div>
    )
}