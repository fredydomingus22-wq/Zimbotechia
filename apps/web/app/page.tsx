export default function HomePage() {
  return (
    <section className="max-w-2xl space-y-6 text-center">
      <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
        <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
        Monorepo pronto para acelerar agentes de IA
      </div>
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Zimbotechia Workspace
        </h1>
        <p className="text-lg text-slate-600">
          Next.js 14 com Tailwind CSS já configurado. Use este ponto de partida para criar experiências web modernas e integradas com nossa API NestJS.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <a
          className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
          href="#"
        >
          Ver documentação
        </a>
        <a
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
          href="#"
        >
          Abrir API NestJS
        </a>
      </div>
    </section>
  );
}
