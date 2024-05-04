"use client";

import { useEffect, useRef } from "react";
import { gsap, random } from "gsap";
import Shapes from "./Shapes"
import Bounded from "./Bounded";

export default function Home() {

    const firstName = "Alexandre"
    const lastName = "Gravereaux"
    const title = "Software Engineer"

    const component = useRef(null)

    useEffect(() => {
      let ctx = gsap.context(() => {
        let tl = gsap.timeline()

        tl.fromTo(".name-animation", 
        {
          y: -100, 
          opacity: 0, 
          rotate: -20
        }, 
        {
          y: 0, 
          opacity: 1, 
          rotate: 0, 
          ease: "expo.out",
          duration: 0.5,
          delay: 0.5,
          transformOrigin: "top left",
          stagger: {
            each: 0.1,
            from: "random"
          }
        });

        tl.fromTo(".job-title",
          {
            y: 20,
            opacity: 0,
            scale: 1.2
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "elastic.out(1,0.3)",
            duration: 1
          }
        );

      }, component)
      return () => ctx.revert();
    }, []);

    const renderLetters = (name:String, key:String) => {
      if (!name) return;
      return name.split("").map((letter, index) => (
        <span key={index} className={`name-animation name-animation-${key} inline-block opacity-0`}>
          {letter}
          </span>
      ))
    }

    return (
      <Bounded>
        <div ref={component} className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center">
          <Shapes />
          <div className="col-start-1 md:row-start-1">
            <h1 className="mb-8 text-[clamp(3rem,12vmin,20rem)] font-extrabold leading-none tracking-tighter" aria-label={firstName + " " + lastName}>
              <span className="block text-gray-300">{renderLetters(firstName, "first")}</span>
              <span className="-mt-[.2em] block text-gray-500">{renderLetters(lastName, "last")}</span>
            </h1>
            <span className="job-title block bg-gradient-to-tr from-green-500 via-blue-400 to-green-300 bg-clip-text text-2xl font-bold uppercase tracking[.2em] text-transparent opacity-0 md:text-4xl">{title}</span>
          </div>
        </div>
      </Bounded>
    );
  }