// Navigation and Dynamic Content Loading
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // prevent page reload
    const page = this.getAttribute('href');
    fetch(page)
      .then(res => res.text())
      .then(html => {
        document.getElementById('content').innerHTML = html;
      });
  });
});

function loadPage(page) {
  fetch(`pages/${page}.html`)
    .then(res => res.text())
    .then(html => {
      const contentArea = document.getElementById("content");
      contentArea.innerHTML = html;
      window.scrollTo({ top: 0, behavior: "smooth" });

      if (page === "yoga_asanas") {
        const script = document.createElement("script");
        script.src = "scripts/yoga_asanas.js";
        script.defer = true;
        document.body.appendChild(script);
      }
    })
    .catch(err => {
      document.getElementById("content").innerHTML = "<h2>Page not found</h2>";
    });
}