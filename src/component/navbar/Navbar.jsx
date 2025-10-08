// Navbar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [callOpen,setCallOpen] = useState(false)

    return (
        <nav className="w-full shadow-md bg-white">
            {/* Top Bar */}
            <div className="border-b py-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-14">
                    {/* Logo */}
                    <div>
                        <NavLink to="/">
                            <img className="w-20" src='/Logo-1.png' alt="logo" />
                        </NavLink>
                    </div>

                    {/* Location - only desktop */}
                    <div className="hidden sm:flex md:flex gap-2 items-center">
                        <FaLocationDot className="text-gray-600" />
                        <div>
                            <p>Plot Number 555 Sector 39
                                Near Bakhtawar Chock,
                                Gurugram, Haryana</p>

                        </div>
                    </div>

                    {/* Email btn - only desktop */}
                    <div className="hidden md:block">
                        <button className="border rounded-full flex gap-2 items-center px-4 py-1.5 text-amber-600 hover:bg-amber-500 hover:text-white cursor-pointer">
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
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
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

                <div className="flex flex-wrap gap-5 relative">
                    <button onClick={()=>setCallOpen(!callOpen)} className="nav-button flex items-center gap-2 "> 
                        Book Now <IoIosCall className="text-xl" />
                    </button>
                  { callOpen&& <div className="bg-white rounded-2xl absolute top-14 shadow-2xl p-5 z-50">
                        <p className="flex items-center gap-2 pt-2"><IoIosCall className="text-xl" /> 72067-83874</p>
                        <p className="flex items-center gap-2 pt-2"> <IoIosCall className="text-xl" /> 8920-889555</p>
                    </div>}
                    <a target="_blank" href="https://wa.me/917206783874">
                    <button className="nav-button flex items-center gap-2">
                        WhatsApp <IoLogoWhatsapp className="text-green-500 text-xl" />
                    </button></a>
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

                    <div className=" sm:flex md:hidden flex gap-2 items-center">
                        <FaLocationDot className="text-gray-600" />
                        <div>
                            <p>Plot Number 555 Sector 39
                                Near Bakhtawar Chock,
                                Gurugram, Haryana</p>

                        </div>
                    </div>
                    <div className="md:hidden">
                        <button className="border w-full rounded-full flex justify-center gap-2 items-center px-4 py-1.5 text-amber-600 mt-2">
                            Email <MdEmail />
                        </button>
                    </div>
                    <div className="relative">
                    <button onClick={()=>setCallOpen(!callOpen)}  className="w-full border rounded-xl py-2 mt-2 flex justify-center items-center gap-2 text-amber-600">
                        Book Now <IoIosCall className="text-xl" />
                    </button>
                    <a href="https://wa.me/917206783874">
                    <button className="nav-button flex items-center gap-2 mt-2">
                        WhatsApp <IoLogoWhatsapp className="text-green-500 text-xl" />
                    </button></a>
                     { callOpen&& <div className="bg-white rounded-2xl absolute top-14 shadow-2xl p-5 z-50">
                        <p className="flex items-center gap-2 pt-2"><IoIosCall className="text-xl" /> 72067-83874</p>
                        <p className="flex items-center gap-2 pt-2"> <IoIosCall className="text-xl" /> 8920-889555</p>
                    </div>}
                       </div>
                </div>
            )}
        </nav>
    );
}
export default Navbar;
