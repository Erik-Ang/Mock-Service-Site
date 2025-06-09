function Header() {
  return (
    <div className="fixed top-0 left-0 z-50 w-full flex flex-row justify-between items-center bg-orange-400 text-black p-4 ">
      <div className="text-2xl font-bold">Bayfield Barbers</div>
      <div className="flex space-x-4">
        <a href="#information" className="text-2xl font-extrabold">
          Information
        </a>
        <a href="#booking" className="text-2xl font-extrabold">
          Booking
        </a>
      </div>
    </div>
  );
}

export default Header;
