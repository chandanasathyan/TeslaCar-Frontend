import CarDetails from "./components/CarDetails/Cardetails";
import CarListingPage from "./components/CarListing/CarListingPage";
import ChatInterface from "./components/ChatInterface/ChatInterface";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardetails/:id" element={<CarDetails />} />
          <Route path="/carlisting" element={<CarListingPage />} />
        </Routes>
        <ChatInterface />
      </Router>
    </div>
  );
}

export default App;
