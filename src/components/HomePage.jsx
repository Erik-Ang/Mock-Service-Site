function HomePage() {
  return (
    <div className="w-full h-screen text-black">
      <div className="flex flex-col justify-center items-center w-full h-full bg-white p-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to Bayfield Barbers</h1>
        <p className="text-xl mb-8">
          Your premier destination for stylish haircuts and grooming.
        </p>
        <a
          href="#booking"
          className="text-2xl font-extrabold text-orange-500 hover:text-orange-700"
        >
          Book Your Appointment Now
        </a>
      </div>
    </div>
  );
}
export default HomePage;
