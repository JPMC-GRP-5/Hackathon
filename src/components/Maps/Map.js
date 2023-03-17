import React, { useRef, useEffect, useState } from 'react';
import './Map.css';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken =
  'pk.eyJ1IjoiamF5amFuaTk5IiwiYSI6ImNsNThibHUzYjIxYXYzZHBweWhuMnNiaWQifQ.kb8GvAULXbhkvNxChVknwg';

export default function Map(props) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-103.5917);
  const [lat, setLat] = useState(42);
  const [zoom, setZoom] = useState(3);

  const hotels = {
    features: props.allHotels,
  };

  console.log(hotels)

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      projection: 'mercator',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.addControl(new mapboxgl.NavigationControl());

    map.current.on('load', () => {
      map.current.addSource('hotels', {
        type: 'geojson',
        data: hotels,
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 50, // Radius of each cluster when clustering points (defaults to 50)
      });

      map.current.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'hotels',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': [
            'step',
            ['get', 'point_count'],
            '#73A2D4',
            10,
            '#3A78BB',
            30,
            '#2B5A8C',
          ],
          'circle-radius': ['step', ['get', 'point_count'], 15, 10, 20, 30, 25],
        },
      });

      map.current.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'hotels',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': '{point_count_abbreviated}',
          'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
          'text-size': 12,
        },
      });

      map.current.addLayer({
        id: 'unclustered-point',
        type: 'circle',
        source: 'hotels',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color': '#11b4da',
          'circle-radius': 10,
          'circle-stroke-width': 1,
          'circle-stroke-color': '#fff',
        },
      });

      // inspect a cluster on click
      map.current.on('click', 'clusters', (e) => {
        const features = map.current.queryRenderedFeatures(e.point, {
          layers: ['clusters'],
        });
        const clusterId = features[0].properties.cluster_id;
        map.current
          .getSource('hotels')
          .getClusterExpansionZoom(clusterId, (err, zoom) => {
            if (err) return;

            map.current.easeTo({
              center: features[0].geometry.coordinates,
              zoom: zoom,
            });
          });
      });

      map.current.on('click', 'unclustered-point', (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const { popUpMarkup } = e.features[0].properties;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(`${popUpMarkup}`)
          .addTo(map.current);
      });

      map.current.on('mouseenter', 'clusters', () => {
        map.current.getCanvas().style.cursor = 'pointer';
      });
      map.current.on('mouseleave', 'clusters', () => {
        map.current.getCanvas().style.cursor = '';
      });
    });
  });

  // console.log(map.current)

  // useEffect(() => {
  //   if (!map.current) return; // wait for map to initialize
  //   map.current.on('move', () => {
  //     setLng(map.current.getCenter().lng.toFixed(4));
  //     setLat(map.current.getCenter().lat.toFixed(4));
  //     setZoom(map.current.getZoom().toFixed(2));
  //   });
  // });

  return (
    <div>
      <div ref={mapContainer} className='map-container' />
    </div>
  );
}
