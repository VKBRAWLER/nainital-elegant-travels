import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer id='footer' className="min-h-32 h-fit py-10 px-2 relative text-sm sm:text-xl w-full">
        <div className="grid md:grid-cols-3 w-full">
            <div>
                <h2 className="text-lg sm:text-2xl font-bold">Redirect Components</h2>
                <ul className="mx-5">
                    <li className='cursor-pointer'><a href="#tour">Travel Tour</a></li>
                    <li className='cursor-pointer'><a href="#ride">Ride-Hailing</a></li>
                    <li className='cursor-pointer'><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
            <div>
                <h2 className="text-lg sm:text-2xl font-bold text-right md:text-left">Contact Us</h2>
                <ul className="mx-5 text-right md:text-left">
                    <li>+91 8360421711</li>
                    <li>+91 8360421711</li>
                    <li>zaid83852@gmail.com</li>
                </ul>
            </div>
            <div>
                <h2 className="text-lg sm:text-2xl font-bold">Developer's Contact</h2>
                <ul className="mx-5 ">
                    <li>https://github.com/VKbrawler</li>
                    <li>+91 9456790295</li>
                    <li>varunkh12345@gmail.com</li>
                </ul>
            </div>
        </div>
        <h6 className="text-center italic absolute bottom-1 right-4 text-sm">@Copywrite-Nainital Elegent Travels 2024</h6>
    </footer>
  )
}

export default Footer;