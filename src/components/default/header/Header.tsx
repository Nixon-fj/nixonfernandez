import React from 'react';

import { useTranslation } from 'react-i18next';
import LanguageSelector from '../../laguageSelector/languageSelector';

const Header: React.FC = () => {

    interface HeaderOption {
        name: string;
        url: string;
    }

    const { t } = useTranslation();
    const headerOptions: HeaderOption[] = t('header', { returnObjects: true });

    return <>
        <header className="header">
            <a href="/" className='header_logo'>Nixon Fernández</a>
            <LanguageSelector />
            <ul>
                {headerOptions.map((option: HeaderOption, index: number) => (
                    <li key={index}>
                        <a href={option.url}>{option.name}</a>
                    </li>
                ))}
            </ul>
        </header>
    </>;
};

export default Header;