import logo from "./logo.svg";
import Home from "./pages/HomePage/HomePage";
import Itinerary from "./pages/ItineraryPage/ItineraryPage";
import Request from "./pages/RequestPage/RequestPage";
import ConfirmRequest from "./pages/ConfirmRequestPage/ConfirmRequestPage";
import Hotel from "./pages/HotelPage/HotelPage";
import DocumentationPage from "./pages/DocumentationPage/DocumentationPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<Router>
			<div className="App">
				{/* page routes */}

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/itinerary" exact element={<Itinerary />} />
					<Route path="/generate" exact element={<Request />} />
					<Route path="/confirmation" exact element={<ConfirmRequest />} />
					<Route path="/hotel" exact element={<Hotel />} />
					<Route
						path="/api/documentation"
						element={<DocumentationPage />}
					></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
