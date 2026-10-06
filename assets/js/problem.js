(() => {
  const app = document.getElementById("problemApp");
  const params = new URLSearchParams(location.search);
  const id = params.get("id") || (window.EXERCISE_CATALOG || [])[0]?.id;
  const meta = (window.EXERCISE_CATALOG || []).find(item => item.id === id);

  if (!id || !meta) {
    app.innerHTML = `<section class="error-card"><h1>找不到这道题</h1><p>请从习题目录重新进入。</p><a class="btn" href="index.html">返回目录</a></section>`;
    return;
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  const masteryKey = `exercise-mastered:${id}`;

  loadScript(`problems/${encodeURIComponent(id)}/data.js`).then(() => {
    const data = window.EXERCISE_DATA;
    if (!data || data.id !== id) throw new Error("习题数据不匹配");
    document.title = `${data.code} ${data.title} | 数学习题集`;
    renderPage(data);
  }).catch(error => {
    console.error(error);
    app.innerHTML = `<section class="error-card"><h1>习题载入失败</h1><p>请确认 <code>problems/${id}/data.js</code> 存在。</p><a class="btn" href="index.html">返回目录</a></section>`;
  });

  function isMastered() {
    return localStorage.getItem(masteryKey) === "1";
  }

  function renderPage(data) {
    app.innerHTML = `
      <section class="problem-hero">
        <div class="problem-heading">
          <div class="problem-code">${data.code}</div>
          <h1>${data.title}</h1>
          <div class="problem-subline">${data.subject} · ${data.difficulty} · ${(data.tags || []).join(" / ")}</div>
        </div>
        <div class="problem-actions">
          <button id="masteryBtn" class="btn" type="button"></button>
          <a class="btn" href="index.html">返回目录</a>
        </div>
      </section>

      <section class="problem-layout">
        <div class="stack">
          <article class="panel">
            <div class="panel-inner statement">
              <h2 class="panel-title">题目</h2>
              ${data.statement}
              <div class="goal"><strong>目标：</strong>${data.goal}</div>
            </div>
          </article>

          <article class="panel figure-wrap">
            <img src="${data.figure}" alt="${data.figureAlt || "题目示意图"}">
            <div class="figure-caption">示意图按题设精确构造；证明不依赖图形的具体比例。</div>
          </article>

          <section aria-labelledby="solutionsTitle">
            <div class="solution-switch" id="solutionTabs"></div>
            <article class="panel" id="solutionPanel" style="margin-top:12px"></article>
          </section>
        </div>

        <aside class="stack">
          <section class="panel side-card">
            <h2 class="panel-title">题目信息</h2>
            <div class="meta-list">
              <div class="meta-item"><span>编号</span><strong>${data.code}</strong></div>
              <div class="meta-item"><span>类别</span><strong>${data.subject}</strong></div>
              <div class="meta-item"><span>难度</span><strong>${data.difficulty}</strong></div>
              <div class="meta-item"><span>解法</span><strong>${data.solutions.length} 种</strong></div>
            </div>
            <div class="card-tags" style="padding-top:14px">${data.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
          </section>

          <section class="panel demo-card">
            <h2 class="panel-title">${data.solutions.length} 种思路怎么选？</h2>
            <table class="compare-table">
              <thead><tr><th>解法</th><th>特点</th></tr></thead>
              <tbody>
                ${data.solutions.map(solution => `<tr><td>${solution.shortTitle}</td><td>${solution.comparison}</td></tr>`).join("")}
              </tbody>
            </table>
          </section>

          <section class="panel demo-card">
            <h2 class="panel-title">复习建议</h2>
            <p>${data.reviewTip}</p>
          </section>
        </aside>
      </section>`;

    const masteryBtn = document.getElementById("masteryBtn");
    const updateMastery = () => {
      const done = isMastered();
      masteryBtn.classList.toggle("mastered", done);
      masteryBtn.textContent = done ? "✓ 已掌握" : "标记为已掌握";
    };
    masteryBtn.addEventListener("click", () => {
      localStorage.setItem(masteryKey, isMastered() ? "0" : "1");
      updateMastery();
    });
    updateMastery();

    const tabs = document.getElementById("solutionTabs");
    data.solutions.forEach((solution, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `solution-tab${index === 0 ? " active" : ""}`;
      button.dataset.solution = solution.id;
      button.innerHTML = `<strong>${solution.title}</strong><span>${solution.level}</span>`;
      button.addEventListener("click", () => selectSolution(data, solution.id));
      tabs.appendChild(button);
    });
    selectSolution(data, data.solutions[0].id);
  }

  function selectSolution(data, solutionId) {
    const solution = data.solutions.find(item => item.id === solutionId);
    document.querySelectorAll(".solution-tab").forEach(tab => tab.classList.toggle("active", tab.dataset.solution === solutionId));
    const panel = document.getElementById("solutionPanel");
    panel.innerHTML = `
      <header class="solution-head">
        <div><h2>${solution.title}</h2><p>${solution.summary}</p></div>
        ${solution.demo ? `<a class="btn primary" target="_blank" rel="noopener" href="${solution.demo}">打开互动演示 ↗</a>` : ""}
      </header>
      <div class="solution-body">
        <div class="step-list">
          ${solution.steps.map((step, i) => `
            <section class="step-card">
              <span class="step-number">${i + 1}</span>
              <h3>${step.title}</h3>
              ${step.body}
            </section>`).join("")}
        </div>
        <div class="solution-end">${solution.conclusion}</div>
      </div>`;
    panel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
})();
