import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
const Contact = () => {
  return (
    <section className="bg-[var(--CT02)] drop-shadow-2xl p-5 rounded-xl md:m-4 m-1 grid md:grid-row-[20px,1fr] md:grid-cols-[55%,1fr] gap-2">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-center md:col-span-2">Contact Us</h1>
      <span className="grid grid-cols-[25px,1fr] sm:grid-cols-[35px,1fr] gap-4">
        <IoCall className="w-full h-full" /> <span className="text-lg sm:text-2xl flex items-center">+91 9456790295</span>
        <IoCall className="w-full h-full" /> <span className="text-lg sm:text-2xl flex items-center">+91 9456790295</span>
        <MdEmail className="w-full h-full" /> <span className="text-lg sm:text-2xl flex items-center">varunkh12345@gmail.com</span>
        <IoLogoWhatsapp className="w-full h-full" /> <span className="text-lg sm:text-2xl flex items-center">+91 9456790295</span>
        <FaMapMarkerAlt className="w-full h-full" /> <span className="text-lg sm:text-2xl flex items-center">Nainital Elegent Travels</span>
        <BsInstagram className="w-full h-full" /> <span className="text-lg sm:text-2xl flex items-center">Nainital Elegent Travels</span>
      </span>
      <span className=""><img src="/img/contact_us.png" alt="" /></span>
    </section>
  );
};

export default Contact;