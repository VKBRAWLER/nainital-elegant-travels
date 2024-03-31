
const Ride = () => {
  const Loc = [ "bhimtal", "nainital", "corbett", "ranikhet", "kasauni", "mukteshwar", "almoda", "bageshwar", "pithoragarh", "champawat" ];
  return (
      <section className="px-5 w-full">
        <div className="flex flex-wrap w-full pb-5 flex-col items-center text-center">
          <h1 className="lg:text-4xl sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Ride-Hailing Services</h1>
          <p className="w-full lg:text-xl">Need a Ride? We can cover you with our Cab Services, get your ride booked to your next destination.</p>
        </div>
        <div className="flex flex-wrap justify-evenly gap-2">
          {Loc.map((i) => (
            <div key={i} className="border-2 border-[var(--CT05)] rounded-lg flex justify-center items-center w-full sm:w-[49%] md:w-[32%] h-20 sm:h-32 md:h-40 bg-cover"
            style={{backgroundImage: `url("https://i0.wp.com/oneday.tours/wp-content/uploads/one-day-bhimtal-local-sightseeing-tour-package-private-cab-header.jpg?fit=1280%2C640&ssl=1)`}}
            >
              <h2 className="text-xl font-extrabold text-white">{i}</h2>
            </div>
          ))}
        </div>
      </section>
 );
};

export default Ride;