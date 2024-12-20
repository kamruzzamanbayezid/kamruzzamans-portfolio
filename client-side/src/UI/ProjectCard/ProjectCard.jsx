/* eslint-disable react/prop-types */

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import Icons from "../Icons/Icons";

// eslint-disable-next-line no-unused-vars
export default function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: cardRef });
  const [cardHover, setCardHover] = useState(false);

  const handleMouseHover = contextSafe(() => {
    console.log("Hover");
    gsap.to(cardRef.current, {
      scale: 0.9,
      duration: 1,
    });
    setCardHover(true);
    gsap.to(imgRef.current, {
      scale: 1.2,
      duration: 1,
      filter: "blur(10px)",
    });
  });

  const handleMouseLeave = contextSafe(() => {
    gsap.to(cardRef.current, {
      scale: 1,
      duration: 1,
    });
    setCardHover(false);
    gsap.to(imgRef.current, {
      scale: 1,
      duration: 1,
      filter: "blur(0px)",
    });
  });

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-hidden bg-white rounded shadow-md text-slate-500"
    >
      <div
        className={`${
          !cardHover && "hidden"
        } w-full h-full absolute top-0 z-[50] flex justify-center items-center gap-[3vw] bg-transparent`}
      >
        {project?.technologies.map((tec, index) => (
          <span key={index}>
            <Icons type={tec} style={"text-7xl"} />
          </span>
        ))}
      </div>
      {/* <!-- Image --> */}
      <figure ref={imgRef}>
        <img
          src={project.image}
          alt="project image"
          className="aspect-video w-full"
        />
      </figure>
    </div>
  );
}
