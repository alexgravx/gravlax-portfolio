"use client";

import React, { useEffect, useRef } from "react"
import { MdCircle } from "react-icons/md"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "./Heading";
import Bounded from "./Bounded";

gsap.registerPlugin(ScrollTrigger)

export default function TechList() {

    interface techitem {
        tech_color: string;
        tech_name: string;
      }

    const items:techitem[] = [
        {tech_name:"Frontend", tech_color: "#ed8c36"},
        {tech_name:"Backend", tech_color: "#fefce4"},
        {tech_name:"Mobile", tech_color: "#f5c7f8"},
        {tech_name:"DevOps", tech_color: "#88e57b"},
        ]

    const component = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: component.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 4,
                }
            });

            tl.fromTo(
                ".tech-row",
                {
                    x: (index) => {
                        return index % 2 === 0 
                        ? gsap.utils.random(400, 200) 
                        : gsap.utils.random(-400, -200);
                    } 
                },
                {
                    x: (index) => {
                        return index % 2 === 0 
                        ? gsap.utils.random(-400, -200) 
                        : gsap.utils.random(400, 200);
                    }, 
                    ease: "power1.inOut",
                }
            )
        }, component)
        return () => ctx.revert() //cleanup
    })

    return (
        <>
        <section className="overflow-hidden" ref={component}>
            <Bounded as="div">
                <Heading size="xl" className="mb-8" as="h2">
                    Mes compétences
                </Heading>
            </Bounded>
            {items.map(({tech_name, tech_color}, index) => (
                <div key={index} className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700" aria-label={tech_name}>
                    {Array.from({length: 15}, (_, index) => (
                        <React.Fragment key={index}>
                            <span className="tech-item text-8xl font-extrabold uppercase tracking-tighter"
                            style={{
                                color: index === 7 && tech_color ? tech_color : "inherit"
                            }}>
                                {tech_name}
                            </span>
                            <span className="text-3xl">
                                <MdCircle />
                            </span>
                        </React.Fragment>
                    ))}
                </div>
            ))}
        </section>
        <div className="h-[500vh]"></div>
        </>

    );
  }