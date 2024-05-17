"use client";
import React from "react";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {

    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0
    });
    const [cursorVariant, setCursorVariant] = useState("default");
  
  
    useEffect(() => {
      const mouseMove = (e:any) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        })
      }
  
      window.addEventListener("mousemove", mouseMove);
  
      return () => {
        window.removeEventListener("mousemove", mouseMove);
      }
    }, []);
  
    const variants:any = {
      default: {
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
      },
      text: {
        height: 150,
        width: 150,
        x: mousePosition.x - 75,
        y: mousePosition.y - 75,
        backgroundColor: "CBD5E1",
        mixBlendMode: "difference"
      }
    }
  
    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");

    return (
        <div className="App flex items-center justify-center h-96">
            <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className='title text-[10rem]'>Hello World</h1>
            <motion.div
              className='cursor bg-slate-300 h-8 w-8 fixed pointer-events-none rounded-[50%] z-50 left-0 top-0'
              variants={variants}
              animate={cursorVariant}
              transition={{
                ease: "linear",
                duration: 0,
              }}
            />
        </div>
    )
}

export default CustomCursor;
