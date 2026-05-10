'use client';

import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import Draggable from './Draggable';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function LandingPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    // Scroll reveal hooks for each section
    const heroText = useScrollReveal({ threshold: 0.2 });
    const gallerySection = useScrollReveal({ threshold: 0.1 });
    const galleryCard1 = useScrollReveal({ threshold: 0.15 });
    const galleryCard2 = useScrollReveal({ threshold: 0.15 });
    const galleryCard3 = useScrollReveal({ threshold: 0.15 });
    const articleSection = useScrollReveal({ threshold: 0.1 });
    const articleText = useScrollReveal({ threshold: 0.15 });
    const articleImages = useScrollReveal({ threshold: 0.15 });
    const aboutSection = useScrollReveal({ threshold: 0.1 });
    const aboutTitle = useScrollReveal({ threshold: 0.15 });
    const aboutFounder = useScrollReveal({ threshold: 0.15 });
    const contactBlock = useScrollReveal({ threshold: 0.15 });
    const getInTouch = useScrollReveal({ threshold: 0.15 });

    const [isLoading, setIsLoading] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [showLine1, setShowLine1] = useState(false);
    const [visibleLetters, setVisibleLetters] = useState(0);

    const subtitleText = "Together we build";

    useEffect(() => {
        // Check if user has already visited in this session
        const hasVisited = sessionStorage.getItem('hasVisitedUdaanSwan');

        if (hasVisited) {
            setIsLoading(false);
            return;
        }

        const t1 = setTimeout(() => setShowLine1(true), 500);

        // Start letter animation after "udaanswan@gmail.com Udaan Swan" appears
        let letterInterval;
        const t2 = setTimeout(() => {
            let count = 0;
            letterInterval = setInterval(() => {
                count++;
                setVisibleLetters(count);
                if (count >= subtitleText.length) {
                    clearInterval(letterInterval);
                }
            }, 60); // 60ms delay between each letter
        }, 1200);

        const totalAnimationTime = 1200 + (subtitleText.length * 60);
        const t3 = setTimeout(() => setIsFadingOut(true), totalAnimationTime + 1500); // 1.5s pause after finish
        const t4 = setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem('hasVisitedUdaanSwan', 'true');
        }, totalAnimationTime + 2500);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            clearTimeout(t4);
            if (letterInterval) clearInterval(letterInterval);
        };
    }, []);

    return (
        <div className={`bg-[var(--bg-page)] text-[var(--text-main)] transition-colors duration-300 font-body antialiased overflow-x-hidden ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
            {isLoading && (
                <div className={`fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center font-display text-white text-4xl md:text-5xl lg:text-7xl text-center px-4 transition-opacity duration-1000 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="space-y-6">
                        <div className={`transition-all duration-1000 transform ${showLine1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            Welcome to Udaan Swan
                        </div>
                        <div className="flex justify-center text-2xl md:text-3xl lg:text-4xl text-gray-300 mt-4 font-body tracking-wider h-10">
                            {subtitleText.split('').map((char, index) => (
                                <span
                                    key={index}
                                    className={`transition-all duration-300 transform ${index < visibleLetters ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                                        }`}
                                    style={{ display: char === ' ' ? 'inline-block' : 'inline', width: char === ' ' ? '0.5em' : 'auto' }}
                                >
                                    {char}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            {/* Nav removed in favor of global Header */}
            <header className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">
                <div ref={heroText.ref} className={`relative z-20 text-center max-w-4xl mx-auto px-4 reveal reveal-blur ${heroText.isVisible ? 'visible' : ''}`}>
                    <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-none mb-4 text-[var(--text-main)] animate-text-glow">
                        <span className="block italic font-light">Udaan</span>
                        <span className="block font-bold tracking-tighter text-shadow-retro">Swan</span>
                    </h1>
                    <p className="font-body text-white max-w-sm md:max-w-md mx-auto text-sm md:text-base leading-relaxed mt-6 backdrop-blur-sm bg-black/30 p-4 rounded-lg border border-white/10 animate-border-glow">
                        Empowering lives, inspiring change, and transforming communities through compassion, innovation, and unwavering commitment to a better tomorrow.
                    </p>
                </div>
                <Draggable className="absolute top-32 left-4 md:left-20 z-10">
                    <div className="transform -rotate-12 animate-pulse">
                        <div className="flex space-x-1">
                            <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold border-2 border-black select-none">H</span>
                            <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold border-2 border-black select-none">E</span>
                            <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold border-2 border-black select-none">A</span>
                            <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold border-2 border-black select-none">R</span>
                            <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold border-2 border-black select-none">T</span>
                        </div>
                    </div>
                </Draggable>
                <Draggable className="absolute top-24 right-4 md:right-32 z-10 w-48 h-48">
                    <div className="transform rotate-6 w-full h-full bg-yellow-200 shadow-lg p-4 font-marker text-black text-lg leading-tight flex items-center justify-center text-center select-none">
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-red-400/50 rotate-2"></div>
                        <div>
                            &quot;Don&apos;t forget to donate!&quot; <br /> <span className="text-sm mt-2 block"> - xo</span>
                        </div>
                    </div>
                </Draggable>
                {/* <Draggable className="absolute top-1/2 left-0 md:left-10 z-10">
                    <img draggable={false} alt="Vintage pink camera aesthetic" className="transform -translate-y-1/2 -rotate-12 w-48 md:w-64 border-4 border-white shadow-xl rounded-lg select-none" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxJ-f5QJOAbYBbasxoNetpUkrmZKookWRvTckCC4bFWO2Tiq7DRzh2qGiBPzMaEnRFk0qp7LZPiNybh0oJpe7ofV9adPywjaGGFiclnzWCaWmtZsWkDcUsg-TWV3UNp3HCL7z8s71rBQXVQiIdwTAOc9NFIpqZ9pST9wbb0wBZjF9hciWF1qNtGzbwnrVVRTWSmqW6DZd7m8EiTmVjhX8pBTHBlct0nB25tCrMQlo3wDJcyHwPmaM4jkJYEDMQ6ZJHc1PTB6P8dAk" />
                </Draggable>
                <Draggable className="absolute top-1/2 right-4 md:right-20 z-20">
                    <div className="transform -translate-y-1/2 rotate-12">
                        <span className="material-icons text-red-600 text-9xl drop-shadow-lg select-none">Support</span>
                    </div>
                </Draggable> */}
                <Draggable className="absolute bottom-20 left-10 md:left-32 z-10 w-64">
                    <div className="transform -rotate-8 bg-orange-100 text-red-800 p-4 border-2 border-red-800 border-dashed w-full shadow-lg font-mono text-xs select-none">
                        <div className="flex justify-between border-b border-red-800 border-dashed pb-2 mb-2">
                            <span>ADMIT ONE</span>
                            <span>04/15/2025</span>
                        </div>
                        <h3 className="text-lg font-bold text-center">CHARITY GALA</h3>
                        <p className="text-center mt-1">TOGETHER WE BUILD</p>
                    </div>
                </Draggable>
                {/* <Draggable className="absolute bottom-10 right-10 md:right-40 z-0 md:z-10">
                    <div className="transform rotate-6">
                        <img draggable={false} src="https://images.unsplash.com/photo-1548504769-900b70ed122e?auto=format&fit=crop&q=80&w=800" alt="Swan" className="relative w-40 h-40 md:w-56 md:h-56 rounded-full shadow-2xl object-cover border-4 border-black/50 select-none" />
                    </div>
                </Draggable> */}
                {/* 
                <Draggable className="absolute top-10 right-4 md:right-32 z-10 hidden md:block">
                    <img
                        draggable={false}
                        src="/stickers/flowers.png"
                        alt="Sticker Daisy"
                        className="transform rotate-12 w-40 h-40 md:w-45 md:h-45 drop-shadow-xl select-none object-contain"
                    />
                </Draggable> */}

                <Draggable className="absolute top-40 right-1/4 z-0 hidden md:block">
                    <img
                        draggable={false}
                        src="/stickers/schoolkids.png"
                        alt="School kids"
                        className="transform -rotate-12 w-24 h-24 md:w-40 md:h-40 drop-shadow-2xl select-none opacity-90 hue-rotate-15 object-contain"
                    />
                </Draggable>
                {/* <Draggable className="absolute bottom-45 left-30 md:left-120 z-20 hidden md:block w-32 h-32">
                    <div className="transform -rotate-3 bg-white p-2 shadow-xl border border-gray-200 select-none">
                        <div className="grid grid-cols-5 grid-rows-5 gap-0.5 w-full h-full bg-gray-800 border border-gray-800">
                            {Array.from({ length: 25 }).map((_, i) => (
                                <div key={i} className={`w-full h-full ${[2, 7, 8, 12, 16, 21].includes(i) ? 'bg-black' : 'bg-white'}`}></div>
                            ))}
                        </div>
                    </div>
                </Draggable> */}
                <Draggable className="absolute top-2/3 left-10 md:left-1/4 z-10">
                    <img
                        draggable={false}
                        src="/stickers/ladder.png"
                        alt="Ladder"
                        className="transform rotate-12 w-16 h-16 md:w-30 md:h-30 drop-shadow-xl select-none opacity-90 object-contain"
                    />
                </Draggable>
                <Draggable className="absolute top-20 left-10 md:left-1/3 z-10">
                    <img
                        draggable={false}
                        src="/stickers/boy-girl.png"
                        alt="Boy and Girl"
                        className="transform rotate-0 w-16 h-16 md:w-30 md:h-30 drop-shadow-xl select-none opacity-80 object-contain"
                    />
                </Draggable>
                <Draggable className="absolute top-130 left-200 md:left-5/6 z-10">
                    <img
                        draggable={false}
                        src="/stickers/flowers.png"
                        alt="Stickers Daisy"
                        className="transform rotate-0 w-16 h-16 md:w-30 md:h-30 drop-shadow-xl select-none opacity-80 object-contain"
                    />
                </Draggable>
                <Draggable className="absolute top-180 left-200 md:left-5/7 z-7">
                    <img
                        draggable={false}
                        src="/stickers/tree.png"
                        alt="Tree"
                        className="transform rotate-0 w-25 h-25 md:w-30 md:h-30 drop-shadow-xl select-none opacity-80 object-contain"
                    />
                </Draggable>
                <Draggable className="absolute top-180 left-200 md:left-4/9 z-5">
                    <img
                        draggable={false}
                        src="/stickers/two hands.png"
                        alt="Two Hands"
                        className="transform rotate-0 w-16 h-20 md:w-30 md:h-30 drop-shadow-xl select-none opacity-80 object-contain"
                    />
                </Draggable>
                <Draggable className="absolute top-75 left-200 md:left-1/10 z-10">
                    <img
                        draggable={false}
                        src="/stickers/flowers.png"
                        alt="Flower2"
                        className="transform rotate-0 w-16 h-16 md:w-30 md:h-30 drop-shadow-xl select-none opacity-80 object-contain"
                    />
                </Draggable>


            </header>
            <section className="py-20 px-4 md:px-12 bg-background-light dark:bg-background-dark relative z-30">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
                        <div ref={galleryCard1.ref} className={`group transform hover:-translate-y-4 transition-all duration-500 reveal reveal-up stagger-1 ${galleryCard1.isVisible ? 'visible' : ''}`}>
                            <div className="bg-white p-4 pb-12 shadow-xl -rotate-2 hover:rotate-0 transition-transform duration-300 relative">
                                <div className="aspect-[4/5] overflow-hidden bg-gray-200 mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                                    <img alt="Child smiling with toy" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4zo81eGUrSS3sBi0OLuRKjvnwEe7LofQLavMwm1GJgU_LN0jA4NodZa9rd-L-pMzNWkzjnJmTmc6yX0eEcOUA2I-xz3QkpSktdS8fOfJzyizdDkmG-WwR_CSEn1TqHtAv_V1v8PyfzzaOkyS4X0G00fZBfxkq7nz7Ecb3e1jSANVI_ZBTDnA9QvShICuyxiiDZaKXaL67bZzIHGabYX-KZ-wGXpNoquR2JeTQ5vdzg5OwX5UhjHItqD1zusLyg_SMXpnIBFOhWpA" />
                                </div>
                                <div className="absolute bottom-4 left-0 w-full text-center">
                                    <h3 className="font-marker text-2xl text-black transform -rotate-2">Bunny Boy</h3>
                                </div>
                                <div className="absolute top-4 right-4 text-xs font-mono text-gray-400 rotate-90 origin-top-right">D-5</div>
                            </div>
                            <div className="text-center mt-6">
                                <p className="text-gray-500 dark:text-gray-400 font-display text-lg">Help Center, London</p>
                                <p className="text-gray-400 dark:text-gray-500 font-mono text-sm">1998</p>
                            </div>
                        </div>
                        <div ref={galleryCard2.ref} className={`group transform hover:-translate-y-4 transition-all duration-500 reveal reveal-up stagger-3 ${galleryCard2.isVisible ? 'visible' : ''}`}>
                            <div className="bg-white p-4 pb-12 shadow-xl rotate-[3deg] hover:rotate-0 transition-transform duration-300 relative">
                                <div className="aspect-[4/5] overflow-hidden bg-gray-200 mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                                    <img alt="Group of kids playing" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx3lHhVF-PxW8xqbuCuXMpJlBRDnavVqAlST6BZ37F7vE90pJDvCySkrNg5pE8LWxiWkDAHf-P_PS2WVtIwx3RYpsoOKLNXFWf5MA1zSnf5OLDgIqoRwyKFtFLSL3upm6WGzfVgMK0F8ve-2_F4-qI0KkPJUd0yimhPVb7VD7nj3tKbTbJEhXVwlc38LFLMlMiZVUjrbtOL3EeWZu-QESx0AaWF73cqnCH1KZN3zyJC2oGK203_-UoeFOVGs_aw-fhPaN4aF6LWCY" />
                                </div>
                                <div className="absolute bottom-2 left-0 w-full text-center">
                                    <h3 className="font-marker text-2xl text-blue-700 transform rotate-1">Team Spirit</h3>
                                </div>
                                <svg className="absolute bottom-10 right-4 w-12 h-12 text-black/50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 100 100">
                                    <path d="M10,50 Q30,20 50,50 T90,50"></path>
                                </svg>
                            </div>
                            <div className="text-center mt-6">
                                <p className="text-gray-500 dark:text-gray-400 font-display text-lg">Outreach, Paris</p>
                                <p className="text-gray-400 dark:text-gray-500 font-mono text-sm">1998</p>
                            </div>
                        </div>
                        <div ref={galleryCard3.ref} className={`group transform hover:-translate-y-4 transition-all duration-500 reveal reveal-up stagger-5 ${galleryCard3.isVisible ? 'visible' : ''}`}>
                            <div className="bg-white p-4 pb-12 shadow-xl rotate-[-1deg] hover:rotate-0 transition-transform duration-300 relative">
                                <div className="aspect-[4/5] overflow-hidden bg-gray-200 mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                                    <img alt="Girl reading a book" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqonckhH2VnuWeh-0CYYx6LZcCfzTsBsxckUBHQnLKkvvKU908TFui8oas5k_9a8DAi7MNKxiFPMYuyXd6RIPrwIqW99-gNxqWkPv5NBz4xG5yRVhOLByzPpN16IWjUO7kVYnKQWL_O_KdWtbmTGFNdD_GMjWynTy9YNqFBJ1R22pOFpTlIG4u0Mx-OYO4OuT8r9Kp61kmerX539NQYhbV1Q3zwl2aLdpO0ofH6gAMrGrRbszxdGUlhoWPGeYA5t5RF_1tKFnXzgw" />
                                </div>
                                <div className="absolute bottom-4 left-0 w-full text-center">
                                    <h3 className="font-marker text-xl text-red-600 transform -rotate-3 text-left pl-6">Vet Visit</h3>
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-yellow-300 px-2 py-1 font-mono text-xs text-black transform rotate-12 shadow-sm">Verified</div>
                            </div>
                            <div className="text-center mt-6">
                                <p className="text-[var(--text-muted)] font-display text-lg">Education, NYC</p>
                                <p className="text-[var(--text-muted)] font-mono text-sm">1998</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section ref={articleSection.ref} className="py-24 border-t border-gray-800 relative bg-background-light dark:bg-background-dark">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div ref={articleText.ref} className={`reveal reveal-left ${articleText.isVisible ? 'visible' : ''}`}>
                        <h2 className="font-display text-5xl md:text-7xl text-gray-900 dark:text-white mb-2 leading-tight">
                            Article<br /><span className="italic font-light">Name</span>
                        </h2>
                        <div className="flex items-center space-x-4 mb-8 text-gray-500">
                            <span className="uppercase tracking-widest text-sm">Place</span>
                            <span className="w-12 h-[1px] bg-gray-600"></span>
                            <span className="font-mono text-[var(--text-muted)]">1998</span>
                        </div>
                        <p className="font-body text-[var(--text-muted)] text-sm md:text-base leading-relaxed mb-6">
                            With a heart anchored in weddings, travel, interiors, architecture, culture, fashion, and design, I bring a thoughtful, boundary-pushing approach to every creative project. I&apos;m endlessly curious about how traditions evolve and passionate about reimagining them in personal and meaningful ways.
                        </p>
                        <p className="font-body text-[var(--text-muted)] text-sm md:text-base leading-relaxed">
                            Whether styling a wedding, directing a shoot, or shaping editorial narratives, I lead with intention and emotion, crafting experiences that honour life&apos;s milestones and elevate the everyday. Approachable, driven, and collaboratively by nature, I thrive when working alongside visionary creatives.
                        </p>
                        <div className="mt-10">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-block border-b border-primary text-primary pb-1 font-mono hover:text-white transition-colors cursor-pointer"
                            >
                                Read Full Story -&gt;
                            </button>
                        </div>
                    </div>
                    <div ref={articleImages.ref} className={`relative reveal reveal-right stagger-2 ${articleImages.isVisible ? 'visible' : ''}`}>
                        <div className="relative z-10 transform rotate-2 border-8 border-white shadow-2xl">
                            <img alt="Vintage field of flowers" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUpC_jeWLoftdjs0M2xvoLPi94A4MTvWRu3sPjJaRGyZhJdbgV329i3rqsF_R51UMW-aAetDvZXxjWuFuPXVdUVuuF5a3Np0e1aEVeAMRbfPHnQSf_JLbOmzG0jCNNSyDygpEBdO1GSUFz4DAoqmoHGEmy9BdDAJfL0pgOfXjlWAyxwkKekQBfS74Uz9XbIlBKAypXHFD0gIsH9qlcbyowZPUkKE-ak9Zlyu2SdFhGtLuOyguXA-HdOOiagieJ4R80car3Qi7ero8" />
                        </div>
                        <div className="absolute top-24 -left-10 md:-left-16 z-20 w-3/4 transform -rotate-6 border-4 border-white shadow-xl bg-orange-50 p-2">
                            <img alt="Hollywood retro sign aesthetic" className="w-full h-auto sepia" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6TO3FrLE6Xfu60YRVTWEZUWNrd8NXqspKr8p-oAMnkMn106U0n3xTxYahEUkizyp2rBRHMNAUxbiZLPm083eXDo919ni9nsJbicljCcCwa106pQnS6yKpUC48_Lsy88J2-Gyfe5FkGi_y9AKsZ-ju3KSw7VYJSHgwN9lDuyPLzbLiOLUSEZDKHelhxXu5HJ1RrtPwyD9PksY__CetJ89UMTxNXEVyfSK50tWElvkmcgLTw6X2qhXhB_Epuy4q1RQsSaZTn6sBpRY" />
                            <div className="font-marker text-center text-red-500 text-xl mt-2">Greetings from Hollywood</div>
                        </div>
                    </div>
                </div>
            </section>
            <section ref={aboutSection.ref} className="py-24 bg-[var(--bg-page)] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="relative">
                        <h2 ref={aboutTitle.ref} className={`font-display text-6xl text-[var(--text-main)] mb-6 reveal reveal-up ${aboutTitle.isVisible ? 'visible' : ''}`}>
                            About Us<br />
                            {/* <span className="italic font-light ml-8">Us</span> */}
                        </h2>
                        <div className="w-16 h-1 bg-primary mb-8 ml-2"></div>
                        <p className={`text-gray-400 max-w-sm mb-12 reveal reveal-up stagger-2 ${aboutTitle.isVisible ? 'visible' : ''}`}>
                            Brief description of your work, what you enjoy, small things about you. We are a collective of dreamers.
                        </p>
                        <div ref={aboutFounder.ref} className={`relative w-64 h-80 mx-auto md:mx-0 transform rotate-6 border-8 border-white shadow-2xl bg-white reveal reveal-scale stagger-3 ${aboutFounder.isVisible ? 'visible' : ''}`}>
                            <img alt="Portrait of founder" className="w-full h-[85%] object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVb2wMF6SoipoxBnsPhK12NYpxpddqhOeeVPReA9gFA_s2m-IRER2Jcv3HjNZh6_3IykskHlPhCbm4Flr_hhQM9ZiuO5bqyUBV1sE7ytsJmkZ2iR-3CcEr-OmQ72MMzFM29FGDw2ywkogCV9P53HA_Ss4Y8brtKwUnPilExezCeukgSxqODu-dkarhihk3InguTDGm_TdWhFrza1iTDaKil7ri9581VinT7LaX41wWtmKZ5xaBkT72ddGO31u8xdJjeO3mvB19JBc" />
                            <div className="h-[15%] flex items-center justify-center">
                                <span className="font-marker text-black text-lg">The Founder</span>
                            </div>
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-white/30 backdrop-blur-sm rotate-2 shadow-sm border border-white/40"></div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between relative">
                        <div ref={contactBlock.ref} className={`self-center md:self-end bg-white p-6 shadow-2xl transform -rotate-2 max-w-xs relative mb-12 reveal reveal-right stagger-2 ${contactBlock.isVisible ? 'visible' : ''}`}>
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 pointer-events-none"></div>
                            <div className="font-marker text-3xl text-gray-800 text-center py-8 border border-gray-100">
                                (123) 123-1234
                            </div>
                            <div className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 -rotate-90 text-[10px] text-red-500 font-sans tracking-widest uppercase">
                                contact for more info
                            </div>
                        </div>
                        <div ref={getInTouch.ref} className={`mt-auto relative z-10 reveal reveal-up stagger-3 ${getInTouch.isVisible ? 'visible' : ''}`}>
                            <h2 className="font-display text-6xl text-[var(--text-main)] mb-2 leading-none">
                                <button onClick={() => setIsContactModalOpen(true)} className="block w-full text-left hover:text-primary transition-colors duration-300">
                                    Get in<br />
                                    <span className="italic font-light">touch!</span>
                                </button>
                            </h2>
                            <div className="grid grid-cols-2 gap-8 mt-12 font-mono text-sm text-gray-400">
                                <div>
                                    <a href="mailto:udaanswan@gmail.com" className="block hover:text-primary cursor-pointer transition-colors">@email</a>
                                    <a href="https://www.instagram.com/udaan_swan/" target="_blank" rel="noopener noreferrer" className="block hover:text-primary cursor-pointer transition-colors">@instagram</a>
                                    <a href="https://www.tiktok.com/@udaan_.swan" target="_blank" rel="noopener noreferrer" className="block hover:text-primary cursor-pointer transition-colors">@tiktok</a>
                                </div>
                                <div>
                                    <p className="hover:text-primary cursor-pointer transition-colors">Bharatpur, Nepal</p>
                                    <p className="hover:text-primary cursor-pointer transition-colors">Phone Number</p>
                                </div>
                            </div>
                            <div className="mt-12 text-gray-600 text-xs font-mono uppercase tracking-widest">
                                developed by zetnixit · 2026-02-16
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-full h-2 gradient-divider"></div>

            {/* Full Story Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsModalOpen(false)}
                    ></div>
                    <div className="relative bg-[#f8f5f2] p-8 md:p-12 max-w-2xl w-full shadow-2xl transform rotate-1 border border-gray-200 overflow-y-auto max-h-[90vh] animate-[fadeIn_0.3s_ease-out]">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors p-2"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-primary/20 -rotate-2 backdrop-blur-sm"></div>

                        <h2 className="font-display text-4xl md:text-5xl mb-6 text-black tracking-tight">
                            The <span className="italic font-light text-primary">Full</span> Story
                        </h2>

                        <div className="prose prose-lg font-body text-gray-700 leading-relaxed space-y-4">
                            <p className="first-letter:text-5xl first-letter:font-display first-letter:text-black first-letter:float-left first-letter:mr-3">
                                Heartstrings began not as an organization, but as a promise. A promise made in a small, dusty garage in 1998, amidst stacks of old polaroids and handwritten journals. We believed that every child’s life is a story worth telling, and more importantly, a story worth changing for the better.
                            </p>
                            <p>
                                What started with local community gatherings has blossomed into a global movement. Anchored in the belief that love is action, we have traversed borders to bring education, healthcare, and joy to the most underserved corners of the world.
                            </p>
                            <p>
                                We are endless dreamers and practical doers. From building schools in remote villages to organizing art therapy sessions in bustling cities, our work is driven by the simple truth that connection heals. We don&apos;t just provide aid; we build family.
                            </p>
                            <p className="font-display italic text-lg text-gray-900 border-l-4 border-primary pl-4 my-6">
                                &quot;To change the world, you first have to see it clearly, and then, you have to love it fiercely.&quot;
                            </p>
                            <p>
                                Join us as we continue to write this story. There are many chapters left to fill, and there is a page waiting just for you.
                            </p>
                        </div>

                        <div className="mt-10 pt-6 border-t border-gray-300 flex justify-between items-center">
                            <span className="font-mono text-xs uppercase tracking-widest text-gray-400">Est. 1998</span>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="font-mono text-xs uppercase tracking-widest border-b border-black pb-1 hover:text-primary hover:border-primary transition-colors"
                            >
                                Close Article
                            </button>
                        </div>
                    </div>
                </div>
            )}

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
                                    (123) 210-3807
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
