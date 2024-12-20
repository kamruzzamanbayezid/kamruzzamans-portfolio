import AboutContent from "../../../Components/AboutMe/AboutContent/AboutContent";
import { useEffect } from "react";

export default function AboutMe() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center mx-auto max-w-full lg:max-w-5xl px-6 lg:px-14 xl:max-w-7xl 2xl:max-w-[96rem]">
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <dotlottie-player
          src="https://lottie.host/753d6163-f6bd-4a8c-9900-f29e0a0f065d/MWFIz9bucD.json"
          background="transparent"
          speed="1"
          style={{ width: "400px", height: "400px" }}
          loop
          autoplay
        ></dotlottie-player>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <AboutContent />
      </div>
    </div>
  );
}
