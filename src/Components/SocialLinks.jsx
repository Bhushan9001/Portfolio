import React from "react";
import { SiGithub } from "react-icons/si"
import { SiLinkedin } from "react-icons/si"
import { SiTwitter } from "react-icons/si"
import { SiGmail } from "react-icons/si"
function SociaLinks(){
  
    return(
        <>

        <div className="fixed top-1/3 left-0 h-auto w-auto p-2 space-y-5 py-5 bg-black rounded-md -z-10 md:z-10">
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
        </>
    );
}

export default SociaLinks;