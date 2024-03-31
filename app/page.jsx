import Tour from "@components/Tour";
import { GiReceiveMoney } from "react-icons/gi";
const HomePage = () => {
  
  return (
    <main className='w-full max-w-[1200px] flex flex-col gap-20'>
      <section className='bg-[var(--CT02)] drop-shadow-2xl grid grid-rows-[40px,1fr,1fr] lg:grid-cols-[1fr,520px] lg:grid-rows-[40px,1fr] p-5 m-4 text-center rounded-xl'>
        <h1 className=' text-3xl font-extralight'>Nainital</h1>
        <div className='row-span-2 border-2 border-black rounded-3xl overflow-hidden'><img className='w-full border-[20px]' src="/img/i1.png" alt="" /></div>
        <div className='flex justify-center items-center'><p className='lg:max-w-[500px] p-4 lg:p-1 sm:text-xl font-bold'>
          Nainital, known for its lake, is one of India's hill stations, offering visitors a tranquil environment. It has everything a tourist may want during a trip to a hill station. Nainital attracts a large number of tourists every year, especially during the summer, thanks to its gorgeous lake and wildlife sanctuary. Nainital is separated into two halves and is located in the Kumaun hills. Tallital is one, while Mallital is the other, separated by the lake.
        </p></div>
      </section>
      <section className='bg-[var(--CT02)] drop-shadow-2xl grid grid-rows-[40px,1fr,1fr] lg:grid-cols-[520px,1fr] lg:grid-rows-[40px,1fr] p-5 m-4 text-center rounded-xl'>
        <div className='row-span-2 border-2 border-black rounded-3xl overflow-hidden'><img className='w-full border-[20px]' src="/img/i1.png" alt="" /></div>
        <h1 className=' text-3xl font-extralight'>Nainital</h1>
        <div className='flex justify-center items-center'><p className='lg:max-w-[500px] p-4 lg:p-1 sm:text-xl font-bold'>
          Nainital, known for its lake, is one of India's hill stations, offering visitors a tranquil environment. It has everything a tourist may want during a trip to a hill station. Nainital attracts a large number of tourists every year, especially during the summer, thanks to its gorgeous lake and wildlife sanctuary. Nainital is separated into two halves and is located in the Kumaun hills. Tallital is one, while Mallital is the other, separated by the lake.
        </p></div>
      </section>
      <section className='flex justify-evenly flex-wrap gap-2 p-2'>
        <div className='bg-[var(--CT02)] drop-shadow-2xl flex flex-col items-center sm:w-[48%] lg:w-[24%] p-2 lg:p-5 lg:rounded-2xl gap-2'><GiReceiveMoney className='w-16 h-16' /><h1 className='text-2xl'>Value for money</h1><p className='text-center'>We believe in honest and transparent pricing with quality of service every time.</p></div>
        <div className='bg-[var(--CT02)] drop-shadow-2xl flex flex-col items-center sm:w-[48%] lg:w-[24%] p-2 lg:p-5 lg:rounded-2xl gap-2'><GiReceiveMoney className='w-16 h-16' /><h1 className='text-2xl'>Value for money</h1><p className='text-center'>We believe in honest and transparent pricing with quality of service every time.</p></div>
        <div className='bg-[var(--CT02)] drop-shadow-2xl flex flex-col items-center sm:w-[48%] lg:w-[24%] p-2 lg:p-5 lg:rounded-2xl gap-2'><GiReceiveMoney className='w-16 h-16' /><h1 className='text-2xl'>Value for money</h1><p className='text-center'>We believe in honest and transparent pricing with quality of service every time.</p></div>
        <div className='bg-[var(--CT02)] drop-shadow-2xl flex flex-col items-center sm:w-[48%] lg:w-[24%] p-2 lg:p-5 lg:rounded-2xl gap-2'><GiReceiveMoney className='w-16 h-16' /><h1 className='text-2xl'>Value for money</h1><p className='text-center'>We believe in honest and transparent pricing with quality of service every time.</p></div>
      </section>
      <Tour/>
      <section className="h-20"></section>
    </main>
  );
};

export default HomePage;