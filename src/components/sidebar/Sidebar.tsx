// Sidebar.tsx

import React from 'react';
import { useTranslation } from 'react-i18next';

const Sidebar: React.FC = () => {

    interface SidebarOption {
        name: string;
        url: string;
    }

    const { t } = useTranslation();
    const sidebarOptions: SidebarOption[] = t('sidebarOptions', { returnObjects: true });

    return (
        <div className="sidebar">
            <ul>
                {sidebarOptions.map((option: SidebarOption, index: number) => (
                    <li key={index}>
                        <a href={option.url}>{option.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
