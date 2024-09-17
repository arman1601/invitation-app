import { useState } from 'react';
import './modal.css';

export const Modal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <button className='close-button' onClick={onClose}>×</button>
                <h2>Send a Request</h2>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='name' placeholder='Name' value={formData.name} onChange={handleChange} required />
                    <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} required />
                    <textarea name='message' placeholder='Time to call' value={formData.message} onChange={handleChange} required />
                    <button type='submit' className='submit-button'>Submit</button>
                </form>
            </div>
        </div>
    );
};