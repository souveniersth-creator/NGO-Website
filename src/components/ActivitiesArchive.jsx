
'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import FlipCard from './FlipCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ActivitiesArchive() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const sidebarReveal = useScrollReveal({ threshold: 0.2 });
    const row1Card1 = useScrollReveal({ threshold: 0.1 });
    const row1Card2 = useScrollReveal({ threshold: 0.1 });
    const row1Card3 = useScrollReveal({ threshold: 0.1 });
    const row2Card1 = useScrollReveal({ threshold: 0.1 });
    const row2Card2 = useScrollReveal({ threshold: 0.1 });
    const row2Card3 = useScrollReveal({ threshold: 0.1 });
    const footerReveal = useScrollReveal({ threshold: 0.2 });

    return (
        <div className="bg-[var(--bg-page)] text-[var(--text-main)] font-body antialiased transition-colors duration-300 min-h-screen">
            {/* Nav removed in favor of global Header */}
            <main className="container mx-auto px-4 pt-32 pb-20">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    <div ref={sidebarReveal.ref} className={`lg:w-1/4 lg:sticky lg:top-32 h-fit mb-12 lg:mb-0 z-10 reveal reveal-left ${sidebarReveal.isVisible ? 'visible' : ''}`}>
                        <h1 className="font-display text-5xl md:text-7xl leading-tight mb-6 text-[var(--text-main)]">
                            Our <br /> <span className="italic font-light">Memory</span> <br /> Lane
                        </h1>
                        <div className="w-16 h-0.5 bg-gray-400 dark:bg-gray-600 mb-6"></div>
                        <p className="text-sm md:text-base leading-relaxed text-[var(--text-muted)] max-w-xs font-light">
                            A collection of moments, smiles, and sunny days. This archive documents our journey helping children find their spark through creativity, community, and care.
                            <br /><br />
                            Every snapshot tells a story of a life touched and a friendship made.
                        </p>
                        <div className="hidden lg:block absolute -bottom-40 -left-10 w-32 h-32 opacity-80 rotate-12 pointer-events-none">
                            <img alt="Abstract sticker texture" className="rounded-full w-full h-full object-cover grayscale mix-blend-screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYWKeNedl8flRCRn1S1TAhAQnz5-bYZOzrn1rCLD07scFpC3WbFES5RV8fZJw_NRrUxNVkv8OXJYRvEvX-aNu8ZjvFmCLfYB82ghxR7OrUIaOFBEPKMVieIUL8TbYHu7b49MFMFcQMGNPKEJi-I69oXIRjWNGIWbFhPBUgJUi8_4rzePJfzVqCcgJujf9_2oDCtnoe_Dzkc-fTfF9VjD4OqdKjqkXbw9wYemEdFkq8VAYg6HQ3IV16XE0l7f2rDVxVq6dkV1UplNE" />
                        </div>
                    </div>
                    <div className="lg:w-3/4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-24 px-4 md:px-0">
                            <div ref={row1Card1.ref} className={`reveal reveal-up stagger-1 ${row1Card1.isVisible ? 'visible' : ''}`}>
                            <FlipCard
                                containerClassName="group relative transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 ease-out z-0 hover:z-20"
                                innerClassName="p-3 pb-12 polaroid-shadow"
                                backMessage="Such an unforgettable sunny day!"
                            >
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 tape-effect transform -rotate-1 z-20 opacity-80"></div>
                                <div className="aspect-[4/5] overflow-hidden bg-gray-200 filter grayscale group-hover:grayscale-0 transition-all duration-500">
                                    <img alt="Child laughing in a field" className="w-full h-full object-cover opacity-90 group-hover:opacity-100" src="/stickers/chepang hostel.png" />
                                </div>
                                <div className="mt-4 text-center">
                                    <p className="font-caveat text-2xl text-gray-800 rotate-1">Chepang Siddhi Hostel</p>
                                    {/* <p className="font-display text-xs text-gray-500 mt-1 uppercase tracking-widest">Ojai, CA</p> */}
                                </div>
                                <span className="absolute bottom-4 right-4 font-caveat text-blue-600 text-lg -rotate-12 opacity-80">Best day ever!</span>
                            </FlipCard>
                            </div>
                            <div ref={row1Card2.ref} className={`reveal reveal-up stagger-3 ${row1Card2.isVisible ? 'visible' : ''}`}>
                            <FlipCard
                                containerClassName="group relative transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-500 ease-out z-0 hover:z-20 md:mt-12"
                                innerClassName="p-3 pb-10 polaroid-shadow"
                                backMessage="All the colors of our hearts!"
                            >
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-5 tape-effect transform rotate-2 z-20 opacity-80"></div>
                                <div className="aspect-square overflow-hidden bg-gray-200 sepia group-hover:sepia-0 transition-all duration-500">
                                    <img alt="Group of kids painting" className="w-full h-full object-cover opacity-90 group-hover:opacity-100" src="/stickers/exam kit.png" />
                                </div>
                                <div className="mt-4 text-center px-2">
                                    <p className="font-caveat text-3xl text-gray-800 -rotate-1 font-bold">Exam Kit Distribution</p>
                                    <p className="font-display text-xs text-gray-500 mt-1 uppercase tracking-widest">Community Center</p>
                                </div>
                            </FlipCard>
                            </div>
                            <div ref={row1Card3.ref} className={`reveal reveal-up stagger-5 ${row1Card3.isVisible ? 'visible' : ''}`}>
                            <FlipCard
                                containerClassName="group relative transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-500 ease-out z-0 hover:z-20"
                                innerClassName="p-3 pb-14 polaroid-shadow"
                                backMessage="We collected over 500 toys!"
                            >
                                <div className="aspect-[3/4] overflow-hidden bg-gray-200 contrast-125 group-hover:contrast-100 transition-all duration-500">
                                    <img alt="Toy drive collection pile" className="w-full h-full object-cover opacity-90 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0prW-MSqncIn3hy6TWoG6pQ-Qz7kjxzoWv2T_oDoGBGmUdKsYEDJe56IHrhcerOknYdcsSsY0jbJL42FdBmK7wb6PbRZ9gRoXHUfGRlN6jaszuQr9ImZ9-7hqYQ3hGG86uT-8x09i2K3Cx6cEE-8SyrYYjwJRUUJfSgn7pg6uvQnIzwAQwL1O9EUZAUND4Q3COAapHU0bpw80QYGlis0F0To4R3XpionWthep6_aHDOhrzUY2lYH-3Wk4dDB9d7-JDpZ5EmFVrtI" />
                                </div>
                                <div className="mt-3 text-center">
                                    <p className="font-caveat text-2xl text-gray-800 rotate-2">Toy Drive 🧸</p>
                                    <p className="font-display text-xs text-gray-500 mt-1 uppercase tracking-widest">December 1999</p>
                                </div>
                                <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-yellow-400 opacity-60 flex items-center justify-center font-bold text-[10px] text-red-600 rotate-12 border border-yellow-600">NEW</div>
                            </FlipCard>
                            </div>
                            <div ref={row2Card1.ref} className={`reveal reveal-up stagger-1 ${row2Card1.isVisible ? 'visible' : ''}`}>
                            <FlipCard
                                containerClassName="group relative transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 ease-out z-0 hover:z-20 md:col-start-1 lg:col-start-1"
                                innerClassName="p-3 pb-8 polaroid-shadow"
                                backMessage="Friends forever! 💖"
                            >
                                <div className="absolute -top-3 right-10 w-16 h-6 tape-effect transform -rotate-6 z-20 opacity-70"></div>
                                <div className="aspect-video overflow-hidden bg-gray-200">
                                    <img alt="Teens sitting on a wall" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOpPqsaul57c-8tRCCi9FhV3x4oFSMhTirJRefjJCqn25hSJyDONDA4qTgzdZlwpJX39Qyj0fI8Qriy7wBDiBBtO28Ylz3vCeSkwBSU6PozqY8pvZG_ppelMVgedfU8XQu5m5gCFAaZkmndNTDo1ENtprgiIULxRLwDSPt-_Pe-RYOcsOENWmmGx0Ly2I7jxsa2QX9K33R2CN9-X3Bw92jNIlEL09KoQh5NSH6EM5h2yPZic3pI0nUWOawfWTnDcUvjNt0U05jfLE" />
                                </div>
                                <div className="mt-3 flex justify-between items-end px-2">
                                    <div>
                                        <p className="font-caveat text-xl text-gray-800">The Crew</p>
                                        <p className="font-display text-xs text-gray-500 uppercase tracking-widest">East Side</p>
                                    </div>
                                    <span className="font-caveat text-xs text-gray-400">14/02</span>
                                </div>
                            </FlipCard>
                            </div>
                            <div ref={row2Card2.ref} className={`reveal reveal-up stagger-3 ${row2Card2.isVisible ? 'visible' : ''}`}>
                            <FlipCard
                                containerClassName="group relative transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 ease-out z-0 hover:z-20 md:mt-20"
                                innerClassName="p-4 pb-12 polaroid-shadow"
                                backMessage="Simple moments are the best."
                            >
                                <div className="absolute -top-4 right-8 w-4 h-12 border-2 border-gray-400 rounded-full z-10"></div>
                                <div className="aspect-square overflow-hidden bg-gray-200">
                                    <img alt="Girl blowing bubbles" className="w-full h-full object-cover filter contrast-125 saturate-50 group-hover:saturate-100 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6LfZ2BQCHottrzoQF7PJAJzBtndlg21hrdvIYUVdbJuikUJqS1HxeWL8K-Di1GSzHMwsIAi7lszsgqLErYHjSl-Oym20AetQvxjZhXum6NAVh6WREdKJeQ8pLfDHpcqh9fQc23spq9QOC2nr4IM-au1QNZVxs4URqHsof1JyQwxaIImUW_0_GAGx5aTgD-gs-5mk0-u1hqEs5-EXY7yfoEjTBE1DDl8uiYypqeLIIYGZFKIJK-u8y23LuXwUPqe5q51Y5CvwIDnI" />
                                </div>
                                <div className="mt-4 text-center">
                                    <p className="font-caveat text-3xl text-red-700 -rotate-3 decoration-wavy underline">Bubbles!</p>
                                    <p className="font-display text-xs text-gray-500 mt-2 uppercase tracking-widest">Park Day 2022</p>
                                </div>
                            </FlipCard>
                            </div>
                            <div ref={row2Card3.ref} className={`reveal reveal-up stagger-5 ${row2Card3.isVisible ? 'visible' : ''}`}>
                            <FlipCard
                                containerClassName="group relative transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-500 ease-out z-0 hover:z-20"
                                innerClassName="p-3 pb-10 polaroid-shadow"
                                backMessage="A new story every week!"
                            >
                                <div className="aspect-[4/5] overflow-hidden bg-gray-200">
                                    <img alt="Reading books together" className="w-full h-full object-cover filter sepia-[.5] group-hover:sepia-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUKUmi0-QbI7aj99Y5dPW3gYGtIP_5PdHyU-vpcXbeCCS1ajppJhoHZrEPeoraJQfCq-5NzGgwHQodvo_qZZqwqIKUzXPB4-3ZXsYDZPFfPhMxbf2jqGn0A7esdPF5mgU3ALp1QXlFIFzfRepn0U_esuUmLZSxOwYArwCck0tIVlKvSyhDd77dwhP1LRXDOxwlEWhHZoBWdRNq7lIDk767VtiRhK5Jr1t-coYVirQY2Y8cq9jNqeoRLrpT5VaST8TyNsCpRStCR5k" />
                                </div>
                                <div className="mt-3 px-2">
                                    <p className="font-caveat text-xl text-gray-800">Book Club</p>
                                    <div className="w-full h-px bg-gray-300 my-1"></div>
                                    <p className="font-display text-xs text-gray-500 uppercase tracking-widest text-right">Library Annex</p>
                                </div>
                                <svg className="absolute bottom-3 left-4 w-8 h-8 text-black opacity-60" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 100 100">
                                    <path d="M20,50 Q40,10 60,50 T90,50"></path>
                                </svg>
                            </FlipCard>
                            </div>
                        </div>
                        <div className="mt-32 flex justify-center pb-20">
                            <button
                                onClick={toggleModal}
                                className="group relative px-8 py-3 bg-transparent border border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 font-display uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors duration-300"
                            >
                                View More Archives
                                <span className="absolute -bottom-2 -right-2 w-full h-full border border-gray-600 dark:border-gray-400 pointer-events-none transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* View More Archives Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                        onClick={toggleModal}
                    ></div>
                    <div className="relative bg-[#f8f5f2] p-8 md:p-12 max-w-4xl w-full shadow-2xl transform rotate-1 border border-gray-200 overflow-y-auto max-h-[90vh] animate-[fadeIn_0.3s_ease-out]">
                        <button
                            onClick={toggleModal}
                            className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors p-2"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>

                        <div className="text-center mb-12">
                            <h2 className="font-display text-4xl md:text-5xl text-black mb-4">
                                The <span className="italic text-primary">Hidden</span> Vault
                            </h2>
                            <p className="font-body text-gray-600 max-w-lg mx-auto">
                                Digging through old boxes... more memories are being dusted off and digitized as we speak.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-4 polaroid-shadow transform -rotate-2">
                                <div className="aspect-video bg-gray-200 overflow-hidden mb-4 relative">
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                                        <span className="font-marker text-gray-400 text-xl">Developing...</span>
                                    </div>
                                    {/* Placeholder for future content */}
                                </div>
                                <div className="text-center font-handwriting text-gray-500">
                                    Coming Soon
                                </div>
                            </div>
                            <div className="bg-white p-4 polaroid-shadow transform rotate-1">
                                <div className="aspect-video bg-gray-200 overflow-hidden mb-4 relative">
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                                        <span className="font-marker text-gray-400 text-xl">Scanning...</span>
                                    </div>
                                </div>
                                <div className="text-center font-handwriting text-gray-500">
                                    Archive #9923
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-center border-t border-gray-300 pt-6">
                            <p className="font-mono text-xs uppercase tracking-widest text-gray-400">
                                Check back soon for more captured moments.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <div className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.07] z-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }}></div>
            <footer ref={footerReveal.ref} className={`border-t border-gray-800 dark:border-gray-800 py-12 bg-[var(--bg-page)] relative z-10 reveal reveal-up ${footerReveal.isVisible ? 'visible' : ''}`}>
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest font-display">
                    <p>© 2023 NGO Collective. Est 1998.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a className="hover:text-gray-900 dark:hover:text-white transition-colors" href="https://www.instagram.com/udaan_swan/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a className="hover:text-gray-900 dark:hover:text-white transition-colors" href="https://www.tiktok.com/@udaan_.swan" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
