import React, { useState } from 'react'
import c_logo from "../img/company_logo.png"
import c_name from "../img/company_name.png"

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    // Button to Logout from the website and navigate to login page
    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.href = '/';
    };
    return (
        <div>
            <div className="sidebar shadow-[6px_0px_3px_rgba(8,_112,_184,_0.2)] h-full flex flex-col font-medium lg:w-64 bg-gray-800 text-white fixed top-0 left-0 z-50 overflow-y-auto transition-all duration-300 transform lg:translate-x-0 lg:static lg:inset-auto lg:opacity-100 overflow-hidden" style={{ position: "fixed" }}>
                <div className="p-4 lg:hidden cursor-pointer" onClick={toggleSidebar}>
                    {!isOpen ? (
                        <span className="text-white text-3xl">&#9776;</span>
                    ) : (
                        <span className="text-white text-3xl">&times;</span>
                    )}
                </div>
                <div className={`lg:block p-4 ${!isOpen ? 'hidden' : ''}`}>
                    <div className='sidebar w-64 h-[80vh] lg:h-[93vh] flex flex-col justify-between font-medium'>
                        <div className='flex items-center paddingvw'>
                            <img src={c_logo} alt="" className='w-9 h-9' />
                            <img src={c_name} alt="" className='h-8' />
                        </div>
                        <div className='flex flex-col paddingvw h-full justify-between text-xl'>
                            <div>
                                <p className='mb-2'>Opportunities</p>
                                <p className='mb-2'>My Protfolio</p>
                                <p className='mb-5'>Setting</p>
                            </div>
                            <div>
                                <p className='mb-2'>My Profile</p>
                                <button onClick={handleLogout} className='shadow-md px-3 py-1 bg-indigo-900 rounded-md'>Logout</button>
                            </div>
                        </div>
                        <div className='paddingvw'>
                            <p>Help & Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

