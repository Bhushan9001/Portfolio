import React from "react";
import { SiCplusplus } from "react-icons/si"
import { SiPython } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiReact } from "react-icons/si"
import { SiNodedotjs } from "react-icons/si"
import { SiGit } from "react-icons/si"
import { SiGithub } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { SiMongodb } from "react-icons/si"


function About() {
    const SKills = [
        { name: "C++", icon: <SiCplusplus size={35} /> },

        { name: "PYHTON", icon: <SiPython size={35} /> },

        { name: "HTML", icon: <SiHtml5 size={35} /> },

        { name: "CSS", icon: <SiCss3 size={35} /> },

        { name: "JAVASCRIPT", icon: <SiJavascript size={35} /> },

        { name: "REACT.JS", icon: <SiReact size={35} /> },

        { name: "NODE.JS", icon: <SiNodedotjs size={35} /> },

        { name: "GIT", icon: <SiGit size={35} /> },

        { name: "GITHUB", icon: <SiGithub size={35} /> },

        { name: "EXPRESS.JS", icon: <SiExpress size={35} /> },

        { name: "MONGODB", icon: <SiMongodb size={35} /> }
    ]
    return (
        <>
            <div className="w-full mx-auto pt-44 md:pt-36 px-10 sm:px-20 " name="About">
                <div className="flex-col flex justify-center items-center w-full h-full">
                    <div className="text-white space-y-5 text-center">
                        <h1 className="  text-4xl md:text-5xl  font-semibold">About Me</h1>
                        <p className="text-2xl  hidden md:block ">
                            Here you will find about me and what my current skills are in terms of programming and technology
                        </p>
                            <hr className="mt-5"></hr>
                    </div>
                    <div className="text-white my-10 sm:my-20 flex flex-col text-xl md:text-2xl">
                        <div className="w-full">
                            <ol className="space-y-5 md:px-10 ">
                                <li>
                                    I'm a Backend Web Developer building the Backend-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                                </li>
                                <li>
                                    Also, I am familiar with Technologies and Programming languages like ReactJS ,MongoDB ,MySQL ,JavaScript and C++. 
                                </li>
                                <li>
                                    Currently , I am exploring Game Development.
                                </li>
                            </ol>
                        </div>
                        <div className="w-full text-center space-y-3 mt-10 sm:mt-20">
                            <h1 className="text-3xl font-semibold">Skills</h1>
                            <hr></hr>
                            <div className="flex flex-wrap items-center justify-center ">
                                {SKills.map((skill) => (
                                    <div className="flex items-center space-x-3 bg-slate-500 text-black shadow-md shadow-black text-xl font-bold rounded m-3 py-2 px-8 hover:bg-white duration-100">
                                        <span>{skill.icon}</span>
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
export default About;
