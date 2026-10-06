window.EXERCISE_DATA = {
  id: "con-003",
  code: "CON-003",
  title: "只给 y=1/x 第一象限分支：还原坐标轴",
  subject: "尺规作图",
  difficulty: "较难",
  tags: ["尺规作图", "双曲线", "解析几何", "平行弦", "弦中点", "角平分线", "坐标轴"],
  figure: "problems/con-003/figure.png",
  figureAlt: "只给双曲线 y=1/x 的第一象限分支，通过两组平行弦中点找到中心，再由弦与共轭方向的角平分线恢复坐标轴",
  figureCaption: "Python 按解析坐标精确生成的逐步尺规图解；只使用第一象限分支上的弦。",
  statement: `
    <p>只给出双曲线 <strong>y=1/x</strong> 的第一象限分支，原点、x 轴和 y 轴均未标出。</p>
    <p>只允许使用有限次标准尺规作图，恢复隐藏的两条坐标轴。</p>`,
  goal: "先由平行弦中点恢复双曲线中心 O，再确定两条坐标轴的方向。",
  reviewTip: "先把问题拆成两层：平行弦中点负责找中心 O；找到 O 后，一条弦 AB 与 OM 的方向关于坐标轴对称，所以它们的两条角平分线给出两条轴的方向。",
  solutions: [
    {
      id: "parallel-chords-center-bisectors",
      title: "解法：平行弦中点找中心＋角平分线找轴",
      shortTitle: "平行弦＋角平分线",
      level: "尺规作图 · 韦达定理",
      comparison: "先用两族平行弦的中点直线恢复中心，再利用一条弦与对应中点半径的对称方向恢复两条轴。",
      summary: "固定斜率的平行弦，其中点都在一条经过双曲线中心的直线上；两种弦方向即可找出中心 O，再用 AB 与 OM 的角平分线得到坐标轴方向。",
      conclusion: "由两组平行弦确定中心，再作角平分线即可恢复两条坐标轴；两轴只能确定为无序对。∎",
      steps: [
        {
          title: "第一组平行弦：作出一条过中心的中点直线 d₁",
          body: `<p>任选一个弦方向，作两条互相平行且都与已知分支交于两点的弦，分别取中点 M₁、M₂。</p>
          <div class="formula key">连接 M₁M₂，记为 d₁。</div>
          <p>下面证明 d₁ 必经过隐藏的原点 O。</p>`
        },
        {
          title: "证明固定斜率的弦中点都与 O 共线",
          body: `<p>设弦所在直线为</p>
          <div class="formula">y=mx+b。</div>
          <p>与 xy=1 联立：</p>
          <div class="formula">mx²+bx−1=0。</div>
          <p>若两交点横坐标为 x₁、x₂，韦达定理给出</p>
          <div class="formula">x₁+x₂=−b/m。</div>
          <p>中点 M 的坐标满足</p>
          <div class="formula key">x_M=−b/(2m)，　y_M=b/2。</div>
          <p>消去 b：</p>
          <div class="formula key">y_M=−m x_M。</div>
          <p>固定弦斜率 m 时，所有中点都在经过 O 的直线 y=−mx 上。因此 d₁ 经过中心 O。</p>`
        },
        {
          title: "换一个弦方向，交出中心 O",
          body: `<p>换一个不同斜率的弦方向，再作一对平行弦，取中点 N₁、N₂，连接得到 d₂。</p>
          <p>同理 d₂ 也经过中心 O。由于两方向不同：</p>
          <div class="formula key">O=d₁∩d₂。</div>`
        },
        {
          title: "用一条弦 AB 与 OM 的角平分线确定坐标轴方向",
          body: `<p>任取前面的一条弦 AB，其中点为 M，并连接 OM。</p>
          <p>若 AB 的斜率为 m，刚才已证 OM 的斜率为 −m。</p>
          <p>因此这两个方向关于原 x 轴互为镜像；同样也关于原 y 轴构成另一组对称方向。于是 AB 与 OM 的两条角平分线方向恰好就是原两条坐标轴方向。</p>
          <div class="formula key">作 AB 与 OM 的两条角平分线。</div>`
        },
        {
          title: "把轴方向平移到中心 O",
          body: `<p>过 O 分别作与上述两条角平分线平行的直线，即得到原来的两条坐标轴。</p>
          <div class="formula key">过 O 作两条平行线 → 两条坐标轴。</div>
          <div class="note-box"><strong>不可区分性：</strong>交换 x 与 y 后，方程 y=1/x 不变。因此只凭这条曲线，无法判定哪一条应命名为 x 轴、哪一条应命名为 y 轴；能够唯一恢复的是两条坐标轴组成的无序对。</div>`
        }
      ]
    }
  ]
};
