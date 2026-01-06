import Avatar from "@/components/Avatar";
import Bounded from "@/components/Bounded"
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Link from "next/link";

const PrimaryText = "About me"

const Biography = ({ bio }: { bio: string }) => {

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
          <Button linkField="/Alexandre_Gravereaux_resume.pdf" label="Resume" />
          <Avatar
            image_link="/profile.jpg"
            alt="image profile"
            className="row-start-1 max-w-sm md:col-start-2 md:row-end-3" />
        </div>
      </Bounded>
    </>
  );
}

export default Biography