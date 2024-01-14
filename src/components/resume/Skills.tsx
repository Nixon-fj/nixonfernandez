import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills: React.FC = () => {

    const { t } = useTranslation();

    interface sectionSkills {
        sectionTitle: string,
        skills: [];
    }
    interface skills{
        skill: string
    }
    const sectionContent: sectionSkills = t('sectionSkills', { returnObjects: true });

    return <div className='skills'>
        <div className="bgimg-3">
            <div className="caption">
                <h2 id='skills'>{sectionContent.sectionTitle}</h2>
            </div>
        </div>
        <div className='skills_container'>
            {sectionContent.skills.map((skill: skills, index: number) => (
                <div key={index} className='skills_container-skill'>
                    <p>{skill.skill}</p>
                </div>
            ))}
        </div>
    </div>
};

export default Skills;
