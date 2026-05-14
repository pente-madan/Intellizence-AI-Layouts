import {
  Building2,
  Globe,
  Handshake,
  DollarSign,
  TrendingUp,
  Users,
  UserCog,
  UserPlus,
  ShieldAlert,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Company Intelligence",
    description: "Curated news signals and insights about target companies with real-time updates.",
  },
  {
    icon: Globe,
    title: "Industry Intelligence",
    description: "Deep-dive news signals covering global industry trends, emerging issues, and market shifts.",
  },
  {
    icon: Handshake,
    title: "M&A Intelligence",
    description: "Comprehensive tracking of Mergers, Acquisitions, and Divestments across all sectors.",
  },
  {
    icon: DollarSign,
    title: "Funding & Capital",
    description: "Real-time data on Startup Funding, Venture Capital, and Private Equity investment deals.",
  },
  {
    icon: TrendingUp,
    title: "Business Expansion",
    description: "Intelligence on major corporate expansions, infrastructure investments, and scaling.",
  },
  {
    icon: Users,
    title: "Workforce Shifts",
    description: "Early detection of company layoffs, organizational downsizing, and major job cuts.",
  },
  {
    icon: UserCog,
    title: "Leadership Changes",
    description: "Monitor C-Level appointments, board shifts, and executive departures globally.",
  },
  {
    icon: UserPlus,
    title: "Talent Acquisition",
    description: "Identify companies announcing aggressive hiring plans and new talent initiatives.",
  },
  {
    icon: ShieldAlert,
    title: "Security & Risk",
    description: "Critical data on security breaches, ransomware attacks, and systemic risk factors.",
  },
];

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group relative bg-white/40 backdrop-blur-sm rounded-[32px] shadow-[0px_8px_30px_0px_rgba(0,0,0,0.04)] overflow-hidden h-full transition-all duration-300 ease-out cursor-pointer hover:-translate-y-2 hover:bg-white/70 hover:shadow-[0px_20px_50px_0px_rgba(29,140,248,0.18)]">
      <div className="absolute bg-[rgba(239,246,255,0.5)] blur-[64px] left-[281.78px] rounded-full size-[128px] top-[-31.11px] transition-all duration-500 group-hover:bg-[rgba(219,234,254,0.8)]" />
      <div className="absolute left-[32.89px] top-[32.89px] bg-[#1d8cf8] flex items-center justify-center px-[14px] rounded-[16px] size-[56px] drop-shadow-[0px_10px_7.5px_rgba(43,127,255,0.3)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        <Icon className="size-[28px] text-white" strokeWidth={1.75} />
      </div>
      <div className="absolute left-[32.89px] top-[120.89px] flex flex-col gap-[16px] items-start w-[312.889px]">
        <p
          className="font-['Arimo:Bold',sans-serif] font-bold leading-[25px] text-[#1a1a1a] text-[20px] whitespace-nowrap transition-colors duration-300 group-hover:text-[#1d8cf8]"
        >
          {title}
        </p>
        <p
          className="font-['Roboto:Regular',sans-serif] font-normal leading-[24.375px] text-[#383838] text-[15px] w-[313px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export function Layout2() {
  return (
    <div className="bg-white relative w-full overflow-hidden" style={{ minHeight: "1400px" }}>
      <div className="absolute bg-[rgba(239,246,255,0.4)] blur-[120px] left-[-134.97px] rounded-full size-[500px] top-[253.06px] pointer-events-none" />
      <div className="absolute bg-[rgba(219,234,254,0.3)] blur-[100px] left-[1014.71px] rounded-full size-[400px] top-[1032.79px] pointer-events-none" />

      <div className="relative mx-auto" style={{ width: "1348px" }}>
        {/* Badge */}
        <div className="absolute bg-[#eff6ff] border-[#dbeafe] border-[0.889px] border-solid h-[35.778px] left-[570.19px] rounded-full top-[44px] w-[206.708px]">
          <div className="absolute bg-[#1d8cf8] left-[16px] opacity-[0.67] rounded-full size-[8px] top-[13px]" />
          <div className="absolute h-[18px] left-[32px] top-[8px] w-[156.931px]">
            <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-1/2 -translate-x-1/2 text-[#1d8cf8] text-[12px] text-center top-[-0.11px] tracking-[1.5px] uppercase whitespace-nowrap">
              Intelligence Engine
            </p>
          </div>
        </div>

        {/* Heading */}
        <div className="absolute h-[105px] left-[303px] top-[112px] w-[741px]">
          <p
            className="absolute font-['Open_Sans:Bold',sans-serif] font-bold left-1/2 -translate-x-1/2 text-[#383838] text-[48px] text-center top-[-1px] w-[752px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <span className="leading-[52.8px]">{`Advanced NLP Meets `}</span>
            <span className="leading-[52.8px]">Machine Intelligence</span>
          </p>
        </div>

        {/* Paragraph */}
        <div className="absolute h-[58.5px] left-[323.55px] top-[241.36px] w-[700px]">
          <p
            className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[29.25px] left-1/2 -translate-x-1/2 text-[#383838] text-[18px] text-center top-[8px] w-[627px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Discovering over a hundred distinct signals from billions of unstructured data points, delivered in a high-fidelity structured format.
          </p>
        </div>

        {/* Cards grid */}
        <div className="absolute left-[34px] top-[356px] w-[1280px]">
          <div className="grid grid-cols-3 gap-x-[32px] gap-y-[32px]">
            {features.map((feature) => (
              <div key={feature.title} className="h-[311px] w-[378.667px]">
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}





