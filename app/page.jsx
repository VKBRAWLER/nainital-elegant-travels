"use client";
import { useEffect, useState } from "react";
import { GiReceiveMoney } from "react-icons/gi";
const HomePage = () => {
  const images = ["./img/i2.png", "./img/i3.png"];
  const [slideImg, setSlideImg] = useState(images[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = images.indexOf(slideImg);
      const nextIndex = (currentIndex + 1) % images.length;
      setSlideImg(images[nextIndex]);
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [slideImg]);
  return (
    <main className='bg-yellow-600 w-full max-w-[1200px] flex flex-col gap-20'>
      <section className='w-full'>
        <img src={slideImg} alt="" />
      </section>
      <section className='grid grid-rows-[40px,1fr,1fr] lg:grid-cols-[1fr,520px] lg:grid-rows-[40px,1fr] p-5 m-4 text-center bg-yellow-300 rounded-xl'>
        <h1 className=' text-3xl font-extralight'>Nainital</h1>
        <div className='row-span-2 border-2 border-black drop-shadow-2xl rounded-3xl overflow-hidden'><img className='w-full border-[20px]' src="/img/i1.png" alt="" /></div>
        <div className='flex justify-center items-center'><p className='lg:max-w-[500px] p-4 lg:p-1 sm:text-xl font-bold'>
          Nainital, known for its lake, is one of India's hill stations, offering visitors a tranquil environment. It has everything a tourist may want during a trip to a hill station. Nainital attracts a large number of tourists every year, especially during the summer, thanks to its gorgeous lake and wildlife sanctuary. Nainital is separated into two halves and is located in the Kumaun hills. Tallital is one, while Mallital is the other, separated by the lake.
        </p></div>
      </section>
      <section className='flex justify-evenly flex-wrap gap-2 p-2'>
        <div className='bg-yellow-400 flex flex-col items-center sm:w-[48%] lg:w-[24%] p-2 lg:p-5 lg:rounded-2xl gap-2'><GiReceiveMoney className='w-16 h-16' /><h1 className='text-2xl'>Value for money</h1><p className='text-center'>We believe in honest and transparent pricing with quality of service every time.</p></div>
        <div className='bg-yellow-400 flex flex-col items-center sm:w-[48%] lg:w-[24%] p-2 lg:p-5 lg:rounded-2xl gap-2'><GiReceiveMoney className='w-16 h-16' /><h1 className='text-2xl'>Value for money</h1><p className='text-center'>We believe in honest and transparent pricing with quality of service every time.</p></div>
        <div className='bg-yellow-400 flex flex-col items-center sm:w-[48%] lg:w-[24%] p-2 lg:p-5 lg:rounded-2xl gap-2'><GiReceiveMoney className='w-16 h-16' /><h1 className='text-2xl'>Value for money</h1><p className='text-center'>We believe in honest and transparent pricing with quality of service every time.</p></div>
        <div className='bg-yellow-400 flex flex-col items-center sm:w-[48%] lg:w-[24%] p-2 lg:p-5 lg:rounded-2xl gap-2'><GiReceiveMoney className='w-16 h-16' /><h1 className='text-2xl'>Value for money</h1><p className='text-center'>We believe in honest and transparent pricing with quality of service every time.</p></div>
      </section>
    </main>
  );
};

export default HomePage;