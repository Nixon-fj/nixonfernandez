import React, { useState } from 'react';
interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí puedes realizar la lógica para enviar el formulario, por ejemplo, a través de una API.
        console.log('Formulario enviado:', formData);
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className='contact'>
            <div className="bgimg-6">
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input placeholder="Name" type="text" name="name" value={formData.name} onChange={handleChange} />
                    </label>
                    <label>
                        Mail:
                        <input placeholder="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
                    </label>
                    <label>
                        Message:
                        <textarea placeholder="Please write your message here." name="message" value={formData.message} onChange={handleChange} />
                    </label>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
