import React from "react";

const IndexNavbar = () => {
    return(
        <div className="w-full flex mt-16 justify-center items-center">
            <div className="w-10/12 flex flex-row shadow-2xl p-4 bg-white rounded-lg justify-between items-center border text-sm lg:text-lg font-semibold">
                {/* Logo */}
                <div className="flex flex-row gap-2 items-center ml-8">
                    <img src={process.env.PUBLIC_URL + '/images/logo/logo.png'} alt="logo"/>
                    <h1>Logo</h1>
                </div>
                {/* Navigation items */}
                <div className="hidden sm:flex">
                    <ul className="flex flex-row gap-4">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Info</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>
                {/* Sign Up / Log In */}
                <div className="hidden sm:flex flex-row gap-4 items-center">
                    <a href="/">Sing Up</a>
                    <button className="rounded-lg bg-violet-600 px-12 py-3 text-white">Log In</button>
                </div>
                <button className="flex sm:hidden rounded-lg bg-violet-600 px-12 py-3 text-white">...</button>
            </div>
        </div>
    );
};

export default IndexNavbar