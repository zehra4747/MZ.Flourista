import React from 'react';
import { FiMail } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { PiLinkedinLogoBold } from "react-icons/pi";


import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div id="contact" className="">
      <Navbar/>
      <h1 className="text-center text-[32px] sm:text-[40px] mt-8 sm:mt-15 font-bold font-serif">GET IN TOUCH WITH US</h1>
      <p className="text-[16px] sm:text-[20px] text-center mb-8 sm:mb-12">
        Have a project in mind or just want to say hello? Feel free to reach out
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-20">
        {/* Contact Form Section */}
        <div className="w-full sm:w-[400px] md:w-[450px] lg:w-[500px] h-auto  bg-[#a78a7f] text-white p-6 rounded-md shadow-lg">
          <form action="https://api.web3forms.com/submit" method="POST">
            <div className="flex flex-col gap-6">
              <input type="hidden" name="access_key" value="6f0767e9-b9c6-4428-9d5f-7568e6652602" />
              <label htmlFor="name" className="block text-lg text-white">Name:</label>
              <input
                id="name"
                name="name"
                required
                className="border-b border-white bg-transparent focus:outline-none focus:border-[#5f0c51] py-2 text-gray-200 placeholder-gray-500"
                placeholder="Type your name here"
              />
            </div>
            <div className="flex flex-col gap-6">
              <label htmlFor="email" className="block text-lg text-white">Email:</label>
              <input
                id="email"
                name="email"
                required
                className="border-b border-white bg-transparent focus:outline-none focus:border-[#7a1169] py-2 text-gray-200 placeholder-gray-500"
                placeholder="Type your email here"
              />
            </div>
            <div className="flex flex-col gap-6">
              <label htmlFor="message" className="block text-lg text-white">Message:</label>
              <textarea
                id="message"
                name="message"
                required
                className="border-b border-white bg-transparent focus:outline-none focus:border-[#7c126a] py-2 text-gray-200 placeholder-gray-500"
                placeholder="Type anything, like 'Welcome to the team!'"
              />
            </div>
            <button
              type="submit"
              className="mt-6 py-2 px-10 text-white font-semibold rounded-full hover:bg-[#a78a7f] bg-[#735751] transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="w-full sm:w-[300px] lg:w-[350px] text-black flex flex-col gap-4 items-center sm:items-start">
          <div className="flex gap-3 items-center">
            <FiMail size={30} />
            <span className="text-sm sm:text-lg">
              <Link href="mailto:maimoonazehra47@gmail.com" target="_blank" rel="noopener noreferrer">
                maimoonazehra47@gmail.com
              </Link>
            </span>
          </div>
          <div className="flex gap-3 items-center">
            <FaGithub size={30} />
            <span className="text-sm sm:text-lg">
                zehra4747
              
            </span>
          </div>
          <div className="flex gap-3 items-center">
            <PiLinkedinLogoBold size={30} />
            <span className="text-sm sm:text-lg">
      
                maimoonazehra
              
            </span>
          </div>
        </div>
      </div>
      <Footer/>

    </div>
  );
};

export default Contact;
