import { validateForm } from '../validation/validation.js';
import { API_URL } from '../../../config.js';
import axios from 'axios';

export const createOrder = async (setError,setLoading,setFormData,formData) => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
        setError(validationErrors);
        console.log(validationErrors,'from creareOrder')
        return
    }

    setLoading(true);

    try {
        const response = await axios.post(`${API_URL}/api/request-callback`,formData);
        console.log(response.data);
        setFormData({name: '', phone: '', message: ''});
        onclose();
    }catch (error) {
        console.error('Error submitting form', error);
    }finally {
        setLoading(false);
    }
}