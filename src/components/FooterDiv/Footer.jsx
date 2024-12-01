import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

export const Footer = () => {
  return (
    <div className="footer p-5 md:p-10 bg-blueColor rounded-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 items-start justify-center m-auto overflow-x-hidden">
      <div className='col-span-2' >
        <div className="logoDiv">
          <h1 className="logo text-25px text-white pb-1.5rem font-bold text-center lg:text-left">
            <strong>Job</strong>Search
          </h1>
        </div>
        <p className="text-white opacity-70 leading-7 text-center lg:text-left">
          We always make our seekers and companies find the best jobs and employers find the best candidates.
        </p>
      </div>

      <div className="grid ">
        <span className="divTitle text-18px font-semibold pb-1.5rem text-white text-center lg:text-left">
          Company
        </span>
        <ul className="space-y-3  ">
          <li className="text-white opacity-70 hover:opacity-100 text-center lg:text-left">About Us</li>
          <li className="text-white opacity-70 hover:opacity-100 text-center lg:text-left">Features</li>
          <li className="text-white opacity-70 hover:opacity-100 text-center lg:text-left">News</li>
          <li className="text-white opacity-70 hover:opacity-100 text-center lg:text-left">FAQ</li>
        </ul>
      </div>

      <div className="grid">
        <span className="divTitle text-18px font-semibold pb-1.5rem text-white text-center lg:text-left">
          Resources
        </span>
        <ul className="space-y-3">
          <li className="text-white opacity-70 hover:opacity-100 text-center lg:text-left">Account</li>
          <li className="text-white opacity-70 hover:opacity-100 text-center lg:text-left">Support</li>
          <li className="text-white opacity-70 hover:opacity-100 text-center lg:text-left">Feedback</li>
          <li className="text-white opacity-70 hover:opacity-100 text-center lg:text-left">Contact Us</li>
        </ul>
      </div>

      <div className="grid">
        <span className="divTitle text-18px font-semibold pb-1.5rem text-white text-center lg:text-left">
          Support
        </span>
        <ul className="space-y-3">
          <li className="text-white opacity-70 hover:opacity-100 text-center lg:text-left">Events</li>
          <li className="text-white opacity-70 hover:opacity-100 text-center lg:text-left">Promo</li>
          <li className="text-white opacity-70 hover:opacity-100 text-center lg:text-left">Trial</li>
          <li className="text-white opacity-70 hover:opacity-100 text-center lg:text-left">Careers</li>
        </ul>
      </div>

      <div className="grid">
        <span className="divTitle text-18px font-semibold pb-1.5rem text-white text-center lg:text-left">
          Contact Info
        </span>
        <div className="text-center lg:text-left">
          <small className="text-14px text-white block  ">jobsearchtech@outlook.com</small>
          <div className="icons flex gap-4 justify-center lg:justify-start py-4">
            <AiFillInstagram className="bg-white p-2 h-9 w-9 rounded-full text-blueColor" />
            <BsFacebook className="bg-white p-2 h-9 w-9 rounded-full text-blueColor" />
            <AiOutlineTwitter className="bg-white p-2 h-9 w-9 rounded-full text-blueColor" />
          </div>
        </div>
      </div>
    </div>
  );
};
