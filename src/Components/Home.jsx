import React from "react";
import Button from './Button'
import { Link } from "react-scroll";

function Home() {
    return (
        <>
            <div className="w-full h-screen px-4 md:px-10  " name = "Home" >
                <div className="flex flex-col items-center space-y-10 justify-center  h-full">
                    <div className="md:text-6xl text-center text-4xl font-bold font-sans">
                        <h1 className="text-transparent bg-clip-text bg-cyan-300">HEY, I'M BHUSHAN PAWAR</h1>
                    </div>
                    <div className="text-white  font-bold text-center text-2xl  md:text-2xl lg:text-2xl">
                        I am Backend Developer.
                    </div>
                    <div>
                        <button className="bg-yellow-400 text-black text-2xl font-bold rounded items-center py-2 px-8 md:px-12 hover:bg-yellow-200 duration-100"><Link to="Projects" smooth duration={500}>Projects</Link></button>
                        
                    </div>
                </div>
            </div>


        </>
    );
}
export default Home;
