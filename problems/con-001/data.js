window.EXERCISE_DATA = {
  id: "con-001",
  code: "CON-001",
  title: "隐藏坐标轴的抛物线：还原 y=x² 的坐标轴",
  subject: "尺规作图",
  difficulty: "中等",
  tags: ["尺规作图", "抛物线", "解析几何", "平行弦", "弦中点", "坐标轴"],
  figure: "problems/con-001/figure.png",
  figureAlt: "抛物线 y=x² 在坐标轴被隐藏后，通过两组平行弦中点逐步恢复 y 轴和 x 轴",
  figureCaption: "Python 按解析坐标精确生成的逐步尺规图解；横纵方向保持等比例。",
  statement: `
    <p>平面上给出抛物线 <strong>y=x²</strong> 的完整曲线，但原点、x 轴和 y 轴都没有标出。</p>
    <p>只允许使用有限次标准尺规作图，恢复这条抛物线原来的两条坐标轴。</p>`,
  goal: "作出原 y 轴、原点 O 与原 x 轴，并证明构造正确。",
  reviewTip: "关键不是直接找顶点，而是先证明：同一方向的平行弦，其中点总落在一条平行于 y 轴的直线上。先得到轴的方向，再用垂直方向的弦把轴的位置锁定。",
  solutions: [
    {
      id: "parallel-chord-midpoints",
      title: "解法：平行弦中点法",
      shortTitle: "平行弦中点",
      level: "尺规作图 · 韦达定理",
      comparison: "先确定 y 轴方向，再用一组水平弦中点确定 y 轴位置；步骤稳定且证明直接。",
      summary: "两条同方向平行弦的中点确定 y 轴方向；再作垂直于该方向的平行弦，其中点直接落在真正的 y 轴上。",
      conclusion: "因此可以用有限尺规步骤恢复 y 轴、原点 O 与 x 轴。∎",
      steps: [
        {
          title: "先用两条平行弦确定 y 轴方向",
          body: `<p>任选两条互相平行、且都与抛物线交于两点的弦，分别取中点 M₁、M₂。</p>
          <div class="formula key">连接 M₁M₂，记其方向为 d。</div>
          <p>此时先不声称 d 就是 y 轴本身，只证明它与 y 轴平行。</p>`
        },
        {
          title: "证明同方向平行弦的中点横坐标恒定",
          body: `<p>设这一族平行弦的斜率为 m，其中任一条可写为</p>
          <div class="formula">y=mx+b。</div>
          <p>与 y=x² 联立：</p>
          <div class="formula">x²-mx-b=0。</div>
          <p>若两交点横坐标为 x₁、x₂，由韦达定理：</p>
          <div class="formula key">x₁+x₂=m。</div>
          <p>所以弦中点的横坐标恒为</p>
          <div class="formula key">x_M=(x₁+x₂)/2=m/2。</div>
          <p>固定斜率 m 时，所有这些中点都在竖直直线 x=m/2 上，因此 M₁M₂ 与原 y 轴平行。</p>`
        },
        {
          title: "再用垂直于 d 的弦确定真正的 y 轴",
          body: `<p>作两条都垂直于方向 d 的弦，分别取中点 H₁、H₂。</p>
          <p>因为 d 与原 y 轴平行，所以这些弦与原 x 轴平行。在原坐标中，它们可写成 y=c。</p>
          <p>与 y=x² 相交于</p>
          <div class="formula">(−√c,c)，　(√c,c)。</div>
          <p>其中点为</p>
          <div class="formula key">(0,c)。</div>
          <p>因此 H₁、H₂ 都落在真正的 y 轴 x=0 上：</p>
          <div class="formula key">H₁H₂ 就是原 y 轴。</div>`
        },
        {
          title: "恢复原点和 x 轴",
          body: `<p>y 轴与抛物线的交点就是顶点 O=(0,0)。</p>
          <p>过 O 作 y 轴的垂线，即得到原 x 轴。</p>
          <div class="formula key">y 轴 → O → 过 O 的垂线 = x 轴。</div>`
        }
      ]
    }
  ]
};
