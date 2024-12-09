import { useState } from 'react';
import { sanitizeInput } from '../../common/validation/validation';
import './modal.css';
import { axiosInstance } from '../../api/axiosInstance';

export const Modal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: sanitizeInput(value) }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        try {
            const response = await axiosInstance.post('/feedback', formData);
        } catch (error) {
            setResponseMessage(error.response?.data?.message || 'An error occurred.');
        } finally {
            onClose();
        };
    };


    if (!isOpen) return null;

    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <button className='close-button' onClick={() => onClose()}>×</button>
                <h2>Send a Request</h2>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='name' placeholder='Name' value={formData.name} onChange={handleChange} required />
                    <input type='phone' name='phone' placeholder='phone' value={formData.phone} onChange={handleChange} required />
                    <textarea name='message' placeholder='Time to call' value={formData.message} onChange={handleChange} required />
                    <button type='submit' className='submit-button'>Submit</button>
                </form>
            </div>
        </div>
    );
};