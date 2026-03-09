'use client';

import React, { useState } from 'react';

import Link from 'next/link';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSendPostcard = () => {
        const { firstName, lastName, email, message } = formData;
        const subject = `New Volunteer Application from ${firstName} ${lastName}`;
        const body = `Name: ${firstName} ${lastName}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        window.open(`mailto:udaanswan@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`, '_blank');
    };

    return (
        <div className="bg-[var(--bg-page)] text-[var(--text-main)] min-h-screen relative overflow-x-hidden selection:bg-pink-300 selection:text-black font-body antialiased transition-colors duration-300">
            {/* Nav removed in favor of global Header */}
            <main className="container mx-auto px-4 pt-32 pb-20 relative z-10 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
                    <div className="md:col-span-5 flex flex-col justify-center relative">
                        <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-yellow-300 flex items-center justify-center text-black font-bold transform -rotate-12 animate-pulse hidden lg:flex shadow-lg z-0">
                            <span className="text-xs text-center font-courier">HELLO<br />FRIEND!</span>
                        </div>
                        <h1 className="font-display text-7xl md:text-8xl lg:text-9xl leading-[0.85] mb-8 relative z-10 text-[var(--text-main)]">
                            Get in<br />
                            <span className="italic font-light ml-8">touch!</span>
                        </h1>
                        <div className="space-y-6 max-w-md relative z-10">
                            <p className="text-sm md:text-base opacity-80 leading-relaxed font-light">
                                We are building a community archive for the future. Whether you want to volunteer, donate, or just say hello, drop us a line. We read every single letter.
                            </p>
                            <div className="pt-8">
                                <div className="font-courier text-xs text-gray-400 mb-2 uppercase tracking-widest">Connect Socially</div>
                                <ul className="space-y-1 font-display text-lg">
                                    <li><a className="hover:text-secondary transition-colors duration-300" href="https://www.instagram.com/udaan_swan/" target="_blank">@instagram</a></li>
                                    <li><a className="hover:text-secondary transition-colors duration-300" href="https://www.tiktok.com/@udaan_.swan" target="_blank">@tiktok</a></li>
                                    <li><a className="hover:text-secondary transition-colors duration-300" href="#">udaanswan@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-7 relative flex flex-col gap-16 md:gap-24 pt-12 md:pt-0">
                        <div className="relative group self-end md:mr-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <div className="tape absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/30 backdrop-blur-sm shadow-sm rotate-2"></div>
                            <div className="bg-paper-white w-full max-w-sm p-6 shadow-scrap relative paper-texture">
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-200/20 via-transparent to-gray-400/20 pointer-events-none"></div>
                                <div className="flex items-center justify-center py-8 border-2 border-dashed border-gray-300/50">
                                    <span className="font-marker text-4xl md:text-5xl text-gray-800 tracking-widest -rotate-2">
                                        (123) 123-1234
                                    </span>
                                </div>
                                <div className="absolute bottom-2 right-4 text-[10px] text-red-600 font-courier rotate-90 origin-right uppercase tracking-tighter">
                                    we are not really strangers
                                </div>
                            </div>
                        </div>
                        <div className="relative self-start md:ml-4 transform -rotate-1 hover:rotate-0 transition-transform duration-500 w-full max-w-md z-30">
                            <div className="tape absolute -top-4 left-10 w-16 h-8 rotate-1"></div>
                            <div className="bg-[#e8e4d9] p-6 shadow-scrap paper-texture relative overflow-hidden">
                                <div className="border-b border-gray-400 pb-2 mb-4 flex justify-between items-end">
                                    <h3 className="font-display text-2xl text-black italic font-bold">Volunteer Application</h3>
                                    <span className="font-courier text-xs text-black">No. 0842-A</span>
                                </div>
                                <form className="space-y-4 relative z-10 text-black">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block font-courier text-[10px] uppercase mb-1">First Name</label>
                                            <input name="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-transparent border-b border-gray-600 focus:border-black focus:ring-0 px-0 py-1 font-marker text-lg placeholder-gray-400" type="text" />
                                        </div>
                                        <div>
                                            <label className="block font-courier text-[10px] uppercase mb-1">Last Name</label>
                                            <input name="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-transparent border-b border-gray-600 focus:border-black focus:ring-0 px-0 py-1 font-marker text-lg placeholder-gray-400" type="text" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block font-courier text-[10px] uppercase mb-1">Email Address</label>
                                        <input name="email" value={formData.email} onChange={handleChange} className="w-full bg-transparent border-b border-gray-600 focus:border-black focus:ring-0 px-0 py-1 font-marker text-lg placeholder-gray-400" type="email" />
                                    </div>
                                    <div>
                                        <label className="block font-courier text-[10px] uppercase mb-1">Why do you want to join?</label>
                                        <textarea name="message" value={formData.message} onChange={handleChange} className="w-full bg-transparent border-b border-gray-600 focus:border-black focus:ring-0 px-0 py-1 font-marker text-lg placeholder-gray-400 resize-none" rows="2"></textarea>
                                    </div>
                                    <button onClick={handleSendPostcard} className="mt-4 w-full border border-black py-2 hover:bg-black hover:text-[#e8e4d9] transition-colors uppercase font-courier text-xs tracking-widest flex items-center justify-center gap-2 relative z-50 cursor-pointer pointer-events-auto" type="button">
                                        Send Postcard <span className="material-icons text-sm">→</span>
                                    </button>
                                </form>
                                <div className="absolute bottom-4 right-4 opacity-30 rotate-12 pointer-events-none">
                                    <div className="w-16 h-16 border-4 border-red-800 rounded-full flex items-center justify-center">
                                        <span className="text-[10px] text-red-800 font-bold uppercase text-center leading-none">The<br />Locals<br />Appvd</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative self-end md:mr-0 lg:-mt-12 transform rotate-3 hover:rotate-0 transition-transform duration-500 w-full max-w-xs z-20">
                            <div className="bg-secondary text-black shadow-scrap relative flex overflow-hidden">
                                <div className="absolute left-0 top-0 bottom-0 w-4 flex flex-col justify-between items-center py-2 bg-black/10 border-r border-dashed border-black/30">
                                </div>
                                <div className="flex-1 p-6 pl-8 paper-texture">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="font-display font-black text-3xl leading-none uppercase">Admit<br />One</h3>
                                            <p className="font-courier text-[10px] mt-1 uppercase">Support the cause</p>
                                        </div>
                                        <div className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center font-bold text-xl font-courier">
                                            $
                                        </div>
                                    </div>
                                    <div className="space-y-2 mb-6">
                                        <div className="flex justify-between font-courier text-xs border-b border-black/20 pb-1">
                                            <span>Date</span>
                                            <span>2023-VOL-01</span>
                                        </div>
                                        <div className="flex justify-between font-courier text-xs border-b border-black/20 pb-1">
                                            <span>Type</span>
                                            <span>Donation</span>
                                        </div>
                                    </div>
                                    <a className="block w-full bg-black text-secondary text-center py-3 font-courier font-bold uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-colors" href="#">
                                        Make a Donation
                                    </a>
                                </div>
                                <div className="w-8 bg-white flex flex-col items-center justify-end pb-2 border-l border-black">
                                    <div className="h-full w-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/5/5d/UPC-A-036000291452.svg')] bg-cover opacity-80 mix-blend-multiply" style={{ transform: 'rotate(90deg) scale(1.5)' }}></div>
                                    <span className="rotate-90 text-[8px] font-courier whitespace-nowrap mt-4">N 5903-22</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed top-1/2 left-10 w-32 h-40 bg-white p-2 pb-8 shadow-2xl -rotate-6 -z-10 opacity-20 hidden xl:block pointer-events-none">
                    <div className="bg-gray-800 w-full h-full filter grayscale contrast-125">
                        <img alt="Scrapbook background image" className="object-cover w-full h-full opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7AooJsDZ-4WW9nnWkRdsrMv5jBPsiktXFRYoCw8Ap-oVO1vpzCmBlmrt_3Fmy6EtoPVdH2008jo4Ry6sykakbw5f5VKHibnaXnRaOfKRcAGA1Z_gL-88hYJL7eVM1o49MRVRmdI-e4aKn2hMNrjUluR4NXNE2QXrFSqLJJ69fZtNBnr8LNOwyplkAeSTKmb-Z7xyFcKQMIX46zxBGFoNnVlfjQ8ygzzkBKLpftA5-NSbf2XkcKm5OszXZRbDbsFvQRlbQXDzMth0" />
                    </div>
                    <div className="text-center font-marker text-xs mt-2 text-black rotate-1">us in &apos;99</div>
                </div>
                <div className="fixed bottom-20 right-20 w-48 h-48 rounded-full border border-white/10 -z-10 animate-[spin_10s_linear_infinite] hidden lg:block pointer-events-none">
                    <svg height="100%" viewBox="0 0 100 100" width="100%">
                        <defs>
                            <path d="
                        M 50, 50
                        m -37, 0
                        a 37,37 0 1,1 74,0
                        a 37,37 0 1,1 -74,0" id="circle"></path>
                        </defs>
                        <text fill="white" fontFamily="monospace" fontSize="10" letterSpacing="2">
                            <textPath xlinkHref="#circle">
                                SUPPORT THE LOCALS •UDAANSWAN•
                            </textPath>
                        </text>
                    </svg>
                </div>
            </main>
            <footer className="fixed bottom-0 w-full py-4 px-8 flex justify-between items-end text-[10px] md:text-xs font-courier text-gray-500 uppercase tracking-wider mix-blend-difference pointer-events-none">
                <div>
                    © 2024 The Locals NGO<br />
                    Los Angeles, CA
                </div>
                <div className="text-right">
                    Designed with <span className="text-red-500">♥</span><br />
                    For the kids
                </div>
            </footer>
        </div>
    );
}
