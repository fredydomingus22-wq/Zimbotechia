

### Título: Guia de Arquitetura e Desenvolvimento para a Zimbotechia

Este documento estabelece o contexto, as regras e os padrões de codificação para a IA de geração de código (Codex/Antigravity) que nos auxiliará no desenvolvimento da Plataforma Zimbotechia.

### 1. Escopo do Projeto (Contexto)

O projeto é a **Plataforma Zimbotechia**, um sistema de **Agentes de IA Autónoma** que automatiza tarefas de negócio (vendas, agendamento, suporte) para clientes B2B.

* **Objetivo Principal:** Desenvolver um sistema estável, seguro e escalável que atenda tanto ao Site de Marketing quanto à Plataforma de Clientes (`/app`).
* **Modelo de Negócio:** Software as a Service (SaaS), baseado em subscrição e consumo.

### 2. Arquitetura Definida (Tecnologias Core)

A IA de codificação **DEVE** aderir estritamente ao seguinte *stack*: 

| Camada | Tecnologia Principal | Estrutura | Observações Cruciais |
| :--- | :--- | :--- | :--- |
| **Front-end** | **Next.js 14** (App Router) | `apps/web` | Utilizar **TypeScript** e **Tailwind CSS**. Componentes reativos (React). |
| **Back-end/API** | **NestJS** | `apps/api` | Utilizar **TypeScript** e arquitetura modular. Responsável pela lógica de negócio e orquestração de APIs externas (IA, WhatsApp). |
| **Base de Dados** | **Supabase** | PostgreSQL | Utilizar o SDK `supabase-js`. As consultas complexas (JOINs, RLS) devem ser preferencialmente implementadas como *Postgres Functions* no Supabase. |
| **Estilo/UI** | **Tailwind CSS** | Configuração Centralizada | **Estilo padrão:** Minimalista, moderno, focado em alta legibilidade. Cores corporativas (a definir, mas usar paleta neutra com um toque de cor vibrante para CTAs). |

### 3. Padrões de Codificação e Boas Práticas

#### A. Linguagem e Tipagem

* **Regra Absoluta:** Todo o código, tanto no Front-end quanto no Back-end, deve ser escrito em **TypeScript**.
* **Tipagem Rigorosa:** Interfaces e Tipos devem ser definidos para todas as entradas e saídas de funções, parâmetros e respostas de API.

#### B. Comunicação com a Base de Dados

* **Regra Absoluta:** Toda a interação com a Base de Dados deve ser feita através do **Supabase SDK**.
* **Front-end:** Apenas chamadas de leitura (Getters) para dados estáticos ou via APIs seguras do Back-end. **NUNCA** deve haver escrita direta no Front-end.
* **Back-end (NestJS):** Deve encapsular a lógica de escrita e atualização, utilizando **Row-Level Security (RLS)** sempre que possível para segurança do utilizador.

#### C. Componentização (Front-end)

* Utilizar **Componentes Reutilizáveis** (Ex: `Button.tsx`, `Card.tsx`).
* Separar componentes de layout (Layouts) e componentes de UI (Components).
* **Acessibilidade (A11y):** Garantir que os elementos de UI tenham atributos `alt` e semântica HTML corretos.

### 4. Instruções de Comportamento do Agente de Codificação

| Comportamento | O que Fazer (Ação) | O que Não Fazer (Erro Comum) |
| :--- | :--- | :--- |
| **Segurança** | Implementar validação de *input* e tratamento de erros em **todos** os *endpoints* da API. | Não usar código de autenticação ou chaves de API diretamente no Front-end. |
| **Escalabilidade** | Usar funções assíncronas (`async/await`) e tratar a gestão de estado de forma otimizada (Ex: React Query/TanStack Query para gestão de cache de dados no Front-end). | Criar *spaghetti code* ou código monólitico. Separar a lógica em módulos (Back-end) ou *hooks* (Front-end). |
| **Melhoria Contínua** | Se um *prompt* for ambíguo, gerar a solução mais **padrão** e segura e adicionar um comentário `// TODO: Revisão Arquitetural` para que o Engenheiro Sênior (Eu) possa rever. | Assumir a implementação mais rápida sem considerar performance ou segurança. |
| **Tratamento de Erros** | Envolver chamadas de API ou DB em blocos `try...catch` (no Back-end) e exibir mensagens de erro úteis (não técnicas) no Front-end. | Retornar códigos de erro genéricos (Ex: `500 Internal Server Error` sem contexto). |

### 5. Lidar com Erros e Feedback

Se a IA gerar um erro ou o código não funcionar:

1.  **O Engenheiro Sênior (Eu) fornecerá o *Stack Trace*** e a correção do requisito.
2.  **O Agente de Codificação deve aprender** com o erro e aplicar o novo padrão nos próximos *prompts*.
3.  **Prioridade:** Corrigir erros de **segurança** e **dados** antes de erros de UI.

