"use client";

import dynamic from "next/dynamic";

const GlobalLeafletMap = dynamic(
  () =>
    import("@/components/sections/GlobalLeafletMap").then(
      (mod) => mod.GlobalLeafletMap
    ),
  {
    ssr: false,
    loading: () => (
      <section className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-[#161925] p-8 text-white shadow-xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8EA8C3]">
              Coverage map
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Loading global presence map...
            </h2>
          </div>
        </div>
      </section>
    ),
  }
);

export function GlobalLeafletMapSection() {
  return <GlobalLeafletMap />;
}