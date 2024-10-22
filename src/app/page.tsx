import Home from "../components/Home"
import Biography from "@/components/Biography";
import Experience from "@/components/Experience";
import TechList from "@/components/TechList";
import Bounded from "@/components/Bounded";
import ContentIndex from "@/components/ContentIndex";
import Heading from "@/components/Heading";
import {bio, education, experiences, items} from "./data"

export default function Main() {

  const titre = "My projects"
  const PrimaryText = "Here's an overview of all the projects I've worked on"

  return (
    <div>
      <Home />
      <Biography bio={bio}/>
      <TechList />
      <Experience heading="Education" experiences={education}/>
      <Experience heading="Experience" experiences={experiences}/>

      <Bounded>
          <Heading size="xl" className="mb-8">
            {titre}
          </Heading>
          <div className="prose prose-xl prose-invert mb-10">
            {PrimaryText}
          </div>
          <ContentIndex items={items}/>
      </Bounded>
    </div>
  );
}
