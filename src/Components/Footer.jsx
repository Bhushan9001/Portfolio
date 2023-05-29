import React from "react";
import { SiGithub } from "react-icons/si"
import { SiLinkedin } from "react-icons/si"
import { SiTwitter } from "react-icons/si"
import { SiGmail } from "react-icons/si"

function Footer(){
     

    return(
        <>
          <div className="w-full text-white bg-black px-10">

            <div className="flex justify-center items-center space-x-10 pt-5 md:hidden">
            <div className="p-1 hover:scale-110 duration-300" >
                    <a href="https://github.com/Bhushan9001" target="_blank" rel="noopener"> <SiGithub size={30} color="#ffff" /></a>
                </div>
                <div className="p-1 hover:scale-110 duration-300">
                    <a href="https://www.linkedin.com/in/bhushan-pawar-2342b8223" target="_blank" rel="noopener"> <SiLinkedin size={30} color="#ffff"/></a>
                </div>
                <div className="p-1 hover:scale-110 duration-300">
                    <a href="https://twitter.com/Bhushan9001" target="_blank" rel="noopener"> <SiTwitter size={30} color="#ffff"/></a>
                </div>
                <div className="p-1 hover:scale-110 duration-300">
                    <a href="mailto:bhushanpawar9001@gmail.com" target="_blank" rel="noopener"> <SiGmail size={30} color="#ffff"/></a>
                </div>
            </div>
             
               
             <div className="text-center p-2">
                <p >&#9400;Copyright 2022.<a>Made by <b className=" cursor-pointer underline">Bhushan Pawar</b></a></p>
             
          </div>
          </div>

        </>
    );
}
export default Footer;