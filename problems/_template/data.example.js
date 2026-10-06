// 复制整个 problems/_template 文件夹，改名为例如 alg-001；
// 然后把本文件改成 data.js，并填写内容。
window.EXERCISE_DATA = {
  id: "replace-me",
  code: "NEW-001",
  title: "新习题标题",
  subject: "代数 / 几何 / 数论 / 组合",
  difficulty: "中等",
  tags: ["标签1", "标签2"],
  figure: "problems/replace-me/figure.svg",
  figureAlt: "题目示意图",
  statement: `<p>在这里写题目。</p>`,
  goal: "在这里写求证或求解目标。",
  reviewTip: "写一句复习建议。",
  solutions: [
    {
      id: "solution-1",
      title: "解法一：方法名",
      shortTitle: "方法名",
      level: "基础 / 进阶",
      comparison: "一句话描述这个解法的优缺点。",
      summary: "一句话概括思路。",
      demo: "", // 如果有互动 HTML，写相对路径；没有就留空
      conclusion: "结论。∎",
      steps: [
        {
          title: "第一个关键步骤",
          body: `<p>说明文字。</p><div class="formula key">a²+b²=c²</div>`
        }
      ]
    }
  ]
};
