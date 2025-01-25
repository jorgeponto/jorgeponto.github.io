
  document.addEventListener("DOMContentLoaded", function () {
    const toc = document.getElementById("toc");
    const headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    if (toc && headers.length) {
      const ul = document.createElement("ul");
      headers.forEach(header => {
        const li = document.createElement("li");
        li.style.marginLeft = `${(parseInt(header.tagName[1]) - 1) * 20}px`;
        const a = document.createElement("a");
        a.textContent = header.textContent;
        a.href = `#${header.id || header.textContent.toLowerCase().replace(/\s+/g, '-')}`;
        li.appendChild(a);
        ul.appendChild(li);
      });
      toc.appendChild(ul);
    }
  });
