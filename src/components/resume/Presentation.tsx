import React from 'react';
import { useTranslation } from 'react-i18next';
import { saveAs } from 'file-saver';

interface presentationText {
    name: string;
    carrer: string;
    aboutMe: string;
    downloadResume: string;
}

const Presentation: React.FC = () => {

    const { t } = useTranslation();

    const presentation: presentationText = t('presentation', { returnObjects: true });
    const pdfUrl = '../../assets/files/devNixonFernandezJimenez.pdf';

    const handleDownloadPdf = async () => {
        try {
            const response = await fetch(pdfUrl);
            const blob = await response.blob();

            saveAs(blob, 'Nixon-Fernandez-Jimenez.pdf');
        } catch (error) {
            console.error('Error al descargar el PDF:', error);
        }
    };

    return <div className='presentation'>
        <div className="bgimg-1">
            <div className="presentation_name caption">
                <h2>{presentation.name}</h2>
                <p>{presentation.carrer}</p>
            </div>
        </div>
        <div className="presentation_text">
            <p>{presentation.aboutMe}</p>
            <button onClick={handleDownloadPdf} className='btn'>{presentation.downloadResume}</button>
        </div>
    </div>;
};

export default Presentation;
