import React from 'react'
import { useState } from 'react'
import { assets } from '../../Assets/assets'
import { NavLink } from 'react-router-dom'


export const NavBar = () => {
    const [visible, setVisible] = useState(false)
    const refreshPage = () => {
        window.location.reload(); // This will refresh the current page
      };
      

    return (
        <header className=" p-4 bg-coolGray-100 text-coolGray-800 w-full  ">

            <div className="container items-center flex justify-between h-16 mx-auto">

                <div className='logoDiv'>
                    <h1 onClick={refreshPage} className='logo text-[25px] text-blueColor cursor-pointer '>
                        <strong> Job</strong>Ringer
                    </h1>
                </div>

                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <a
                            href="#"
                            className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                        >
                            Jobs
                        </a>
                    </li>
                    <li className="flex">
                        <a
                            href="#"
                            className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                        >
                            Updates
                        </a>
                    </li>
                    <li className="flex">
                        <a
                            href="#"
                            className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                        >
                            Participate
                        </a>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden md:flex">
                    <button className=" self-center px-8 py-3 mx-2 hover:bg-blue-600 rounded hover:text-white">Sign in</button>
                    <button className="hover:bg-blue-300 self-center px-8 py-3 font-semibold rounded bg-blue-600 text-white ">
                        Sign up
                    </button>
                </div>
                <div className=' md:hidden'  >
                    {/* Menu Button */}
                    <button
                        className="p-4 md:hidden"
                        onClick={() => setVisible(true)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6 text-coolGray-800"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>

                    {/* Sidebar */}
                    <div
                        className={`fixed z-50 top-0 right-0 h-full w-64 bg-blue-50 shadow-2xl transform transition-transform duration-300 ${visible ? 'translate-x-0' : 'translate-x-full'
                            }`}
                    >
                        {/* Close Button */}
                        <div
                            onClick={() => setVisible(false)}
                            className="flex items-center justify-end p-4 font-medium cursor-pointer text-[16px] hover:text-gray-800"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6 text-coolGray-800"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>

                        {/* Links */}
                        <ul className="flex flex-col gap-4 p-6">
                            {['Jobs', 'Updates', 'Participate'].map((item, index) => (
                                <li
                                    key={index}
                                    className="py-2 px-4 font-medium text-[16px] text-gray-700 cursor-pointer rounded-lg hover:bg-gray-200 hover:text-gray-800 transition-all duration-200"
                                    onClick={() => setVisible(false)}
                                >
                                    <a href="">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Overlay */}
                    {visible && (
                        <div
                            onClick={() => setVisible(false)}
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        ></div>
                    )}
                </div>

            </div>
        </header>
    )
}