import React from 'react';
import { useTranslation } from 'react-i18next';
import pokerfran from '../../assets/images/sites/pokerfran.jpg';
import moneybet from '../../assets/images/sites/moneybet.jpg';
import razr from '../../assets/images/sites/razr.jpg';

const PreviewProyects: React.FC = () => {

    const { t } = useTranslation();

    interface previewProyects {
        sectionName: string;
        sectionText: string;
        seeMore: string;
        url: string;
    }

    const previewProyects: previewProyects = t('previewProyects', { returnObjects: true });

    return <div className='previewProyects'>
        <div className="bgimg-5">
            <div className="caption">
                <h2>{previewProyects.sectionName}</h2>
            </div>
        </div>
        <h3>{previewProyects.sectionText} <a href={previewProyects.url}>{previewProyects.seeMore}</a></h3>

        <div className='previewProyects_container'>
            <a href={previewProyects.url}>
                <img src={razr} alt="preview image proyect" />
            </a>
            <a href={previewProyects.url}>
                <img src={pokerfran} alt="preview image proyect" />
            </a>
            <a href={previewProyects.url}>
                <img src={moneybet} alt="preview image proyect" />
            </a>
        </div>
    </div>
};

export default PreviewProyects;
