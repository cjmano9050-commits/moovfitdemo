const navItems = [
  ['Método', '#metodo'],
  ['Tecnologia', '#tecnologia'],
  ['Planos', '#planos'],
  ['Unidades', '#unidades'],
] as const;

const cards = [
  ['⚡', '25 minutos', 'Uma sessão rápida e focada para você treinar com intensidade sem passar horas na academia.'],
  ['◎', 'EMS', 'A eletroestimulação muscular é integrada ao treino para potencializar o estímulo de diferentes grupos musculares.'],
  ['↗', 'Acompanhamento', 'Treino orientado, ajustes e atenção ao seu objetivo para transformar tecnologia em evolução consistente.'],
] as const;

const checks = [
  'Treinos curtos e direcionados',
  'Tecnologia de eletroestimulação',
  'Acompanhamento profissional',
  'Ambiente moderno e exclusivo',
];

const steps = [
  ['Conheça', 'Agende uma primeira experiência e entenda como a tecnologia funciona na prática.'],
  ['Avalie', 'Converse com a equipe sobre seu objetivo e receba uma orientação adequada ao seu momento.'],
  ['Evolua', 'Treine de forma consistente, acompanhe sua evolução e ajuste sua estratégia quando necessário.'],
] as const;

const plans = [
  ['Start', 'R$ —', 'Para conhecer a metodologia e começar a criar consistência.', 'SABER MAIS', false],
  ['Performance', 'R$ —', 'Para quem quer fazer do treino uma parte real da rotina.', 'QUERO ESSE', true],
  ['Intense', 'R$ —', 'Uma opção de maior frequência para acelerar a consistência.', 'SABER MAIS', false],
] as const;

export default function Home() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <a className="brand" href="#top" aria-label="Moov Fit Pro">
              <span className="mark">M.</span>
              <span>MOOV<br /><small>FIT PRO</small></span>
            </a>
            <div className="navlinks">
              {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
            </div>
            <a className="navcta" href="#agendar">AGENDAR TREINO →</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="eyebrow"><i /> Academia de eletroestimulação</div>
              <h1>MENOS<br /><span>TEMPO.</span><br />MAIS<br />RESULTADO.</h1>
              <p>Treinos inteligentes com tecnologia EMS para quem quer evoluir sem transformar a rotina em uma prisão. <strong>25 minutos.</strong> Foco total.</p>
              <div className="actions">
                <a className="btn primary" href="#agendar">AGENDAR MEU TREINO →</a>
                <a className="btn ghost" href="#metodo">COMO FUNCIONA</a>
              </div>
            </div>
          </div>
          <div className="stats"><div className="container"><div className="statbar">
            <div className="stat"><strong>25 MIN</strong><span>por sessão</span></div>
            <div className="stat"><strong>EMS</strong><span>tecnologia inteligente</span></div>
            <div className="stat"><strong>1:1</strong><span>acompanhamento</span></div>
            <div className="stat"><strong>GOIÂNIA</strong><span>unidades selecionadas</span></div>
          </div></div></div>
        </section>

        <section id="metodo">
          <div className="container">
            <div className="section-head">
              <div><div className="kicker">O método MOOV</div><h2>TREINO<br /><span>INTELIGENTE.</span></h2></div>
              <p className="section-copy">A proposta da Moov é simples: usar tecnologia e acompanhamento para tornar o treino mais objetivo, intenso e encaixável na vida real.</p>
            </div>
            <div className="cards">
              {cards.map(([icon, title, text]) => <article className="card" key={title}><div className="icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section id="tecnologia">
          <div className="container split">
            <div className="image-frame"><div className="image-placeholder"><span>IMAGEM AQUI</span></div><div className="corner">TECNOLOGIA + PERFORMANCE</div></div>
            <div>
              <div className="kicker">Por que Moov?</div>
              <h2>SEU TEMPO<br /><span>VALE MAIS.</span></h2>
              <p className="bigcopy">Você não precisa escolher entre <b>resultado</b> e uma rotina corrida.</p>
              <ul className="checks">{checks.map(item => <li key={item}>{item}</li>)}</ul>
              <a className="btn primary" href="#agendar">QUERO EXPERIMENTAR →</a>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head">
              <div><div className="kicker">Como funciona</div><h2>DO ZERO<br /><span>AO MOOV.</span></h2></div>
              <p className="section-copy">Uma experiência direta, sem complicação. Conheça a proposta, faça sua avaliação e comece a treinar com acompanhamento.</p>
            </div>
            <div className="process">{steps.map(([title, text]) => <article className="step" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
          </div>
        </section>

        <section id="planos">
          <div className="container">
            <div className="section-head">
              <div><div className="kicker">Escolha seu ritmo</div><h2>PLANOS<br /><span>MOOV.</span></h2></div>
              <p className="section-copy">Estrutura visual preparada para receber os planos e preços reais da unidade. Os valores abaixo são exemplos de apresentação.</p>
            </div>
            <div className="plans">{plans.map(([title, price, text, action, featured]) => <article className={`plan${featured ? ' featured' : ''}`} key={title}>
              {featured && <span className="tag">MAIS PROCURADO</span>}
              <h3>{title}</h3><div className="price">{price} <small>/mês</small></div><p>{text}</p><a className={`btn ${featured ? 'primary' : 'ghost'}`} href="#agendar">{action}</a>
            </article>)}</div>
          </div>
        </section>

        <section id="unidades">
          <div className="container">
            <div className="section-head"><div><div className="kicker">Encontre a Moov</div><h2>UMA UNIDADE<br /><span>PERTO DE VOCÊ.</span></h2></div></div>
            <div className="locations">
              <div className="location-main"><div className="image-placeholder"><span>IMAGEM AQUI</span></div><div className="overlay"><div className="kicker">Goiânia • GO</div><h3>R11 / Galeria R11</h3><p>Av. R11, 870 — Setor Oeste, Goiânia/GO</p><a className="btn primary location-button" href="#agendar">COMO CHEGAR →</a></div></div>
              <div className="location-list">
                <div className="loc"><b>Setor Oeste</b><span>Av. R11, 870 • Galeria R11</span></div>
                <div className="loc"><b>Horários</b><span>Consulte disponibilidade e agende seu treino.</span></div>
                <div className="loc"><b>Primeira experiência</b><span>Fale com nossa equipe para escolher o melhor horário.</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="agendar" className="cta">
          <div className="container">
            <div className="kicker cta-kicker">Seu próximo passo</div>
            <h2>25 MINUTOS.<br /><span>COMECE AGORA.</span></h2>
            <p>Descubra como a Moov pode encaixar tecnologia, acompanhamento e treino inteligente na sua rotina.</p>
            <div className="actions"><a className="btn" href="#agendar">AGENDAR PELO WHATSAPP →</a></div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div><a className="brand" href="#top"><span className="mark">M.</span><span>MOOV<br /><small>FIT PRO</small></span></a><p>Treino inteligente. Resultado real.<br />Goiânia — GO.</p></div>
          <div className="footer-links">{navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div>
        </div>
      </footer>
    </>
  );
}
