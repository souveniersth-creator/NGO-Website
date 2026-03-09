
'use client';

import React, { useState } from 'react';

import Link from 'next/link';

export default function FoundersProfile() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    return (
        <div className="bg-[var(--bg-page)] text-[var(--text-main)] font-body antialiased overflow-x-hidden relative selection:bg-pink-500 selection:text-white transition-colors duration-300">
            <div className="noise-bg mix-blend-overlay"></div>
            {/* Nav removed in favor of global Header */}
            <main className="relative min-h-screen pt-24 pb-20 overflow-hidden">
                <div className="absolute top-20 right-0 w-64 h-64 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-24 relative">
                        <h1 className="font-display text-6xl md:text-8xl text-[var(--text-main)] leading-none">
                            The <br /> <span className="italic text-gray-500 dark:text-gray-400 ml-12">Visionaries</span>
                        </h1>
                        <div className="absolute top-0 right-10 md:right-1/4 transform rotate-12 hidden sm:block">
                            <div className="bg-yellow-200 text-black font-marker p-4 shadow-lg transform -rotate-3 text-lg w-48 text-center border border-yellow-300">
                                &quot;Dreaming big since young&quot;
                                <div className="w-full h-3 bg-yellow-400/30 absolute bottom-2 left-0 -skew-x-12"></div>
                            </div>
                        </div>
                        <div className="mt-8 max-w-lg ml-2 md:ml-4 border-l-2 border-primary pl-6">
                            <p className="mt-6 text-xl text-[var(--text-muted)] max-w-2xl font-light">
                                Meet the chaotic minds behind the mission. A digital scrapbook of passion, polaroids, and the drive to change young lives.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-32 relative">
                        <img alt="Flower sticker" className="absolute -top-12 left-[30%] w-24 h-24 object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl z-20 hidden lg:block transform hover:scale-110 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL3q1q9YlocupyCCQCTxTH-vbFXDudUBpG7E9IMkO0iv_36XrAQnn11BR-NzYS8QKK1fUAMpL3wBvgg1ETkSvvmsOA6A1l5u9z5BMdOC_yp2d20t5xGkU9BthwWR79IRSnYNNx4Os19XiGwGAWBje2CX89Xd5D1wfmT6QOVSutoznXx2KJs_n5NBv19TTmZy_wihsRix4mBPBaS90RFDFQq7ZHBAaouZojCLy2ubKLoMbTYdvuVsz4V08rU2R6aZdNzpWsUqUbZlg" />

                        {/* Shreya Piya */}
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                            <div className="lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center">
                                <h2 className="font-marker text-5xl mb-6 text-[var(--text-main)]">Shreya Piya</h2>
                                <p className="font-display text-xl md:text-2xl text-[var(--text-muted)] leading-relaxed italic border-l-4 border-primary pl-6">
                                    No act of kindness, no matter how small, is ever wasted. Our udaan swan is exactly that. I, Shreya Piya the co-founder am very happy to be doing this with my two bestfriends. Creating a lasting impact is my only hope. Udaan swan has given me the ability to see the bigger picture and be a bigger person.
                                </p>
                            </div>
                            <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
                                <div className="group relative transform hover:-translate-y-2 transition-transform duration-500 w-full max-w-md">
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-white/20 backdrop-blur-sm rotate-2 z-20 shadow-sm border border-white/30"></div>
                                    <div className="bg-paper-white p-4 pb-12 polaroid-shadow transform -rotate-2 group-hover:rotate-0 transition-transform duration-300">
                                        <div className="aspect-[4/5] bg-gray-200 overflow-hidden mb-4 relative">
                                            <img alt="Shreya Piya portrait" className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" src="/stickers/shreya.jpeg" />
                                            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dust.png')]"></div>
                                        </div>
                                        <div className="text-center">
                                            <h3 className="font-marker text-3xl text-black rotate-1 mb-1">Shreya Piya</h3>
                                            <p className="font-display italic text-gray-500 text-sm">Founder & CEO</p>
                                            <p className="font-body text-xs uppercase tracking-widest mt-2 text-gray-400">Est. 2021</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Swopnil Kandel */}
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                            <div className="lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center">
                                <h2 className="font-marker text-5xl mb-6 text-[var(--text-main)]">Swopnil Kandel</h2>
                                <p className="font-display text-xl md:text-2xl text-[var(--text-muted)] leading-relaxed italic border-l-4 border-blue-500 pl-6">
                                    I believe every dream deserves a chance to take flight, and that’s why we started Udaan_Swan. Our mission is to empower children/teens/ communities, giving them the wings to rise above challenges, discover their strengths, and reach their full potential because no dream should ever be left grounded.
                                </p>
                            </div>
                            <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
                                <div className="group relative transform hover:-translate-y-2 transition-transform duration-500 w-full max-w-md z-10">
                                    <div className="absolute -top-3 right-10 w-24 h-6 bg-pink-400/80 -rotate-6 z-20 shadow-sm opacity-80"></div>
                                    <div className="bg-paper-white p-4 pb-12 polaroid-shadow transform rotate-1 group-hover:rotate-0 transition-transform duration-300">
                                        <div className="aspect-[4/5] bg-gray-200 overflow-hidden mb-4 relative">
                                            <img alt="Swopnil Kandel portrait" className="w-full h-full object-cover filter sepia-[.4] contrast-110 group-hover:sepia-0 transition-all duration-500" src="/stickers/swopnil.jpeg" />
                                        </div>
                                        <div className="text-center relative">
                                            <svg className="absolute -top-6 left-0 w-full h-12 text-blue-600 opacity-70 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 100 20">
                                                <path d="M5,10 Q20,5 30,15 T60,5 T90,15"></path>
                                            </svg>
                                            <h3 className="font-marker text-3xl text-black -rotate-2 mb-1">Swopnil Kandel</h3>
                                            <p className="font-display italic text-gray-500 text-sm">Co-Founder</p>
                                            {/* <p className="font-body text-xs uppercase tracking-widest mt-2 text-gray-400">NYC Base</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Aniya Piya */}
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                            <div className="lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center">
                                <h2 className="font-marker text-5xl mb-6 text-[var(--text-main)]">Aniya Piya</h2>
                                <p className="font-display text-xl md:text-2xl text-[var(--text-muted)] leading-relaxed italic border-l-4 border-yellow-500 pl-6">
                                    I believe humanity needs only a heart willing to act. As a cofounder of Udaan_Swan, I think real change comes from simple acts, like helping a stranger or supporting a child’s education. My work, whether through safety workshops or aiding underserved students, aims to turn empathy into action. I strive for a future where children are heard and
                                    protected, and I want to help build a revolution of kindness.
                                </p>
                            </div>
                            <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
                                <div className="group relative transform hover:-translate-y-2 transition-transform duration-500 w-full max-w-md">
                                    <div className="absolute -top-6 left-8 w-8 h-16 border-4 border-gray-400 rounded-full z-0"></div>
                                    <div className="bg-paper-white p-4 pb-12 polaroid-shadow transform rotate-3 group-hover:rotate-0 transition-transform duration-300 relative z-10">
                                        <div className="aspect-[4/5] bg-gray-200 overflow-hidden mb-4 relative group">
                                            <img alt="Aniya Piya portrait" className="w-full h-full object-cover filter contrast-125 saturate-50 group-hover:saturate-100 transition-all duration-500" src="/stickers/aniya.jpeg" />
                                            <div className="absolute bottom-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded rotate-12 shadow-md">
                                                HELLO!
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <h3 className="font-marker text-3xl text-black rotate-1 mb-1">Aniya Piya</h3>
                                            <p className="font-display italic text-gray-500 text-sm">Co-Founderr</p>
                                            {/* <p className="font-body text-xs uppercase tracking-widest mt-2 text-gray-400">Design Lead</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-32 md:mt-48 grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-gray-800 pt-12">
                        <div>
                            <h2 className="font-display text-4xl text-black mb-4">Join the scrapbook.</h2>
                            <p className="text-gray-400 max-w-md">
                                We are always looking for more visionaries to add to our story. Send us your Polaroid.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-start md:justify-end gap-4">
                            <div className="h-24 w-24 bg-gray-800 rotate-3 p-2 shadow-lg">
                                <div className="h-full w-full bg-gray-700 flex items-center justify-center text-gray-500 text-xs text-center p-1">Your photo here</div>
                            </div>
                            <div className="h-24 w-24 bg-gray-800 -rotate-2 p-2 shadow-lg hidden sm:block">
                                <div className="h-full w-full bg-gray-700 flex items-center justify-center text-gray-500 text-xs text-center p-1">Your photo here</div>
                            </div>
                            <button
                                onClick={() => setIsContactModalOpen(true)}
                                className="ml-4 px-8 py-3 bg-white text-black font-display italic hover:bg-primary hover:text-white transition-colors duration-300 rounded-sm shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
                            >
                                Get in touch
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Contact Modal */}
            {isContactModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsContactModalOpen(false)}
                    ></div>
                    <div className="relative bg-[#f8f5f2] p-8 md:p-12 max-w-lg w-full shadow-2xl transform -rotate-1 border border-gray-200 animate-[fadeIn_0.3s_ease-out]">
                        <button
                            onClick={() => setIsContactModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors p-2"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>

                        <div className="text-center mb-8">
                            <h2 className="font-display text-4xl text-black mb-2">
                                Say <span className="italic text-primary">Hello!</span>
                            </h2>
                            <p className="font-body text-gray-600 text-sm">
                                We&apos;d love to hear from you.
                            </p>
                        </div>

                        <div className="space-y-6 font-mono text-sm text-center">
                            <div>
                                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Email</p>
                                <a href="mailto:udaanswan@gmail.com" className="text-xl text-black hover:text-primary transition-colors border-b border-gray-300 hover:border-primary pb-1">
                                    udaanswan@gmail.com
                                </a>
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Phone</p>
                                <p className="text-xl text-black">
                                    (123) 123-1234
                                </p>
                            </div>

                            <div className="pt-4 flex justify-center space-x-8">
                                <a href="https://www.instagram.com/udaan_swan/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <span className="font-display font-bold">Ig</span>
                                    </div>
                                    <span className="text-xs text-gray-500 group-hover:text-primary">Instagram</span>
                                </a>
                                <a href="https://www.tiktok.com/@udaan_.swan" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <span className="font-display font-bold">Tw</span>
                                    </div>
                                    <span className="text-xs text-gray-500 group-hover:text-primary">Twitter</span>
                                </a>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-300 text-center">
                            <button
                                onClick={() => setIsContactModalOpen(false)}
                                className="font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
