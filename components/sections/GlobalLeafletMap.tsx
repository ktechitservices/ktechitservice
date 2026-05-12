"use client";

import { useMemo } from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, Polyline } from "react-leaflet";
import { CheckCircle2, Globe2, MapPin, Network, Radar } from "lucide-react";

const regions = [
  {
    name: "Canada",
    position: [56.1304, -106.3468] as [number, number],
    description: "North America talent and client reach",
  },
  {
    name: "USA",
    position: [37.0902, -95.7129] as [number, number],
    description: "IT staffing and consulting coverage",
  },
  {
    name: "Middle East",
    position: [25.2048, 55.2708] as [number, number],
    description: "Regional business and delivery network",
  },
  {
    name: "India",
    position: [20.5937, 78.9629] as [number, number],
    description: "Technology talent and delivery capability",
  },
];

const capabilities = [
  "Global IT talent sourcing",
  "Remote and hybrid hiring support",
  "AI-assisted candidate matching",
  "Cross-region technology staffing",
];

export function GlobalLeafletMap() {
  const markerIcon = useMemo(() => {
    return L.divIcon({
      className: "ktech-map-marker",
      html: `
        <div class="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#CBF7ED] text-[#161925] shadow-lg ring-8 ring-[#CBF7ED]/20">
          <div class="h-3 w-3 rounded-full bg-[#23395B]"></div>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    });
  }, []);

  const connectionLines: [number, number][][] = [
    [
      [56.1304, -106.3468],
      [37.0902, -95.7129],
    ],
    [
      [37.0902, -95.7129],
      [25.2048, 55.2708],
    ],
    [
      [25.2048, 55.2708],
      [20.5937, 78.9629],
    ],
    [
      [56.1304, -106.3468],
      [20.5937, 78.9629],
    ],
  ];

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

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#23395B]">
              <MapContainer
                center={[28, 10]}
                zoom={2}
                minZoom={2}
                maxZoom={5}
                scrollWheelZoom={false}
                dragging
                zoomControl={false}
                attributionControl={false}
                className="h-[380px] w-full sm:h-[460px]"
                worldCopyJump
              >
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                  attribution='&copy; OpenStreetMap contributors &copy; CARTO'
                />

                {connectionLines.map((line, index) => (
                  <Polyline
                    key={index}
                    positions={line}
                    pathOptions={{
                      color: "#CBF7ED",
                      weight: 2,
                      opacity: 0.7,
                      dashArray: "8 10",
                    }}
                  />
                ))}

                {regions.map((region) => (
                  <Marker
                    key={region.name}
                    position={region.position}
                    icon={markerIcon}
                  >
                    <Popup>
                      <div className="min-w-[180px]">
                        <p className="text-sm font-black text-[#161925]">
                          {region.name}
                        </p>
                        <p className="mt-1 text-xs font-semibold leading-5 text-slate-600">
                          {region.description}
                        </p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>

              <div className="pointer-events-none absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-[#161925]/90 p-4 backdrop-blur">
                <div className="flex gap-3">
                  <Network className="mt-0.5 shrink-0 text-[#CBF7ED]" />
                  <p className="text-sm font-bold leading-6 text-slate-200">
                    Global IT staffing support for remote, hybrid, and
                    cross-region technology hiring needs.
                  </p>
                </div>
              </div>
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
    </section>
  );
}