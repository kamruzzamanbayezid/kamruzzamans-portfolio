import PrimaryTitle from "../../../UI/PrimaryTitle/PrimaryTitle";

export default function AboutContent() {
  return (
    <div className="flex flex-col gap-2 text-white">
      <div className="my-2">
        <PrimaryTitle
          main={"I AM AVAILABLE FOR"}
          mainStyle={"text-4xl"}
          subStyle={"bg-primary"}
          sub={"Frontend Developement"}
          subTitle={"About Me"}
        />
      </div>
      <div className="about-text my-2">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-justify">
          With over a year of experience as a MERN Stack Developer, I have honed
          my skills in building dynamic and scalable web applications. I’m
          proficient in JavaScript, React.js, Node.js, and MongoDB, with a focus
          on delivering efficient, performance-driven solutions. My journey
          began with an online course in web development, which has since led me
          to work on multiple projects, including real-time applications and
          responsive websites. Currently, I’m expanding my expertise in modern
          web technologies and always striving to improve my development skills.
        </p>
      </div>
    </div>
  );
}
