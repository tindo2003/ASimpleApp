import React from 'react'
import logo from '../images/Hero.jpg'
import '../App.css';
import './Hero.css';

export default function Hero() {
    return (
        <div className="hero-container">
            
            <img className="hero--image" src={logo} />
            <h1>Let's Eat!</h1>
        </div>
        

    )
}