import React from 'react';
import { useTranslation } from 'react-i18next';
import bg from '../../assets/images/pattern.jpg';

const Presentation: React.FC = () => {

    const { t } = useTranslation();
    interface presentationText {
        name: string;
        carrer: string;
        aboutMe: string;
        downloadResume: string;
    }
    const presentation: presentationText = t('presentation', { returnObjects: true });

    return <div className='presentation'>
        <img src={bg} alt="background" />
        <div className="presentation_name">
            <h2>{presentation.name}</h2>
            <p>{presentation.carrer}</p>
        </div>
        <div className="presentation_text">
            <p>{presentation.aboutMe}</p>
            <a href="#" className='btn'>{presentation.downloadResume}</a>
        </div>
    </div>;
};

export default Presentation;
