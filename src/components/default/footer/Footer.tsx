import React from 'react';

import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {

    interface FooterOption {
        name: string;
        data: string;
    }

    const { t } = useTranslation();
    const headerOptions: FooterOption[] = t('footer', { returnObjects: true });

    return <>
        <footer className="footer">
            <ul>
                {headerOptions.map((option: FooterOption, index: number) => (
                    <li key={index}>
                        <p className='footer_subTitle'>{option.name}</p>
                        <p className='footer_content'>{option.data}</p>
                    </li>
                ))}
            </ul>
        </footer>
    </>;
};

export default Header;
