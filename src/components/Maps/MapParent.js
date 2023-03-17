import React, { useEffect, useState } from 'react';
import Map from './Map';
import axios from 'axios';

export default function App(props) {
  const [hotels, setHotels] = useState({});
  const [places, setPlaces] = useState({});
  const [isLoading, setLoading] = useState(true);
  let city = 'mumbai';

  useEffect(() => {
    getAllHotels();
    getAllPlaces();
  }, []);

  const getAllHotels = () => {
    axios
      .get(`https://voyager-d2bo.onrender.com/hotels/${city}`)
      .then((response) => {
        response.data.map((hotel) => {
          hotel['geometry'] = {
            type: 'Point',
            coordinates: [hotel.longitude, hotel.latitude],
          };
        });
        // console.log(response.data)
        setHotels(response.data);
        setLoading(false);
      });
  };

  const getAllPlaces = () => {
    axios
      .get(`https://voyager-d2bo.onrender.com/places?city=${city}`)
      .then((response) => {
        // console.log(response.data)
        let placesToVisit = [];
        for (let containers of response.data) {
          const places = containers.places;
          for (let place of places) {
            place['geometry'] = {
              type: 'Point',
              coordinates: [place.longitude, place.latitude],
            };
            placesToVisit.push(place);
          }
        }
        setPlaces(placesToVisit);
        setLoading(false);
      });
  };

  if (isLoading) {
    return <div className='App'>Loading...</div>;
  }
  return <Map allHotels={hotels} allPlaces={places} />;
}
