import React, { useState } from 'react';
import { Link } from 'react-scroll';
import {HiOutlineViewList} from 'react-icons/hi'
import {MdClose} from 'react-icons/md'
import banner from '../Assets/Bhushan pic.jpeg'

function Navbar() {
    let Links = [
        { name: "Home", link: "/" },
        { name: "About", link: "/" },
        { name: "Projects", link: "/" },
        { name: "Contact", link: "/" }
    ]
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='w-full fixed  top-0 left-0'>
                <div className=' md:flex py-4 text-white bg-opacity-0 items-center justify-between backdrop-blur-2xl shadow-xl shadow-black bg-white px-7 md:px-10  '>
                    <div className='  flex h-20 w-20 rounded-full overflow-hidden  hover:scale-105 duration-300'>
                        <Link to='Home' smooth duration={500}><img src={banner} alt="" className='mx-auto' /></Link>
                        
                        
                    </div>
                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden duration-300'>
                        {open ? <MdClose/> : <HiOutlineViewList/>}
                    </div>
                    <ul className={`md:flex md:items-center absolute  md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:mr-10 text-center transition-all duration-500 ease-in ${open?"top-16 opacity-100 bg-black ":"top-[-469px] opacity-0 md:opacity-100  "} border-t-4 border-t-black md:border-none`}>
                        {
                            Links.map((link) => (
                                <li key={link.name} className=" md:ml-20 text-xl font-bold    md:my-0 my-7" >
                                    <Link  to={link.name} className=" cursor-pointer hover:text-2xl duration-300" smooth duration={500}>{link.name}</Link>
                                </li>
                            ))
                        }
                    </ul>

                </div>
            </div>
        </>
    );
}

export default Navbar;