// back-to-top.js

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("button");
  btn.id = "backToTop";
  btn.innerHTML = "⬆️";
  document.body.appendChild(btn);

  window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
