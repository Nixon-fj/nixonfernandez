import React from 'react';
import lucky from '../../assets/images/sites/lucky.jpg';
import moneybet from '../../assets/images/sites/moneybet.jpg';
import playcr from '../../assets/images/sites/play-cr.jpg';
import playpl from '../../assets/images/sites/play-pl.jpg';
import playjoonbug from '../../assets/images/sites/playjoonbug.jpg';
import playsports527 from '../../assets/images/sites/playsports527.jpg';
import pokerfran from '../../assets/images/sites/pokerfran.jpg';
import pphwagering from '../../assets/images/sites/pphwagering.jpg';
import razr from '../../assets/images/sites/razr.jpg';
import thirddown from '../../assets/images/sites/thirddown.jpg';
import tossandgo from '../../assets/images/sites/tossandgo.jpg';

const ViewPortfolio: React.FC = () => {
    return <div className='portfolio'>
        <div className='portfolio_container'>
            <a href="https://razrcasino.com/" target="_blank">
                <img src={razr} alt="preview image proyect" />
            </a>
            <a href="https://www.pokerfran.com/" target="_blank">
                <img src={pokerfran} alt="preview image proyect" />
            </a>
            <a href="https://www.moneybet.ag/" target="_blank">
                <img src={moneybet} alt="preview image proyect" />
            </a>

            <a href="https://luckycrawfish.live/" target="_blank">
                <img src={lucky} alt="preview image proyect" />
            </a>
            <a href="https://www.playcr.online/" target="_blank">
                <img src={playcr} alt="preview image proyect" />
            </a>
            <a href="https://www.tossandgo.live/" target="_blank">
                <img src={tossandgo} alt="preview image proyect" />
            </a>
            <a href="https://playcr.ag/" target="_blank">
                <img src={playpl} alt="preview image proyect" />
            </a>
            <a href="https://www.playjoonbug.online/" target="_blank">
                <img src={playjoonbug} alt="preview image proyect" />
            </a>
            <a href="https://playsports527.com/" target="_blank">
                <img src={playsports527} alt="preview image proyect" />
            </a>
            <a href="https://pphwagering.ag/" target="_blank">
                <img src={pphwagering} alt="preview image proyect" />
            </a>
            <a href="https://thirddown.live/" target="_blank">
                <img src={thirddown} alt="preview image proyect" />
            </a>
        </div>
    </div>;
};

export default ViewPortfolio;
