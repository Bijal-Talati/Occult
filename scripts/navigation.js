document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const navLinks = document.querySelectorAll("nav a");

  // Load default page if needed
  const defaultPage = "home.html";
  loadPage(defaultPage);

  // Handle navigation clicks
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.getAttribute("href");
      if (page) {
        loadPage(page);
        // Highlight active link (optional)
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });

  // Dynamic page loader
  function loadPage(url) {
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error(`Error loading ${url}`);
        return response.text();
      })
      .then(html => {
        content.innerHTML = html;
        window.scrollTo(0, 0); // Scroll to top after load
      })
      .catch(error => {
        console.error("Page load error:", error);
        content.innerHTML = `<p style="padding: 2rem; color: red;">Failed to load ${url}</p>`;
      });
  }
});
