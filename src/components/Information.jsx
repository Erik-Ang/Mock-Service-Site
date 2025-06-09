function Information() {
  return (
    <div className="flex justify-center w-full h-auto text-white bg-black p-20">
      <div className="flex w-full gap-10 divide-x divide-gray-400">
        {/* Left */}
        <div className="flex-3 pr-10">
          <h1 className="text-4xl font-bold mb-4 underline">Information</h1>
          <p className="text-xl mb-8">
            Welcome to Bayfield Barbers! We are dedicated to providing you with
            the best grooming experience. Our skilled barbers are here to ensure
            you leave looking sharp and feeling great.
          </p>
          <p className="text-xl mb-8">
            We offer a range of services including haircuts, beard trims, and
            styling. Whether you're looking for a classic cut or something more
            modern, we've got you covered.
          </p>
          <p className="text-xl mb-8">
            For any inquiries or to learn more about our services, feel free to
            contact us or visit our booking page.
          </p>
        </div>
        {/* Right */}
        <div className="flex-1 pl-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Store Hours</h2>
          <ul className="text-lg space-y-2">
            <li>Mon-Fri: 9:00 AM – 6:00 PM</li>
            <li>Sat: 10:00 AM – 4:00 PM</li>
            <li>Sun: Closed</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
          <a href="tel:+11234567800" className="text-lg">
            Phone: (123) 456-7890
          </a>
          <a href="mailto:info@bayfieldbarbers.com" className="text-lg">
            Email: info@bayfieldbarbers.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Information;
