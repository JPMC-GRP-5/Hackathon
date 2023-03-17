import {React, useState, useEffect} from 'react'
import './ItineraryPage.css';

import ItineraryCard from '../../components/Itinerary/ItineraryCard';
import ItineraryHeader from '../../components/Itinerary/ItineraryHeader';
import moment from 'moment';
import {Slide} from "react-awesome-reveal";
import axios from 'axios';

const Itinerary = () => {
  // let [days,setDays] = useState([
  //   [1,2,3],
  //   [1,2,3,4],
  //   [1,2],
  // ]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://voyager-d2bo.onrender.com/places?city=mumbai')
      .then(response => {
        console.log(response.data);
        setData(response.data);
        // setTimeout(() => {
        //   // Do something after 1 second
        // }, 1000);
        
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(()=>{
    console.log(data)
  },[data]);

//   let [days,setDays] = useState([
//     {
//         "places": [
//             {
//                 "_id": "6413203c98d0ef60f8d4f551",
//                 "name": "jal mahal",
//                 "city": "jaipur",
//                 "latitude": 26.9535,
//                 "longitude": 75.8461,
//                 "rating": 5,
//                 "entryFee": 10,
//                 "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Jaipur_03-2016_39_Jal_Mahal_-_Water_Palace.jpg/760px-Mapcarta.jpg",
//                 "__v": 0
//             }
//         ],
//         "cost": 0
//     },
//     {
//         "places": [
//             {
//                 "_id": "6413203c98d0ef60f8d4f554",
//                 "name": "chand baori",
//                 "city": "jaipur",
//                 "latitude": 27.0072,
//                 "longitude": 76.6068,
//                 "rating": 4.8,
//                 "entryFee": 25,
//                 "imageUrl": "https://images.thrillophilia.com/image/upload/s--JxikeLCr--/c_fill,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/169/542/original/1566623333_shutterstock_1041282199.jpg.jpg?1566623333",
//                 "__v": 0
//             }
//         ],
//         "cost": 0
//     },
//     {
//         "places": [
//             {
//                 "_id": "6413203c98d0ef60f8d4f54f",
//                 "name": "amber fort",
//                 "city": "jaipur",
//                 "latitude": 26.9855,
//                 "longitude": 75.8513,
//                 "rating": 4.5,
//                 "entryFee": 25,
//                 "imageUrl": "https://image3.mouthshut.com/images/Restaurant/Photo/-69394_7837.jpg",
//                 "__v": 0
//             },
//             {
//                 "_id": "6413203c98d0ef60f8d4f555",
//                 "name": "sheesh mahal",
//                 "city": "jaipur",
//                 "latitude": 26.98588,
//                 "longitude": 75.85059,
//                 "rating": 4.5,
//                 "entryFee": 10,
//                 "imageUrl": "https://jaipurtourism.co.in/images//tourist-places/sheesh-mahal-jaipur/sheesh-mahal-jaipur-tourism-opening-time-closing.jpg",
//                 "__v": 0
//             }
//         ],
//         "cost": 10
//     },
//     {
//         "places": [
//             {
//                 "_id": "6413203c98d0ef60f8d4f550",
//                 "name": "desert safari packages/jaisalmer",
//                 "city": "jaipur",
//                 "latitude": 26.489679,
//                 "longitude": 74.5509,
//                 "rating": 4.5,
//                 "entryFee": 1800,
//                 "imageUrl": "https://www.makemytrip.com/travel-guide/media/dg_image/jaisalmer/Camel-Safari.jpg",
//                 "__v": 0
//             }
//         ],
//         "cost": 0
//     },
//     {
//         "places": [
//             {
//                 "_id": "6413203c98d0ef60f8d4f552",
//                 "name": "albert hall museum",
//                 "city": "jaipur",
//                 "latitude": 26.9193,
//                 "longitude": 75.8256,
//                 "rating": 4.5,
//                 "entryFee": 40,
//                 "imageUrl": "https://jaipurtourism.co.in/images/places-to-visit/header/albert-hall-museum-jaipur-entry-fee-timings-holidays-reviews-header.jpg",
//                 "__v": 0
//             },
//             {
//                 "_id": "6413203c98d0ef60f8d4f54e",
//                 "name": "hawa mahal",
//                 "city": "jaipur",
//                 "latitude": 26.9239,
//                 "longitude": 75.8267,
//                 "rating": 4,
//                 "entryFee": 50,
//                 "imageUrl": "https://www.holidify.com/images/cmsuploads/compressed/h4_20170822181427.PNG",
//                 "__v": 0
//             },
//             {
//                 "_id": "6413203c98d0ef60f8d4f553",
//                 "name": "jantar mantar",
//                 "city": "jaipur",
//                 "latitude": 26.9248,
//                 "longitude": 75.8246,
//                 "rating": 4.4,
//                 "entryFee": 50,
//                 "imageUrl": "https://static.toiimg.com/thumb/91352918/Jantar-Mantar-Jaipur.jpg?width=1200&height=900",
//                 "__v": 0
//             }
//         ],
//         "cost": 100
//     },
//     {
//         "places": [
//             {
//                 "_id": "6413203c98d0ef60f8d4f54d",
//                 "name": "city palace, jaipur",
//                 "city": "jaipur",
//                 "latitude": 26.9258,
//                 "longitude": 75.8237,
//                 "rating": 4,
//                 "entryFee": 200,
//                 "imageUrl": "https://lh3.googleusercontent.com/gps-proxy/ALm4wwnjaRwNEBoQZNz1hr2BOXKS2PY4CNh-b2Ule_HmDBssoL4rUhFFwSpe6Mn7iKTK6kSLHp64EYWz7qn0-2cFGv2I-Klel4hVMmVEdk4eaTz92dNOXUgH73cpemMsExKODNWjID9wRlg6QCgQLj8naeb1nyIWCr7UQj6AvO63jGkmFcICuy7w-vQk_g=w408-h272-k-no",
//                 "__v": 0
//             }
//         ],
//         "cost": 0
//     },
//     {
//         "places": [
//             {
//                 "_id": "6413203c98d0ef60f8d4f556",
//                 "name": "royal gaitor tumbas",
//                 "city": "jaipur",
//                 "latitude": 26.9297,
//                 "longitude": 75.8292,
//                 "rating": 4,
//                 "entryFee": 30,
//                 "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/c1/4f/ca/do-cemiterio-podemos.jpg?w=1200&h=-1&s=1",
//                 "__v": 0
//             }
//         ],
//         "cost": 0
//     }
// ]);

  
  // let [perDay, setPerDay] = useState(3);

  const [currentDate, setCurrentDate ] = useState(moment()); // Get the current date
// const nextDate = moment(currentDate).add(1, "days"); // Add 1 day to the current date
// console.log(nextDate.format("MMMM Do, YYYY")); // Output: "2023-03-18"
  return (
    data.length>0?
    <div className = "itinerary-page-container">
    <div className = 'itinerary-container'>
      <ItineraryHeader title={data[0].places[0].city}/>

      <div className="itinerary-body-container">

      {data.map((row, rowIndex) => (
          <Slide childClassName="itinerary-day-container" delay="100" direction="left">
          <tr className="itinerary-day-container" key={rowIndex}>
          <div className="itinerary-day-header">
            <div>Day {rowIndex + 1}</div>
            <div>{moment(currentDate).add(rowIndex, "days").format("MMMM Do, YYYY")}</div>
          </div>
            {row.places.map((cell, cellIndex) => (
          
              <ItineraryCard place = {cell}/>
          
            ))}
            <hr></hr>
          </tr>
            </Slide>
        ))}
     
      
      

      </div>
    </div> 
    <div className="itinerary-container-rhs">
      <div className="itinerary-rhs-map"> Map </div>
      <div className="itinerary-rhs-budget"> Budget</div>
    </div>
    </div>
    : <div>Loading...</div>
  )
}

export default Itinerary