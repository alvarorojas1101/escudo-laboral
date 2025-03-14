document.addEventListener("DOMContentLoaded", () => {
  // Preload de componentes
  document.documentElement.style.visibility = "hidden";

  const loadComponent = async (selector, path) => {
    try {
      const response = await fetch(path);
      if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
      const html = await response.text();
      document.querySelector(selector).innerHTML = html;
    } catch (error) {
      console.error(`Error cargando ${path}:`, error);
    }
  };

  // Scroll suave
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Cargar componentes
  Promise.all([
    loadComponent("#header", "/components/header.html"),
    loadComponent("#footer", "/components/footer.html"),
  ])
    .then(() => {
      document.documentElement.style.visibility = "visible";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
