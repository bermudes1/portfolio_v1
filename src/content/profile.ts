import type { Profile } from './types'

const GITHUB = 'https://github.com/bermudes1'

// Todo o texto do site sai daqui. Para atualizar o portfólio, quase sempre
// basta mexer neste arquivo.
export const profile: Profile = {
  name: 'Felipe Bermudes',
  fullName: 'Felipe Bermudes de Oliveira Leite',
  role: 'Ciência da Computação · PUC-Rio',
  status: 'Procurando estágio em tecnologia',
  intro:
    'Estudo Ciência da Computação na PUC-Rio e estou em intercâmbio na TU Darmstadt. ' +
    'Trabalho com dados e IA, e passei pela base da computação escrevendo C ' +
    'até entender o que o sistema operacional faz com o meu código.',
  location: { label: 'Darmstadt, Alemanha', timeZone: 'Europe/Berlin' },
  about: [
    'Entrei na PUC-Rio em 2024 e a previsão de formatura é 2028.1. Desde 2025 ' +
      'divido o tempo entre a faculdade e projetos fora dela: estágio em seguros, monitoria ' +
      'de Python e pesquisa em sistemas de recomendação para o Governo de Goiás.',
    'As matérias de base foram as que mais mudaram meu jeito de programar. Depois de ' +
      'implementar aritmética de 128 bits na mão e fazer um kernel de brinquedo trocar ' +
      'processos com sinais, fica difícil tratar a máquina como caixa-preta.',
    'Agora estou procurando estágio em tecnologia, num time onde eu aprenda com gente ' +
      'experiente e entregue coisa que chega na mão de muita gente.',
  ],
  experience: [
    {
      role: 'Pesquisador em sistemas de recomendação com IA',
      org: 'Governo do Estado de Goiás',
      period: 'desde ago 2025',
      current: true,
      description: [
        'Pesquisa e desenvolvimento de um sistema de recomendação com IA que vai rodar na plataforma do governo.',
        'Análise de dados e modelagem em equipe para gerar recomendações personalizadas.',
      ],
    },
    {
      role: 'Estagiário de subscrição de riscos (Auto)',
      org: 'Bradesco Seguros',
      period: 'jun 2025 a ago 2026',
      description: [
        'Automação de serviços do processo de subscrição.',
        'Análise estatística de bases grandes com SQL, SAS e Python.',
      ],
    },
    {
      role: 'Monitor de programação em Python',
      org: 'PUC-Rio',
      period: 'fev a jul de 2025 e de 2026',
      description: [
        'Atendimento a alunos com dúvidas de lógica e Python, nos exercícios e nos projetos.',
        'Revisão de código e ajuda na depuração dos programas dos alunos.',
      ],
    },
  ],
  education: [
    {
      course: 'Bacharelado em Ciência da Computação',
      school: 'PUC-Rio',
      place: 'Rio de Janeiro',
      period: '2024 a 2028.1 (previsão)',
    },
    {
      course: 'Intercâmbio acadêmico em Ciência da Computação',
      school: 'Technische Universität Darmstadt',
      place: 'Darmstadt, Alemanha',
      period: 'desde set 2026',
      note: 'Inteligência Artificial e Cibersegurança',
    },
  ],
  award: {
    place: '3º',
    title: '3º lugar no meu primeiro hackathon',
    date: 'outubro de 2025',
  },
  projects: [
    {
      slug: 'escalonador',
      title: 'Simulador de escalonamento preemptivo',
      context: 'Sistemas Operacionais (INF1316)',
      summary:
        'Um kernel simulado que escalona de 3 a 6 processos com Round-Robin, ' +
        'usando só as chamadas POSIX que um sistema Unix oferece.',
      highlights: [
        'Processos reais criados com fork/exec, pausados e retomados com SIGSTOP e SIGCONT.',
        'Um controlador de interrupções separado manda IRQ0 (fim do quantum) e IRQ1 (fim de E/S).',
        'Como SIGSTOP não pode ser tratado, o contexto de cada processo fica em memória compartilhada.',
      ],
      stack: ['C', 'POSIX', 'Sinais', 'Memória compartilhada'],
      links: [{ label: 'Código', href: `${GITHUB}/SO` }],
    },
    {
      slug: 'bigint',
      title: 'BigInt de 128 bits em C',
      context: 'Software Básico (INF1018), em dupla',
      summary:
        'Inteiros de 128 bits em complemento a dois, guardados como vetor de bytes, ' +
        'com soma, subtração, multiplicação e deslocamentos.',
      highlights: [
        'Shifts lógico e aritmético, extensão de sinal e complemento a dois feitos byte a byte.',
        'Os testes de cada operação foram escritos antes da implementação.',
        'Quando um teste falha, o comparador aponta exatamente qual byte divergiu.',
      ],
      stack: ['C', 'Aritmética binária', 'TDD'],
      links: [{ label: 'Código', href: `${GITHUB}/Soba/tree/main/Trabalho1SoBa` }],
    },
    {
      slug: 'puconnect',
      title: 'PUConnect',
      context: 'Aplicações Interativas (INF1039), em grupo',
      summary:
        'Plataforma para divulgar eventos da PUC-Rio e facilitar a inscrição dos alunos, ' +
        'com cadastro, listagem e página de cada evento.',
      highlights: [
        'API REST em Django REST Framework, documentada com Swagger.',
        'Recuperação de senha, upload de imagens dos eventos e PostgreSQL em produção.',
      ],
      stack: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL'],
      links: [{ label: 'Código', href: 'https://github.com/jkymie/PUConnect' }],
    },
    {
      slug: 'portfolio',
      title: 'Este portfólio',
      context: 'Projeto pessoal',
      summary:
        'React e TypeScript, com o conteúdo separado da interface e a lógica do ' +
        'escalonador coberta por testes. O código está aberto.',
      highlights: [
        'Um único arquivo tipado alimenta todas as seções.',
        'Animações com GSAP que desligam quando o sistema pede movimento reduzido.',
        'O GitHub Actions roda lint, tipos e testes antes de publicar.',
      ],
      stack: ['React', 'TypeScript', 'Vite', 'Vitest', 'GSAP'],
      links: [{ label: 'Código', href: `${GITHUB}/portfolio_v1` }],
    },
  ],
  skills: [
    {
      title: 'Linguagens',
      items: ['Python', 'C', 'C++', 'SQL', 'SAS', 'TypeScript'],
    },
    {
      title: 'Dados',
      items: ['Spark', 'Análise estatística', 'Sistemas de recomendação'],
    },
    { title: 'Web', items: ['React', 'Django', 'Django REST Framework'] },
    { title: 'Ferramentas', items: ['Git', 'Linux', 'Make', 'Vite', 'Vitest'] },
  ],
  certifications: ['IBM · Python for Data Science', 'IBM · SQL and Relational Databases'],
  languages: [
    { name: 'Português', level: 'nativo' },
    { name: 'Inglês', level: 'avançado' },
    { name: 'Alemão', level: 'básico' },
  ],
  contact: {
    pitch: 'Estou procurando estágio em tecnologia. Se fizer sentido para o seu time, me escreve.',
    email: 'felipebermude@gmail.com',
    links: [
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/felipe-bermudes-6a6243304/',
      },
      { label: 'GitHub', href: GITHUB },
    ],
  },
  repositoryUrl: `${GITHUB}/portfolio_v1`,
}
