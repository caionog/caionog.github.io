const projects = {
  1: {
    title: 'Exemplo 1',
    summary: 'Uma landing page voltada para apresentar uma solução de produtividade com foco em conversão.',
    details: 'Projeto pensado para praticar estrutura visual, seções claras e um fluxo simples de navegação.',
    stack: ['React', 'Tailwind', 'Vite'],
  },
  2: {
    title: 'Exemplo 2',
    summary: 'Um painel analítico para acompanhar métricas e destacar informações importantes de forma visual.',
    details: 'Ideal para experimentar cartões, estatísticas e composição orientada a dados.',
    stack: ['React', 'Charts', 'UI system'],
  },
  3: {
    title: 'Exemplo 3',
    summary: 'Uma página de apresentação para um produto digital com foco em storytelling e identidade visual.',
    details: 'Base útil para testar tipografia, ritmo visual e animações leves.',
    stack: ['React', 'Tailwind', 'Motion'],
  },
};

const skills = [
  'React',
  'Tailwind CSS',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Git/GitHub',
  'APIs REST',
  'UI responsiva',
];

function HomePage() {
  return (
    <main>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="section-shell flex items-center justify-between py-4">
          <a href="#top" className="text-sm font-semibold tracking-[0.25em] text-white uppercase">
            Caio Cordeiro
          </a>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#sobre" className="hover:text-cyan-300">Sobre</a>
            <a href="#habilidades" className="hover:text-cyan-300">Habilidades</a>
            <a href="#projetos" className="hover:text-cyan-300">Projetos</a>
            <a href="#contato" className="hover:text-cyan-300">Contato</a>
          </nav>
        </div>
      </header>

      <section id="top" className="section-shell pt-16 md:pt-24">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              Portfólio em React + Tailwind
            </div>
            <div className="space-y-5">
              <p className="section-kicker">Sobre mim</p>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
                Construindo experiências digitais modernas, rápidas e objetivas.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                Sou Caio Cordeiro, desenvolvedor em formação, e este espaço vai concentrar meu sobre mim,
                habilidades, projetos e formas de contato.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#projetos" className="rounded-full bg-cyan-300 px-6 py-3 font-medium text-slate-950 shadow-glow">
                Ver projetos
              </a>
              <a href="#contato" className="rounded-full border border-white/15 px-6 py-3 font-medium text-white hover:bg-white/5">
                Falar comigo
              </a>
            </div>
          </div>

          <aside className="glass-card rounded-3xl p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Resumo</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">Base pronta para crescer</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Foco</p>
                  <p className="mt-2 text-lg font-medium text-white">Portfólio pessoal</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Stack</p>
                  <p className="mt-2 text-lg font-medium text-white">React + Tailwind</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Entrega</p>
                  <p className="mt-2 text-lg font-medium text-white">GitHub Pages</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Próximo passo</p>
                  <p className="mt-2 text-lg font-medium text-white">Detalhar projetos</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="sobre" className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="section-kicker">Sobre mim</p>
            <h2 className="section-title mt-3">Uma base limpa para contar sua história.</h2>
          </div>
          <div className="glass-card rounded-3xl p-6 text-lg leading-8 text-slate-300 md:p-8">
            <p>
              Aqui você poderá apresentar quem é, sua formação, o que gosta de construir e quais áreas quer
              destacar no portfólio. A estrutura já foi pensada para ficar fácil de expandir sem perder a
              organização visual.
            </p>
          </div>
        </div>
      </section>

      <section id="habilidades" className="section-shell">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="section-kicker">Habilidades</p>
            <h2 className="section-title mt-3">Ferramentas e tecnologias.</h2>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projetos" className="section-shell">
        <div>
          <p className="section-kicker">Projetos</p>
          <h2 className="section-title mt-3">Três exemplos para começar.</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Cada projeto abaixo aponta para uma página dedicada. Hoje elas já existem como base, e depois você pode
            detalhar objetivos, stack, desafios e resultados.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {Object.entries(projects).map(([id, project]) => (
            <article key={id} className="glass-card flex h-full flex-col rounded-3xl p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">Projeto {id}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 flex-1 leading-7 text-slate-300">{project.summary}</p>
              <a
                href={`/project${id}.html`}
                className="mt-6 inline-flex items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-3 font-medium text-cyan-200 hover:bg-cyan-300/15"
              >
                Ver projeto
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="contato" className="section-shell pb-24">
        <div className="glass-card rounded-3xl p-6 md:p-8">
          <p className="section-kicker">Contato</p>
          <h2 className="section-title mt-3">Pronto para conversar.</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Depois você pode trocar estes links por seus canais reais. O layout já está preparado para essa área.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-200">
            <a href="mailto:seuemail@email.com" className="rounded-full border border-white/10 px-4 py-2 hover:bg-white/5">
              seuemail@email.com
            </a>
            <a href="https://github.com/" className="rounded-full border border-white/10 px-4 py-2 hover:bg-white/5">
              GitHub
            </a>
            <a href="https://www.linkedin.com/" className="rounded-full border border-white/10 px-4 py-2 hover:bg-white/5">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProjectPage({ projectId }) {
  const project = projects[projectId] ?? projects[1];

  return (
    <main className="section-shell py-16">
      <a href="/index.html" className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 hover:bg-white/5">
        Voltar para o início
      </a>

      <section className="mt-8 glass-card rounded-3xl p-6 md:p-10">
        <p className="section-kicker">Projeto {projectId}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-6xl">{project.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{project.summary}</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-300">
            <h2 className="text-xl font-semibold text-white">Visão geral</h2>
            <p className="mt-4 leading-7">{project.details}</p>
            <p className="mt-4 leading-7">
              Aqui você pode adicionar prints, links externos, métricas e qualquer detalhe técnico que queira mostrar
              no futuro.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">Stack</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full border border-white/10 px-3 py-2 text-sm text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function App({ page, projectId }) {
  if (page === 'project') {
    return <ProjectPage projectId={projectId} />;
  }

  return <HomePage />;
}