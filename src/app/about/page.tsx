import Biography from "@/components/Biography";
import Experience from "@/components/Experience";
import TechList from "@/components/TechList";

const Main = () => {

  const bio = "I am a MEng student at CentraleSupelec, 2nd highly selective Engineering french school and 16th Engineering school worldwide."
  + " I am curious, hard-working, and particularly motivated by the subjects I am passionate about: computer science, chemistry, physics."
  + " My skills of analysis and synthesis allow me to lead projects with efficiency. My thoroughness and my ability to listen to advice are part of my strengths."
  + " In addition to my engineering studies, I am a member of several associations that allow me to develop my technical, artistic and soft skills."

  const education = [
    {title: "CentraleSupélec", time_period: "2022-2026", institution: "Master Engineering degree", description: "Coursework:"
    +"Computer Science: Web Data Intelligence, Information Systems, Algorithms, Networks and Security;"
    +"Corporate: Corporate finance, Business management, Law (contracts and intellectual property), Economy & Industrial Engineering;"
    +"Physics: Fluid mechanics, Study of materials, Satellite imagery analysis with radiometry and polarimetry;"
    +"Mathematics: Integration, Probability, Partial Differential Equations;"},
    {title: "Collège Stanislas Paris", time_period: "2013-2022", institution: "Scientific bachelor degree", description: "I followed an intensive two-year preparation in Mathematics, Physics, Engineering, Computer Science & Chemistry for the highly selective French School of Engineering (2020-2022)"},
  ] 

  const experiences = [
    {title: "Software Engineer", time_period: "2024", institution: "Paris Digital Lab", description: "Prototyping tech projects for major corporations and start-ups through MVPs."},
    {title: "DevOps Engineer", time_period: "2023-2024", institution: "ViaRézo", description: "ViaRézo provides internet access to 2000+ residents on Paris-Saclay campus and operates several websites and applications related to CentraleSupélec's associative life through an OpenStack virtualization cluster. The whole infrastructure is monitored and protected by backup systems."},
    {title: "TA in Information Systems", time_period: "Sept & Oct 2023", institution: "CentraleSupélec", description: "Leading 20h of Information Systems and Programming tutorials for 30 students."},
    {title: "Operator in Perfume Production", time_period: "July 2023", institution: "Dior", description: "Perfume manufacturing agent at Parfums Christian Dior's worldwide production and research center"},
  ] 

  return (
    <div>
      <Biography bio={bio}/>
      <TechList />
      <Experience heading="Education" experiences={education}/>
      <Experience heading="Experience" experiences={experiences}/>
    </div>
  );
}

export default Main