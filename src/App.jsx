const projects = {
  1: {
    title: 'Pizza Sales Analytics',
    summary:
      'Pipeline completo de análise de dados com extração de CSV, limpeza em Python, carga em SQL Server e dashboard interativo no Power BI via DirectQuery.',
    details:
      'Projeto de ponta a ponta para transformar dados brutos em uma camada analítica pronta para consumo em BI, com KPIs, gráficos e insights de negócio.',
    stack: ['Python', 'SQL Server', 'Power BI', 'DirectQuery'],
    linkLabel: 'GitHub',
    linkUrl: 'https://github.com/caionog/Pizza-Sales-Analytics',
  },
  2: {
    title: 'Análise dos Microdados do Censo Escolar da Educação Básica 2024',
    summary:
      'Tratamento e exploração de microdados públicos com R (dplyr), visualizações com ggplot2 e publicação de uma análise exploratória narrativa no RPubs.',
    details:
      'Projeto desenvolvido para a disciplina eletiva Computação para Análise de Dados, com foco em limpeza, exploração e comunicação de achados.',
    stack: ['R', 'dplyr', 'ggplot2', 'RPubs'],
    linkLabel: 'RPubs',
    linkUrl: 'https://rpubs.com/caionog/1373340',
  },
};

const skillGroups = [
  {
    title: 'Linguagens',
    items: ['Python', 'R', 'SQL'],
  },
  {
    title: 'Análise e Manipulação de Dados',
    items: ['Pandas', 'NumPy', 'dplyr'],
  },
  {
    title: 'Banco de Dados',
    items: ['SQL Server Management Studio'],
  },
  {
    title: 'Visualização e BI',
    items: ['Power BI', 'ggplot2', 'RPubs'],
  },
];

const photoPath = 'images/foto.png';

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
      <path d="M4 6.5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="m4.5 7.5 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
      <path d="M8.7 5.2c.4-.4 1-.5 1.5-.3l2.1.9c.5.2.9.7.9 1.2v1.7c0 .5-.3 1-.7 1.2l-1.2.6a10 10 0 0 0 3.4 3.4l.6-1.2c.2-.4.7-.7 1.2-.7h1.7c.5 0 1 .4 1.2.9l.9 2.1c.2.5.1 1.1-.3 1.5l-1 1a2 2 0 0 1-2.1.5A15.7 15.7 0 0 1 6.2 8.3a2 2 0 0 1 .5-2.1l2-1Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
      <path d="M7.2 9.2V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7.2 6.2v.1" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M11 18v-4.7c0-1.8 1-2.9 2.6-2.9 1.5 0 2.4 1 2.4 2.9V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 18V9.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
      <path d="M12 4.5a7.5 7.5 0 0 0-2.4 14.6c.4.1.5-.2.5-.4v-1.4c-2 .4-2.4-.8-2.4-.8-.3-.8-.8-1-1-.8-.7.5.1 1.2.1 1.2.6.4.9 1.2.9 1.2.5 1 1.6.7 2 .5.1-.5.3-.9.6-1.1-1.6-.2-3.3-.8-3.3-3.6 0-.8.3-1.5.9-2.1-.1-.2-.4-1 .1-2 0 0 .8-.3 2.5.8a8.6 8.6 0 0 1 4.5 0c1.7-1.1 2.5-.8 2.5-.8.5 1 .2 1.8.1 2 .6.6.9 1.3.9 2.1 0 2.8-1.7 3.4-3.3 3.6.3.2.6.8.6 1.6v2.3c0 .2.1.5.5.4A7.5 7.5 0 0 0 12 4.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

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
                Transformando dados em decisões.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                Estudante de Ciência da Computação pela UFRPE, com foco em Dados e Analytics.
