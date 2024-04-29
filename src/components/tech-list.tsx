import { gsap, random } from "gsap";
import React from "react"
import { MdCircle } from "react-icons/md"

export default function TechList() {

    interface techitem {
        tech_color: string;
        tech_name: string;
      }

    const items:techitem[] = [
        {tech_name:"GSAP", tech_color: "blue"},
        {tech_name:"React", tech_color: "red"}
        ]

    return (
        <section>
            <h1>
            Mes Compétences
            </h1>
            {items.map(({tech_name, tech_color}, index) => (
                <div key={index} className="tech-row mb-4 flex items-center justify-center gap-4 text-slate-700">
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

    );
  }