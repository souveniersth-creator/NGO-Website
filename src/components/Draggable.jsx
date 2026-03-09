'use client';

import React, { useState, useRef, useEffect } from 'react';

export default function Draggable({ children, className = '' }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const dragRef = useRef(null);
    const posRef = useRef({ x: 0, y: 0 }); // To keep track during render without relying on state

    const handlePointerDown = (e) => {
        setIsDragging(true);
        dragRef.current.setPointerCapture(e.pointerId);
        posRef.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y
        };
        // Disable text selection during drag
        document.body.style.userSelect = 'none';
        document.body.style.cursor = 'grabbing';
    };

    const handlePointerMove = (e) => {
        if (!isDragging) return;

        const newX = e.clientX - posRef.current.x;
        const newY = e.clientY - posRef.current.y;

        setPosition({ x: newX, y: newY });
    };

    const handlePointerUp = (e) => {
        setIsDragging(false);
        dragRef.current.releasePointerCapture(e.pointerId);
        // Re-enable text selection
        document.body.style.userSelect = '';
        document.body.style.cursor = '';
    };

    return (
        <div
            ref={dragRef}
            className={`${className} cursor-grab active:cursor-grabbing hover:z-50`}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                willChange: 'transform',
                touchAction: 'none', // Prevent scrolling on touch devices while dragging
                zIndex: isDragging ? 60 : undefined
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
        >
            {children}
        </div>
    );
}
