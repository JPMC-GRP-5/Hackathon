import { useState } from "react";
import "./RequestPage.css";
import bg from "../../images/form_bg.png";
import Select from "react-select";

const RequestPage = () => {
	const options = [
		{ value: "mumbai", label: "Mumbai" },
		{ value: "delhi", label: "Delhi" },
		{ value: "mysore", label: "Mysore" },
		{ value: "chennai", label: "Chennai" },
		{ value: "kolkata", label: "Kolkata" },
		{ value: "jaipur", label: "Jaipur" },
		{ value: "kochi", label: "Kochi" },
		{ value: "panaji", label: "Panaji" },
		{ value: "manali", label: "Manali" },
	];
	const [city, setCity] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [budget, setBudget] = useState(0);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (city === "" || startDate === "" || endDate === "" || budget === 0) {
			alert("Please fill all the fields");
			return;
		}
		sessionStorage.setItem("city", city);
		sessionStorage.setItem("startDate", startDate);
		sessionStorage.setItem("endDate", endDate);
		sessionStorage.setItem("budget", budget);
		window.location.href = "/itinerary";
	};

	return (
		<div className="flex flex-row justify-end">
			<div className="generator-main">
				<div className="flex flex-col mt-20 w-1/3">
					<div className="text-[36px] text-[#122E48] uppercase font-bold">
						Generate Itinerary
					</div>
					<div className="text-[#122E48] text-[18px] font-bold uppercase mt-5">
						Select City
					</div>
					<Select
						className="w-full mt-2"
						placeholder={"Select City"}
						options={options}
						onChange={(e) => setCity(e.value)}
					/>
					<div>
						<div className="text-[#122E48] text-[18px] font-bold uppercase mt-5">
							Enter Budget (excluding Food, Travel & Hotel)
						</div>
						<div className="flex flex-row mt-2">
							<input
								type="number"
								name="budget"
								value={budget}
								className="border-2 border-gray-200 p-2 rounded-lg"
								onChange={(e) => {
									setBudget(e.target.value);
								}}
							/>
						</div>
					</div>
					<div className="flex flex-row justify-between mt-5">
						<div className="flex flex-col">
							<div className="text-[#122E48] text-[18px] font-bold uppercase">
								Start Date
							</div>
							<input
								type="date"
								className="border-2 border-gray-200 rounded-md p-2 mt-2"
								onChange={(e) => {
									setStartDate(e.target.value);
								}}
							/>
						</div>
						<div className="flex flex-col">
							<div className="text-[#122E48] text-[18px] font-bold uppercase">
								End Date
							</div>
							<input
								type="date"
								className="border-2 border-gray-200 rounded-md p-2 mt-2"
								onChange={(e) => {
									setEndDate(e.target.value);
								}}
							/>
						</div>
					</div>
					<div className="flex flex-row mt-10">
						<button
							className="bg-[#122E48] text-white py-2 px-4 rounded-lg"
							onClick={handleSubmit}
						>
							Generate
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RequestPage;
