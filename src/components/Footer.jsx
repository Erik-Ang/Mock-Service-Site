function Footer() {
  return (
    <div className="w-full flex flex-col justify-center items-center h-full bg-orange-400 p-20">
      <h1 className="text-4xl font-bold mb-4">
        Thank You for Visiting Bayfield Barbers
      </h1>
      <p className="text-xl mb-8">We hope to see you again soon!</p>
      <a
        href="#booking"
        className="text-2xl font-extrabold text-orange-500 hover:text-orange-700"
      >
        Book Your Next Appointment
      </a>
    </div>
  );
}
export default Footer;
