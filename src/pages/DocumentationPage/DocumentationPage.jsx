import React from "react";

function DocumentationPage() {
	const placesApis = [
		{
			method: "GET",
			path: "/places",
			description: "Generate a new itinerary",
			queries: [
				{
					name: "city",
					type: "string",
					description: "City name",
				},
			],
			parameters: [],
			link: "https://voyager-d2bo.onrender.com/places?city=<city name>",
		},
		{
			method: "GET",
			path: "/places/info/:location",
			description: "Get information about a location",
			queries: [],
			parameters: [
				{
					name: "location",
					type: "string",
					description: "Location name",
				},
			],
			link: "https://voyager-d2bo.onrender.com/places/info/<location name>",
		},
		{
			method: "GET",
			path: "/places/nearby",
			description: "Get nearby places",
			queries: [
				{
					name: "latitude",
					type: "number",
					description: "Latitude of the location",
				},
				{
					name: "longitude",
					type: "number",
					description: "Longitude of the location",
				},
			],
			parameters: [],
			link: "https://voyager-d2bo.onrender.com/places/nearby?latitude=<latitude>&longitude=<longitude>",
		},
	];

	const hotelsApis = [
		{
			method: "GET",
			path: "/hotels",
			description: "Get All Hotels",
			queries: [],
			parameters: [],
			link: "https://voyager-d2bo.onrender.com/hotels",
		},
		{
			method: "GET",
			path: "/hotels/city",
			description: "Get Available Cities",
			queries: [],
			parameters: [],
			link: "https://voyager-d2bo.onrender.com/hotels/city?city=<city name>",
		},
		{
			method: "GET",
			path: "/hotels/nearby",
			description: "Get Nearby Hotels",
			queries: [
				{
					name: "latitude",
					type: "number",
					description: "Latitude of the location",
				},
				{
					name: "longitude",
					type: "number",
					description: "Longitude of the location",
				},
			],
			parameters: [],
			link: "https://voyager-d2bo.onrender.com/hotels/nearby?latitude=<latitude>&longitude=<longitude>",
		},
		{
			method: "GET",
			path: "/hotels/:city",
			description: "Get Hotels in a City",
			queries: [],
			parameters: [
				{
					name: "city",
					type: "string",
					description: "City name",
				},
			],
			link: "https://voyager-d2bo.onrender.com/hotels/<city name>",
		},
	];

	const copyToClipboard = (text) => {
		alert("Copied to clipboard");
		navigator.clipboard.writeText(text);
	};

	return (
		<div className="min-h-screen w-full p-10 text-[#122E48]">
			<div className="font-semibold text-2xl">Voyager Documentation</div>
			<div className="mt-10">
				<div className="font-semibold text-xl">Introduction</div>
				<div className="mt-5">
					<div className="font-semibold text-lg">What is Voyager?</div>
					<div className="mt-2">
						Using Voyager you can create your own itinerary for your dream
						destination
					</div>
				</div>
				<div className="mt-5">
					<div className="text-lg font-semibold">APIs</div>
					<div className="mt-2">
						<div className="text-2xl">Places:</div>
						<div className="mt-3">
							{placesApis.map((api) => (
								<div
									className={`mt-7 ${
										api.method === "GET" &&
										"bg-[#61affe] border-2 border-[#61affe]"
									} bg-opacity-30 rounded-md p-4 flex flex-row items-center justify-between`}
								>
									<div className="flex flex-row items-start">
										<div className="flex flex-row items-center">
											<div
												className={`font-semibold ${
													api.method === "GET" && "bg-[#61affe]"
												} px-4 py-2 rounded-md`}
											>
												{api.method}
											</div>
											<div className="font-semibold ml-5 w-48">{api.path}</div>
											<div className="ml-5 w-72">{api.description}</div>
										</div>
										<div className="ml-5">
											<div className="mt-1 flex flex-row ">
												<div className="font-semibold">Queries: </div>
												{api.queries.length > 0 ? (
													api.queries.map((query) => (
														<div className="ml-2">
															<div className="font-semibold">{query.name}</div>
														</div>
													))
												) : (
													<div className="ml-2">None</div>
												)}
											</div>
											<div className="mt-1 flex flex-row">
												<div className="font-semibold">Parameters:</div>
												{api.parameters.length > 0 ? (
													api.parameters.map((parameter) => (
														<div className="ml-2">
															<div className="font-semibold">
																{parameter.name}
															</div>
														</div>
													))
												) : (
													<div className="ml-2">None</div>
												)}
											</div>
										</div>
									</div>
									<div
										className="bg-white px-5 py-2 bg-opacity-60 cursor-pointer rounded-md"
										onClick={() => copyToClipboard(api.link)}
									>
										<div>Copy</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="mt-10">
						<div className="text-2xl">Hotels:</div>
						<div className="mt-3">
							{hotelsApis.map((api) => (
								<div
									className={`mt-7 ${
										api.method === "GET" &&
										"bg-[#61affe] border-2 border-[#61affe]"
									} bg-opacity-30 rounded-md p-4 flex flex-row items-center justify-between`}
								>
									<div className="flex flex-row items-start">
										<div className="flex flex-row items-center">
											<div
												className={`font-semibold ${
													api.method === "GET" && "bg-[#61affe]"
												} px-4 py-2 rounded-md`}
											>
												{api.method}
											</div>
											<div className="font-semibold ml-5 w-48">{api.path}</div>
											<div className="ml-5 w-72">{api.description}</div>
										</div>
										<div className="ml-5">
											<div className="mt-1 flex flex-row ">
												<div className="font-semibold">Queries: </div>
												{api.queries.length > 0 ? (
													api.queries.map((query) => (
														<div className="ml-2">
															<div className="font-semibold">{query.name}</div>
														</div>
													))
												) : (
													<div className="ml-2">None</div>
												)}
											</div>
											<div className="mt-1 flex flex-row">
												<div className="font-semibold">Parameters:</div>
												{api.parameters.length > 0 ? (
													api.parameters.map((parameter) => (
														<div className="ml-2">
															<div className="font-semibold">
																{parameter.name}
															</div>
														</div>
													))
												) : (
													<div className="ml-2">None</div>
												)}
											</div>
										</div>
									</div>
									<div
										className="bg-white px-5 py-2 bg-opacity-60 cursor-pointer rounded-md"
										onClick={() => copyToClipboard(api.link)}
									>
										<div>Copy</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DocumentationPage;
