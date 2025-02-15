---
layout: post
title: Compreender as Versões Alternativas Conformes
date: 2025-02-15
---

sumário deste artigo:

<nav aria-roledescription="menu" id="toc"></nav>

**Fonte:** _[WAI/W3C. (16 de abril de 2024). Understanding Conformance](https://www.w3.org/WAI/WCAG21/Understanding/conformance#conformance-requirements)_.

## Introdução

O primeiro requisito de conformidade permite que páginas não conformes sejam incluídas no âmbito da conformidade, desde que tenham uma **'versão alternativa conforme'**. A **'versão alternativa conforme'** é definida como:

Versão alternativa conforme
: Versão que:
1. está conforme ao nível designado; e
2. fornece a mesma informação e funcionalidade no mesmo idioma; e
3. está tão atualizada quanto o conteúdo não conforme; e
4. para a qual pelo menos uma das seguintes condições é verdadeira:
    1. a **'versão conforme'** pode ser acedida a partir da **'página não conforme'** através de um mecanismo _accessibility-supported_; ou
    2. a **'versão não conforme'** só pode ser acedida a partir da **'versão conforme'**; ou
    3. a **'versão não conforme'** só pode ser acedida a partir de uma **'página conforme'** que também fornece um mecanismo para chegar à **'versão conforme'**.

> **Nota 1:** Nesta definição, **"só pode ser acedida"** significa que existe algum mecanismo, como um redirecionamento condicional, que impede um utilizador de **"chegar"** (carregar) à página não conforme, a menos que tenha vindo da versão conforme.

> **Nota 2:** A versão alternativa não precisa de corresponder página a página à original (por exemplo, a versão alternativa conforme pode consistir em múltiplas páginas).

> **Nota 3:** Se estiverem disponíveis várias versões linguísticas, são necessárias versões alternativas conformes para cada idioma oferecido.

> **Nota 4:** Podem ser fornecidas versões alternativas para acomodar diferentes ambientes tecnológicos ou grupos de utilizadores. Cada versão deve ser tão conforme quanto possível. **Pelo menos uma versão deve ser totalmente conforme para cumprir o requisito de conformidade.**

> **Nota 5:** A versão alternativa conforme não precisa de estar dentro do âmbito da conformidade ou mesmo no mesmo _site_, desde que esteja tão livremente disponível quanto a versão não conforme.

> **Nota 6:** As versões alternativas não devem ser confundidas com conteúdo suplementar, que apoia a página original e melhora a compreensão.

> **Nota 7:** Definir preferências do utilizador dentro do conteúdo para produzir uma versão conforme é um mecanismo aceitável, desde que o método usado para definir as preferências seja suportado em termos de acessibilidade.

Isto garante que toda a informação e toda a funcionalidade das páginas dentro do âmbito da conformidade estão disponíveis em páginas Web conformes.

## Porque permitir versões alternativas?

Porque é que as WCAG permitem que versões alternativas conformes sejam incluídas em declarações de conformidade? Ou seja, porque incluir páginas que não satisfazem os Critérios de Sucesso para um nível de conformidade no âmbito da conformidade ou de uma declaração?

- Em alguns casos, as páginas usam tecnologias que ainda não são suportadas em termos de acessibilidade (tecnologias que são não _accessibility-supported_). Quando uma nova tecnologia surge, o suporte das tecnologias de apoio pode demorar a acompanhar ou estar disponível apenas para certos públicos-alvo. Assim, os autores podem não poder confiar na nova tecnologia para todos os utilizadores. No entanto, pode haver outros benefícios na utilização da nova tecnologia, como melhor desempenho ou uma gama mais ampla de modalidades disponíveis. O requisito de versão alternativa permite que os autores incluam essas páginas no seu _site_, desde que forneçam uma página alternativa acessível em tecnologias _accessibility-supported_. Os utilizadores para quem a nova tecnologia é suportada beneficiam da nova versão. Os autores que antecipam um suporte futuro para acessibilidade podem satisfazer os Critérios de Sucesso com a página alternativa e, ao mesmo tempo, trabalhar na outra página para garantir o acesso futuro quando o suporte das tecnologias de apoio (TA) estiver disponível.
- Por várias razões, pode não ser possível modificar algum conteúdo de uma página Web. Por exemplo:
	- Pode ser essencial incluir uma cópia visual exata de um documento por razões legais ou históricas.
	- A página Web pode estar incluída num _site_, mas o proprietário do _site_ pode não ter direitos legais para modificar o conteúdo da página original.
	- A empresa pode não poder remover ou alterar algo que foi publicado anteriormente, por obrigações legais.
	- Um autor pode não ter permissão para alterar um documento de outro departamento, agência ou empresa.
- Por vezes, a melhor experiência para utilizadores com certos tipos de deficiência é proporcionada através da adaptação de uma página Web especificamente para essa deficiência. Nessas situações, pode não ser possível ou prático tornar a página acessível a todas as deficiências ao cumprir todos os Critérios de Sucesso. O requisito de versões alternativas permite a inclusão dessas páginas especializadas numa declaração de conformidade, desde que exista uma **'versão alternativa totalmente conforme'**.
- Muitos _sites_ comprometidos com a acessibilidade possuem grandes quantidades de documentos antigos. Embora a informação tenha sido disponibilizada em formatos acessíveis, podem existir resistências institucionais e obstáculos processuais à remoção em massa desses ficheiros. Algumas organizações, especialmente entidades governamentais, dão prioridade a processos tradicionais orientados para impressão. Mesmo adaptando-se à publicação digital e reconhecendo a necessidade de formatos acessíveis, estas organizações ainda mantêm uma mentalidade de impressão e frequentemente insistem em formatos destinados à versão física como a versão "principal". Embora o grupo de trabalho das WCAG considere que esta abordagem deve ser desincentivada, não a proíbe, desde que estejam disponíveis versões acessíveis.

A justificação para a existência de páginas Web que não satisfazem os Critérios de Sucesso reside na possibilidade de dar, às pessoas com deficiências que se confrontam com estas página não conformes, a possibilidade de não ficarem impossibilitadas de aceder ao seu conteúdo por impossibilidade de encontrarem a versão alternativa conforme do mesmo. Assim, a chave da disponibilização de ‘Versões Alternativas’ está na capacidade de se encontrar a página conforme (a versão alternativa) a partir da página não conforme sempre que esta se intromete na pesquisa. Há que salientar ainda que o requisito de conformidade que permite a construção de páginas alternativas, também requer que se disponibilize uma forma dos uitlizadores encontrarem a versão acessível de entre as versões alternativas.

**Note-se que fornecer uma versão alternativa é uma opção de recurso para obter conformidade com as WCAG, sendo o método preferido tornar todo o conteúdo diretamente acessível.**

## Técnicas para Fornecer uma Versão Alternativa Conforme

A parte mais importante de fornecer uma versão alternativa conforme é garantir um mecanismo para encontrá-la a partir da versão não conforme. Foram identificadas várias técnicas para este fim, uma vez que métodos específicos podem não ser viáveis em certos contextos tecnológicos ou situações.

Encontram-se listadas abaixo algumas das técnicas identificadas até ao presente momento. Espera-se que outras técnicas sejam desenvolvidas ao longo do tempo e adicionadas a esta lista conforme forem suportadas pelos navegadores e tecnologias de
apoio.

### Técnicas suficientes para fornecer versões alternativas conformes

1. [**G136:** Fornecer um link no início de uma página não conforme que aponte para uma versão alternativa conforme](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G136).
2. [**G190:** Fornecer um link adjacente ou associado a um objeto não conforme que leve a uma versão alternativa conforme](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G190).
3. [**C29:** Usar um seletor de estilos para fornecer uma versão alternativa conforme (CSS)](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C29).
4. [**SCR38:** Criar uma versão alternativa conforme para uma página Web concebida com _progressive enhacement_ (melhorias por iteração programática progressiva) (Scripting)](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SCR38).
5. [**SVR2:** Usar `.htaccess` para garantir que o único acesso ao conteúdo não conforme seja feito a partir de conteúdo conforme](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SVR2).
6. [**SVR3:** Usar o referenciador HTTP para garantir que o único acesso ao conteúdo não conforme seja a partir de conteúdo conforme](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SVR3).
7. [**SVR4:** Permitir que os utilizadores definam preferências para a exibição de versões alternativas conformes](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SVR4).

### Falhas Comuns identificadas pelo Grupo de Trabalho das WCAG

- [F19: Falha do Requisito de Conformidade 1 por não se disponibilizar um método para o uitlizador encontrar a versão alternativa conforme de uma página Web não conforme](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F19).

### Técnicas Adicionais (Aconselháveis) para disponibilizar versões alternativas conformes de páginas Web

- Disponibilizar hiperligações reciprocas entre as versões conformes e não conformes.
- Excluir o conteúdo não conforme dos resultados da pesquisa.
- Utilizar 'negociação de conteúdos'.
- Sempre que uma tecnologia é desligada ou não é suportada, não mostrar esse conteúdo via tecnologias não _accessibility-supported_.
- Permitir a localização da versão alternativa conforme a partir do URI da página não conforme via metadados.

### Exemplos de Versões Alternativas Conformes

#### Um site interno com múltiplas versões

Uma grande empresa, preocupada com o impacto de tecnologias emergentes na acessibilidade, criou uma versão alternativa que satisfaz todos os Critérios de Sucesso de Nível A. As duas versões estão interligadas.

#### Um site informativo garantindo compatibilidade retroativa

Um site de informação implementou um sistema de menus interativo
suportado apenas por navegadores modernos. Para garantir acessibilidade, uma alternativa de navegação é fornecida aos utilizadores que não conseguem utilizar o sistema interativo.
