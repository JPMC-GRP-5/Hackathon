import logo from './logo.svg';
import Home from './pages/HomePage/HomePage';
import Itinerary from './pages/ItineraryPage/ItineraryPage';
import Request from './pages/RequestPage/RequestPage';
import ConfirmRequest from './pages/ConfirmRequestPage/ConfirmRequestPage';
import Hotel from './pages/HotelPage/HotelPage';
import  {BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      
        {/* page routes */}

        <Routes>
          
          <Route path="/" exact element={<Home />} />
          <Route path="/itinerary" exact element={<Itinerary />} />
          <Route path="/request" exact element={<Request/>} />
          <Route path="/confirmation" exact element={<ConfirmRequest/>} />
          <Route path="/hotel" exact element={<Hotel/>} />
          
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
