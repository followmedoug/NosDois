# Product Requirements Document (PRD) & Project Brief: NósDois Finanças

## 1. Executive Summary & Vision
**NósDois Finanças** é uma plataforma web para gestão financeira colaborativa e inteligente focada em casais modernos. Ao contrário dos gerenciadores financeiros tradicionais — que tratam orçamentos de forma exclusivamente individual ou forçam a fusão total e indiscriminada de patrimônios —, o **NósDois** foi concebido sob a filosofia de **Parceria com Autonomia**. A plataforma oferece transparência absoluta sobre os custos do lar e projetos conjuntos (viagens, moradia, reservas), ao mesmo tempo em que protege o espaço financeiro individual ("gastos sem prestar contas"), prevenindo atritos e desgastes emocionais na relação.

---

## 2. Target Audience & Personas
- **Público-alvo:** Casais que moram juntos, casados ou noivos com renda mista (CLT, PJ, autônomos, investidores) buscando previsibilidade, justiça e equilíbrio financeiro.
- **Persona 1: Lucas (55% da Renda Familiar)**
  - *Perfil:* Renda bruta/líquida ligeiramente superior, foco em automação, milhas e cartões de crédito.
  - *Necessidade:* Clareza sobre o fluxo de contas fixas e compensações sem precisar ficar cobrando a parceira.
- **Persona 2: Beatriz (45% da Renda Familiar)**
  - *Perfil:* Empreendedora/criativa com oscilações sazonais de receita, prioriza viagens e metas de curto/médio prazo.
  - *Necessidade:* Sentir-se equitativamente participante nas decisões do casal sem comprometer seu saldo de compras e bem-estar individual.

---

## 3. Core Problems & Value Proposition
1. **O tabu das finanças a dois:** Falta de conversas objetivas sobre dinheiro leva a cobranças e desgaste no relacionamento.
   *Solução:* Métricas de serenidade financeira, diagnósticos equitativos e compensações transparentes via PIX sem atrito.
2. **Divisões injustas ou engessadas (50/50 vs Proporcional):** A divisão puramente meio a meio pune quem ganha menos, enquanto a fusão cega anula a independência individual.
   *Solução:* Suporte nativo a modelos 50/50, proporcionais às receitas (ex: 55/45) ou lançamentos 100% pessoais.
3. **Falta de acompanhamento de objetivos a longo prazo:** Sonhos em comum (casamento, compra de imóvel, viagens internacionais) ficam dispersos.
   *Solução:* Simulador dinâmico de aportes e acompanhamento visual em tempo real com projeção de juros compostos.

---

## 4. Key Functional Requirements (Features & Scope)

### 4.1. Dashboard Geral Consolidado (Visão Geral)
- **Métricas Chave (KPI Cards):**
  - Entradas consolidadas do mês com distinção por parceiro (Lucas / Beatriz).
  - Saídas totais com comparativo do teto estipulado e % de comprometimento de renda.
  - Montante guardado/investido com taxa de poupança conjunta.
  - Saldo livre / verba de lazer disponível diária/mensal sem risco de endividamento.
- **Alerta de Impacto & Categoria Peso:** Destaque automático para a categoria que mais consome o orçamento no mês (ex: Supermercado & Feira com indicador de desvio).
- **Mapeamento de Gastos por Categoria:** Gráfico em barras horizontais com porcentagens e valores detalhados.
- **Monitor de Cartões de Crédito Compartilhados & Pessoais:** Limites utilizados, dias para fechamento e valores das faturas em aberto.
- **Feed de Transações Recentes:** Filtros dinâmicos ("Todas", "Do Casal", "Lucas", "Beatriz") e detalhes da divisão acordada.

### 4.2. Despesas, Receitas & Gestão de Categorias
- **Cadastro e Edição Completa de Transações:**
  - Descrição da despesa, valor monetário (BRL), data e categoria vinculada.
  - Seletor de pagador: Lucas, Beatriz ou Conta Conjunta.
  - Regra de divisão flexível por item: Paritário (50/50), Proporcional à renda atual, ou 100% Individual.
  - Forma de pagamento (Cartões sincronizados, débito automático, dinheiro, PIX).
  - Toggle para despesas recorrentes mensais.
- **Gestão de Tetos Orçamentários por Categoria:**
  - Definição de metas máximas por categoria (Moradia, Alimentação, Lazer, etc.) com alertas visuais de proximidade (ex: Atenção 95%).
- **Módulo de Compensação Amigável:**
  - Cálculo automático de saldo devedor/credor entre os parceiros decorrente de despesas compartilhadas pagas individualmente.
  - Botão de geração de acerto rápido via PIX (ex: "Gerar Acerto PIX").

