document.addEventListener("DOMContentLoaded", function () {
  const toc = document.getElementById("toc");
  const main = document.querySelector("main");

  if (toc && main) {
    const headers = main.querySelectorAll("h2, h3, h4, h5, h6");

    if (headers.length) {
      const ul = document.createElement("ul");
      let currentLevel = 2; // Começa no nível do primeiro cabeçalho esperado (h2)
      let parents = [ul]; // Lista de elementos <ul>, indexada pelo nível do cabeçalho

      headers.forEach(header => {
        const level = parseInt(header.tagName[1]); // Ex.: "H2" -> 2
        const li = document.createElement("li");
        const a = document.createElement("a");

        // Adiciona ID ao cabeçalho, caso não tenha
        if (!header.id) {
          header.id = header.textContent.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
        }

        // Configura o link
        a.textContent = header.textContent;
        a.href = `#${header.id}`;
        li.appendChild(a);

        // Ajusta a hierarquia da lista
        if (level > currentLevel) {
          // Cria uma nova lista <ul> dentro do último <li>
          const newUl = document.createElement("ul");
          parents[currentLevel - 2].lastElementChild.appendChild(newUl);
          parents[level - 2] = newUl; // Atualiza o parent no nível atual
        } else if (level < currentLevel) {
          // Volta para o nível anterior na hierarquia
          parents.splice(level - 1);
        }

        // Adiciona o <li> ao <ul> correspondente
        parents[level - 2].appendChild(li);
        currentLevel = level; // Atualiza o nível atual
      });

      toc.appendChild(ul);
    }
  }
});
