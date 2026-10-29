# Portfólio · Felipe Bermudes

Meu site pessoal, feito com React e TypeScript. Estudo Ciência da Computação na PUC-Rio e estou em intercâmbio na TU Darmstadt.

O site está em https://bermudes1.github.io/portfolio_v1/ e é publicado a cada push na `main`.

## Rodando localmente

Precisa de Node 22 ou mais novo.

```bash
npm install
```

```bash
npm run dev
```

Outros comandos:

| Comando             | O que faz                            |
| ------------------- | ------------------------------------ |
| `npm test`          | roda os testes com Vitest            |
| `npm run lint`      | roda o oxlint                        |
| `npm run typecheck` | checa os tipos sem gerar build       |
| `npm run format`    | formata tudo com Prettier            |
| `npm run build`     | gera a versão de produção em `dist/` |

## Como o código está organizado

```
src/
  content/      texto do site (profile.ts) e os tipos dele
  components/   peças reaproveitadas: Section, TagList
  layout/       cabeçalho e rodapé
  sections/     uma seção da página por arquivo
  features/
    scheduler/  simulação Round-Robin (lógica pura + figura interativa)
    clock/      relógio com a hora de Darmstadt no cabeçalho
  hooks/        useReveal, as animações de entrada com GSAP
  styles/       tokens de cor, tipo e espaçamento, e o CSS global
```

Todo o conteúdo vem de `src/content/profile.ts`. As seções só recebem dados por props e não sabem de onde eles vêm, então trocar um texto ou adicionar um projeto não mexe em nenhum componente.

A simulação do escalonador fica em `roundRobin.ts`, uma função pura sem React, e por isso dá para testar sem renderizar nada. Ela reproduz a política do meu trabalho de Sistemas Operacionais, que em C usa processos de verdade, sinais e memória compartilhada ([repositório](https://github.com/bermudes1/SO)).

Cada componente tem o próprio CSS Module. As cores, fontes e tamanhos ficam em `styles/tokens.css`.

## Decisões

- As fontes (Bricolage Grotesque e JetBrains Mono) vêm do npm via Fontsource, então o site não depende do Google Fonts.
- As animações usam GSAP com `matchMedia`. Se o sistema estiver com movimento reduzido, nada se mexe e o conteúdo já aparece no lugar.
- O CI (`.github/workflows/ci.yml`) roda lint, formatação, tipos, testes e build em todo push e pull request. Na `main`, se tudo passar, publica no GitHub Pages.

## Foto do hackathon

Coloque a imagem em `public/` (por exemplo `public/hackathon.jpg`) e preencha o campo `photo` de `award` em `profile.ts`:

```ts
photo: { src: `${import.meta.env.BASE_URL}hackathon.jpg`, alt: 'Time no pódio do hackathon' },
```
