![](https://github.com/user-attachments/assets/5b89ede3-dfdf-4579-aa91-09a7b2e17b10)

# NextStore

NextStore é uma aplicação web de demonstração desenvolvida com Next.js 15 (App Router) e TypeScript que implementa um CRUD (Criar, Ler, Atualizar, Deletar) completo de produtos. A aplicação interage com a FakeStore API para gerenciar os dados dos produtos, demonstrando a integração de dados externos e a construção de interfaces reativas e performáticas.

## ⌨️ Tecnologias Utilizadas

Para o desenvolvimento deste projeto, foram utilizadas tecnologias modernas que garantem desempenho, escalabilidade e uma excelente experiência do usuário:

- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) – escolhido por sua tipagem estática e melhoria na manutenção do código.
- **Framework:** [React](https://react.dev/) – utilizado para criar uma interface interativa e dinâmica.
- **Ferramentas e Bibliotecas:**
  - [Next.js](https://react.dev/) um poderoso framework para React que permite renderização no lado do servidor, rotas de API, otimização de imagem e muito mais.
  - [Tailwind CSS 4.0](https://tailwindcss.com/) (estilização) – framework de estilização que permite um design responsivo e consistente.
  - [Lucide Icons](https://lucide.dev/) (ícones) – coleção de ícones modernos para melhorar a interface do usuário.
  - **Componentes:**
  - [React Hook Form](https://react-hook-form.com/) (formulários) – para gerenciar formulários de maneira eficiente.
  - [Shadcn](https://ui.shadcn.com/) (componentes) – biblioteca de componentes reutilizáveis.
- **API:** [FakeStore API](https://fakestoreapi.com/) – API pública para obter dados de produtos.
- **Testes:** [Jest](https://jestjs.io/) – para testes unitários.

Essas tecnologias foram escolhidas para garantir um desenvolvimento eficiente, seguindo as melhores práticas do mercado e proporcionando uma aplicação leve, rápida e responsiva.

## 💎 Funcionalidades

- **Listagem de produtos:** Exibe uma lista de produtos com informações como nome, preço e imagem.
- **Visualização de um produto:** Permite visualizar detalhes de um produto específico, redirecionando para uma página dedicada.
- **Criação de novo produto:** Permite a criação de novos produtos, com validação de campos.
- **Edição de produto existente:** Permite a edição de informações de um produto existente.
- **Exclusão de produto:** Permite a exclusão de um produto da lista ou os salvos no localStorage.
- **Pesquisar por produto:** Permite a busca por produtos com base em palavras-chave, atualizando a lista de produtos em tempo real.
- **Filtrar produtos:** Permite a filtragem de produtos com base em categorias.
- **Persistência de Dados:** Os dados são persistidos no localStorage, garantindo que os produtos e suas informações sejam mantidos mesmo após o fechamento do navegador.

<blockquote style="background-color: #f6f8fa; border-left: 4px solid #f0b80d; padding: 12px 16px; margin: 16px 0; border-radius: 4px; color: #333; font-size: 0.95em; line-height: 1.5;">
  <span style="display: inline-block; margin-right: 8px; font-size: 1.2em;">💡</span>
  A FakeStore API não armazena dados. Para simular um CRUD, tanto criações quanto alterações dos produtos são salvas localmente no localStorage do navegador, persistindo apenas na sua sessão e sendo perdidas ao limpar o cache.
</blockquote>

## 📝 Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) (gerenciadores de pacotes)

## ⚙️ Instalação e Uso 

1. **Clone o repositório:**

```bash
   git clone https://github.com/silvamaarcus/dev-frontend-nextjs
   cd dev-frontend-nextjs
```

2. **Instale as dependências:**

```bash
npm install
```

Ou se preferir, use o Yarn:

```bash
yarn install
```

3. **Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

A aplicação estará disponível em http://localhost:3000

4. **Build para produção:**

```bash
npm run build
```

Ou se preferir, use o Yarn:

```bash
yarn build
```

## Arquivo .gitignore

Certifique-se de que o arquivo `.gitignore` inclua as seguintes entradas para evitar o versionamento de arquivos desnecessários:

```bash
node_modules/
.next
.vscode/
.DS_Store
```

## 📦 Componentização
A aplicação foi desenvolvida com uma abordagem de componentização, onde cada parte da interface é encapsulada em componentes reutilizáveis. Isso facilita a manutenção e a escalabilidade do código, permitindo que novos recursos sejam adicionados sem impactar negativamente o desempenho ou a legibilidade.

## 📱 Responsividade e Design

O projeto foi desenvolvido utilizando as versões mais recentes das tecnologias mencionadas e segue um design responsivo, garantindo uma experiência consistente em dispositivos móveis, tablets e desktops. A estilização foi feita com Tailwind CSS, que permite uma personalização rápida e eficiente do layout, mantendo a aplicação leve e de fácil manutenção.

## 📚 Commits

Os commits foram feitos seguindo o "Conventional Commits", uma convenção de mensagens de commit que define um formato padrão para mensagens de commit, facilitando a leitura e compreensão do histórico do projeto. 

## 🌐 Links

- [Repositório no GitHub](https://github.com/silvamaarcus/dev-frontend-nextjs)
- [Deploy na Vercel](https://dev-frontend-nextjs-mu.vercel.app/)

## 📍 Observações

Este projeto foi desenvolvido como parte de um desafio técnico proposto pela MaxUp Consultoria. Veja meu repositório no GitHub para obter mais informações.

## 🎉 Conclusão

Gostaria de expressar minha sincera gratidão à plataforma MaxUp Consultoria pela incrível oportunidade de participar deste projeto tão enriquecedor. A experiência foi extremamente valiosa para mim, e estou muito feliz por ter tido a chance de contribuir e aprender com todos os envolvidos. Espero que este projeto possa ser útil para a comunidade e que possa servir como um exemplo de como a tecnologia pode ser usada para resolver problemas reais.
