import React, { useRef, useEffect, useState } from 'react';
import './Map.css';

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoiamF5amFuaTk5IiwiYSI6ImNsNThibHUzYjIxYXYzZHBweWhuMnNiaWQifQ.kb8GvAULXbhkvNxChVknwg';

export default function Map(props) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [long, setLong] = useState(100);
  const [lat, setLat] = useState(42);
  const [zoom, setZoom] = useState(8);

  // Generating clusters
  useEffect(() => {
    const hotels = {
      type: 'FeatureCollection',
      features: props.hotels,
    };
    const places = {
      type: 'FeatureCollection',
      features: props.places,
    };

    console.log(hotels.features[0]);
    console.log(places);

    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      projection: 'mercator',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [hotels.features[0].longitude, hotels.features[0].latitude],
      zoom: zoom,
    });

    map.current.addControl(new mapboxgl.NavigationControl());

    map.current.on('load', () => {
      map.current.addSource('hotels', {
        type: 'geojson',
        data: hotels,
      });

      map.current.addSource('places', {
        type: 'geojson',
        data: places,
      });

      map.current.addLayer({
        id: 'hotels',
        type: 'circle',
        source: 'hotels',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color': '#4264fb',
          'circle-radius': 6,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#ffffff',
        },
      });

      map.current.addLayer({
        id: 'places',
        type: 'circle',
        source: 'places',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color': '#444',
          'circle-radius': 6,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#ffffff',
        },
      });

      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
      });

      map.current.on('mouseenter', 'hotels', (e) => {
        map.current.getCanvas().style.cursor = 'pointer';
        const coordinates = e.features[0].geometry.coordinates.slice();
        let description = e.features[0].properties.name;

        const capitalizedSentence = description
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        popup.setLngLat(coordinates).setHTML(capitalizedSentence).addTo(map.current);
      });

      map.current.on('mouseleave', 'hotels', (e) => {
        map.current.getCanvas().style.cursor = '';
        popup.remove();
      });

      map.current.on('mouseenter', 'places', (e) => {
        map.current.getCanvas().style.cursor = 'pointer';
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.name;
        const capitalizedSentence = description
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        popup.setLngLat(coordinates).setHTML(capitalizedSentence).addTo(map.current);
      });

      map.current.on('mouseleave', 'places', (e) => {
        map.current.getCanvas().style.cursor = '';
        popup.remove();
      });
    });
  }, []);

  return (
    <div>
      <div ref={mapContainer} className='map-container' />
    </div>
  );
}
