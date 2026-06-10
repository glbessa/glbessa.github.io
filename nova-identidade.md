# Identidade Visual — glbessa Consultoria

**Variante Empresarial — Opção B (marca em camadas).** Documento de síntese das decisões de marca. Fonte de verdade para Figma e implementação no Next.js.

> Versão paralela à `glbessa-identidade-visual.md` (pessoal), pensada para comparação seção a seção.

---

## 1. Posicionamento

**Consultoria de engenharia de software e IA — com rosto humano.**

GL Bessa deixa de ser "eu, o Gabriel dev" e passa a ser uma consultoria: epônima, como tantos escritórios que levam o nome do fundador. Uma consultoria pode ter uma pessoa só — o que torna o enquadramento legítimo é a honestidade de escala e a substância real por trás das entregas, não fingir um time que não existe.

A diferença para a versão pessoal é a **arquitetura de marca em camadas**:

| Camada | Entidade | Voz | Onde vive |
| --- | --- | --- | --- |
| Comercial | **GL Bessa** (consultoria) | "Nós entregamos" — resultado de negócio | glbessa.dev |
| Pessoal | **Gabriel Leite Bessa** | "Eu, learning in public" — praticante | LinkedIn pessoal + seção "Quem está por trás" |

A consultoria entrega e carrega o peso percebido; o fundador tem rosto e voz e humaniza. O LinkedIn pessoal alimenta a consultoria como prova social, mas o site não tenta ser as duas coisas ao mesmo tempo.

| Princípio | Decisão |
| --- | --- |
| Marca | GL Bessa Consultoria (epônima, comercial) |
| Tom | Autoridade empresarial, premium, tecnologicamente impecável |
| Honestidade de escala | "Consultoria" assume porte enxuto — sem inventar time |
| Conteúdo do site | Resultados de engagements **reais** — números verdadeiros, sempre |

---

## 2. Paleta de Cores

Base **obsidian-slate** (mais fria e estruturada que a versão pessoal), com **violeta preservado como accent** — é o que diferencia GL Bessa do mar de "dark + cyan" das AI startups.

| Token | Hex | Uso |
| --- | --- | --- |
| Fundo principal | `#090D16` | Deep Obsidian — solidez e maturidade de software |
| Superfície | `#131B2E` | Slate — cards, profundidade |
| Superfície elevada | `#1E293B` | Hover, elementos sobre cards |
| Borda | `#1E293B` | Linhas finas de 1px — estética de grid |
| Borda accent | `rgba(139,92,246,0.18)` | Bordas de card reativas a hover |
| Texto primário | `#F8FAFC` | Off-white, contraste nítido |
| Texto secundário | `#94A3B8` | Captions, labels, texto de apoio |
| Primária (roxo profundo) | `#6D28D9` | Cor de marca |
| Accent (violeta elétrico) | `#8B5CF6` | Pontos focais cirúrgicos — CTAs, métricas, tags |

### CSS custom properties

```css
:root {
  --bg:            #090D16;
  --surface:       #131B2E;
  --surface-hi:    #1E293B;
  --border:        #1E293B;
  --border-accent: rgba(139, 92, 246, 0.18);
  --text:          #F8FAFC;
  --text-muted:    #94A3B8;
  --brand:         #6D28D9;
  --accent:        #8B5CF6;
}
```

---

## 3. Tipografia

Equilíbrio entre precisão de engenharia e sofisticação empresarial. Nesta variante o corpo migra para **Inter** — padrão-ouro de legibilidade de interface e escolha mais "enterprise". Hanken Grotesk fica como alternativa mais quente, caso queira suavizar o tom.

| Papel | Fonte | Observação |
| --- | --- | --- |
| Títulos | **Sora** | Geométrica e corporativa; alternativas mais frias: Geist Sans, Plus Jakarta Sans |
| Corpo | **Inter** | Padrão de interface; alt. mais quente: Hanken Grotesk |
| Mono / dados | **JetBrains Mono** | Métricas, labels e tags; alt.: Geist Mono |

Uso do mono é estratégico: fontes pequenas em métricas, tags e detalhes técnicos — reforça o DNA de engenharia sem virar decoração.

