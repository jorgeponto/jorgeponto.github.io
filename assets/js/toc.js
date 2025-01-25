document.addEventListener("DOMContentLoaded", function () {
  const toc = document.getElementById("toc");
  // Seleciona o elemento <main>
  const main = document.querySelector("main");
  
  if (toc && main) {
    // Busca apenas os cabeçalhos dentro de <main>
    const headers = main.querySelectorAll("h2, h3, h4, h5, h6");

    if (headers.length) {
      const ul = document.createElement("ul");

      headers.forEach(header => {
        const li = document.createElement("li");
        li.style.marginLeft = `${(parseInt(header.tagName[1]) - 2) * 20}px`; // Indenta conforme o nível do cabeçalho
        const a = document.createElement("a");

        // Adiciona ID ao cabeçalho, caso não tenha
        if (!header.id) {
          header.id = header.textContent.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
        }

        // Define o texto e o link
        a.textContent = header.textContent;
        a.href = `#${header.id}`;
        li.appendChild(a);

        ul.appendChild(li);
      });

      toc.appendChild(ul);
    }
  }
});
