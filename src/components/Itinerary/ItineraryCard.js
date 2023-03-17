import React from 'react';
import './ItineraryCard.css';

function Rating({ rating }) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      stars.push(<span key={i} className="star filled">&#9733;</span>);
    } else {
      stars.push(<span key={i} className="star">&#9734;</span>);
    }
  }

  return <div className="rating">{stars}</div>;
}
const ItineraryCard = (props) => {
  return (
    <div className='itinerary-card-container'>
      <img src={props.place.imageUrl}></img>
      <div className='itinerary-card-details'>
        <div className='itinerary-card-title'>{props.place.name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')}</div>
        <div className='itinerary-card-desc'>{props.place.description}</div>
        <div className='itinerary-card-rating'>
        <div>{props.place.rating}</div>
        <Rating rating = {props.place.rating} />
        </div>
        <div className='itinerary-card-cost'>Fee: ₹ {props.place.entryFee}</div>
      </div>
    </div>
  )
}

export default ItineraryCard