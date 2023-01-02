import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import React from 'react';
import './bubble.css'

class Bubble extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <AnimationOnScroll animateIn="animate__fadeInLeft" duration={2.3} offset={200}>
                <div className='bubble'
                    style={{
                        width: this.props.width || '400px',
                        background: `linear-gradient(270deg, ${this.props.primary || '#ff0a6c'}, ${this.props.secondary || '#2d27ff'})`,
                        borderRadius: this.props.radius || '40% 60% 55% 45% / 40% 55% 45% 60%',
                        top: this.props.position.top,
                        left: this.props.position.left,
                        backgroundSize: '400% 400%'
    
                    }}/>
            </AnimationOnScroll>
        );
    }
}

export default Bubble;
