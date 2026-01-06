import Home from "../components/Home"
import Biography from "@/components/Biography";
import Experience from "@/components/Experience";
import TechList from "@/components/TechList";
import Bounded from "@/components/Bounded";
import ContentIndex from "@/components/ContentIndex";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import { bio, education, experiences, items } from "./data"

export default function Main() {

  const titre = "My projects"
  const PrimaryText = "Here's an overview of all the projects I've worked on"

  return (
    <div>
      <Home />
      <Biography bio={bio} />

      {/* Last projects */}
      <Bounded className="lg:py-0 lg:pt-10">
        <Heading as="h1" size="lg" className="mb-12">
          {"My latest projects"}
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Trading Platform */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-blue-400 to-green-300 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
            <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 h-full flex flex-col transition-all duration-300 group-hover:scale-105 border border-slate-700 group-hover:border-transparent">
              <h3 className="text-2xl font-bold text-slate-300 mb-3">Trading Platform</h3>
              <p className="text-slate-400 mb-4 flex-grow text-sm">
                Real-time trading simulation with order books and charts.
              </p>
              <Button linkField="https://trading.alexgravx.com" label="Visit" showIcon={true} />
            </div>
          </div>

          {/* Game of Life */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-blue-400 to-green-300 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
            <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 h-full flex flex-col transition-all duration-300 group-hover:scale-105 border border-slate-700 group-hover:border-transparent">
              <h3 className="text-2xl font-bold text-slate-300 mb-3">Game of Life</h3>
              <p className="text-slate-400 mb-4 flex-grow text-sm">
                Conway&apos;s Game of Life cellular automaton with interactive controls.
              </p>
              <Button linkField="https://gamelife.alexgravx.com/" label="Visit" showIcon={true} />
            </div>
          </div>

          {/* YziLog */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-blue-400 to-green-300 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
            <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 h-full flex flex-col transition-all duration-300 group-hover:scale-105 border border-slate-700 group-hover:border-transparent">
              <h3 className="text-2xl font-bold text-slate-300 mb-3">YziLog</h3>
              <p className="text-slate-400 mb-4 flex-grow text-sm">
                B2B storage space marketplace connecting businesses with storage solutions.
              </p>
              <Button linkField="https://yzilog.com/" label="Visit" showIcon={true} />
            </div>
          </div>

          {/* Prisoner's Dilemma */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-blue-400 to-green-300 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
            <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 h-full flex flex-col transition-all duration-300 group-hover:scale-105 border border-slate-700 group-hover:border-transparent">
              <h3 className="text-2xl font-bold text-slate-300 mb-3">Prisoner&apos;s Dilemma</h3>
              <p className="text-slate-400 mb-4 flex-grow text-sm">
                Interactive game theory simulation exploring cooperation strategies.
              </p>
              <Button linkField="https://prisoner.alexgravx.com/" label="Visit" showIcon={true} />
            </div>
          </div>
        </div>
      </Bounded>

      <TechList />


      <Experience heading="Education" experiences={education} />
      <Experience heading="Experience" experiences={experiences} />

      <Bounded>
        <Heading size="xl" className="mb-8">
          {titre}
        </Heading>
        <div className="prose prose-xl prose-invert mb-10">
          {PrimaryText}
        </div>
        <ContentIndex items={items} />
      </Bounded>
    </div>
  );
}
