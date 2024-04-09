import Contact from "@components/Contact";
import SlideShow from "@components/SlideShow";
import Tour from "@components/Tour";
import { GiReceiveMoney } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";
import { RiEmotionHappyFill } from "react-icons/ri";
const HomePage = () => {
  return (
    <main className='w-full max-w-[1200px] flex flex-col gap-20'>
      <section className='bg-[var(--CT02)] drop-shadow-2xl grid grid-rows-[40px,1fr,1fr] lg:grid-cols-[1fr,520px] lg:grid-rows-[40px,1fr] p-5 md:m-4 m-1 text-center rounded-xl'>
        <h1 className=' text-3xl font-extralight'>Nainital</h1>
        <div className='row-span-2 border-2 border-white rounded-3xl overflow-hidden'><img className='w-full' src="/img/i1.png" alt="" /></div>
        <div className='flex justify-center items-center'>
          <p className='lg:max-w-[500px] pt-2 sm:p-4 lg:p-1 xl:text-xl xl:font-bold font-robo'>
            Nainital, known for its lake, is one of India's hill stations, offering visitors a tranquil environment. It has everything a tourist may want during a trip to a hill station.
            <span className="lg:max-w-[500px] pt-2 sm:p-4 lg:p-1 xl:text-xl xl:font-bold font-robo sm:block hidden">Nainital attracts a large number of tourists every year, especially during the summer, thanks to its gorgeous lake and wildlife sanctuary. Nainital is separated into two halves and is located in the Kumaun hills. Tallital is one, while Mallital is the other, separated by the lake.</span>
          </p>
        </div>
      </section>
      <section className='bg-[var(--CT02)] drop-shadow-2xl grid grid-rows-[40px,1fr,1fr] lg:grid-cols-[520px,1fr] lg:grid-rows-[40px,1fr] p-5 md:m-4 m-1 text-center rounded-xl'>
        <h1 className=' text-3xl font-extralight lg:order-2'>About Us</h1>
        <div className='row-span-2 border-2 border-white rounded-3xl overflow-hidden lg:order-1'><img className='w-full' src="/img/i1.png" alt="" /></div>
        <div className='flex justify-center items-center lg:order-3'>
          <p className='lg:max-w-[500px] pt-2 sm:p-4 lg:p-1 xl:text-xl xl:font-bold font-robo'>
          Nainital Elegant Travels is your trusted partner for both tourism and cab services. We specialize in crafting personalized journeys that blend luxury, adventure, and authenticity.
          <span className="lg:max-w-[500px] pt-2 sm:p-4 lg:p-1 xl:text-xl xl:font-bold font-robo sm:block hiddenda"> Whether you're exploring the tranquil shores of Naini Lake or discovering the unexplored charm of nearby hill towns like Pangot, Ranikhet, and Almora, we promise to leave an indelible mark on your heart. Welcome to a world where elegance meets exploration!</span>
          </p>
        </div>
      </section>
      <section className='flex justify-evenly flex-wrap gap-2 p-2'>
        <div className='bg-[var(--CT02)] drop-shadow-2xl flex flex-col items-center w-[48%] lg:w-[24%] p-2 lg:p-5 lg:rounded-2xl gap-2'><GiReceiveMoney className='w-16 h-16' /><h1 className='text-xl md:text-2xl'>Cost-Effective</h1><p className='text-center hidden md:block'>No vehicle ownership expenses—just pay for the rides you take.</p></div>
        <div className='bg-[var(--CT02)] drop-shadow-2xl flex flex-col items-center w-[48%] lg:w-[24%] p-2 lg:p-5 lg:rounded-2xl gap-2'><MdHealthAndSafety className='w-16 h-16' /><h1 className='text-xl md:text-2xl'>Safety</h1><p className='text-center hidden md:block'>Vetted drivers and live tracking enhance passenger security during journeys.</p></div>
        <div className='bg-[var(--CT02)] drop-shadow-2xl flex flex-col items-center w-[48%] lg:w-[24%] p-2 lg:p-5 lg:rounded-2xl gap-2'><MdAccessTimeFilled className='w-16 h-16' /><h1 className='text-xl md:text-2xl'>Time-Saving</h1><p className='text-center hidden md:block'>Efficient routes mean quicker travel compared to public transport.</p></div>
        <div className='bg-[var(--CT02)] drop-shadow-2xl flex flex-col items-center w-[48%] lg:w-[24%] p-2 lg:p-5 lg:rounded-2xl gap-2'><RiEmotionHappyFill className='w-16 h-16' /><h1 className='text-xl md:text-2xl'>Convenience</h1><p className='text-center hidden md:block'>Easily book rides, skip waiting times, and enjoy door-to-door service.</p></div>
      </section>
      <Tour />
      <section id="ride" className="bg-[var(--CT02)] drop-shadow-2xl w-full grid grid-cols-1 md:grid-cols-2 grid-rows-[120px,120px,1fr] md:grid-rows-[120px,1fr] p-5 rounded-xl">
        <div className="flex flex-wrap w-full pb-5 justify-center text-center md:col-span-2 h-auto">
          <h1 className="lg:text-4xl sm:text-3xl text-2xl mb-2 text-gray-900">Ride-Hailing Services</h1>
          <p className="w-full lg:text-xl">Need a Ride? We can cover you with our Cab Services, get your ride booked to your next destination.</p>
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Most Common Destination</h1>
          <ol className="list-inside list-disc sm:text-xl md:py-4">
            <li className="md:p-3">Dehradun</li>
            <li className="md:p-3">Delhi</li>
            <li className="md:p-3">Haldwani</li>
            <li className="md:p-3">Kausani</li>
            <li className="md:p-3">Munsiari</li>
          </ol>
        </div>
        <div>
          <SlideShow image={["./img/i4.png", "./img/i5.png", "./img/i6.png", "./img/i7.jpg", "./img/i8.jpg"]} ratio={"aspect-video"} />
        </div>
      </section>
      <Contact />
      <section className="h-20"></section>
    </main>
  );
};

export default HomePage;