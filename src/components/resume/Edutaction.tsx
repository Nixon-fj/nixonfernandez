import React from 'react';
import { useTranslation } from 'react-i18next';

const Education: React.FC = () => {

    const { t } = useTranslation();
    interface educationText {
        date: string;
        intitution: string;
        qualification: string;
    }
    const education: educationText[] = t('education', { returnObjects: true });

    return <div className='education'>
        <h2 id='education'>Education</h2>
        <div>
            {education.map((education: educationText, index: number) => (
                <div key={index} className='education_data'>
                    <p className='education_data-date'>{education.date}</p>
                    <div>
                        <h2>{education.intitution}</h2>
                        <h3>{education.qualification}</h3>
                    </div>
                </div>
            ))}
        </div>
    </div>;
};

export default Education;
