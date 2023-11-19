import { IoExitOutline, IoMoon, IoSunnySharp } from "react-icons/io5";

export default function HeaderComponent() {
  return (
    <>
      {/* Header */}
      <div className="flex flex-row px-5 h-[80px] items-center justify-between bg-[#f8f9fa]">
        {/* Title Header */}
        <div className="items-center">
          <span className="font-semibold text-base">Dashboard</span>
        </div>

        {/* List Menu Header */}
        <div className="flex flex-row gap-x-5 items-center justify-end">
          {/* List organization */}
          <select value={""} className="px-1 bg-white border rounded-md text-sm h-[35px]">
            <option disabled selected defaultValue={""} value={""} className="text-sm">
              --All Organization--
            </option>
          </select>

          {/* Light or dark mode */}
          <div className="flex flex-row items-center">
            <IoSunnySharp size={30} color="#67748e" />

            {/* Set Toggle */}
            <div className="flex items-center justify-center w-full">
              <label className="flex items-center cursor-pointer">
                {/* Toggle */}
                <div className="relative">
                  {/* Input */}
                  <input type="checkbox" className="sr-only" />
                  {/* Line */}
                  <div className="block bg-[#e4e6eb] w-14 h-[24px] rounded-full" />
                  {/* Dot */}
                  <div className="dot absolute left-1 top-0.5 bg-white w-[20px] h-[20px] rounded-full transition" />
                </div>
              </label>
            </div>

            <IoMoon size={35} color="#67748e" />
          </div>

          <button type="button" className="items-center">
            <IoExitOutline size={25} color="#67748e" />
          </button>
        </div>
      </div>
    </>
  );
}
