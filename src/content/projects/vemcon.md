---
title: "Vemcon"
description: "Desenvolvimento de plataforma de consórcios com integração robusta e segura de APIs de pagamento e assinaturas recorrentes para fintech."
problem: "Fintechs de consórcio dependem de fluxos financeiros previsíveis e seguros. A ausência de conciliação automática, falhas na cobrança de assinaturas recorrentes e vulnerabilidades de segurança expõem a operação a fraudes, inconsistências de caixa e alta inadimplência."
solution: "Arquitetura transacional de alta confiabilidade integrada com gateways de pagamento líderes. Implementação de webhooks seguros (mTLS e assinatura de payload), criptografia de dados sensíveis, roteamento dinâmico de transações e conciliação bancária automatizada."
impact: "Redução de 98% no tempo de conciliação financeira, automação total de cobranças recorrentes com 99,8% de disponibilidade e segurança robusta em conformidade com práticas OWASP e LGPD."
category: "Sistemas Web"
author: "Gabriel Leite Bessa"
date: "2024-05-15T10:00:00-03:00"
tags:
  - "Fintech"
  - "Segurança"
  - "APIs"
  - "SaaS"
order: 0
website_url: "https://vemcon.com.br"
---

A **Vemcon** é uma fintech inovadora focada na simplificação e democratização do acesso a consórcios no mercado brasileiro. Para suportar o rápido crescimento da plataforma e garantir a conformidade regulatória e a segurança das operações financeiras, foi desenhada e implementada uma nova arquitetura para o motor de pagamentos e assinaturas recorrentes.

---

## 🛠️ Arquitetura e Engenharia de Integração

O motor de pagamentos da Vemcon foi construído sob os pilares de resiliência, isolamento de falhas e extensibilidade:

1. **Gateways de Pagamento Abstratos (Adapter Pattern):**
   A integração com APIs de pagamento (Pix, Cartão de Crédito e Boleto) foi desenvolvida utilizando padrões de projeto que isolam o provedor do serviço. Caso um gateway enfrente instabilidades, o sistema realiza um *fallback* transparente para outro gateway parceiro, garantindo que o cliente final consiga concluir sua adesão ao consórcio.

2. **Assinaturas Recorrentes Inteligentes:**
   Cobranças recorrentes de parcelas do consórcio exigem políticas eficientes de retentativa inteligente (Smart Retry). Desenvolvemos um agendador automatizado que analisa o histórico de cobrança e executa novas tentativas em horários de maior probabilidade de saldo, diminuindo drasticamente o *churn* involuntário.

3. **Conciliação e Webhooks:**
   Processamento assíncrono via mensageria para tratar notificações de pagamento (webhooks). A conciliação de parcelas pagas atualiza o saldo da cota do consorciado em tempo real, disparando fluxos de notificação instantâneos.

---

## 🔒 Segurança Transacional e Conformidade

Lidar com dados financeiros exige uma postura de segurança extremamente rigorosa. Diversas camadas de proteção foram implementadas para proteger os dados da fintech e de seus clientes:

* **Tokenização de Cartões (PCI-DSS Compliance):** 
  Nenhum dado sensível de cartão de crédito toca ou é armazenado diretamente em nossos servidores. Utilizamos tokenização direta na API do provedor de pagamentos a partir do frontend.
* **Autenticação de Webhooks:** 
  Para evitar ataques de *replay* e falsificação de notificações de pagamento, todas as chamadas recebidas nos endpoints de webhook são validadas através de assinaturas criptográficas baseadas em HMAC-SHA256 e IPs permitidos (*IP Whitelisting*).
* **Criptografia de Dados em Repouso e em Trânsito:** 
  Toda a comunicação interna e externa utiliza TLS 1.3. Dados sensíveis no banco de dados são criptografados a nível de coluna (Field-Level Encryption) utilizando AES-256-GCM.
* **Trilha de Auditoria (Audit Log):** 
  Implementação de registros imutáveis de atividades operacionais, permitindo rastrear ações administrativas e transacionais críticas para auditoria interna e compliance regulatório do Banco Central (Bacen).
