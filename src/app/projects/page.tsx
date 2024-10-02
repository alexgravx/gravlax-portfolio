import Bounded from "@/components/Bounded";
import ContentIndex from "@/components/ContentIndex";
import Heading from "@/components/Heading";

const items = [
  {title: "Twitter insult detector", date: "10/01/2022", image: "", body: "Development of a website dashboard tracking tweets including insults. Creation of a data pipeline using Twitter API and Pandas. Insults retrieved via Twitter API. Data processing and analysis using a Random Forest algorithm (AI) and a list of keywords.", tags: ["Python", "Pandas", "Plotly & Dash"]},
  {title: "Satellite based soil analysis", date: "01/01/2023", image: "/ProjectsImages/pres-satellite.jpg", body: "Development of an artificial intelligence algorithm to classify soils according to their category (city, forest, field, water, etc.). Use of several methods: SVM, K-Means, and deep neural networks", tags: ["Python", "Scikit Learn", "SVM & K-Means"]},
  {title: "Movie Streaming Platform", date: "06/01/2023", image: "", body: "Development over 1 week of a user-friendly website interface, similar to Netflix, to make user-defined recommendations on what movie they could like.", tags: ["JS", "React", "Express"]},
  {title: "Frontend redesign of two websites", date: "01/01/2023", image: "", body: "Redesign of the frontend of two websites of my association in 2023: the showcase site and a carpooling site for the CentraleSupélec campus.", tags: ["JS", "React"]},
  {title: "Prototyping of an IOS audio Companion", date: "02/01/2024", image: "/ProjectsImages/Sencial.jpg", body: "Development of an IOS companion app for hearing impaired people using audio modulation and AI. Our app retrieve audio data and audiograms from Apple Health app, and can also create audiograms with an experimental method. Our app is able to modulate more than 10 frequencies of the environnment around in real time you while you're listenting to your music or talking to a colleague. This audio modulation can be personalized based on your imported or created audiogram.", tags: ["Swift", "AVAudioEngine"]},
  {title: "Prototyping of tax credit file Companion", date: "04/01/2024", image: "/ProjectsImages/eliccir.jpg", body: "Developement of a tax credit file companion using data parsing and AI.", tags: ["Python", "TGI", "Langchain"]},
  {title: "Drone race leaderboard", date: "03/01/2024", image: "/ProjectsImages/leaderboard.jpg", body: "Development of a leaderboard for drone races. This leaderboard includes the ability to add participants, and to get their time with numerical chronometers. A live leaderboard displays each player ranking and time.", tags: ["JS", "Electron"]},
  {title: "Betting bot for Telegram", date: "05/01/2024", image: "", body: "Creation of a Telegram bot, which can advice betting players how to convert their 'freebet' money into real one with combined bets.", tags: ["Python", "BeautifulSoup"]},
  {title: "A/B Testing Platform", date: "06/12/2024", body: "Development of an A/B Testing platform using a complex pipeline. The plateform should massively test virtual user profiles and provide detailed metrics in order to choose the best coach.", image: "", tags: ["Docker", "Kubernetes", "Helm", "RabbitMQ", "Go"]},
]

const Main = () => {

  const titre = "My projects"
  const PrimaryText = "Here's an overview of all the projects I've worked on"

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

export const items_list = items
export default Main
