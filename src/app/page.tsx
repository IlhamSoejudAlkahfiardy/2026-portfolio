import dynamic from "next/dynamic";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { contact } from "@/data/contact";
import { experience } from "@/data/experience";
import { personal } from "@/data/personal";
import { principles } from "@/data/principles";
import { projects } from "@/data/projects";
import { skills, techStack } from "@/data/skills";

const SelectedProjects = dynamic(
  () =>
    import("@/components/sections/SelectedProjects").then(
      (mod) => mod.SelectedProjects
    ),
  { ssr: true }
);

const ExperienceSection = dynamic(
  () =>
    import("@/components/sections/Experience").then((mod) => mod.Experience),
  { ssr: true }
);

const PrinciplesSection = dynamic(
  () =>
    import("@/components/sections/Principles").then((mod) => mod.Principles),
  { ssr: true }
);

const TechStackSection = dynamic(
  () => import("@/components/sections/TechStack").then((mod) => mod.TechStack),
  { ssr: true }
);

const CaseStudySection = dynamic(
  () => import("@/components/sections/CaseStudy").then((mod) => mod.CaseStudy),
  { ssr: true }
);

const ContactSection = dynamic(
  () => import("@/components/sections/Contact").then((mod) => mod.Contact),
  { ssr: true }
);

export default function HomePage() {
  return (
    <>
      <Navbar personal={personal} />
      <main>
        <Hero personal={personal} />
        <SelectedProjects projects={projects} />
        <ExperienceSection experience={experience} />
        <PrinciplesSection principles={principles} />
        <TechStackSection skills={skills} techStack={techStack} />
        <CaseStudySection projects={projects} />
        <ContactSection
          contact={contact}
          linkedinUrl={personal.social.linkedin}
          name={personal.name}
        />
      </main>
    </>
  );
}
