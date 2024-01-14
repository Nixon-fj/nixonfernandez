import React from 'react';
import Presentation from './Presentation';
import Education from './Edutaction';
import Skills from './Skills';
import Experience from './Experience';
import PreviewProyects from './PreviewProyects';

const Resume: React.FC = () => {
    return <div>
        <Presentation />
        <Education />
        <Skills />
        <Experience />
        <PreviewProyects />
    </div>;
};

export default Resume;
