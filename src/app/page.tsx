import Home from "../components/Home"
import Biography from "@/components/Biography";
import Experience from "@/components/Experience";
import TechList from "@/components/TechList";
import Bounded from "@/components/Bounded";
import ContentIndex from "@/components/ContentIndex";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import {bio, education, experiences, items} from "./data"

export default function Main() {

  const titre = "My projects"
  const PrimaryText = "Here's an overview of all the projects I've worked on"

  return (
    <div>
      <Home />
      <Biography bio={bio}/>
      <TechList />

      <Bounded className="lg:py-0 lg:pt-10">
      <Heading as="h2" size="lg">
        {"My last project:"}
      </Heading>
      <div className="flex items-center">
      <Heading as="h3" size="sm" className="m-10">
        {"Prisoner's dilemma"}
      </Heading>
      <Button linkField="https://prisoner.alexandregravereaux.xyz/" label="Try it now!" />
      </div>


      </Bounded>


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
