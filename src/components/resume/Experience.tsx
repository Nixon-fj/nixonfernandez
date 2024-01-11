import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience: React.FC = () => {

    const { t } = useTranslation();
    interface experienceText {
        date: string,
        company: string,
        job: string,
        tasks: []
    }

    interface tasks {
        task: string;
    }

    const experience: experienceText[] = t('experience', { returnObjects: true });

    return <div className='experience'>
        <h2 id='experience'>Experience Labor</h2>
        <div>
            {experience.map((experience: experienceText, index: number) => (
                <div key={index} className='experience_data'>
                    <p className='experience_data-date'>{experience.date}</p>
                    <div>
                        <h2>{experience.company}</h2>
                        <h3>{experience.job}</h3>
                        {experience.tasks.map((tasks: tasks, i: number) => (
                            <p key={i}>{tasks.task}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>;
};

export default Experience;
