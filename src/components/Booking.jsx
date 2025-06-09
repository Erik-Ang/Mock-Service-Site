import { MyDatePicker } from "./MyDatePicker";

function Booking() {
  return (
    <div className="w-full h-auto text-black bg-white p-20">
      <h1 className="text-4xl font-bold mb-8 underline">Book Here</h1>
      <div className="flex w-auto gap-6 items-center justify-center">
        {/* Left */}
        <div className="flex-3 pr-10 flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Preferred Service"
            className="p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Additional Notes"
            className="p-2 border border-gray-300 rounded h-24"
          ></textarea>
        </div>
        {/* Right */}
        <div className="flex-1 pl-10 flex flex-col items-center justify-center">
          <MyDatePicker />
        </div>
      </div>
    </div>
  );
}

export default Booking;
