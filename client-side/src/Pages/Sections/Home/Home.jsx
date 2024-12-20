
import image from "../../../../public/portfolio_1.png"
import Content from "../../../Components/Home/Content/Content";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function Home() {

  useGSAP(()=>{
    gsap.from("figure", {
      scale: 0.6,
      duration: 3
    })
  })

  return (
    <div className="flex flex-col-reverse  lg:flex-row mx-auto max-w-full lg:max-w-5xl px-6 lg:px-14 xl:max-w-7xl 2xl:max-w-[96rem] h-full">
      <div className="w-full lg:w-1/2">
        <Content />
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="rounded-full w-11/12 lg:w-8/12 flex justify-center items-center">
          <figure className="rounded-full h-full w-full">
            <img
              src={image}
              className="w-full h-full rounded-full"
              alt="hasan"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}