import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const Header = () => {
  return (
    <header className="grid grid-cols-[3rem,1fr,1fr] grid-rows-2 lg:grid-cols-[5rem,32rem,1fr,150px] lg:grid-rows-1 p-2 w-full">
      <span><img className="w-full" src="/img/logo.png" alt="" /></span>
      <h1 className="text-2xl sm:text-4xl lg:text-5xl lg:py-4 text-center col-span-2 lg:col-span-1">Nainital Elegent Travels</h1>
      <ul className="flex items-center justify-evenly col-span-2 lg:col-span-1 sm:text-xl lg:text-2xl xl:text-3xl">
        <a href="/" className="cursor-pointer">Home</a>
        <a href="#about" className="cursor-pointer">About</a>
        <a href="#contact" className="cursor-pointer">Contact</a>
      </ul>
      <ul className="flex items-center justify-evenly">
        <Link target="_blank" href={'https://www.instagram.com/nainital_travels04?igsh=MnMzMWx1ZzIybG9j'} className="cursor-pointer">< BsInstagram className="w-8 h-8"/></Link>
        <Link target="_blank" href={'https://wa.me/918360421711'} className="cursor-pointer">< FaWhatsapp className="w-8 h-8"/></Link>
        <Link target="_blank" href={'https://youtube.com/@zaimi6905?si=-5Zde5kSUdFShpBi'} className="cursor-pointer">< FaYoutube className="w-8 h-8"/></Link>
      </ul>
    </header>
  );
};
export default Header;