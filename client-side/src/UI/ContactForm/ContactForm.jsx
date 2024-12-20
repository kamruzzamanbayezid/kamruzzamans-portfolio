import Buttons from "../Buttons/Buttons";

export default function ContactForm() {
  return (
    <div className="w-full">
      <form>
        <div className="flex lg:flex-row flex-col gap-4 w-full">
          <div className="relative mb-12 w-full lg:w-1/2">
            <input
              id="id-01"
              type="text"
              name="id-01"
              placeholder="your name"
              className="relative w-full h-10 px-4 py-6 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-[#0788ff] focus:outline-none bg-primary invalid:focus:border-pink-500"
            />
            <label
              htmlFor="id-01"
              className="cursor-text peer-focus:cursor-default peer-autofill:-top-4 absolute left-2 -top-4 z-[1] px-2 text-xs transition-all text-primary behtmlFore:absolute behtmlFore:top-0 behtmlFore:left-0 behtmlFore:z-[-1] behtmlFore:block behtmlFore:h-full behtmlFore:w-full behtmlFore:transition-all behtmlFore:px-4 behtmlFore:py-2 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-focus:behtmlFore:bg-[#0788ff] peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
            >
              Your name
            </label>
          </div>
          <div className="relative mb-12 w-full lg:w-1/2">
            <input
              id="id-01"
              type="text"
              name="id-01"
              placeholder="your name"
              className="relative w-full h-10 px-4 py-6 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-[#0788ff] focus:outline-none bg-primary invalid:focus:border-pink-500"
            />
            <label
              htmlFor="id-01"
              className="cursor-text peer-focus:cursor-default peer-autofill:-top-4 absolute left-2 -top-4 z-[1] px-2 text-xs transition-all text-primary behtmlFore:absolute behtmlFore:top-0 behtmlFore:left-0 behtmlFore:z-[-1] behtmlFore:block behtmlFore:h-full behtmlFore:w-full behtmlFore:transition-all behtmlFore:px-4 behtmlFore:py-2 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-focus:behtmlFore:bg-[#0788ff] peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
            >
              Your name
            </label>
          </div>
        </div>
        <div className="relative mb-12 w-full">
          <input
            id="id-01"
            type="text"
            name="id-01"
            placeholder="your name"
            className="relative w-full h-10 px-4 py-6 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-[#0788ff] focus:outline-none bg-primary invalid:focus:border-pink-500"
          />
          <label
            htmlFor="id-01"
            className="cursor-text peer-focus:cursor-default peer-autofill:-top-4 absolute left-2 -top-4 z-[1] px-2 text-xs transition-all text-primary behtmlFore:absolute behtmlFore:top-0 behtmlFore:left-0 behtmlFore:z-[-1] behtmlFore:block behtmlFore:h-full behtmlFore:w-full behtmlFore:transition-all behtmlFore:px-4 behtmlFore:py-2 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-focus:behtmlFore:bg-[#0788ff] peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
          >
            Your name
          </label>
        </div>
        <div className="relative mb-12 w-full">
          <textarea
            id="id-01"
            type="text"
            name="id-01"
            placeholder="Write your message"
            rows="6"
            className="relative w-full h-32 px-4 py-6 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 bg-primary autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-[#0788ff] focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 resize-none"
          ></textarea>
          <label
            htmlFor="id-01"
            className="cursor-text peer-focus:cursor-default peer-autofill:-top-4 absolute left-2 -top-4 z-[1] px-2 text-xs transition-all text-primary behtmlFore:absolute behtmlFore:top-0 behtmlFore:left-0 behtmlFore:z-[-1] behtmlFore:block behtmlFore:h-full behtmlFore:w-full behtmlFore:transition-all behtmlFore:px-4 behtmlFore:py-2 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-focus:behtmlFore:bg-[#0788ff] peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
          >
            Write your message
          </label>
        </div>
        <div className="w-full">
          <Buttons type="primary">
            <span>Send</span>
          </Buttons>
        </div>
      </form>
    </div>
  );
}
