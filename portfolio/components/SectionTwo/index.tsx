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
    image: "",
    link: "https://www.google.com",
    technologies: ["React", "NextJS", "TypeScript", "TailwindCSS"],
  },
  {
    type: "Bootcamp Project",
    title: "Feed-A-Star-Mole Game",
    description:
      "Description of the project. This should be fairly concise while also describing the key components that you developed or worked on. It can be as long as you need it to be but should at least be a few sentences long. Be sure to include specific links anywhere in the description. A link looks like ",
    image: "",
    link: "https://www.google.com",
    technologies: ["NextJS", "JavaScript", "CSS"],
  },
  {
    type: "Photography Project",
    title: "Wall of Wonder Collection",
    description:
      "Description of the project. This should be fairly concise while also describing the key components that you developed or worked on. It can be as long as you need it to be but should at least be a few sentences long. Be sure to include specific links anywhere in the description. A link looks like ",
    image: "",
    link: "https://www.google.com",
    technologies: ["React", "TypeScript", "CSS"],
  },
];

export const SectionTwo = () => {
  return (
    <section>
      <div>
        <>
          {data.map((item, index) => {
            return <SectionTwoItem key={index} itemKey={index} data={item} />;
          })}
        </>
      </div>
    </section>
  );
};
