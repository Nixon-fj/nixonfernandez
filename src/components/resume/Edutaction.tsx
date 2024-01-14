import React from 'react';
import { useTranslation } from 'react-i18next';

const Education: React.FC = () => {

    const { t } = useTranslation();

    interface sectionEducation{
        sectionTitle: string,
        education: []
    }
    interface education {
        date: string;
        intitution: string;
        qualification: string;
    }
    const sectionEducation: sectionEducation = t('sectionEducation', { returnObjects: true });

    return <div className='education'>
        <div className="bgimg-2">
            <div className="caption">
                <h2 id='education'>{sectionEducation.sectionTitle}</h2>
            </div>
        </div>
        {sectionEducation.education.map((education: education, index: number) => (
            <div className='timeline-block'>
                    <span>{education.date}</span>
                <div key={index} className='timeline-block_content'>
                    <h3>{education.intitution}</h3>
                    <p>{education.qualification}</p>
                </div>
            </div>
        ))}
    </div>
};

export default Education;
