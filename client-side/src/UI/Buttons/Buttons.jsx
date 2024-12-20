/* eslint-disable react/prop-types */

export default function Buttons({ children, type, handler }) {
  return (
    <>
      {type === "primary" && (
        <div
          onClick={handler}
          className="px-6 py-3 bg-btn-primary rounded-full text-primary lg:text-md text-base font-medium flex justify-center items-center gap-2 cursor-pointer uppercase"
        >
          {children}
        </div>
      )}
      {type === "outline" && (
        <div className="px-6 py-3 text-primary lg:text-md text-base font-medium flex justify-center items-center gap-2 border-2 rounded-full cursor-pointer uppercase">
          {children}
        </div>
      )}
    </>
  );
}
