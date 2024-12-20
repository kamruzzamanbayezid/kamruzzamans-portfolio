/* eslint-disable react/prop-types */

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

export default function Loader({ progress }) {
  const text = "Welcome!";
  const text_2 = "Discover my work...";
  const loading = "Loading";
  const container = useRef(null);
  const tl = useRef(null);

  useGSAP(() => {
    tl.current = gsap
      .timeline({ repeat: 0 })
      .from(".content span, .content_2 span", {
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      });

    // tl.current = gsap.timeline().from(".loading_text span", {
    //   opacity: 0,
    //   duration: 0.8,
    //   stagger: 0.1,
    //   repeat: -1
    // });
  });

  return (
    <div
      ref={container}
      className="bg-primary h-[100vh] w-[100vw] flex justify-center items-center"
    >
      <div className="w-[60vw] h-[60%] bg-white flex flex-col justify-between gap-8 px-6 py-8 shadow-2xl rounded-2xl">
        <div className="flex flex-col justify-center items-start text-3xl lg:text-6xl p-4 lg:leading-[4.5rem] font-bold">
          <div className="content">
            {text.split("").map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
          <div className="content_2">
            {text_2.split("").map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-end font-bold p-4">
          <div className="text-lg lg:text-xl uppercase tracking-wide loading_text">
            {loading.split("").map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
          <span className="text-3xl lg:text-7xl">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
