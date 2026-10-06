(() => {
  const catalog = window.EXERCISE_CATALOG || [];
  const grid = document.getElementById("problemGrid");
  const searchInput = document.getElementById("searchInput");
  const tagFilters = document.getElementById("tagFilters");
  const emptyState = document.getElementById("emptyState");
  const masteryKey = id => `exercise-mastered:${id}`;

  let activeTag = "全部";

  const allTags = ["全部", ...Array.from(new Set(catalog.flatMap(item => item.tags || [])))];
  allTags.forEach(tag => {
    const button = document.createElement("button");
    button.className = `filter-chip${tag === activeTag ? " active" : ""}`;
    button.type = "button";
    button.textContent = tag;
    button.addEventListener("click", () => {
      activeTag = tag;
      [...tagFilters.children].forEach(el => el.classList.toggle("active", el.textContent === tag));
      render();
    });
    tagFilters.appendChild(button);
  });

  function isMastered(id) {
    return localStorage.getItem(masteryKey(id)) === "1";
  }

  function renderStats() {
    document.getElementById("problemCount").textContent = catalog.length;
    document.getElementById("solutionCount").textContent = catalog.reduce((sum, item) => sum + (item.solutionCount || 0), 0);
    document.getElementById("masteredCount").textContent = catalog.filter(item => isMastered(item.id)).length;
  }

  function matches(item, query) {
    const haystack = [item.code, item.title, item.summary, item.subject, item.difficulty, ...(item.tags || [])].join(" ").toLowerCase();
    return haystack.includes(query.toLowerCase());
  }

  function card(item) {
    const mastered = isMastered(item.id);
    const a = document.createElement("a");
    a.className = "problem-card";
    a.href = `problem.html?id=${encodeURIComponent(item.id)}`;
    a.innerHTML = `
      <div class="card-top">
        <span class="problem-code">${item.code}</span>
        <span class="mastery-dot ${mastered ? "done" : ""}">${mastered ? "已掌握" : "未标记"}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <div class="card-tags">${(item.tags || []).slice(0, 5).map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
      <div class="card-meta">
        <span>${item.subject} · ${item.difficulty}</span>
        <span>${item.solutionCount || 0} 个解法 →</span>
      </div>`;
    return a;
  }

  function render() {
    const query = searchInput.value.trim();
    const filtered = catalog.filter(item => {
      const tagOK = activeTag === "全部" || (item.tags || []).includes(activeTag);
      return tagOK && (!query || matches(item, query));
    });
    grid.replaceChildren(...filtered.map(card));
    emptyState.hidden = filtered.length !== 0;
    renderStats();
  }

  searchInput.addEventListener("input", render);
  window.addEventListener("storage", render);
  render();
})();
