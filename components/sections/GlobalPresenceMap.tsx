import { CheckCircle2, Globe2, MapPin, Network, Radar } from "lucide-react";

const regions = [
  {
    name: "Canada",
    x: 235,
    y: 150,
    description: "North America talent and client reach",
  },
  {
    name: "USA",
    x: 275,
    y: 225,
    description: "IT staffing and consulting coverage",
  },
  {
    name: "Middle East",
    x: 575,
    y: 250,
    description: "Regional business and delivery network",
  },
  {
    name: "India",
    x: 660,
    y: 305,
    description: "Technology talent and delivery capability",
  },
];

const capabilities = [
  "Global IT talent sourcing",
  "Remote and hybrid hiring support",
  "AI-assisted candidate matching",
  "Cross-region technology staffing",
];

export function GlobalPresenceMap() {
  return (
    <section className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-bold text-[#23395B] shadow-sm">
              <Globe2 size={16} />
              Global delivery and talent reach
            </div>

            <h2 className="text-3xl font-black tracking-tight text-[#161925] sm:text-5xl">
              Connecting talent and hiring needs across key global regions.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              KTech supports IT staffing and technology hiring conversations
              across Canada, the USA, the Middle East, and India through a
              global-facing talent and delivery model.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {capabilities.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm"
                >
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-[#406E8E]"
                    size={20}
                  />
                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-[#161925] p-6 text-white shadow-xl sm:p-8">
            <div className="mb-7 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8EA8C3]">
                  Coverage map
                </p>

                <h3 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Canada · USA · Middle East · India
                </h3>
              </div>

              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#CBF7ED] text-[#161925] sm:flex">
                <Radar size={26} />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#23395B] p-4 sm:p-6">
              <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:44px_44px]" />

              <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-[#406E8E]/40 blur-3xl" />
              <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[#CBF7ED]/20 blur-3xl" />

              <svg
                viewBox="0 0 1000 520"
                className="relative h-[360px] w-full sm:h-[440px]"
                fill="none"
                aria-label="KTech global coverage map"
              >
                {/* World map silhouette */}
                <g fill="#8EA8C3" opacity="0.35">
                  {/* North America */}
                  <path d="M120 130C150 95 205 80 260 92C300 100 325 125 350 150C375 175 398 190 405 225C410 255 392 280 360 285C330 290 310 270 285 265C255 260 230 275 200 265C165 253 140 230 125 200C110 170 98 155 120 130Z" />
                  <path d="M225 285C250 295 268 320 262 350C256 382 238 410 225 445C212 420 200 390 205 355C208 330 215 305 225 285Z" />

                  {/* Europe */}
                  <path d="M470 150C500 125 555 130 575 162C590 185 580 210 552 218C520 226 485 215 470 188C460 170 458 160 470 150Z" />

                  {/* Africa */}
                  <path d="M500 220C545 200 600 225 615 275C632 330 610 392 565 430C525 390 495 340 488 285C485 255 485 235 500 220Z" />

                  {/* Middle East */}
                  <path d="M600 215C635 205 675 220 690 250C668 272 635 272 612 252C598 240 592 225 600 215Z" />

                  {/* Asia */}
                  <path d="M640 135C705 100 805 110 860 160C900 195 915 245 888 285C858 330 790 315 750 292C710 270 675 280 645 260C610 238 595 188 640 135Z" />

                  {/* India */}
                  <path d="M676 278C700 285 718 310 712 340C705 368 682 388 668 412C652 382 642 350 648 320C652 300 660 285 676 278Z" />

                  {/* Australia */}
                  <path d="M780 390C820 372 880 384 905 420C875 455 815 458 770 435C748 424 750 403 780 390Z" />

                  {/* Middle East / Africa extension */}
                  <path d="M610 278C650 278 682 300 690 335C650 342 620 322 610 278Z" />
                </g>

                {/* Connection lines */}
                <path
                  d="M235 150 C350 120, 470 170, 575 250"
                  stroke="#CBF7ED"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="10 14"
                  className="animate-[dash_8s_linear_infinite]"
                />
                <path
                  d="M275 225 C400 325, 520 340, 660 305"
                  stroke="#CBF7ED"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="10 14"
                  className="animate-[dash_8s_linear_infinite]"
                />
                <path
                  d="M575 250 C605 270, 635 288, 660 305"
                  stroke="#CBF7ED"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="10 14"
                  className="animate-[dash_8s_linear_infinite]"
                />

                {/* Region pins */}
                {regions.map((region) => (
                  <g key={region.name}>
                    <circle
                      cx={region.x}
                      cy={region.y}
                      r="36"
                      fill="#CBF7ED"
                      opacity="0.16"
                    />
                    <circle
                      cx={region.x}
                      cy={region.y}
                      r="24"
                      fill="#CBF7ED"
                    />
                    <foreignObject
                      x={region.x - 12}
                      y={region.y - 12}
                      width="24"
                      height="24"
                    >
                      <MapPin className="text-[#161925]" size={24} />
                    </foreignObject>

                    <foreignObject
                      x={region.x - 48}
                      y={region.y + 36}
                      width="110"
                      height="44"
                    >
                      <div className="rounded-full bg-[#161925]/90 px-4 py-2 text-center text-sm font-black text-white shadow-lg backdrop-blur">
                        {region.name}
                      </div>
                    </foreignObject>
                  </g>
                ))}

                {/* Bottom note */}
                <foreignObject x="55" y="425" width="890" height="72">
                  <div className="flex h-full items-center gap-3 rounded-2xl border border-white/10 bg-[#161925]/85 px-5 text-sm font-bold leading-6 text-slate-200 backdrop-blur">
                    <Network className="shrink-0 text-[#CBF7ED]" size={24} />
                    <span>
                      Global IT staffing support for remote, hybrid, and
                      cross-region technology hiring needs.
                    </span>
                  </div>
                </foreignObject>
              </svg>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {regions.map((region) => (
                <div
                  key={region.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-sm font-black text-white">{region.name}</p>
                  <p className="mt-2 text-xs font-semibold leading-5 text-slate-400">
                    {region.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -120;
          }
        }
      `}</style>
    </section>
  );
}