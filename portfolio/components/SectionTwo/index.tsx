import { SectionTwoItem } from "./SectionTwoItem";

export interface Idata {
  type: string;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

const data: Idata[] = [
  {
    type: "Latest Project",
    title: "Wall of Wonder",
    description:
      "Description of the project. This should be fairly concise while also describing the key components that you developed or worked on. It can be as long as you need it to be but should at least be a few sentences long. Be sure to include specific links anywhere in the description. A link looks like ",
    image: "/images/1.png",
    link: "https://www.google.com",
    technologies: ["React", "NextJS", "TypeScript", "TailwindCSS"],
  },
  {
    type: "Bootcamp Project",
    title: "Feed-A-Star-Mole Game",
    description:
      "Description of the project. This should be fairly concise while also describing the key components that you developed or worked on. It can be as long as you need it to be but should at least be a few sentences long. Be sure to include specific links anywhere in the description. A link looks like ",
    image: "images/2.png",
    link: "https://www.google.com",
    technologies: ["NextJS", "JavaScript", "CSS"],
  },
  {
    type: "Photography Project",
    title: "Wall of Wonder Collection",
    description:
      "Description of the project. This should be fairly concise while also describing the key components that you developed or worked on. It can be as long as you need it to be but should at least be a few sentences long. Be sure to include specific links anywhere in the description. A link looks like ",
    image: "images/3.png",
    link: "https://www.google.com",
    technologies: ["React", "TypeScript", "CSS"],
  },
];

export const SectionTwo = () => {
  return (
    <div className="section-dkplum">
      <div className="gradient" />
      <section id="projects">
        <h2>Projects I'm proud of</h2>
        {data.map((item, index) => {
          return <SectionTwoItem key={index} itemKey={index} data={item} />;
        })}
      </section>
    </div>
  );
};
