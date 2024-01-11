import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../../laguageSelector/languageSelector';

const Header: React.FC = () => {

    interface HeaderOption {
        name: string;
        url: string;
    }

    const { t } = useTranslation();

    const headerOptions: HeaderOption[] = t('header', { returnObjects: true });

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return <>
        <header className="header">
            <nav className='header_container'>
                <div className="header_menu-toggle" onClick={toggleMenu}></div>
                <a href="/" className='header_logo'>Nixon Fernández</a>
                <ul className={`header_nav ${isOpen ? 'header_nav-open' : ''}`}>
                    <li onClick={toggleMenu}>X</li>
                    {headerOptions.map((option: HeaderOption, index: number) => (
                        <li key={index} onClick={toggleMenu}>
                            <a href={option.url}>{option.name}</a>
                        </li>
                    ))}
                </ul>
                <LanguageSelector />
            </nav>
        </header>
    </>;
};

export default Header;
