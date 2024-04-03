
const Tour = () => {
  const Loc = [
    {
      "name": "bhimtal",
      "image": "https://i0.wp.com/oneday.tours/wp-content/uploads/one-day-bhimtal-local-sightseeing-tour-package-private-cab-header.jpg?fit=1280%2C640&ssl=1"
    },
    {
      "name": "Nainital",
      "image": "https://traveltricky.com/wp-content/uploads/2021/06/Nainital-1024x576.png",
    },
    {
      "name": "naukuchiatal",
      "image": "https://static.toiimg.com/photo/msid-52251938,width-96,height-65.cms",
    },
    {
      "name": "Sattal",
      "image": "https://www.indianholiday.com/pictures/travelguide/other-images/dest_head_img-378.jpeg",
    },
    {
      "name": "Almora",
      "image": "https://www.tourmyindia.com/socialimg/almora-tourism.jpg",
    },
    {
      "name": "Ranikhet",
      "image": "https://globalpathholidays.com/wp-content/uploads/2015/05/Ranikhet-tour.jpg",
    },
    {
      "name": "Kasardevi",
      "image": "https://www.adotrip.com/public/images/areas/master_images/60867da47d4a2-Kasar_Devi_Temple_Almora.jpg",
    },
    {
      "name": "kechi dham",
      "image": "https://www.dham-yatra.com/blog/wp-content/uploads/2019/10/kainchi-dham-1024x683.jpg",
    },
    {
      "name": "Rishikesh",
      "image": "https://www.triptyme.com/wp-content/uploads/sites/17/2016/06/rishikesh.jpg",
    },
    {
      "name": "Masoorie",
      "image": "https://www.worldatlas.com/upload/1f/90/31/shutterstock-794720590.jpg",
    },
  ];
  return (
      <section className="p-5 w-full">
        <div className="flex flex-wrap w-full pb-5 flex-col items-center text-center">
          <h1 className="lg:text-4xl sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Tour You Can Travel</h1>
          <p className="w-full lg:text-xl">Here are some common locations you would loved to visit with our services. Most common places for touirism, travel and more...</p>
        </div>
        <div className="flex flex-wrap justify-evenly gap-2">
          {Loc.map((i) => (
            <div key={i.name} className="border-2 border-[var(--CT05)] rounded-lg flex justify-center items-center w-full sm:w-[49%] md:w-[32%] h-20 sm:h-32 md:h-40 bg-cover"
            style={{backgroundImage: `url(${i.image})`}}
            >
            <h2 className="text-3xl font-extrabold glow capitalize">{i.name}</h2>
            </div>
          ))}
        </div>
      </section>
 );
};

export default Tour;