import Avatar from "@/components/Avatar";
import Bounded from "@/components/Bounded"
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import TechList from "@/components/TechList";

const PrimaryText = "Test"
const bio = "Ceci est une biographie de ma personne. I am curious, hard-working, and particularly motivated by the subjects " 
+ "I am passionate about: computer science, chemistry, physics. My skills of analysis and synthesis allow me to lead projects with efficiency. "
+ "My thoroughness and my ability to listen to advice are part of my strengths."
+ "In addition to my engineering studies, I am a member of several associations that allow me to develop my technical, artistic and soft skills."

const Biography = () => {

  return (
    <>
    <Bounded>
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading as="h1" size="xl" className="col-start-1">
          {PrimaryText}
        </Heading>
        <div className="prose prose-xl prose-slate prose-invert col-start-1">
          {bio}
        </div>
        <Button linkField="/" label="Résumé" />
        <Avatar 
        image_link="/profile.jpg" 
        alt="image profile"
        className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"/>
      </div>
    </Bounded>
    <TechList />
    </>
  );
}

export default Biography