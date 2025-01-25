---
layout: post
title: Contrastes para Texto e Não-Texto, o que diz a recomendação final das WCAG v2.1 do W3C
date: 2025-01-25
lang: pt-PT
---

sumário deste artigo:

{{TOC}}

## Em síntese

No que se refere ao contraste, há critérios de sucesso nas WCAG v2.1 para o "Contraste do Texto" (AA e AAA), e para o "Contraste de elementos Não-Texto" (apenas AA).

Em síntese, podemos concluir,

Para o Texto:

- Texto em tamanho normal tem de ter, pelo menos, contraste de 4.5:1. Se, em vez de AA se pretender uma conformidade AAA o valor passa para 7:1.
- Texto em [tamanho grande](https://www.acessibilidade.gov.pt/wcag/#dfn-large-scale) (definição: 18 pontos ou, se negrito, 14 pontos) tem de ter, pelo menos, contraste de 3:1. Se, em vez de AA se pretender uma conformidade AAA o valor passa para 4.5:1.

Para os elementos Não-Texto:

- tem de ter, pelo menos, contraste de 3:1 com as cores dos elementos adjacentes.

## Contraste do Texto

### Conformidade AA

O Critério de Sucesso 1.4.3 (AA WCAG v2.1), designado de "Contraste (Mínimo)", declara:

> A apresentação visual do [texto](https://www.acessibilidade.gov.pt/wcag/#dfn-text) e das [imagens de texto](https://www.acessibilidade.gov.pt/wcag/#dfn-images-of-text) têm de ter, pelo menos, um [rácio de contraste](https://www.acessibilidade.gov.pt/wcag/#dfn-contrast-ratio) de 4.5:1, exceto nos seguintes casos:

> - Texto Grande: Texto em [tamanho grande](https://www.acessibilidade.gov.pt/wcag/#dfn-large-scale) e imagens de texto em tamanho grande têm, pelo menos, um rácio de contraste de 3:1;
> - Texto em plano secundário: O texto ou as imagens de texto que são parte de uma [componente de interface de utilizador](https://www.acessibilidade.gov.pt/wcag/#dfn-user-interface-components) inativa, que são [pura decoração](https://www.acessibilidade.gov.pt/wcag/#dfn-pure-decoration), que não estão visíveis a ninguém ou que são parte de uma fotografia que contém outro conteúdo visual significante, não estão sujeitos a requisitos de contraste.
> - Logótipos: O texto que é parte de um logótipo ou nome de marca não está sujeito a quaisquer requisitos de contraste.

### Conformidade AAA

O Critério de Sucesso 1.4.6 (AAA WCAG v2.1), designado de "Contraste (Melhorado)", declara:

> A apresentação visual do [texto](https://www.acessibilidade.gov.pt/wcag/#dfn-text) e das [imagens de texto](https://www.acessibilidade.gov.pt/wcag/#dfn-images-of-text) têm de ter, pelo menos, um [rácio de contraste](https://www.acessibilidade.gov.pt/wcag/#dfn-contrast-ratio) de 7:1, exceto para o seguinte:

> - Texto Grande: O texto em [tamanho grande](https://www.acessibilidade.gov.pt/wcag/#dfn-large-scale) e as imagens de texto em tamanho grande têm um rácio de contraste de, pelo menos, 4.5:1;
> - Texto em plano secundário: O texto ou as imagens de texto que são parte de uma [componente de interface de utilizador](https://www.acessibilidade.gov.pt/wcag/#dfn-user-interface-components) inativa, que são [pura decoração](https://www.acessibilidade.gov.pt/wcag/#dfn-pure-decoration), que não estão visíveis a ninguém ou que são parte de uma fotografia que contém outro conteúdo visual significante, não estão sujeitos a requisitos de contraste.
> - Logótipos: O texto que é parte de um logótipo ou nome de marca não está sujeito a quaisquer requisitos

## Contraste de elementos Não-Texto (fundos de botões, cartões interativos, ...)

### Conformidade AA

Os elementos Não Texto têm apenas um nível de conformidade aplicável que é o ´AA´.

O Critério de Sucesso 1.4.11 (AA WCAG v2.1), designado de "Contraste de Não Texto", declara:

> A [apresentação](https://www.acessibilidade.gov.pt/wcag/#dfn-presentation) visual dos itens expressos abaixo têm um [rácio de contraste](https://www.acessibilidade.gov.pt/wcag/#dfn-contrast-ratio) de, pelo menos, 3:1 para com a(s) cor(es) adjacentes:

> - Componentes da Interface de Utilizador: Informação visual necessária para identificar as [componentes da interface de utilizador](https://www.acessibilidade.gov.pt/wcag/#dfn-user-interface-components) e dos [estados](https://www.acessibilidade.gov.pt/wcag/#dfn-states), exceto para as componentes inativas ou onde a aparência da componente é determinada pelo agente de utilizador e não modificada pelo autor;
> - Objetos Gráficos: As Partes de gráficos necessárias à compreensão do conteúdo, exceto quando é [essencial](https://www.acessibilidade.gov.pt/wcag/#dfn-essential) uma apresentação gráfica particular para transmitir a informação.

## Referências

- [WCAG v2.1 - Diretrizes de Acessibilidade para Conteúdo Web](https://www.acessibilidade.gov.pt/wcag/)
- [Color Contrast and Accessibility](https://www.aditus.io/contrast-and-accessibility/)
- [Artigo da WebAIM sobre Contrastes](https://webaim.org/articles/contrast/#sc1411)
