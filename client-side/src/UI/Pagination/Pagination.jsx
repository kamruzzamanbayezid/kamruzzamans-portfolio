export default function Pagination() {
  return (
    <nav role="navigation" aria-label="Pagination Navigation">
      <ul className="flex items-center justify-center overflow-hidden text-sm list-none border divide-x rounded divide-slate-200 border-slate-200 text-slate-700">
        <li>
          <a
            href="javascript:void(0)"
            aria-label="Goto Page 1"
            className="inline-flex items-center justify-center h-10 gap-4 px-4 text-md font-medium transition duration-300 focus-visible:outline-none stroke-slate-700 text-white hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600"
          >
            <span className="order-2 md:sr-only">Prev</span>
            {/* pre icon */}
          </a>
        </li>
        {/* page number */}
        <li>
          <a
            href="javascript:void(0)"
            aria-label="Goto Page 1"
            className="items-center justify-center hidden h-10 px-4 text-sm font-medium transition duration-300 focus-visible:outline-none stroke-slate-700 text-slate-700 hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 focus:text-emerald-600 md:inline-flex"
          >
            1
          </a>
        </li>

        {/* next button */}
        <li>
          <a
            href="javascript:void(0)"
            aria-label="Goto Page 4"
            className="inline-flex items-center justify-center h-10 gap-4 px-4 text-sm font-medium transition duration-300 focus-visible:outline-none stroke-slate-700 text-slate-700 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600"
          >
            <span className="md:sr-only">Next</span>
            {/* next icon */}
          </a>
        </li>
      </ul>
    </nav>
  );
}
