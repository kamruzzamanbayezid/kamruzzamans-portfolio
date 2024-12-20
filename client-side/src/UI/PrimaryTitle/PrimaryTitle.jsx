/* eslint-disable react/prop-types */

export default function PrimaryTitle({
  subTitle,
  subStyle,
  main,
  mainStyle,
  sub,
}) {
  return (
    <div className="flex flex-col gap-2 primary-title">
      <div className="my-2">
        <span
          className={`px-4 py-2 ${subStyle} text-primary text-lg uppercase`}
        >
          {subTitle}
        </span>
      </div>
      <div className={`my-2 ${mainStyle}`}>
        <span className="capitalize font-bold text-primary leading-10">
          {main}
        </span>{" "}
        <span className="uppercase font-bold text-secondary leading-10">
          {sub}
        </span>
      </div>
    </div>
  );
}
