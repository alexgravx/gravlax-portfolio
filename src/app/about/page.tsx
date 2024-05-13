import Biography from "@/components/Biography";
import Experience from "@/components/Experience";
import TechList from "@/components/TechList";

const Main = () => {

  const experiences = [
    {title: "Test", time_period: "01/01/2020-01/01/2023", institution: "Apple", description: "Ceci est une description"},
    {title: "Test", time_period: "01/01/2020-01/01/2023", institution: "Apple", description: "Ceci est une description"},
    {title: "Test", time_period: "01/01/2020-01/01/2023", institution: "Apple", description: "Ceci est une description"},
    {title: "Test", time_period: "01/01/2020-01/01/2023", institution: "Apple", description: "Ceci est une description"},
    {title: "Test", time_period: "01/01/2020-01/01/2023", institution: "Apple", description: "Ceci est une description"},
  ] 

  return (
    <div>
      <Biography />
      <TechList />
      <Experience heading="Education" experiences={experiences}/>
      <Experience heading="Experience" experiences={experiences}/>
    </div>
  );
}

export default Main