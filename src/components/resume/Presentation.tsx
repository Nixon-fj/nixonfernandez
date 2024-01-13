import React from 'react';
import { saveAs } from 'file-saver';
import { useTranslation } from 'react-i18next';
import bg from '../../assets/images/pattern.jpg';

interface presentationText {
    name: string;
    carrer: string;
    aboutMe: string;
    downloadResume: string;
}

const Presentation: React.FC = () => {

    const { t } = useTranslation();

    const presentation: presentationText = t('presentation', { returnObjects: true });
    const pdfUrl = 'https://firebasestorage.googleapis.com/v0/b/nixon-fernandez-jimenez.appspot.com/o/Nixon%20Fern%C3%A1ndez%20Jim%C3%A9nez.pdf?alt=media&token=69681893-0480-41d8-b59b-45040345d7fb';

    const handleDownloadPdf = async () => {
        try {
            const response = await fetch(pdfUrl);
            const blob = await response.blob();

            saveAs(blob, 'devNixonFernandezJimenez.pdf');

        } catch (error) {
            console.error('Error al descargar el PDF:', error);
        }
    };

    return <div className='presentation'>
        <img src={bg} alt="background" />
        <div className="presentation_name">
            <h2>{presentation.name}</h2>
            <p>{presentation.carrer}</p>
        </div>
        <div className="presentation_text">
            <p>{presentation.aboutMe}</p>
            <button onClick={handleDownloadPdf} className='btn'>{presentation.downloadResume}</button>
        </div>
    </div>;
};

export default Presentation;
