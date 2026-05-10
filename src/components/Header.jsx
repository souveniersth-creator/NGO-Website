'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav suppressHydrationWarning className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-6 flex justify-between items-center text-white pointer-events-auto animate-fadeInDown" style={{ animationDuration: '0.6s', animationDelay: '0.2s', animationFillMode: 'both' }}>
            {/* Logo */}
            <Link href="/" className="font-display font-bold text-xl tracking-widest uppercase cursor-pointer z-50 relative">
                Udaan Swan
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-12 text-sm font-medium tracking-wide uppercase">
                <Link className="hover:text-primary transition-colors hover:underline decoration-primary decoration-2 underline-offset-4" href="/">Home</Link>
                <Link className="hover:text-primary transition-colors hover:underline decoration-primary decoration-2 underline-offset-4" href="/activities">Activities</Link>
                <Link className="hover:text-primary transition-colors hover:underline decoration-primary decoration-2 underline-offset-4" href="/founders">Founders</Link>
                <Link className="hover:text-primary transition-colors hover:underline decoration-primary decoration-2 underline-offset-4" href="/contact">Contact</Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none"
                    aria-label="Toggle Theme"
                >
                    {isDarkMode ? (
                        <svg className="w-5 h-5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    ) : (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                    )}
                </button>
                {/* Desktop CTA Button */}
                <Link suppressHydrationWarning className="bg-primary hover:bg-white hover:text-black text-white px-6 py-2 rounded-full font-bold uppercase text-xs tracking-wider transition-all duration-300 transform hover:scale-105 border border-transparent hover:border-white shadow-neon" href="/contact">
                    Get Involved
                </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
                onClick={toggleMenu}
                className="md:hidden z-50 focus:outline-none text-white hover:text-primary transition-colors"
                aria-label="Toggle Menu"
            >
                {isMenuOpen ? (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                ) : (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                )}
            </button>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center text-center animate-[fadeIn_0.3s_ease-out]">
                    <div className="flex flex-col space-y-8 text-2xl font-display uppercase tracking-widest text-white">
                        <Link
                            onClick={toggleMenu}
                            className="hover:text-primary transition-colors hover:scale-110 transform duration-300"
                            href="/"
                        >
                            Home
                        </Link>
                        <Link
                            onClick={toggleMenu}
                            className="hover:text-primary transition-colors hover:scale-110 transform duration-300"
                            href="/activities"
                        >
                            Activities
                        </Link>
                        <Link
                            onClick={toggleMenu}
                            className="hover:text-primary transition-colors hover:scale-110 transform duration-300"
                            href="/founders"
                        >
                            Founders
                        </Link>
                        <Link
                            onClick={toggleMenu}
                            className="hover:text-primary transition-colors hover:scale-110 transform duration-300"
                            href="/contact"
                        >
                            Contact
                        </Link>
                        <button
                            onClick={() => {
                                toggleTheme();
                                toggleMenu();
                            }}
                            className="hover:text-primary transition-colors hover:scale-110 transform duration-300 flex items-center justify-center space-x-2"
                        >
                            <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                            {isDarkMode ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                            )}
                        </button>
                    </div>

                    <div suppressHydrationWarning className="mt-12">
                        <Link
                            suppressHydrationWarning
                            onClick={toggleMenu}
                            className="bg-primary hover:bg-white hover:text-black text-white px-8 py-3 rounded-full font-bold uppercase text-sm tracking-widest transition-all duration-300 border border-transparent hover:border-white shadow-neon inline-block"
                            href="/contact"
                        >
                            Get Involved
                        </Link>
                    </div>

                    <div className="absolute bottom-10 text-xs font-mono text-gray-500 uppercase tracking-widest">
                        EST. 1998 • UDAAN SWAN
                    </div>
                </div>
            )}
        </nav>
    );
}
