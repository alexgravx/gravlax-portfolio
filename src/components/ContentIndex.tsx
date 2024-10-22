"use client"

import Link from "next/link";
import clsx from "clsx";
import React, { useEffect, useRef } from "react"
import { FaGithub } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

type ProjectType = {
    title: string;
    link: string;
    body: string;
    tags: string[];
}

type ContentListProps = {
    items: ProjectType[];
    contentType?: string;
    fallbackItemImage?: string;
    viewMoreText?: string;
}

const ContentIndex = ({ items, contentType, fallbackItemImage, viewMoreText = "Link"}:ContentListProps) => {

    const urlPrefix = "/projects";

    const component = useRef(null)
    const itemsRef = useRef<Array<HTMLLIElement | null>>([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            itemsRef.current.forEach((item) => {
               gsap.fromTo(item,
                {opacity:0, y:20},
                {
                    opacity:1, 
                    y:0, 
                    duration:1.3, 
                    ease: "power2.inOut", 
                    scrollTrigger: {
                        trigger: item,
                        start: "top bottom-=100px",
                        end: "bottom center",
                        toggleActions: "play none none none none"
                    }
                }
               )
            })
            return () => ctx.revert()
        }, component)
    }, [])

    return (
        <div>
            <ul className="grid border-b border-b-slate-100"
            ref={component}>
                {items.map((item, index) => (
                <li 
                key={index}
                ref={(el) => {itemsRef.current[index] = el}}
                className="list-item opacity-0"
                >
                    <Link 
                    href={item.link}
                    className={clsx("flex flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row", (item.link == "private") ? 'pointer-events-none' : '')}
                    aria-label={item.title}>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold">{item.title}</span>
                            <div className="flex gap-3 text-blue-400 text-lg font-bold">
                                {item.tags.map((tag, index) => (
                                    <span key={index}>{tag}</span>
                                ))}
                            </div>
                        </div>
                        <span className="ml-auto flex items-center gap-2 text-xl font-medium md:ml-0">
                            {(item.link == "private") ? 'Private' : viewMoreText} {(item.link == "private") ? <></> : <FaGithub />}
                        </span>
                    </Link>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default ContentIndex