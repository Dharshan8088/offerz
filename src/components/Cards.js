import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Browse different Categories as you wish ! </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/ele.jpg'
              text='Explore the various offers and collections on your favourite electronic items'
              label='ELECTRONICS'
              path='/services'
            />
            <CardItem
              src='images/furniture.jpg'
              text='Explore the various collections and offers on furnitures of different types of woods'
              label='FURNITURE'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Grocery.jpg'
              text='Explore different discount rate on Your Daily Grocery items'
              label='GROCERIES'
              path='/services'
            />
            <CardItem
              src='images/cloth.jpg'
              text='Check around different offers on differnt variety of cloths  '
              label='CLOTHING'
              path='/products'
            />
            <CardItem
              src='images/food.jpg'
              text='let the tongue to taste different flavours of foods on various discounts'
              label='APPETIZING FOODS'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
