import { React, useState, useEffect } from "react";
import "./ItineraryPage.css";

import ItineraryCard from "../../components/Itinerary/ItineraryCard";
import ItineraryHeader from "../../components/Itinerary/ItineraryHeader";
import moment from "moment";
import { Slide } from "react-awesome-reveal";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import MapParent from "../../components/Maps/MapParent";

const Itinerary = () => {
	// let [days,setDays] = useState([
	//   [1,2,3],
	//   [1,2,3,4],
	//   [1,2],
	// ]);
	const [data, setData] = useState([]);

	const [cost, setCost] = useState(0);
	const [searchParams] = useSearchParams();
	const city = sessionStorage.getItem("city");
	const budget = sessionStorage.getItem("budget");
	const startDate = sessionStorage.getItem("startDate");
	const endDate = sessionStorage.getItem("endDate");
	console.log(city);

	useEffect(() => {
		const subtract = moment(endDate).diff(moment(startDate), "days");
		console.log(subtract);
		axios
			.get(
				`https://voyager-d2bo.onrender.com/places?city=${city}&budget=${budget}&days=${subtract}`
			)
			.then((response) => {
				console.log(response.data);
				setData(response.data.nearbyPlaces);
				setCost(response.data.totalCost);

				// setTimeout(() => {
				//   // Do something after 1 second
				// }, 1000);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		console.log(data);
	}, [data]);

	const [currentDate, setCurrentDate] = useState(moment()); // Get the current date
	// const nextDate = moment(currentDate).add(1, "days"); // Add 1 day to the current date
	// console.log(nextDate.format("MMMM Do, YYYY")); // Output: "2023-03-18"
	return data.length > 0 ? (
		<div className="itinerary-page-container">
			<div className="itinerary-container">
				<ItineraryHeader title={data[0].places[0].city} />

				<div className="itinerary-body-container">
					{data.map((row, rowIndex) => (
						<Slide
							childClassName="itinerary-day-container"
							delay="100"
							direction="left"
						>
							<tr className="itinerary-day-container" key={rowIndex}>
								<div className="itinerary-day-header">
									<div>Day {rowIndex + 1}</div>
									<div>
										{moment(startDate)
											.add(rowIndex, "days")
											.format("MMMM Do, YYYY")}
									</div>
								</div>
								{row.places.map((cell, cellIndex) => (
									<ItineraryCard place={cell} />
								))}
								<hr></hr>
							</tr>
						</Slide>
					))}
				</div>
			</div>
			<div className="itinerary-container-rhs mr-10 mt-48">
				<div className="itinerary-rhs-map ">
					<MapParent city={city} />
				</div>
				<div className="bg-[#122E48] shadow-xl mt-10 text-white p-4 rounded-md">
					<div className="text-lg">Estimated Expenses:</div>
					{data.map((day, index) => {
						return (
							<div className="mt-4">
								Day {index + 1}:<span className="ml-4">₹ {day.cost}</span>
							</div>
						);
					})}
					<div className="mt-4">
						Total Expense: <span className="ml-4">₹ {cost}</span>
					</div>
				</div>
			</div>
		</div>
	) : (
		<div>Loading...</div>
	);
};

export default Itinerary;