```html
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

## 4. Logo

**Direção: bracket / CLI contido.** No contexto empresarial, o símbolo deve ser mais sóbrio e abstrato que na versão pessoal.

- Bracket `<>` ou prompt `>` minimalista, geometria limpa — mantém o DNA dev sem soar informal.
- O monograma geométrico (`GL`) fica mais defensável aqui do que na versão pessoal, mas o bracket continua sendo a opção mais autêntica e memorável.
- Evitar hexágono (clichê tech/blockchain).

---

## 5. Componentes e Layout

Regra de ouro: **menos decoração, mais estrutura.** O design deve parecer uma ferramenta de alta performance — cada linha, margem e espaçamento com função de negócio.

- **Bento Grid modular** — blocos assimétricos (sobre, soluções, projetos de impacto) que substituem a rolagem linear por um painel dinâmico. Aqui o grid é preenchido com **métricas reais**.
- **Foco em métricas computáveis** — números macro (sistemas em produção, infra escalada, conversão otimizada) em mono, no lugar de blocos longos de texto.
- **Bordas de 1px** com gradiente sutil que reage ao hover — sensação de produto de software premium.
- **Cards** — fundo `var(--surface)`, borda `var(--border-accent)`, hover anima para `var(--accent)`; fundo levemente translúcido (glassmorphism leve).

### Botões

```css
/* Primário */
.btn-primary {
  background: linear-gradient(135deg, var(--brand), var(--accent));
  color: var(--text);
}

/* Secundário */
.btn-secondary {
  background: transparent;
  border: 1px solid var(--accent);
  color: var(--text);
}
```

---

## 6. Estilo Visual — Usar / Não Usar

| ✅ Usar | ❌ Evitar |
| --- | --- |
| Estrutura de grid e bordas 1px | Gradientes arco-íris |
| Métricas computáveis em mono | Neon exagerado / "roxo gamer" |
| Bento assimétrico | Efeitos cyberpunk |
| Glassmorphism leve | Fundo cheio de partículas |
| Gradientes discretos | Excesso de 3D |
| Hover effects sutis | Accent cyan (vira template de AI startup) |
| Espaçamento generoso | Fotos genéricas de programador |
| Números **reais** | Métricas fabricadas |

---

## 7. Estrutura da Home

Fluxo de consultoria empresarial, com a camada pessoal aparecendo em um ponto controlado:

1. **Hero** — proposta de valor orientada a resultado + CTA
2. **Prova social** — logos de empresas atendidas
3. **Métricas de impacto** — números macro (Bento, mono)
4. **Serviços** — Desenvolvimento Web · Sistemas Sob Medida · IA e Automação · Consultoria Técnica
5. **Cases / Projetos de impacto** — engagements com resultado
6. **Processo de trabalho**
7. **Quem está por trás** — Gabriel Leite Bessa: rosto, trajetória, voz (a camada que humaniza)
8. **Tecnologias**
9. **Depoimentos**
10. **CTA final**
11. **Contato**

---

## 8. Direção de Mensagem

Voz **"nós"**, orientada a resultado de negócio. Cases enquadrados como entregas, não como aprendizados.

Slogans candidatos:

- "Tecnologia construída para gerar resultado."
- "Engenharia de software com foco em impacto."
- "Software inteligente para negócios que crescem."

Hero de referência:

> **Título:** Transformando processos complexos em software inteligente.
> **Subtítulo:** Desenvolvimento de sistemas, automação e IA para empresas que precisam escalar.
> **CTA primário:** Solicitar Diagnóstico · **CTA secundário:** Ver Projetos

Seção "Quem está por trás" — tom de ponte:

> Por trás da GL Bessa está **Gabriel Leite Bessa**, [Tech Lead / engenheiro] com experiência em [infra, IA, automação]. Aqui o aprendizado contínuo vira entrega — e cada projeto carrega esse rigor.

---

## Resumo das decisões

- Posicionamento **consultoria empresarial em camadas** (Opção B): GL Bessa entrega com voz "nós"; Gabriel é o rosto que humaniza numa seção dedicada.
- Honestidade de escala: "consultoria" assume porte enxuto — sem inventar time, com números sempre reais.
- Paleta **obsidian-slate** mais fria e estruturada, com **violeta preservado como accent** — sem cyan.
- Tipografia **Sora / Inter / JetBrains Mono** (Hanken Grotesk como alt. mais quente).
- Logo **bracket / CLI contido**; monograma defensável, hexágono não.
- Bento Grid com **métricas reais** no centro; menos texto, mais prova.