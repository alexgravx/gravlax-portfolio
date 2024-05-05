import Bounded from "@/components/Bounded";
import ContentIndex from "@/components/ContentIndex";
import Heading from "@/components/Heading";

const Main = () => {

  const titre = "Mes projets"
  const PrimaryText = "Je présente ici mes projets"

  const items = [
    {title: "Mastering JS Animations", body: "This is the body", tags: ["JS", "Animations"]},
  ]

  return (
    <div>
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

export default Main
