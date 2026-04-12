"use client"

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const content = contentRef.current;

        if (!wrapper || !content) return;

        const smoothness = 0.08;
        let current = 0;
        let target = 0;
        let rafId: number;

        const setBodyHeight = () => {
            document.body.style.height = `${content.getBoundingClientRect().height}px`;
        };

        const smoothScroll = () => {
            target = window.scrollY;
            current = gsap.utils.interpolate(current, target, smoothness);

            if (Math.abs(target - current) < 0.5) {
                current = target;
            }

            gsap.set(content, { y: -current });
            document.documentElement.style.setProperty('--scroll-y', `${current}px`);
            ScrollTrigger.update();
            rafId = requestAnimationFrame(smoothScroll);
        };

        setBodyHeight();
        rafId = requestAnimationFrame(smoothScroll);

        ScrollTrigger.scrollerProxy(document.body, {
            scrollTop(value) {
                if (arguments.length && value !== undefined) {
                    current = value;
                    target = value;
                }
                return current;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
        });

        const resizeObserver = new ResizeObserver(setBodyHeight);
        resizeObserver.observe(content);

        ScrollTrigger.addEventListener("refresh", setBodyHeight);

        return () => {
            cancelAnimationFrame(rafId);
            resizeObserver.disconnect();
            ScrollTrigger.removeEventListener("refresh", setBodyHeight);
            document.body.style.height = "";
        };
    }, []);

    return (
        <div ref={wrapperRef} className="smooth-wrapper">
            <div ref={contentRef} className="smooth-content">
                {children}
            </div>
        </div>
    );
}