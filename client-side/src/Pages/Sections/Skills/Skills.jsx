import Icons from "../../../UI/Icons/Icons";
import PrimaryTitle from "../../../UI/PrimaryTitle/PrimaryTitle";

// skills
const techStack = [
  { title: "HTML", icon: "html", colorCode: "#E34F26" },
  { title: "CSS", icon: "css", colorCode: "#1572B6" },
  { title: "JavaScript", icon: "javaScript", colorCode: "#F7DF1E" },
  { title: "TypeScript", icon: "typeScript", colorCode: "#3178C6" },
  { title: "React", icon: "react", colorCode: "#61DAFB" },
  { title: "Redux", icon: "redux", colorCode: "#764ABC" },
  { title: "Socket.IO", icon: "socket.io", colorCode: "#FFF" },
  { title: "Node.js", icon: "node", colorCode: "#339933" },
  { title: "Express.js", icon: "express", colorCode: "#FFF" },
  { title: "MongoDB", icon: "mongodb", colorCode: "#47A248" },
  { title: "TailwindCSS", icon: "tailwind", colorCode: "#38B2AC" },
  { title: "Firebase", icon: "firebase", colorCode: "#FFCA28" },
  { title: "Astro", icon: "astro", colorCode: "#FF5A03" },
  { title: "Git", icon: "git", colorCode: "#F05032" },
  { title: "GitHub", icon: "github", colorCode: "#FFF" },
];

export default function Skills() {
  return (
    <div className="flex flex-col gap-4 mx-auto max-w-full lg:max-w-5xl px-6 lg:px-14 xl:max-w-7xl 2xl:max-w-[96rem]">
      <div className="my-2">
        <PrimaryTitle
          subTitle={"Skills"}
          subStyle={"bg-secondary"}
          main={"Frontend &"}
          sub={"Backend"}
          mainStyle={"text-4xl"}
        />
      </div>
      <div className="flex flex-wrap gap-x-16 gap-y-20 justify-center items-center my-4">
        {techStack.map((skill, index) => (
          <div
            key={index}
            className="w-25% flex flex-col justify-center items-center gap-2 text-white p-2"
          >
            <span>
              <Icons
                style={`text-6xl text-[${skill.colorCode}]`}
                type={skill.icon}
              />
            </span>
            <span>
              <h1 className="text-xl">{skill.title}</h1>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
