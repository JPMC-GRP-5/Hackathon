import React from 'react'
import './ItineraryHeader.css'

const ItineraryHeader = (props) => {
  return (
    <div className="itinerary-header">{props.title} Itinerary</div>
  )
}

export default ItineraryHeader