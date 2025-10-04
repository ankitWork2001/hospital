// Navbar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BiSolidMicrophone } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full shadow-md bg-white">
            {/* Top Bar */}
            <div className="border-b py-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-14">
                    {/* Logo */}
                    <div>
                        <NavLink to="/">
                            <img className="w-12" src='/logo.png' alt="logo" />
                        </NavLink>
                    </div>

                    {/* Search bar - only desktop */}
                    <div className="flex border rounded-2xl md:w-96 items-center p-2 h-9 gap-2 text-gray-600 shadow-sm">
                        <FaSearch />
                        <input
                            className="outline-0 w-full text-sm"
                            type="search"
                            placeholder="Search for product and services"
                        />
                        <div className="border-l h-6 flex justify-center items-center pl-2 text-gray-500">
                            <BiSolidMicrophone />
                        </div>
                    </div>

                    {/* Location - only desktop */}
                    <div className="hidden md:flex gap-2 items-center">
                        <FaLocationDot className="text-gray-600" />
                        <select className="outline-0 text-amber-600">
                            <option value="">Mumbai</option>
                            <option value="">Delhi</option>
                        </select>
                    </div>

                    {/* Email btn - only desktop */}
                    <div className="hidden md:block">
                        <button className="border rounded-full flex gap-2 items-center px-4 py-1.5 text-amber-600">
                            Email <MdEmail />
                        </button>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 focus:outline-none"
                        >
                            {isOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex flex-wrap gap-6">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'bg-amber-500 text-white rounded-2xl px-4 py-1 font-medium' : " hover:text-amber-500"}>Home</NavLink>
                    <NavLink to="/Services" className={({ isActive }) => isActive ? 'bg-amber-500 text-white rounded-2xl px-4 py-1 font-medium' : " hover:text-amber-500"}>Services</NavLink>
                    <NavLink to="/Gallery" className={({ isActive }) => isActive ? 'bg-amber-500 text-white rounded-2xl px-4 py-1 font-medium' : " hover:text-amber-500"}>Gallery</NavLink>
                    <NavLink to="/About" className={({ isActive }) => isActive ? 'bg-amber-500 text-white rounded-2xl px-4 py-1 font-medium' : " hover:text-amber-500"}>About Us</NavLink>
                    <NavLink to="/Medical" className={({ isActive }) => isActive ? 'bg-amber-500 text-white rounded-2xl px-4 py-1 font-medium' : " hover:text-amber-500"}>Medical Equipment</NavLink>
                </div>
               
                <div className="flex flex-wrap gap-5">
                    <button className="nav-button flex items-center gap-2">
                        Book Now <IoIosCall className="text-xl"/>
                    </button>
                    <button className="nav-button flex items-center gap-2">
                        WhatsApp <IoLogoWhatsapp className="text-green-500 text-xl"/>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white px-4 py-4 space-y-3 shadow-lg">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'bg-amber-500 text-white rounded-2xl px-4 py-1 font-medium' : "hover:text-amber-500 block"}>Home</NavLink>
                    <NavLink to="/Services" className={({ isActive }) => isActive ? 'bg-amber-500 text-white rounded-2xl px-4 py-1 font-medium' : "hover:text-amber-500 block"}>Services</NavLink>
                    <NavLink to="/Gallery" className={({ isActive }) => isActive ? 'bg-amber-500 text-white rounded-2xl px-4 py-1 font-medium' : "hover:text-amber-500 block"}>Gallery</NavLink>
                    <NavLink to="/About" className={({ isActive }) => isActive ? 'bg-amber-500 text-white rounded-2xl px-4 py-1 font-medium' : "hover:text-amber-500 block"}>About Us</NavLink>
                    <NavLink to="/Medical" className={({ isActive }) => isActive ? 'bg-amber-500 text-white rounded-2xl px-4 py-1 font-medium' : "hover:text-amber-500 block"}>Medical Equipment</NavLink>
                    
                      <div className="md:hidden flex  gap-2 items-center">
                        <FaLocationDot className="text-gray-600" />
                        <select className="outline-0 text-amber-600">
                            <option value="">Mumbai</option>
                            <option value="">Delhi</option>
                        </select>
                    </div>
                     <div className="md:hidden">
                        <button className="border w-full rounded-full flex justify-center gap-2 items-center px-4 py-1.5 text-amber-600">
                            Email <MdEmail />
                        </button>
                    </div>
                    <button className="w-full border rounded-xl py-2 mt-2 flex justify-center items-center gap-2 text-amber-600">
                        Book Now <IoIosCall className="text-xl"/>
                    </button>
                    <button className="w-full border rounded-xl py-2 mt-2 flex justify-center items-center gap-2 text-green-600">
                        WhatsApp <IoLogoWhatsapp className="text-xl"/>
                    </button>
                </div>
            )}
        </nav>
    );
}
export default Navbar;
