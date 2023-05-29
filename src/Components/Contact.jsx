import React from "react";
import emailjs from 'emailjs-com';

function Contact() {
    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_4vhdmxw', 'template_94x8jf6', event.target, 'x8RpGF1GswGWEuc7_')
            .then(res => console.log(res)).catch(err => console.log(err))

        event.target.reset();

    };
    return (
        <>
            <div className="w-full  mt-20 px-4 md:px-20 pt-40 " name = "Contact">
                <div className="flex-col flex mx-auto px-10 w-full h-full">

                    <div className="text-white space-y-5 text-center">
                    <h1 className=" text-4xl md:text-5xl font-semibold">Contact Me</h1>
                        <p className="text-2xl  hidden md:block">
                            Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
                        </p>
                        <hr className="mt-5"></hr>
                    </div>
                    <div className="flex items-center justify-center my-4 md:my-10">

                        <form onSubmit={sendEmail} className="flex flex-col justify-center w-full md:w-1/2 text-white space-y-6">

                            <input type="text" placeholder="Enter your name" name="username" required className="bg-transparent border-2 p-2 md:p-3 border-solid border-white focus:outline-none rounded-md w-full" />
                            <input type="email" placeholder="Enter your Email" name="email" required className="bg-transparent border-2 p-2 md:p-3 border-solid border-white focus:outline-none rounded-md w-full" />
                            <textarea placeholder="Enter your message" name="message" required rows={6} className="bg-transparent border-2 p-2 md:p-3 border-solid border-white focus:outline-none rounded-md w-full"></textarea>
                            <button type="submit" className="bg-yellow-400 text-black text-2xl font-semibold rounded items-center  my-4 md:my-auto py-2 px-8 md:px-12 hover:bg-yellow-200 duration-100">
                                Submit
                            </button>

                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Contact;