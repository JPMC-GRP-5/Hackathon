import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div className="min-h-screen w-full flex flex-row justify-between">
			<div className="flex flex-col pl-20 justify-center w-1/3">
				<div className="font-bold text-[64px] text-[#122E48]">VOYAGER</div>
				<div className="text-[22px]">
					<div>Your Dream Vacation Awaits</div>
					<div>
						Create Your own custom itinerary with our simple and fun tool
					</div>
				</div>
				<div className="mt-10">
					<Link to={"/api/documentation"}>
						<button className="bg-[#122E48] text-white  py-2 px-4 rounded">
							Documentation
						</button>
					</Link>
					<Link to={"/generate"}>
						<button className="bg-[#122E48] ml-5 text-white  py-2 px-4 rounded">
							Generate Itinerary
						</button>
					</Link>
				</div>
			</div>
			<div className="w-[840px]">
				<img src="landing-page.png" alt="" />
			</div>
		</div>
	);
};

export default HomePage;
