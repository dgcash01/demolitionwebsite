import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check Out Our Services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-12.jpg'
              text='basement project'
              label='Digging'
              path='/services'
            />
            <CardItem
              src='images/img-11.jpg'
              text='Yard Grading'
              label='Grading'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Structure Demolition'
              label='Demolition'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Safe Home Tree removal'
              label='Removal'
              path='/services'
            />
            <CardItem
              src='images/img-8.jpg'
              text='All kinds of service'
              label='Grading'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;