import React from "react";
import { FiExternalLink } from "react-icons/fi"
import { SiGithub } from "react-icons/si"
import devcord from "../Assets/banner.jpg"
import fileShare from "../Assets/File_Share.jpg"
import crud from "../Assets/crud_app.jpg"
import cake from "../Assets/Cake.jpg"

function Projects() {
    const datas = [
        {
            title: "File Share link",
            Description: "It is a chat web application which is build for developers to chat with each other , chat about code and their problems.",
            live: <FiExternalLink size={35} color="#ffff" />,
            link: "https://64294bec253f5c000807b052--transcendent-concha-af00d6.netlify.app/",
            gitLink: "https://github.com/Bhushan9001/FIleShareLInk_frontend",
            src: fileShare,
            git: <SiGithub size={35} color="#ffff" />,
        },
        {
            title: "CRUD-APP",

            live: <FiExternalLink size={35} color="#ffff" />,
            link: "https://github.com/Bhushan9001/CRUD-app",
            gitLink: "https://github.com/Bhushan9001/CRUD-app",
            src: crud,
            git: <SiGithub size={35} color="#ffff" />,
        },
        {
            title: "E-Commerce Website",
            Description: "It is a chat web application which is build for developers to chat with each other , chat about code and their problems.",
            live: <FiExternalLink size={35} color="#ffff" />,
            link: "https://wowcake.vercel.app/",
            gitLink: "https://github.com/omkarguravv/Cake-Shop-Website",
            src: cake,
            git: <SiGithub size={35} color="#ffff" />,
        },
        {
            title: "DevCord",
            Description: "It is a chat web application which is build for developers to chat with each other , chat about code and their problems.",
            live: <FiExternalLink size={35} color="#ffff" />,
            link: "https://devcord-stream.vercel.app/",
            gitLink: "https://github.com/sanket-16/stream-hackathon",
            src: devcord,
            git: <SiGithub size={35} color="#ffff" />,
        },
    ]
    return (
        <>
            <div className="w-full md:w-auto md:max-w-4xl lg:max-w-6xl mx-auto pt-44 md:pt-36" name="Projects">
                <div className="flex-col flex flex-wrap mx-auto px-10 w-full ">
                    <div className="text-white space-y-5 text-center">
                        <h1 className=" text-4xl md:text-5xl font-semibold">Projects</h1>
                        <p className="text-2xl hidden md:block">
                            Here you will find some projects that I created
                        </p>
                            <hr className="mt-5"></hr>
                    </div>
                    <div className="flex flex-wrap w-full justify-center items-center ">
                        {datas.map((data) => (
                            <div key={data.title} className="flex flex-col md:flex md:flex-wrap items-center justify-center m-5 hover:scale-105 duration-200">
                                <div className="flex flex-col w-auto m-5 text-white text-center text-xl shadow-lg shadow-black font-semibold border-solid rounded-2xl border-black border-2 bg-black">
                                    <img src={data.src} width={300} className="rounded-t-2xl"></img>
                                    <div className="mt-2">
                                        <h1>{data.title}</h1>
                                    <div className="flex text-center items-center flex-row justify-center space-x-10 md:space-x-12 my-5">
                                        <a href={data.link} target="_blank" rel="noopener">{data.live}</a>
                                        <a href={data.gitLink} target="_blank" rel="noopener">{data.git}</a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
}

export default Projects;