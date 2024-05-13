import Bounded from "@/components/Bounded";
import ContentIndex from "@/components/ContentIndex";
import Heading from "@/components/Heading";

const Main = () => {

  const titre = "My projects"
  const PrimaryText = "Here's an overview of all the projects I've worked on"

  const items = [
    {title: "Twitter insult detector", body: "This is the body", tags: ["Python", "Pandas", "Plotly & Dash"]},
    {title: "Satellite based soil analysis", body: "This is the body", tags: ["Python", "Scikit Learn", "SVM & K-Means"]},
    {title: "Movie Streaming Platform", body: "This is the body", tags: ["JS", "React", "Express"]},
    {title: "Frontend redesign of two websites", body: "This is the body", tags: ["JS", "React"]},
    {title: "Prototyping of an IOS audio Companion", body: "This is the body", tags: ["Swift", "AVAudioEngine"]},
    {title: "Prototyping of tax credit file Companion", body: "This is the body", tags: ["Python", "TGI", "Langchain"]},
    {title: "Drone race leaderboard", body: "This is the body", tags: ["JS", "Electron"]},
    {title: "Betting bot for Telegram", body: "This is the body", tags: ["Python", "BeautifulSoup"]},
    {title: "3e projet DTY", body: "This is the body", tags: [""]},
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
