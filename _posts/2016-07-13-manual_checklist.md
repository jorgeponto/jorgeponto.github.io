---
layout: post
title: Acessibilidade Web
subtitle: 10 aspetos críticos na construção de sítios Web
---
É recorrente a queixa de que o documento das Diretrizes de Acessibilidade para Conteúdo Web do W3C, bem como toda a documentação de suporte, é de difícil leitura. Há quem diga que a versão 2.0, publicada em dezembro de 2008, ficou mais fácil de ler. Outros, dizem que, antes pelo contrário. Os 4 princípios, as 12 diretrizes, os 61 critérios de sucesso agrupados em 3 níveis de prioridade e as mais de 350 técnicas organizadas em 2 categorias e subdivididas por tecnologia, é cansativo, para não não dizer aborrecido, mesmo só de enumerar. :-)

Esta nossa constante insatisfação com a complexidade e necessidade permanente para organizar o caos faz-nos questionar se não haverá uma forma mais simples de abordar as questões da acessibilidade Web. No presente documento selecionámos 10 aspetos que se revelaram, em estudos efetuados, de críticos na acessibilidade aos conteúdos pelos utilizadores com limitações funcionais.

## 1. Menu de navegação principal

O menu de navegação é uma espécie de porta de entrada de uma casa. Se não conseguir passar da porta dificilmente vai conseguir usufruir da casa. No caso de um sítio Web, se o utilizador não conseguir chegar ao menu principal ou se não conseguir alcançar todas as suas opções ou subopções nunca irá conseguir usufruir da informação ou dos serviços disponibilizados.

Verifique se:

- é possível navegar com rato e com teclado?
- o menu de navegação se encontra marcado como uma lista do tipo `<ul>` ou `<ol>`?
- as imagens-link existentes no menu estão corretamente legendadas?

## 2. Títulos/subtítulos

Verifique se:

- existe um `<h1>` marcado na página?
- existe uma marcação hierarquizada de cabeçalhos na página (`<h1>...<h6>`)?

## 3. Tabela de dados

Verifique se:

- as células que constituem os cabeçalhos da tabela estão marcadas com o elemento `<th>`?
- o título da tabela está marcado com o elemento `<caption>`?

## 4. Formulários

Verifique se:

- ao clicar com o rato na etiqueta, o cursor aparece no campo de edição?
- é possível identificar os campos de preenchimento obrigatório quando usa apenas um leitor de ecrã?
- é possível ler facilmente as mensagens de erro usando apenas um leitor de ecrã?

## 5. Gráficos e imagens-link

Verifique se:

- a imagem ou gráfico tem uma legenda curta (i.e. atributo `alt`)? 
- o gráfico é acompanhado de uma descrição longa (p.e. tabela de dados que deu origem ao gráfico)?
- as imagens-link estão corretamente legendadas?

## 6. Contraste

Verifique se:

- para texto com tamanho normal, o rácio de contraste entre a cor do texto e a cor de fundo é superior a 4,5:1?
- para texto com tamanho grande, o rácio de contraste entre a cor do texto e a cor de fundo é superior a 3:1?

## 7. Leitores de vídeo e/ou áudio

Verifique se:

- é possível navegar com rato e com teclado através dos botões do leitor (<em lang="en">player</em>)?
- o vídeo ou o áudio têm legendas sincronizadas ou se existe uma transcrição textual?

## 8. Estrutura da página

Verifique se:

- quando se retira a CSS, todos os elementos (x)HTML alinham à esquerda?
- quando se retira a CSS, a informação aparece numa ordem lógica?
- quando se retira a CSS, é possível reconhecer a semântica dos diversos elementos e que não existe desfragmentação dos mesmos?
- quando se retira a CSS, a informação relevante permanece visível?
- a maquetização da página não é feita através do elemento `<table>`?

## 9. Gramática (x)HTML

Verifique se:

- a página não tem erros de (x)HTML?

## 10. Ficheiros PDF - <em lang="en">Portable Document Format</em>

Verifique se:

- usando a aplicação <em lang="en">Adobe Reader</em>, é possível efetuar uma cópia do documento PDF e passar o respetivo conteúdo para um processador de texto sem perda de informação?
