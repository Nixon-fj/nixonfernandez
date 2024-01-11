import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Enviar los datos a un servidor o realizar alguna acción con la información
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="message">Mensaje:</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default ContactForm;
