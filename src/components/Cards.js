import React from 'react'
import CardItem from './CardItem'
import './Cards.css'


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out These Epic Destinations!</h1>
      <div className="cards__container"></div>
      <div className="cards__wrapper">
        <ul className="cards__items">
          <CardItem 
          src={require('../images/img-9.jpg').default}
          text=' Explore the hidden waterfall deep inside the Amazon Jungle'
          label='Advanture'
          path='/services' />

          <CardItem 
          src={require('../images/img-2.jpg').default}
          text=' Travel through the Islands'
          label='Luxury'
          path='/services' />
        </ul>

        <ul className="cards__items">
          <CardItem 
          src={require('../images/img-9.jpg').default}
          text=' Explore the hidden waterfall deep inside the Amazon Jungle'
          label='Advanture'
          path='/services' />

          <CardItem 
          src={require('../images/img-2.jpg').default}
          text=' Travel through the Islands'
          label='Luxury'
          path='/services' />

        
        </ul>
      </div>
    </div>
  )
}

export default Cards
