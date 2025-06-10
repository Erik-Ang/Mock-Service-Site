import { useState } from "react";
import BasicDateTimePicker from "./BasicDateTimePicker";

function Booking() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleBook = () => {
    if (selectedDate) {
      window.alert(
        `Your booking for ${selectedDate.format(
          "MMMM D, YYYY h:mm A"
        )} has been submitted!`
      );
    } else {
      window.alert("Please select a date and time for your booking.");
    }
  };

  return (
    <div className="w-full h-auto text-black bg-white p-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 underline">Book Here</h1>
      <div className="w-full flex flex-col space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="flex-1 p-2 border border-gray-300 rounded"
          />
          <div className="">
            <BasicDateTimePicker
              value={selectedDate}
              onChange={setSelectedDate}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <input
            type="tel"
            placeholder="Phone Number"
            className="flex-1 p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex gap-4 items-center">
          <select className="flex-1 p-2 border border-gray-300 rounded">
            <option value="">Select Service</option>
            <option value="haircut">Haircut</option>
            <option value="beard_trim">Beard Trim</option>
            <option value="hair_and_beard">Hair and Beard</option>
            <option value="styling">Styling</option>
            <option value="shave">Shave</option>
            <option value="coloring">Coloring</option>
            <option value="other">Other</option>
          </select>
          <select className="flex-1 p-2 border border-gray-300 rounded">
            <option value="">Preferred Stylist</option>
            <option value="any">Any Available</option>
            <option value="alex">Alex</option>
            <option value="jordan">Jordan</option>
            <option value="sam">Sam</option>
            <option value="taylor">Taylor</option>
          </select>
        </div>
        <textarea
          placeholder="Additional Notes"
          className="p-2 border border-gray-300 rounded h-24"
        ></textarea>
        <button
          onClick={handleBook}
          className="mt-4 px-8 py-4 !text-2xl !bg-orange-400 text-black rounded font-bold hover:bg-orange-600 transition self-center"
        >
          Book
        </button>
      </div>
    </div>
  );
}

export default Booking;
