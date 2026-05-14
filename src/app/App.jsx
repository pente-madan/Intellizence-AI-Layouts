import { Layout2 } from "./components/layouts/Layout2";

function Heading() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p
        className="capitalize font-['Open_Sans:Bold',sans-serif] font-bold leading-[75px] relative shrink-0 text-[#383838] text-[64px] text-center w-[940px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        AI POWERED COMPANY<br />
        INTELLIGENCE PLATFORM
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="font-['Roboto:Regular',sans-serif] font-normal h-[84px] leading-[28px] relative shrink-0 text-[#383838] text-[20px] text-center w-[917px]">
      <p
        className="-translate-x-1/2 absolute left-[457px] top-[-1px] w-[914px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >{`Sales & Growth, Risk & Distress Signals in Companies Curated from External Data Sources.`}</p>
      <p
        className="-translate-x-1/2 absolute left-[457px] top-[37px] w-[914px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Maximize Revenue | Minimize Risk
      </p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <button
        type="button"
        className="bg-[#1d8cf8] content-stretch flex items-center justify-center px-[32px] py-[20px] relative rounded-[12px] shrink-0 cursor-pointer transition-all duration-200 ease-out hover:bg-[#1772cc] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#1d8cf8]/40 active:translate-y-0"
      >
        <p className="capitalize font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
          Schedule a Demo
        </p>
      </button>
      <button
        type="button"
        className="group content-stretch flex items-center justify-center px-[32px] py-[20px] relative rounded-[12px] shrink-0 cursor-pointer transition-all duration-200 ease-out hover:bg-[#1d8cf8] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#1d8cf8]/40"
      >
        <div
          aria-hidden="true"
          className="absolute border border-[#1d8cf8] border-solid inset-0 pointer-events-none rounded-[12px]"
        />
        <p className="capitalize font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1d8cf8] text-[18px] whitespace-nowrap transition-colors duration-200 group-hover:text-white">
          Start a Free trail
        </p>
      </button>
    </div>
  );
}

function HeroContent() {
  return (
    <div className="absolute content-stretch flex flex-col h-[352px] items-center justify-between left-[42.45px] px-[215px] top-[90px] w-[1280px]">
      <Heading />
      <Paragraph />
      <Buttons />
    </div>
  );
}

function Stat({
  value,
  label,
  left,
  itemsCenter = false,
}) {
  return (
    <div
      className={`absolute content-stretch flex flex-col gap-[4px] h-[60px] ${itemsCenter ? "items-center" : "items-start"} top-0 w-[236px]`}
      style={{ left }}
    >
      <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full">
        <p
          className="flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[36px] min-w-px relative text-[#1d8cf8] text-[30px] text-center"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {value}
        </p>
      </div>
      <div className="h-[20px] relative shrink-0 w-full">
        <p
          className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px] text-[#90a1b9] text-[14px] text-center tracking-[0.7px] uppercase whitespace-nowrap w-full"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div className="absolute content-stretch flex h-[114px] items-center justify-center left-[240px] px-[56px] py-[20px] top-[492px] w-[884px]">
      <div className="flex-[1_0_0] h-[60px] min-w-px relative">
        <Stat value="10 Million+" label="Signals Delivered" left="0px" />
        <Stat value="100+" label="Signals" left="268px" />
        <Stat value="10,000+ " label="Sources" left="536px" itemsCenter />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-white relative w-full min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <img
          alt=""
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/drhyerkn7/image/upload/v1778739713/Layout_1_oblfkl.png"
        />
      </div>
      <div className="relative mx-auto z-10" style={{ width: "1365px", height: "696px" }}>
        <HeroContent />
        <Stats />
      </div>
      <Layout2 />
    </div>
  );
}
