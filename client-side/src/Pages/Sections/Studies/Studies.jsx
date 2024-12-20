import PrimaryTitle from "../../../UI/PrimaryTitle/PrimaryTitle";

const studiesInfo = [
  {
    title: "Front-end Developer",
    institute: "Programming Hero",
    date: "02/2019 – 12/2019",
  },
  {
    title: "Back-end Developer",
    institute: "Programming Hero",
    date: "02/2019 – 12/2019",
  },
];
const experience = [
  {
    title: "Internship",
    position: "Frontend developer",
    institute: "Teachfosys",
    date: "02/2019 – 12/2019",
  },
];

export default function Studies() {
  return (
    <div className="flex flex-col gap-2 mx-auto max-w-full lg:max-w-5xl px-14 xl:max-w-7xl 2xl:max-w-[96rem]">
      <div className="flex flex-col gap-4 w-full">
        <div className="my-2">
          <PrimaryTitle
            subTitle={"Journy of Programming"}
            subStyle={"bg-primary"}
            main={"Studies &"}
            sub={"Experience"}
            mainStyle={"text-4xl"}
          />
        </div>
        <div>
          <div className="border-l-4 border-b-4 border-t-4 border-primary px-10 py-10">
            <div className="px-10 relative flex flex-col gap-8">
              {studiesInfo.map((info, index) => (
                <div key={index} className="flex flex-col gap-2 text-white">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-btn-primary rounded-full absolute left-[-0.3%]" />
                    <h1 className="text-2xl">{info.title}</h1>
                  </div>
                  <span className="text-xl">
                    <h2>{info.institute}</h2>
                  </span>
                  <span className="text-lg">
                    <h3>{info.date}</h3>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="border-r-4 border-b-4 border-primary px-10 py-10">
            <div className="px-10 relative flex flex-col gap-8">
              {experience.map((exp, index) => (
                <div key={index} className="flex flex-col gap-2 text-white">
                  <div className="flex items-center justify-end">
                    <span className="w-3 h-3 bg-btn-primary rounded-full absolute right-[-0.3%]" />
                    <h1 className="text-2xl">{exp.title}</h1>
                  </div>
                  <span className="text-lg text-end">
                    <h2>{exp.position}</h2>
                  </span>
                  <span className="text-xl text-end">
                    <h2>{exp.institute}</h2>
                  </span>
                  <span className="text-md text-end">
                    <h3>{exp.date}</h3>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
