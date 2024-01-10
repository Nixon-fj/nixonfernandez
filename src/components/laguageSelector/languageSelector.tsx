import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <>
            <select className='languageSelector' onChange={(e) => changeLanguage(e.target.value)} value={i18n.language} aria-labelledby="language">
                <option value="en">En</option>
                <option value="es">Es</option>
            </select>
        </>
    );
};

export default LanguageSelector;
