import type { Profile } from './types'

const GITHUB = 'https://github.com/bermudes1'

// Todo o texto do site sai daqui. Para atualizar o portfólio, quase sempre
// basta mexer neste arquivo.
export const profile: Profile = {
  name: 'Felipe Bermudes',
  shortName: 'FB',
  role: 'Desenvolvedor em formação · Ciência da Computação na PUC-Rio',
  headline: 'Gosto de entender o que acontece por baixo do código que eu escrevo.',
  intro:
    'Estudo Ciência da Computação na PUC-Rio e venho construindo coisas nas duas pontas: ' +
    'de simulador de sistema operacional em C a aplicação web com Django e React.',
  about: [
    'Entrei na PUC-Rio em 2024. As matérias de base, como Software Básico e Sistemas ' +
      'Operacionais, foram as que mais mudaram meu jeito de programar. Depois de ' +
      'implementar aritmética de 128 bits na mão e fazer um kernel de brinquedo trocar ' +
      'processos com sinais, fica difícil tratar a máquina como caixa-preta.',
    'Na web, gosto de interface que carrega rápido, funciona no celular e não esconde ' +
      'nada de quem usa leitor de tela. Este site é um exemplo: está aberto no GitHub, ' +
      'com testes, lint e deploy automático.',
    'Procuro uma vaga onde eu possa aprender com gente experiente e entregar coisas ' +
      'que chegam na mão de muita gente.',
  ],
  facts: [
    { label: 'Formação', value: 'Ciência da Computação, PUC-Rio (desde 2024)' },
    { label: 'Local', value: 'Rio de Janeiro, RJ' },
    { label: 'Interesses', value: 'Front-end, sistemas, testes' },
  ],
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
        'A demo no topo desta página reproduz a mesma política em TypeScript.',
      ],
      stack: ['C', 'POSIX', 'Sinais', 'Memória compartilhada', 'Make'],
      links: [{ label: 'Código', href: `${GITHUB}/SO` }],
    },
    {
      slug: 'bigint',
      title: 'BigInt de 128 bits em C',
      context: 'Software Básico (INF1018) · em dupla',
      summary:
        'Biblioteca de inteiros de 128 bits em complemento a dois, guardados ' +
        'como vetor de bytes, com soma, subtração, multiplicação e deslocamentos.',
      highlights: [
        'Shifts lógico e aritmético, extensão de sinal e complemento a dois feitos byte a byte.',
        'Escrita com TDD: os testes de cada operação vieram antes da implementação.',
        'Um comparador de BigInt aponta exatamente qual byte divergiu quando um teste falha.',
      ],
      stack: ['C', 'Aritmética binária', 'TDD'],
      links: [{ label: 'Código', href: `${GITHUB}/Soba/tree/main/Trabalho1SoBa` }],
    },
    {
      slug: 'puconnect',
      title: 'PUConnect',
      context: 'Aplicações Interativas (INF1039) · em grupo',
      summary:
        'Plataforma para divulgar eventos da PUC-Rio e facilitar a inscrição dos alunos, ' +
        'com cadastro, listagem e página de cada evento.',
      highlights: [
        'API REST em Django REST Framework, documentada com Swagger (drf-yasg).',
        'Recuperação de senha, upload de imagens dos eventos e PostgreSQL em produção.',
        'Trabalho em equipe com divisão de tarefas e revisão pelo GitHub.',
      ],
      stack: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL'],
      links: [{ label: 'Código', href: 'https://github.com/jkymie/PUConnect' }],
    },
    {
      slug: 'portfolio',
      title: 'Este portfólio',
      context: 'Projeto pessoal',
      summary:
        'Site estático em React e TypeScript, pensado para ser lido tanto pela ' +
        'pessoa que avalia quanto pelo código que fica aberto no repositório.',
      highlights: [
        'Conteúdo separado da interface: um único arquivo tipado alimenta todas as seções.',
        'Lógica do escalonador isolada em função pura e coberta por testes com Vitest.',
        'Animações com GSAP que somem quando o sistema pede movimento reduzido.',
        'CI no GitHub Actions roda lint, tipos e testes antes de publicar no GitHub Pages.',
      ],
      stack: ['React', 'TypeScript', 'Vite', 'Vitest', 'GSAP', 'GitHub Actions'],
      links: [{ label: 'Código', href: `${GITHUB}/portfolio_v1` }],
    },
  ],
  skills: [
    { title: 'Linguagens', items: ['C', 'Python', 'TypeScript', 'JavaScript', 'SQL'] },
    { title: 'Web', items: ['React', 'HTML e CSS', 'Django', 'Django REST Framework'] },
    { title: 'Ferramentas', items: ['Git e GitHub', 'Vite', 'Vitest', 'Make', 'Linux'] },
    {
      title: 'Base',
      items: ['Sistemas operacionais', 'Estruturas de dados', 'Representação binária', 'Testes'],
    },
  ],
  contact: {
    pitch:
      'Se você chegou até aqui por causa de uma vaga, vai ser bom conversar. ' +
      'Respondo rápido.',
    links: [{ label: 'GitHub', href: GITHUB }],
  },
  repositoryUrl: `${GITHUB}/portfolio_v1`,
}
