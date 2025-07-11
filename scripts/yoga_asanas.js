// scripts/yoga_asanas.js

document.addEventListener("DOMContentLoaded", () => {
  const treeEl = document.getElementById("asanaTree");
  const detailEl = document.getElementById("asanaDetails");
  const searchInput = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearch");
  const expandAllBtn = document.getElementById("expandAll");
  const collapseAllBtn = document.getElementById("collapseAll");

  let treeData = {};
  let flattenedAsanas = [];

  fetch("data/asanas.json")
    .then((res) => res.json())
    .then((data) => {
      treeData = data;
      buildTree(treeData);
    });

  function buildTree(data) {
    treeEl.innerHTML = "";
    for (const type in data) {
      const typeEl = createBranch(type, "📁", true);
      for (const category in data[type]) {
        const catEl = createBranch(category, "📁", true);
        data[type][category].forEach((asana) => {
          const asanaEl = createLeaf(asana);
          catEl.querySelector("ul").appendChild(asanaEl);
          flattenedAsanas.push({ ...asana, element: asanaEl });
        });
        typeEl.querySelector("ul").appendChild(catEl);
      }
      treeEl.appendChild(typeEl);
    }
  }

  function createBranch(label, icon, collapsed = true) {
    const li = document.createElement("li");
    li.className = "tree-branch";
    li.innerHTML = \`
      <div class="branch-header" tabindex="0">
        <span class="toggle">▸</span>
        <span class="icon">\${icon}</span> \${label}
      </div>
      <ul class="nested"></ul>
    \`;
    const header = li.querySelector(".branch-header");
    const nested = li.querySelector(".nested");
    if (collapsed) nested.style.display = "none";

    header.addEventListener("click", () => {
      const expanded = nested.style.display === "block";
      nested.style.display = expanded ? "none" : "block";
      header.querySelector(".toggle").textContent = expanded ? "▸" : "▾";
    });

    header.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") header.click();
    });

    return li;
  }

  function createLeaf(asana) {
    const li = document.createElement("li");
    li.className = "tree-leaf";
    li.innerHTML = \`<span class="icon">🧘</span> \${asana.name}\`;
    li.tabIndex = 0;
    li.addEventListener("click", () => showAsanaDetails(asana));
    li.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") li.click();
    });
    return li;
  }

  function showAsanaDetails(asana) {
    detailEl.innerHTML = \`
      <h2>\${asana.name}</h2>
      <div class="difficulty-bar">
        <span>Easy</span>
        <div class="bar">
          <div class="fill \${asana.difficulty.toLowerCase()}"></div>
        </div>
        <span>Hard</span>
      </div>
      <p><strong>Procedure:</strong> \${asana.procedure}</p>
      <p><strong>Benefits:</strong> \${asana.benefits}</p>
      <p><strong>Cautions:</strong> \${asana.cautions}</p>
      <p><strong>Ayurvedic Relationship:</strong> \${asana.ayurvedic}</p>
      <p><strong>Therapeutic Uses:</strong> \${asana.therapeutic}</p>
      <p><strong>Body System Impact:</strong> \${asana.systemImpact}</p>
      <div class="media">
        <div class="image-placeholder">Image Placeholder</div>
        <div class="video-placeholder">Video Placeholder</div>
      </div>
    \`;
    detailEl.classList.add("fade-slide");
  }

  function highlightMatches(keyword) {
    flattenedAsanas.forEach(({ name, element }) => {
      const match = name.toLowerCase().includes(keyword.toLowerCase());
      element.style.display = match ? "list-item" : "none";
      element.innerHTML = \`<span class="icon">🧘</span> \${match ? "<span class='highlight'>" + name + "</span>" : name}\`;
      if (match) {
        let el = element.parentElement;
        while (el && el.classList.contains("nested")) {
          el.style.display = "block";
          el.previousElementSibling.querySelector(".toggle").textContent = "▾";
          el = el.parentElement.closest(".nested");
        }
      }
    });
  }

  searchInput.addEventListener("input", (e) => {
    const keyword = e.target.value.trim();
    if (keyword === "") return buildTree(treeData);
    highlightMatches(keyword);
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    buildTree(treeData);
  });

  expandAllBtn.addEventListener("click", () => {
    treeEl.querySelectorAll(".nested").forEach((el) => (el.style.display = "block"));
    treeEl.querySelectorAll(".toggle").forEach((el) => (el.textContent = "▾"));
  });

  collapseAllBtn.addEventListener("click", () => {
    treeEl.querySelectorAll(".nested").forEach((el) => (el.style.display = "none"));
    treeEl.querySelectorAll(".toggle").forEach((el) => (el.textContent = "▸"));
  });
});