window.EXERCISE_DATA = {
  id: "con-002",
  code: "CON-002",
  title: "隐藏坐标轴的三次曲线：还原 y=x³ 的坐标轴",
  subject: "尺规作图",
  difficulty: "中等",
  tags: ["尺规作图", "三次函数", "解析几何", "韦达定理", "三交割线", "坐标轴"],
  figure: "problems/con-002/figure.png",
  figureAlt: "曲线 y=x³ 在坐标轴被隐藏后，通过两条三交割线的三点平均位置恢复 y 轴与 x 轴",
  figureCaption: "Python 按解析坐标精确生成的逐步尺规图解；图中平均点由可尺规实现的中点与 1:2 分点构造。",
  statement: `
    <p>平面上给出曲线 <strong>y=x³</strong> 的完整图形，但原点、x 轴和 y 轴都没有标出。</p>
    <p>只允许使用有限次标准尺规作图，恢复这条曲线原来的两条坐标轴。</p>`,
  goal: "利用两条三交割线作出原 y 轴，再恢复原点 O 与原 x 轴。",
  reviewTip: "核心观察是三次方程 x³−mx−b=0 没有 x² 项，所以三个交点横坐标之和恒为 0。几何上要把“三点平均位置”用中点和 1:2 分点真正作出来。",
  solutions: [
    {
      id: "trisecant-centroid",
      title: "解法：三交割线的三点平均位置",
      shortTitle: "三交割线平均点",
      level: "尺规作图 · 韦达定理",
      comparison: "利用三次方程缺少 x² 项，把每条三交割线的三个交点压缩成 y 轴上的一个可作点。",
      summary: "对任一三交割线作三个交点的平均点，该点必在原 y 轴上；再作第二个平均点即可确定 y 轴。",
      conclusion: "两组平均点确定原 y 轴，随后由曲线交点恢复原点并作出 x 轴。∎",
      steps: [
        {
          title: "从一条三交割线构造三点平均点",
          body: `<p>任作一条与曲线有三个交点的直线，交点依次记为 A、B、C。</p>
          <p>先作 AB 的中点 M；再在线段 MC 上作点 G，使</p>
          <div class="formula key">MG:GC=1:2。</div>
          <p>因为 G 从 M 向 C 走了 MC 的 1/3，所以向量形式为</p>
          <div class="formula">G=(2/3)M+(1/3)C=(A+B+C)/3。</div>
          <p>因此 G 正是 A、B、C 三点的平均位置。</p>`
        },
        {
          title: "用韦达定理证明 G 必在 y 轴上",
          body: `<p>设这条三交割线为</p>
          <div class="formula">y=mx+b。</div>
          <p>与 y=x³ 联立：</p>
          <div class="formula">x³−mx−b=0。</div>
          <p>若三个交点横坐标为 x₁、x₂、x₃，因为方程的 x² 项系数为 0，韦达定理给出</p>
          <div class="formula key">x₁+x₂+x₃=0。</div>
          <p>所以三点平均位置 G 的横坐标为</p>
          <div class="formula key">x_G=(x₁+x₂+x₃)/3=0。</div>
          <p>因此 G 必在原 y 轴上。</p>`
        },
        {
          title: "再取第二条三交割线，确定 y 轴",
          body: `<p>另作一条三交割线，同法得到第二个平均点 G′。</p>
          <p>两点都在原 y 轴上；只要选择使 G≠G′ 的两条割线，就有</p>
          <div class="formula key">GG′ = 原 y 轴。</div>`
        },
        {
          title: "恢复原点与 x 轴",
          body: `<p>原 y 轴与曲线 y=x³ 的唯一交点是 O=(0,0)。</p>
          <p>过 O 作 y 轴的垂线，就得到原 x 轴。</p>
          <div class="formula key">GG′ → O → 过 O 作垂线 = x 轴。</div>`
        }
      ]
    }
  ]
};
