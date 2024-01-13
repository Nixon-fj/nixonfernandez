import React from 'react';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {

    interface FooterOption {
        name: string;
        data: string;
    }

    const { t } = useTranslation();
    const headerOptions: FooterOption[] = t('footer', { returnObjects: true });

    return <footer className="footer">
        <ul className='footer_container'>
            {headerOptions.map((option: FooterOption, index: number) => (
                <li key={index}>
                    <p className='footer_container-subTitle'>{option.name}</p>
                    {Array.isArray(option.data) ? (
                        <ul className='footer_container-socialNetwork'>
                            {option.data.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                    <a href={item.url} target='_blank'>
                                        <i className={item.icon}></i>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className='footer_container-content'>{option.data}</p>
                    )}
                </li>
            ))}
        </ul>
    </footer>;
};

export default Header;
