import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience: React.FC = () => {

    const { t } = useTranslation();

    interface sectionExperience {
        sectionTitle: string,
        experience: []
    }
    interface experience {
        date: string,
        company: string,
        job: string,
        tasks: []
    }

    interface tasks {
        task: string;
    }

    const sectionExperience: sectionExperience = t('sectionExperience', { returnObjects: true });

    return <div className='experience'>
        <div className="bgimg-4">
            <div className="caption">
                <h2 id='experience'>{sectionExperience.sectionTitle}</h2>
            </div>
        </div>
        {sectionExperience.experience.map((experience: experience, index: number) => (
            <div key={index} className='experience_data'>
                <span>{experience.date}</span>
                <div>
                    <h3>{experience.company}</h3>
                    <span>{experience.job}</span>
                    {experience.tasks.map((tasks: tasks, i: number) => (
                        <p key={i}>{tasks.task}</p>
                    ))}
                </div>
            </div>
        ))}
    </div>;
};

export default Experience;
