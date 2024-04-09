
const Tour = () => {
  const Loc = [
    {
      "name": "bhimtal",
      "image": "/img/tour/bhimtal.webp",
    },
    {
      "name": "Nainital",
      "image": "/img/tour/Nainital.png",
    },
    {
      "name": "naukuchiatal",
      "image": "/img/tour/naukuchiatal.cms",
    },
    {
      "name": "Sattal",
      "image": "/img/tour/Sattal.jpeg",
    },
    {
      "name": "Almora",
      "image": "/img/tour/Almora.jpg",
    },
    {
      "name": "Ranikhet",
      "image": "/img/tour/Ranikhet.jpg",
    },
    {
      "name": "Kasardevi",
      "image": "/img/tour/Kasardevi.jpg",
    },
    {
      "name": "kainchi dham",
      "image": "/img/tour/Kainchi_Dham.png",
    },
    {
      "name": "Rishikesh",
      "image": "/img/tour/Rishikesh.jpg",
    },
    {
      "name": "Masoorie",
      "image": "img/tour/Masoorie.webp",
    },
  ];
  return (
      <section id="tour" className="p-5 w-full">
        <div className="flex flex-wrap w-full pb-5 flex-col items-center text-center">
          <h1 className="lg:text-4xl sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Tour You Can Travel</h1>
          <p className="w-full lg:text-xl">Here are some common locations you would loved to visit with our services. Most common places for touirism, travel and more...</p>
        </div>
        <div className="flex flex-wrap justify-evenly gap-2">
          {Loc.map((i) => (
            <div key={i.name} className="border-2 border-[var(--CT05)] rounded-lg flex justify-center items-center w-full sm:w-[49%] md:w-[32%] h-20 sm:h-32 md:h-40 bg-cover"
            style={{backgroundImage: `url(${i.image})`}}>
            <h2 className="text-3xl font-extrabold glow capitalize">{i.name}</h2>
            </div>
          ))}
        </div>
      </section>
 );
};

export default Tour;