import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import arrow from "../../../public/right-arrow.png";

export default function Marquee() {
  const container = useRef(null);

  useGSAP(() => {
    window.addEventListener("wheel", (event) => {
      if (event.deltaY > 0) {
        gsap.to(".marquee", {
          transform: "translateX(-100%)",
          duration: 8,
          ease: "none",
          repeat: -1,
        });
        gsap.to(".marquee img", {
          rotate: 180,
          duration: 1,
        });
      } else {
        gsap.to(".marquee", {
          transform: "translateX(0%)",
          duration: 8,
          ease: "none",
          repeat: -1,
        });
        gsap.to(".marquee img", {
          rotate: 0,
          duration: 1,
        });
      }
    });
  });

  return (
    <div
      ref={container}
      className="mx-auto max-w-full text-white text-2xl lg:text-8xl overflow-hidden py-2"
    >
      <div className="flex items-center font-bold uppercase">
        <div className="marquee flex gap-[3vw] items-center px-[1.5vw] flex-shrink-0">
          <h2 className="leading-none">MERN Stack Developer</h2>
          <img className="h-[3.5vw]" src={arrow} alt="" />
        </div>
        <div className="marquee flex gap-[3vw] items-center px-[1.5vw] flex-shrink-0">
          <h2 className="leading-none">MERN Stack Developer</h2>
          <img
            className="h-[3.5vw]"
            src="../../../public/right-arrow.png"
            alt=""
          />
        </div>
        <div className="marquee flex gap-[3vw] items-center px-[1.5vw] flex-shrink-0">
          <h2 className="leading-none">MERN Stack Developer</h2>
          <img
            className="h-[3.5vw]"
            src="../../../public/right-arrow.png"
            alt=""
          />
        </div>
        {/* <div className="marquee flex gap-[3vw] items-center px-[1.5vw] flex-shrink-0">
          <h2 className="leading-none">MERN Stack Developer</h2>
          <img
            className="h-[3.5vw]"
            src="../../../public/right-arrow.png"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
}
