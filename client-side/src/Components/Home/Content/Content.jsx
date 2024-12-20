import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import PrimaryTitle from "../../../UI/PrimaryTitle/PrimaryTitle";
import Icons from "../../../UI/Icons/Icons";
import Buttons from "../../../UI/Buttons/Buttons";

export default function Content() {
  const container = useRef(null);
  const tl = useRef(null);

  useGSAP(() => {
    tl.current = gsap.timeline().from(".lending_text", {
      opacity: 0,
      duration: 4,
      stagger: 1,
    });
  });

  const handleDownloadBtn = () => {
    console.log("clicked");
  };

  return (
    <div ref={container} className="py-6 flex flex-col">
      <div className="lending_text my-4">
        <PrimaryTitle
          main={"Hey! i am Bayezid"}
          mainStyle={"text-4xl lg:text-6xl"}
          subStyle={"bg-secondary"}
          subTitle={"Md. Kamruzzaman Bayezid"}
        />
      </div>
      <div className="lending_text my-4">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-justify text-[#c7ced1]">
          Hi, I’m Md Kamruzzaman Bayezid, a passionate MERN Stack Developer with over 1
          year of experience building responsive, user-friendly web
          applications. I specialize in React, Node.js, and MongoDB, and I’m
          always excited to take on new challenges. Let’s create something
          amazing together!
        </p>
      </div>
      <div className="lending_text my-4 flex gap-10">
        <a href="#contact">
          <Buttons type={"primary"}>
            <span>Get in Touch</span>
            <Icons style={"text-primary text-lg"} type="arrow-right" />
          </Buttons>
        </a>
        <a
          href="https://drive.google.com/file/d/1OK1xK15n6YRonbPEZYsQRyGxRa9a1P2g/view?usp=drive_link"
          target={"_blank"}
        >
          <Buttons handler={handleDownloadBtn} type={"outline"}>
            <span>Resume</span>
            <Icons style={"text-primary text-xl"} type="download" />
          </Buttons>
        </a>
      </div>
    </div>
  );
}
