import React, { useState } from 'react';

export default function FlipCard({ children, backMessage, containerClassName, innerClassName }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className={`group relative cursor-pointer perspective-1000 ${containerClassName || ''}`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div
                className={`w-full transition-transform duration-700 preserve-3d relative ${isFlipped ? 'rotate-y-180' : ''}`}
            >
                {/* Front Side */}
                <div className={`w-full backface-hidden relative z-10 bg-paper-white ${innerClassName || ''}`}>
                    {children}
                </div>

                {/* Back Side */}
                <div className={`w-full h-full backface-hidden absolute inset-0 rotate-y-180 bg-paper-white flex flex-col items-center justify-center overflow-hidden ${innerClassName || ''}`}>
                    {/* Noise Texture Overlay */}
                    <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.08\'/%3E%3C/svg%3E")' }}></div>

                    <p className="font-handwriting text-2xl md:text-3xl text-gray-800 text-center transform -rotate-2 relative z-10 leading-relaxed px-4">
                        {backMessage}
                    </p>
                    <div className="absolute bottom-4 right-4 rotate-12 opacity-60 z-10">
                        <span className="text-[10px] font-mono border border-gray-400/50 text-gray-500 px-1 py-0.5 rounded-sm">MEM-98</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
