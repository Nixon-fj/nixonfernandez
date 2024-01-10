import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills: React.FC = () => {

    const { t } = useTranslation();

    interface skillsText {
        skill: string;
    }
    const skill: skillsText[] = t('skills', { returnObjects: true });

    return <div className='skills' id='#skills'>
        <h2>Technical Skills</h2>
        <div className='skills_container'>
            {skill.map((skill: skillsText, index: number) => (
                <div key={index} className='skills_container-skill'>
                    <p>{skill.skill}</p>
                </div>
            ))}
        </div>
    </div>
};

export default Skills;