### 4.3. Carteira Conjunta & Autonomia Individual
- **Patrimônio Compartilhado:**
  - Saldos em contas conjuntas e fundos de emergência / reserva de oportunidade com rendimento CDI.
  - Gráfico de Composição Patrimonial (Donut Chart) refletindo o equilíbrio dos aportes de cada parceiro.
- **Cartões Virtuais Compartilhados:** Detalhamento com dados mascarados, bandeira e limites dedicados ao lar.
- **Histórico de Reembolsos e Acertos:** Linha do tempo de transações com status transparente (*Concluído*, *Compensado em Fatura*, etc.).
- **Módulos de Autonomia Individual (Lado a Lado):**
  - Painéis separados para cada cônjuge com Saldo Livre Próprio mensal e teto estipulado.
  - Visualização de cartões individuais e lançamentos recentes privados (respeitando privacidade acordada).

### 4.4. Metas, Sonhos & Simulador de Aportes
- **Cadastro de Sonhos do Casal:**
  - Tipologia de meta (Viagem Exterior, Entrada de Apartamento, Reforma, Casamento, Carro Novo, Reserva de Emergência).
  - Preço total estimado (BRL) e prazo de realização desejado (em meses).
  - Escolha do formato de rateio mensal (Proporcional ou Igualitário).
- **Simulador de Poupança em Tempo Real:**
  - Cálculo automático da parcela mensal necessária e cota de aporte de cada parceiro.
  - Verificação de impacto no orçamento: Indicador de "Equilíbrio Confortável" (% da renda líquida).
- **Acompanhamento de Metas Ativas:**
  - Cards com barras de progresso circulares e lineares, valor acumulado vs alvo, e contagem regressiva de meses.
- **Curva de Projeção Patrimonial:** Gráfico visual de evolução do patrimônio com efeito de juros compostos CDI.

### 4.5. Planejamento & Orçamento Ideal ("Sem Pesar no Bolso")
- **Diagnóstico Equitativo de Capacidade Financeira:**
  - Segmentação automática do montante total da casa: Despesas Fixas Essenciais, Poupança/Investimentos e Margem Anti-estresse.
- **Cotas Individuais Justas:** Detalhamento exato de quanto cada um deve direcionar para custos fixos, metas e quanto sobra para gasto livre pessoal.
- **Simulador Interativo "E Se...":**
  - Sliders para simulação de variações (ex: aumento em almoços/lazer fora ou flutuações em contas da casa) com impacto instantâneo na data prevista dos sonhos.
- **Termômetro Anti-Estresse Financeiro:** Score de serenidade da relação (ex: 88% de serenidade), diretrizes de compras sem necessidade de aprovação mútua (ex: compras individuais até R$ 250).
- **Direcionamento Seguro de Investimentos:** Recomendações práticas separadas por prazo (Liquidez Diária/CDB 100% até 12 meses vs Tesouro IPCA+ e ETFs Globais para >5 anos).

---

## 5. Non-Functional & UX/UI Specifications
- **Design System & Visual Language:**
  - **Paleta Light:** Superfície limpa em off-white (`#F8F9FF` / `#FFFFFF`), tipografia em alto contraste com acentos em Verde Esmeralda (`#0F5132` / `#10B981`) para transmitir estabilidade e serenidade.
  - **Paleta Dark:** Slate profundo (`#0B0F17` / `#161F30`), bordas finas com transparência e elementos vibrantes em verde menta / esmeralda (`#10B981`).
  - **Dark/Light Mode Switcher:** Alternância suave e instantânea via CSS custom properties e persistência em `localStorage`.
- **Tipografia:** Plus Jakarta Sans para leitura confortável de números e labels financeiros.
- **Micro-interações:** Estados de hover em cards, tooltips informativos, transições suaves nos toggles e sliders dinâmicos.
- **Segurança & Privacidade:** Criptografia Open Finance Brasil, conciliação bancária segura e mascaramento de faturas pessoais.
- **Device Support:** Layout inicial responsivo em Desktop (1440px / 1280px) com grids modulares de 12 colunas, projetado para fácil adaptação a formatos Mobile (~390px).

---

## 6. Implementation Roadmap & Milestones
- **Fase 1 (Concluída):** Concepção visual das 5 telas essenciais em modo claro e escuro, com switcher dinâmico no topo e lateral.
- **Fase 2 (Próximo Passo):** Integração com APIs do Open Finance Brasil para leitura automatizada de extratos e cartões.
- **Fase 3:** Sistema de notificações push/WhatsApp para avisos de fechamento de fatura e acertos PIX em um clique.
- **Fase 4:** Versão mobile nativa (iOS/Android) com widget de saldo livre individual compartilhado.
