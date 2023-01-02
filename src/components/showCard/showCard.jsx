import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import React, { Component } from 'react';
import '../card/card.css'
import './showcard.css'
import vermelho from '../../assets/vermelhoPerfil.png'
import verde from '../../assets/verdePerfil.png'
import azul from '../../assets/azulPerfil.png'
import { useState } from 'react';
import StaticBubble from '../staticBubble/staticBubble'
import Showcase from '../showcase/showcase';

const ShowCard = (props) => {

    const skins = [
        {
            id: 0,
            color: '#E51C1A',
            text: 'O vermelho é uma cor forte, poderosa e com muita energia por trás dela. Pode ser ousado ou intenso, mas também é quente e convidativo. É uma cor ousada e apaixonada que pode fazer uma pessoa se sentir confiante e ousada em qualquer situação. O vermelho também pode ser usado para expressar raiva ou frustração quando você está se sentindo fortemente em relação a algo.',
            images: ['vermelho1.png', 'vermelho2.png', 'vermelho3.png', 'vermelho4.png']
        },
        {
            id: 1,
            color: '#3DCA4C',
            text: 'O verde é a cor da natureza, do crescimento e da renovação. É uma cor que tem sido associada à paz, harmonia e equilíbrio por milhares de anos. As pessoas costumam usar o verde porque querem sentir-se calmas e aterrorizadas em seu entorno.',
            images: ['verde1.png', 'verde2.png', 'verde3.png', 'verde4.png']
        },
        {
            id: 2,
            color: '#B10CFF',
            text: 'O azul é a cor da tranquilidade, trazendo um efeito calmante sobre o corpo, sendo bastante usado quando a pessoa está se sentindo em baixo ou ansioso, usar o azul pode ajudá-lo a se acalmar, pensar racionalmente e se sentir melhor.',
            images: ['azul1.png', 'azul2.png', 'azul3.png', 'azul4.png']
        },
    ]

    const [skinActive, setSkinActive] = useState(0);
    const [popupState, setPopupState] = useState(false);

    return (
        <>
        <AnimationOnScroll animateIn="animate__fadeInLeft" offset={200}>
            <StaticBubble position={{top: '-300px', left: '-320px'}} width='500px' radius="50%" primary={skins[skinActive].color}/>
            <StaticBubble position={{top: '-400px', left: '1000px'}} width='300px' radius="50%" primary={skins[skinActive].color}/>
            <StaticBubble position={{top: '150px', left: '320px'}} radius="50%" primary={skins[skinActive].color}/>
            <div className='master-container' style={{display: 'flex', justifyContent: 'space-around'}}>
                <div className='card-container '>
                    <h2 className='card-title'>{props.title}</h2>
                    <div className="skins-container">
                        <img className='skin-img' src={vermelho} alt="roupa vermelha" onClick={() => setSkinActive(0)} />
                        <img className='skin-img' src={verde} alt="roupa verde" onClick={() => setSkinActive(1)}/>
                        <img className='skin-img' src={azul} alt="roupa azul" onClick={() => setSkinActive(2)}/>
                    </div>
                    <p className='paragraph'>{skins[skinActive] ? skins[skinActive].text : null}</p>
                    <button className="button" onClick={() => setPopupState(true)}>INSPECIONAR</button>
                </div>
            </div>
        </AnimationOnScroll>
            {
                popupState ? <Showcase setPopup={setPopupState} images={skins[skinActive].images}/> : null
            }
        </>
    );
}

export default ShowCard;