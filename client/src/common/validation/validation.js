export const validateEmail = (email) => {
    const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexp.test(String(email).toLowerCase());
};

export const sanitizeInput = (input) => {
    return input.replace(/<script.*?>.*?<\/script>/gi, '') // Удаление скриптов
    .replace(/</g, '&lt;') // Замена < на &lt;
    .replace(/>/g, '&gt;') // Замена > на &gt;
    .replace(/&/g, '&amp;') // Замена & на &amp;
    .replace(/'/g, '&#39;') // Замена ' на &#39;
    .replace(/"/g, '&quot;'); // Замена " на &quot;
}

export const validateForm = (formData) => {
    const validationErrors = {};

    if(!formData.name.trim()) {
        validationErrors.name = 'Name is required';
    }
    if (!formData.number) {
        validationErrors.phone = 'Phone is required'
    }
    
    return validationErrors;
}