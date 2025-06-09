import "./App.css";
import HomePage from "./components/HomePage.jsx";
import Booking from "./components/Booking.jsx";
import Information from "./components/Information.jsx";

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-white flex flex-col overflow-y-auto">
        <div id="homepage">
          <HomePage />
        </div>
        <div id="information">
          <Information />
        </div>
        <div id="booking">
          <Booking />
        </div>
      </div>
    </>
  );
}

export default App;
