import React, { useRef, useEffect, useState } from 'react';
import Map from './Map';
import axios from 'axios';
import './Map.css';

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoiamF5amFuaTk5IiwiYSI6ImNsNThibHUzYjIxYXYzZHBweWhuMnNiaWQifQ.kb8GvAULXbhkvNxChVknwg';


export default function App(props) {
  const [hotels, setHotels] = useState([]);
  const [places, setPlaces] = useState([]);

  const getAllHotels = async () => {
    const city = 'mumbai';
    const response = await fetch(
      `https://voyager-d2bo.onrender.com/hotels/${city}`
    );
    const jsonRes = await response.json();
    jsonRes.map((hotel) => {
      hotel['type'] = 'Feature';
      hotel['geometry'] = {
        type: 'Point',
        coordinates: [hotel.longitude, hotel.latitude],
      };
      hotel['properties'] = {
        name: hotel.name,
        url: hotel.siteUrl,
      };
    });
    setHotels(jsonRes)
    return jsonRes;
  };
  
  const getAllPlaces = async () => {
    const city = 'mumbai';
    const response = await fetch(
      `https://voyager-d2bo.onrender.com/places?city=${city}`
    );
    let jsonRes = await response.json();
    let result = [];
    jsonRes = jsonRes.nearbyPlaces.map((place) => {
      place = place.places[0];
      place['type'] = 'Feature';
      place['geometry'] = {
        type: 'Point',
        coordinates: [place.longitude, place.latitude],
      };
      place['properties'] = {
        name: place.name
      }
      result.push(place);
    });
    // console.log(result)
    setPlaces(result)
    return result
  };

  useEffect(() => {
    getAllHotels().then((result) => setHotels(result));
    getAllPlaces().then((result) => setPlaces(result));
  }, []);

  // useEffect(()=>{console.log(hotels)},[hotels])

  return hotels.length > 0 && places.length > 0 ? (
    <div>
      <Map places={places} hotels={hotels}></Map>
    </div>
  ) : (
    <div>Loading</div>
  );
}
