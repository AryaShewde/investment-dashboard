import React, { useState } from 'react'
import userimg from "../img/user.png"

const Topbar = ({ userdata }) => {
    const [imageLoaded, setImageLoaded] = useState(true);
    const handleImageError = () => {
        setImageLoaded(false);
    };
    return (
        <div className='w-full flex justify-between mb-9 sm:flex-row flex-col gap-10'>
            <h1 className='text-4xl'>Welcome, {userdata.name}!</h1>
            <div className='flex items-center gap-5'>
                {imageLoaded ? (
                    <img className='rounded-full border-none shadow-[0_0px_17px_rgba(8,_112,_184,_0.7)] bg-white w-16' src={userdata.image} alt="" onError={handleImageError} />
                ) : (
                    <img className='rounded-full border-none shadow-[0_0px_17px_rgba(8,_112,_184,_0.7)] bg-white w-16' src={userimg} alt="Default" />
                )}
                <p className='text-2xl'>{userdata.name}</p>
            </div>
        </div>
    )
}

export default Topbar
