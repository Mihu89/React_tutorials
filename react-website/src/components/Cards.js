import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className="cards">
            <h1>Come to see our Magic Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='card__items'>
                        <CardItem 
                            src='images/img-9.jpg'
                            text='Explore amazing waterfall of Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem 
                            src='images/img-2.jpg'
                            text='Explore amazing Bali'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='card__items'>
                        <CardItem 
                            src='images/img-3.jpg'
                            text='Explore amazing Bali'
                            label='Mystery'
                            path='/services'/>
                        <CardItem 
                            src='images/img-4.jpg'
                            text='Fodbal Goods'
                            label='Mystery'
                            path='/products'/>
                        <CardItem 
                            src='images/img-8.jpg'
                            text='Explore Sahara desert'
                            label='Adrenaline'
                            path='/sign-up'/>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
