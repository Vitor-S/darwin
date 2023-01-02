import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import React, { Component } from 'react';
import './card.css'

class Card extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <AnimationOnScroll animateIn="animate__fadeInLeft" offset={200}>
                <div className='card-container '>
                    <img className='card-img' src={this.props.image} alt={this.props.alt} />
                    <h2 className='card-title'>{this.props.title}</h2>
                    <p className='paragraph'>{this.props.children}</p>
                </div>
            </AnimationOnScroll>
        );
    }
}

export default Card;