import React from 'react';
import '../App.css';
import {Button } from './Button';
import './HeroSection.css';


export default function HeroSection() {
    // write your own function here
    return (
        <div className='hero-container'>
            <video src='../videos/video-2.mp4' autoPlay loop muted />
            <h1>ADVENTURES IS WAITING YOU</h1>
            <p>What are you waiting for ?</p>
            <div className='hero-btns'>
                <Button className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'>GET STARTED</Button>
                <Button className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                onClickHandler={console.log('Im watching')}>Watch Trailer <i className='far fa-play-circle' /></Button>
            </div>
        </div>
    )
}