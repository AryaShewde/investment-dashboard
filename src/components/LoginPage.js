import React, { useState } from 'react';
import bg from "../img/bg.jpg"
import Img from "../img/img.png";

function LoginPage({ onLogin }) {
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [textData, setTextData] = useState('');

    const handleLogin = () => {
        if (username.trim() === '' || phoneNumber.trim() === '' || password.trim() === '') {
            alert('Please fill in all fields');
            return;
        }
        const user = {
            name: username,
            image: textData,
            phoneNumber,
            password
        };
        // Call the login function passed from App.js
        onLogin(user);
    };
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            // Convert image data to base64 format
            const base64String = reader.result;
            setTextData(base64String);
            console.log(textData)
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='bg-no-repeat bg-cover h-screen flex justify-center items-center flex-col gap-10' style={{ backgroundImage: `url(${bg})` }}>
            <div className='bglogin flex justify-center items-center flex-col gap-6 p-7 rounded-xl'>
                <h2 className='w-fit text-2xl font-medium'>Login</h2>
                <input className='text-white bg-transparent border-none logininput' type="text" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input className='text-white bg-transparent border-none logininput' type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <input className='text-white bg-transparent border-none logininput' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input
                    className='w-64'
                    type="file"
                    style={{ display: "none" }}
                    id="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                />
                <label htmlFor="file" className='flex items-center gap-3'>
                    <img src={Img} alt="" />
                    <p>Add User Image</p>
                </label>
                <button className='border-2 rounded-lg px-5 py-2 text-white hover:text-black hover:bg-white bg-transparent' onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}

export default LoginPage;