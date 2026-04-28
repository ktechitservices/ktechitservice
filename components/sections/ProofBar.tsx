const stats = [
  {
    value: "48h",
    label: "Initial shortlist target",
    tone: "bg-[#E8E6FF]",
  },
  {
    value: "100%",
    label: "IT-focused hiring",
    tone: "bg-[#DDF2EA]",
  },
  {
    value: "2",
    label: "Employer & candidate journeys",
    tone: "bg-[#F7D6CB]",
  },
  {
    value: "US",
    label: "Delaware-based company",
    tone: "bg-[#E9E6D3]",
  },
];

export function ProofBar() {
  return (
    <section className="bg-[#F4F1DE] px-6 py-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-3xl ${stat.tone} p-6 text-center shadow-sm`}
          >
            <p className="text-5xl font-black leading-none text-[#1B3D2F] md:text-6xl">
              {stat.value}
            </p>

            <p className="mt-2 text-sm font-bold text-[#3D405B]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}