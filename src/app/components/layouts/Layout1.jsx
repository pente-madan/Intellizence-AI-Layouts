function Heading() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Heading 1">
      <p className="capitalize font-['Open_Sans:Bold',sans-serif] font-bold leading-[75px] relative shrink-0 text-[#383838] text-[72px] text-center w-[940px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AI POWERED COMPANY<br />
        INTELLIGENCE PLATFORM
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="font-['Roboto:Regular',sans-serif] font-normal h-[84px] leading-[28px] relative shrink-0 text-[#383838] text-[20px] text-center w-[917px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute left-[457px] top-[-1px] w-[914px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Sales & Growth, Risk & Distress Signals in Companies Curated from External Data Sources.`}</p>
      <p className="-translate-x-1/2 absolute left-[457px] top-[37px] w-[914px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Maximize Revenue | Minimize Risk
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#1d8cf8] content-stretch flex items-center justify-center px-[32px] py-[20px] relative rounded-[12px] shrink-0" data-name="Button">
      <p className="capitalize font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Schedule a Demo</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[32px] py-[20px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#1d8cf8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="capitalize font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1d8cf8] text-[18px] whitespace-nowrap">Start a Free trail</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Buttons">
      <Button />
      <Button1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[352px] items-center justify-between left-[42.45px] px-[215px] top-[90px] w-[1280px]" data-name="Container">
      <Heading />
      <Paragraph />
      <Buttons />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[36px] min-w-px relative text-[#1d8cf8] text-[30px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        10 Million+
      </p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px] left-[117.51px] text-[#90a1b9] text-[14px] text-center top-[-1.11px] tracking-[0.7px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Signals Delivered
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-start left-0 top-0 w-[236px]" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[36px] min-w-px relative text-[#1d8cf8] text-[30px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        100+
      </p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px] left-[117.71px] text-[#90a1b9] text-[14px] text-center top-[-1.11px] tracking-[0.7px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Signals
      </p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-start left-[268px] top-0 w-[236px]" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[36px] min-w-px relative text-[#1d8cf8] text-[30px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>{`10,000+ `}</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px] left-[118.06px] text-[#90a1b9] text-[14px] text-center top-[-1.11px] tracking-[0.7px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sources
      </p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-center left-[536px] top-0 w-[236px]" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] h-[60px] min-w-px relative" data-name="Container">
      <Container3 />
      <Container6 />
      <Container9 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex h-[114px] items-center justify-center left-[240px] px-[56px] py-[20px] top-[492px] w-[884px]" data-name="Container">
      <Container2 />
    </div>
  );
}

export default function Layout() {
  return (
    <div className="bg-white relative size-full" data-name="Layout 1">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[696px] left-1/2 opacity-40 top-1/2 w-[1364px]" data-name="bg">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="https://res.cloudinary.com/drhyerkn7/image/upload/v1778739713/Layout_1_oblfkl.png" />
      </div>
      <Container />
      <Container1 />
    </div>
  );
}