Tenho gosto por inovação e empreendedorismo, sou proativo e gosto de me envolver de verdade nos projetos em que participo. Tenho visão analítica e busco contribuir através de dados e análises, transformando informação em algo que ajude na tomada de decisão.
Atualmente busco oportunidades na área de Dados (Analytics, BI ou Ciência de Dados) para aplicar e evoluir o que venho construindo.
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

          <aside className="glass-card overflow-hidden rounded-3xl p-4 md:p-6">
            <figure className="flex h-full flex-col">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
                <img src={photoPath} alt="Foto de Caio Cordeiro" className="h-full w-full object-cover object-center" />
              </div>
              <figcaption className="mt-4 space-y-2 px-1">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Foto</p>
                <h2 className="text-2xl font-semibold text-white">Caio Cordeiro</h2>
                <p className="text-sm leading-6 text-slate-300">
                  A imagem entra no lugar do resumo para dar mais personalidade ao topo do portfólio.
                </p>
              </figcaption>
            </figure>
          </aside>
        </div>
      </section>

      <section id="sobre" className="section-shell">
        <div className="space-y-8">
          <div className="max-w-3xl">
            <p className="section-kicker">Sobre mim</p>
            <h2 className="section-title mt-3">Experiência Extracurricular</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Vivências práticas fora da sala de aula que ajudaram a desenvolver liderança, tomada de decisão e
              visão de negócio aplicada a dados.
            </p>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-300 md:space-y-8">
            <article className="glass-card rounded-3xl p-6 md:p-8">
              <div className="grid gap-4 md:grid-cols-[1.3fr_0.7fr] md:items-start md:gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white md:text-2xl">
                    Seed a Bit Tecnologia — Empresa Júnior de Tecnologia (UFRPE)
                  </h3>
                  <p className="mt-3 text-sm uppercase tracking-[0.25em] text-cyan-300/80">
                    1 ano e 6 meses | Analista → Diretor de Negócios → Presidente Institucional/Executivo
                  </p>
                </div>
                <p className="text-sm leading-7 text-slate-300 md:text-base md:text-right">
                  Jornada completa em uma empresa júnior, com evolução de responsabilidades até a presidência.
                </p>
              </div>
              <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
                Vivenciei a jornada completa dentro de uma empresa júnior, passando por diferentes níveis de
                responsabilidade até chegar à presidência. Isso me deu uma visão prática de gestão de clientes
                reais, entregas com prazo e qualidade, tomada de decisão e liderança de equipe — experiência que
                dificilmente se tem só na graduação.
              </p>
            </article>

            <article className="glass-card rounded-3xl p-6 md:p-8">
              <div className="grid gap-4 md:grid-cols-[1.3fr_0.7fr] md:items-start md:gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white md:text-2xl">
                    Projeto de Extensão — Formação em Inteligência de Mercado e de Dados
                  </h3>
                  <p className="mt-3 text-sm uppercase tracking-[0.25em] text-cyan-300/80">
                    6 meses | Startups deeptech incubadas no CETENE (INCUBASCIENCE)
                  </p>
                </div>
                <p className="text-sm leading-7 text-slate-300 md:text-base md:text-right">
                  Apoio em dados e insights para startups sem estrutura de dados formal.
                </p>
              </div>
              <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
                Atuei dando suporte em dados e insights para startups que ainda não tinham uma área de dados
                estruturada, ajudando-as a tomar decisões mais orientadas a dados desde o estágio inicial do
                negócio.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="habilidades" className="section-shell">
        <div className="max-w-3xl">
          <p className="section-kicker">Habilidades</p>
          <h2 className="section-title mt-3">Ferramentas e tecnologias.</h2>
        </div>
        <div className="mt-8 space-y-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="glass-card rounded-3xl p-6 md:p-8">
              <h3 className="text-lg font-semibold text-white md:text-xl">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projetos" className="section-shell">
        <div>
          <p className="section-kicker">Projetos</p>
          <h2 className="section-title mt-3">Projetos.</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Abaixo estão dois projetos que mostram sua atuação em dados, análise e visualização, com links para o
            código e para a publicação final.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {Object.entries(projects).map(([id, project]) => (
            <article key={id} className="glass-card flex h-full flex-col rounded-3xl p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">Projeto {id}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 flex-1 leading-7 text-slate-300">{project.summary}</p>
              <p className="mt-5 leading-7 text-slate-300">{project.details}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={`/project${id}.html`}
                  className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-5 py-3 font-medium text-slate-950 shadow-glow"
                >
                  Ver detalhes
                </a>
                <a
                  href={project.linkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-white/5"
                  aria-label={`Abrir ${project.linkLabel} do projeto ${project.title}`}
                >
                  {project.linkLabel} ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contato" className="section-shell pb-24">
        <div className="glass-card rounded-3xl p-6 md:p-8">
          <p className="section-kicker">Contato</p>
          <h2 className="section-title mt-3">Pronto para conversar.</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Estes são os meus canais principais de contato.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-200">
            <a
              href="mailto:caionogcordeiro@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:bg-white/5"
            >
              <MailIcon />
              <span>caionogcordeiro@gmail.com</span>
            </a>
            <a
              href="tel:+5581984646248"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:bg-white/5"
            >
              <PhoneIcon />
              <span>(81) 9 8464-6248</span>
            </a>
            <a
              href="https://www.linkedin.com/in/caio-nogueira-cordeiro/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:bg-white/5"
            >
              <LinkedinIcon />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/caionog"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:bg-white/5"
            >
              <GithubIcon />
              <span>GitHub</span>
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