'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Custom hook for scroll-triggered reveal animations using IntersectionObserver.
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0-1). Default: 0.15
 * @param {string} options.rootMargin - Root margin for the observer. Default: '0px 0px -60px 0px'
 * @param {boolean} options.triggerOnce - Whether to only trigger once. Default: true
 * @returns {{ ref: React.RefObject, isVisible: boolean }}
 */
export function useScrollReveal({
    threshold = 0.15,
    rootMargin = '0px 0px -60px 0px',
    triggerOnce = true,
} = {}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [threshold, rootMargin, triggerOnce]);

    return { ref, isVisible };
}

/**
 * Hook to observe multiple children of a container for staggered reveal.
 * @param {Object} options
 * @param {string} options.childSelector - CSS selector for children to observe. Default: ':scope > *'
 * @param {number} options.staggerDelay - Delay between each child (ms). Default: 120
 * @param {number} options.threshold - Visibility threshold. Default: 0.1
 * @returns {{ containerRef: React.RefObject, visibleItems: Set<number> }}
 */
export function useStaggerReveal({
    childSelector = ':scope > *',
    staggerDelay = 120,
    threshold = 0.1,
} = {}) {
    const containerRef = useRef(null);
    const [visibleItems, setVisibleItems] = useState(new Set());

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const children = container.querySelectorAll(childSelector);
        if (!children.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Array.from(children).indexOf(entry.target);
                        setTimeout(() => {
                            setVisibleItems((prev) => new Set([...prev, index]));
                        }, index * staggerDelay);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold, rootMargin: '0px 0px -40px 0px' }
        );

        children.forEach((child) => observer.observe(child));

        return () => {
            children.forEach((child) => observer.unobserve(child));
        };
    }, [childSelector, staggerDelay, threshold]);

    return { containerRef, visibleItems };
}

/**
 * Hook for parallax scrolling effect.
 * @param {number} speed - Parallax speed factor. Default: 0.3
 * @returns {{ ref: React.RefObject, offset: number }}
 */
export function useParallax(speed = 0.3) {
    const ref = useRef(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    if (ref.current) {
                        const rect = ref.current.getBoundingClientRect();
                        const scrolled = window.innerHeight - rect.top;
                        setOffset(scrolled * speed);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return { ref, offset };
}
