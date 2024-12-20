import { useRef } from "react";
// import Pagination from "../../../UI/Pagination/Pagination";
import PrimaryTitle from "../../../UI/PrimaryTitle/PrimaryTitle";
import ProjectCard from "../../../UI/ProjectCard/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Icons from "../../../UI/Icons/Icons";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Buttons from "../../../UI/Buttons/Buttons";

gsap.registerPlugin(ScrollTrigger);

// sample projects
const projects = [
  {
    name: "Teachfosys",
    liveLink: "https://teachfosys.com/",
    image: "https://i.ibb.co.com/YcksWb2/Screenshot-223.jpg",
    technologies: ["react", "tailwind"],
  },
];

export default function Projects() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.from(".card_container", {
        y: 100,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "top -200%",
          // markers: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="mx-auto max-w-full lg:max-w-5xl px-6 lg:px-14 xl:max-w-7xl 2xl:max-w-[96rem] py-8"
    >
      <div className="my-4">
        <PrimaryTitle
          main={"My Working"}
          mainStyle={"text-4xl"}
          subStyle={"bg-primary"}
          sub={"Projects"}
          subTitle={"Projects"}
        />
      </div>
      <div className="card_container grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 py-8 place-items-center ">
        {projects.map((project, index) => (
          <div key={index} className="card w-full mx-auto">
            <li className="pro_name mb-4 text-2xl font-medium text-white">
              <span>{project.name}</span>
            </li>
            <ProjectCard project={project} />
            <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
              <div className="w-[30%]">
                <Buttons type={"outline"}>
                  <span>About</span>
                  <span className="text-lg ">
                    <Icons type={"arrow-right"} />
                  </span>
                </Buttons>
              </div>
              <div className="w-[30%]">
                <Buttons type={"outline"}>
                  <span>Github</span>
                  <span className="text-lg ">
                    <Icons type={"arrow-right"} />
                  </span>
                </Buttons>
              </div>
              <div className="w-[30%]">
                <Buttons type={"outline"}>
                  <span>Demo</span>
                  <span className="text-lg">
                    <Icons type={"arrow-right"} />
                  </span>
                </Buttons>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex justify-center w-full">
        <Pagination />
      </div> */}
    </div>
  );
}
