window.EXERCISE_DATA = {
  id: "geo-001",
  code: "GEO-001",
  title: "角平分线、中点与四点共圆",
  subject: "平面几何",
  difficulty: "较难",
  tags: ["圆", "角平分线", "共圆", "反演", "相似", "根轴", "根心", "点幂"],
  figure: "problems/geo-001/figure.svg",
  figureAlt: "三角形 ABC 内接圆 O，AD 为角平分线，M 为 AD 中点，AH 垂直 BC，X、Y 在圆上",
  statement: `
    <p>如图，△ABC 内接于圆 O，AD 平分 ∠BAC，D∈BC，M 是 AD 的中点。</p>
    <p>点 X、Y 在圆 O 上，并且</p>
    <div class="formula key">∠AXM = ∠AYM = ½∠BAC。</div>
    <p>AH ⟂ BC 于 H。</p>`,
  goal: "证明 D、H、X、Y 四点共圆。",
  reviewTip: "第一次复习建议先看解法二“相似＋根心”，它一直留在原图内；想训练综合圆几何与点幂串联，再看解法三“白板点幂链”；熟悉这些结构后再看反演，会更容易体会反演为什么有效。",
  solutions: [
    {
      id: "inversion",
      title: "解法一：反演",
      shortTitle: "反演",
      level: "竞赛工具 · 结构短",
      comparison: "把原圆拉成直线，乘积关系非常集中；前提是熟悉反演。",
      summary: "以 A 为中心设计反演，使 M 与 D 互换；把圆 O 拉直后，用相似、正弦定理和点幂完成。",
      demo: "problems/geo-001/demos/inversion.html",
      conclusion: "反演回原图，得到 D、H、X、Y 四点共圆。∎",
      steps: [
        {
          title: "设计反演：让 M 与 D 互换",
          body: `<p>设 α = ½∠BAC。以 A 为反演中心，取反演幂</p>
          <div class="formula key">r² = AM·AD。</div>
          <p>反演定义是 AP·AP′=r²，并且 A、P、P′ 共线，所以立刻得到</p>
          <div class="formula key">M ↔ D。</div>`
        },
        {
          title: "原圆 O 被拉成一条直线",
          body: `<p>圆 O 经过反演中心 A，因此反演后成为一条直线 ℓ。记 B、C、X、Y 的像为 B′、C′、X′、Y′，于是</p>
          <div class="formula key">B′、C′、X′、Y′ 共线。</div>`
        },
        {
          title: "直线 BC 变成圆 Γ，并出现直角",
          body: `<p>BC 不经过 A，所以反演后成为一个经过 A 的圆 Γ。因为 D↔M、H↔H′，故</p>
          <div class="formula">A、B′、M、H′、C′ 共圆。</div>
          <p>又因 AH ⟂ BC，可推出 AH′ 是 Γ 的直径，所以</p>
          <div class="formula key">∠AMH′=90°，即 MH′ ⟂ AD。</div>`
        },
        {
          title: "引入 K：把中点条件转成等腰三角形",
          body: `<p>令 K = MH′∩ℓ。M 是 AD 中点，而且 KM ⟂ AD，所以 KM 是 AD 的垂直平分线。</p>
          <div class="formula key">KA = KD。</div>
          <p>记 ∠KAD=∠ADK=θ。</p>`
        },
        {
          title: "把原题角条件变成平行线",
          body: `<p>以 X 为例，反演给出 AM·AD=AX·AX′，即 AD/AX′=AX/AM；又有 ∠DAX′=∠XAM。</p>
          <p>所以由 SAS：</p>
          <div class="formula">△ADX′ ∼ △AXM。</div>
          <p>从而 ∠ADX′=∠AXM=α，而 ∠DAC=α，因此按图中方向</p>
          <div class="formula key">DX′ ∥ AC。</div>
          <p>完全同理：</p>
          <div class="formula key">DY′ ∥ AB。</div>
          <div class="note-box">X、Y 的命名与图中左右位置对应；若一开始交换了 X、Y，两个平行关系也会交换，但后续证明不变。</div>`
        },
        {
          title: "两次正弦定理得到互为倒数的比例",
          body: `<p>利用 KA=KD、DX′∥AC、DY′∥AB，在相应三角形中分别使用正弦定理。采用有向角 / 有向线段可统一所有位置情况，得到</p>
          <div class="formula key">KX′ / KC′ = sin(θ+α) / sin(θ−α)，</div>
          <div class="formula key">KY′ / KB′ = sin(θ−α) / sin(θ+α)。</div>`
        },
        {
          title: "相乘，得到第一个点幂型乘积",
          body: `<p>把上面两式相乘，正弦项全部抵消：</p>
          <div class="formula key">KX′·KY′ = KB′·KC′。　①</div>`
        },
        {
          title: "对圆 Γ 使用点幂",
          body: `<p>从 K 出发，一条割线经过 B′、C′，另一条经过 M、H′。点幂定理给出</p>
          <div class="formula key">KB′·KC′ = KM·KH′。　②</div>
          <p>结合 ①②：</p>
          <div class="formula key">KX′·KY′ = KM·KH′。</div>
          <p>由点幂定理的逆，M、H′、X′、Y′ 四点共圆。</p>`
        },
        {
          title: "反演回去",
          body: `<p>对应关系为 M↔D、H′↔H、X′↔X、Y′↔Y。反演把不过 A 的圆仍映成圆，因此</p>
          <div class="formula key">D、H、X、Y 四点共圆。</div>`
        }
      ]
    },
    {
      id: "radical-center",
      title: "解法二：相似＋根心定理",
      shortTitle: "相似＋根心",
      level: "高中几何 · 原图内完成",
      comparison: "辅助圆自然，主要工具是相似、点幂、根轴与根心；图形直观。",
      summary: "先由斜边中点构造辅助圆 Γ，再用两组相似建立比例，最后把比例解释成根轴关系，用根心定理收尾。",
      demo: "problems/geo-001/demos/similarity-radical-center.html",
      conclusion: "由根心定理，Y 落在圆 (DHX) 上，因此 D、H、X、Y 四点共圆。∎",
      steps: [
        {
          title: "由中点和垂直关系造辅助圆 Γ",
          body: `<p>因为 D、H∈BC 且 AH ⟂ BC，所以 △ADH 是以 H 为直角顶点的直角三角形。M 是斜边 AD 的中点。</p>
          <div class="theorem-box">直角三角形斜边中点到三个顶点距离相等。</div>
          <div class="formula key">MA = MD = MH。</div>
          <p>以 M 为圆心、MA 为半径作圆 Γ，则 A、D、H∈Γ。令 Γ 再交 AB、AC 于 E、F。</p>`
        },
        {
          title: "把 X、Y 分别装进两个小圆",
          body: `<p>因为 MA=ME，△AME 为等腰三角形；E∈AB，所以 ∠EAM=α，从而 ∠AEM=α。题设又有 ∠AXM=α，因此</p>
          <div class="formula key">A、E、M、X 共圆。</div>
          <p>同理，由 MA=MF 与 ∠AYM=α：</p>
          <div class="formula key">A、F、M、Y 共圆。</div>`
        },
        {
          title: "第一组相似：△BEX ∼ △CAX",
          body: `<p>因为 A、B、C、X 在圆 O 上，且 A、E、B 共线，所以</p>
          <div class="formula">∠EBX = ∠ABX = ∠ACX。</div>
          <p>又由 A、E、M、X 共圆，并结合 ∠AXM=∠MAC=α，可推出</p>
          <div class="formula">∠BEX = ∠CAX。</div>
          <p>故 AA 相似：</p>
          <div class="formula key">△BEX ∼ △CAX，　BX/CX = BE/CA。　①</div>`
        },
        {
          title: "第二组相似：△ABY ∼ △FCY",
          body: `<p>完全对称地，由 A、F、M、Y 共圆以及 A、B、C、Y 共圆：</p>
          <div class="formula key">△ABY ∼ △FCY，　BY/CY = AB/CF。　②</div>
          <div class="note-box">这两组相似也可以理解成以 X、Y 为中心的“旋转位似”。真正书写证明时，用 AA 相似即可。</div>`
        },
        {
          title: "令 P=XY∩BC，建立圆内接四边形比例",
          body: `<p>对圆内接四边形 BXYC，用两次正弦定理可以得到</p>
          <div class="formula key">PB/PC = (BX·BY)/(CX·CY)。　③</div>
          <p>将 ①② 代入：</p>
          <div class="formula key">PB/PC = (AB·BE)/(AC·CF)。　④</div>`
        },
        {
          title: "对辅助圆 Γ 用点幂",
          body: `<p>从 B 看圆 Γ，BA 与 Γ 交于 E、A，BC 与 Γ 交于 D、H，所以</p>
          <div class="formula">BA·BE = BD·BH。</div>
          <p>从 C 看同理：</p>
          <div class="formula">CA·CF = CD·CH。</div>
          <p>代入 ④：</p>
          <div class="formula key">PB/PC = (BD·BH)/(CD·CH)。　⑤</div>`
        },
        {
          title: "把比例改写成“两个圆幂相等”",
          body: `<p>B、D、H、C、P 共线。用有向线段整理 ⑤，可得</p>
          <div class="formula key">PB·PC = PD·PH。　⑥</div>
          <p>左边是 P 对圆 O 的幂，右边是 P 对圆 Γ 的幂，因此</p>
          <div class="formula key">Pow<sub>O</sub>(P)=Pow<sub>Γ</sub>(P)。</div>
          <p>所以 P 在圆 O 与 Γ 的根轴上。又 A 是两圆公共点，因此</p>
          <div class="formula key">根轴(O,Γ)=AP。</div>`
        },
        {
          title: "引入目标圆 ω=(DHX)",
          body: `<p>过 D、H、X 作圆 ω。Γ 与 ω 都经过 D、H，所以</p>
          <div class="formula key">根轴(Γ,ω)=DH=BC。</div>
          <p>而根轴(O,Γ)=AP。两条根轴 AP 与 BC 正好交于 P。</p>`
        },
        {
          title: "根心定理收尾",
          body: `<div class="theorem-box"><strong>三圆根轴定理：</strong>三个圆两两的根轴共点（若不平行）。这个公共点称为根心。</div>
          <p>对 O、Γ、ω 三个圆，第三条根轴根轴(O,ω) 也经过 P。</p>
          <p>O 与 ω 又有公共点 X，所以它们的根轴还经过 X：</p>
          <div class="formula key">根轴(O,ω)=PX=XY。</div>
          <p>Y 在圆 O 上，所以 Pow<sub>O</sub>(Y)=0；又 Y 在 O、ω 的根轴上，故 Pow<sub>ω</sub>(Y)=0。因此 Y∈ω。</p>
          <div class="formula key">D、H、X、Y 四点共圆。</div>`
        }
      ]
    }
    ,{
      id: "whiteboard-chain",
      title: "解法三：白板法——相似＋根心＋点幂连锁",
      shortTitle: "白板点幂链",
      level: "高中竞赛 · 综合圆几何",
      comparison: "辅助点较多，但每一步都落在相似、共圆、根心和点幂上；适合训练综合结构与乘积链。",
      summary: "令 E=AB∩XM、F=AC∩YM，先用两组相似制造两个圆，再由三圆根心得到 K；随后引入 J，把多次点幂连成 MK²，最后用中位线与平方差得到 KD·KH=KX·KY。",
      demo: "problems/geo-001/demos/whiteboard-radical-center.html",
      conclusion: "由 KD·KH=KX·KY 及割线定理的逆，D、H、X、Y 四点共圆。∎",
      steps: [
        {
          title: "定义 E、F；注意与解法二的 E、F 不同",
          body: `<p>本解法重新定义辅助点：</p>
          <div class="formula key">E = AB∩XM，　F = AC∩YM。</div>
          <p>因此 X、E、M 共线，Y、F、M 共线。仍记 α=½∠BAC，于是</p>
          <div class="formula">∠BAD=∠CAD=∠AXM=∠AYM=α。</div>
          <div class="note-box">这一解法里的 E、F 与“解法二：相似＋根心”中的 E、F 定义不同；切换解法时不要混用。</div>`
        },
        {
          title: "两组相似，把角条件变成乘积",
          body: `<p>看 △AEM 与 △AXM。因为 E∈AB、M∈AD，有 ∠EAM=α=∠AXM；又 X、E、M 共线，所以 ∠AME=∠AMX。</p>
          <div class="formula key">△AEM∼△AXM。</div>
          <p>由对应边：</p>
          <div class="formula key">ME·MX=AM²。　①</div>
          <p>同理：</p>
          <div class="formula key">△AFM∼△AYM，　MF·MY=AM²。　②</div>`
        },
        {
          title: "第一次共圆：E、F、X、Y",
          body: `<p>由 ①②：</p>
          <div class="formula">ME·MX=MF·MY。</div>
          <p>M 是直线 EX 与 FY 的交点，所以由割线定理的逆：</p>
          <div class="formula key">E、F、X、Y 四点共圆，记为 ω₁。</div>`
        },
        {
          title: "第二次共圆：B、C、E、F",
          body: `<p>按图拆角，利用前面的相似、ω₁=(EFXY) 以及原圆 O=(ABCXY)，可得</p>
          <div class="formula key">∠AEF=∠BCA。</div>
          <p>因为 B、E、A 共线，所以 ∠BEF 与 ∠AEF 互补；从而</p>
          <div class="formula key">B、C、E、F 四点共圆，记为 ω₂。</div>
          <div class="note-box">这一段角度链较长，建议点击本解法右上角的“打开互动演示”，图中用 ①②③ 和 α 逐个标出了对应角。</div>`
        },
        {
          title: "三圆根心：得到 K=EF∩BC∩XY",
          body: `<p>现在有三个圆：</p>
          <div class="formula">ω₁=(EFXY)，　ω₂=(BCEF)，　O=(BCXY)。</div>
          <p>它们两两的根轴分别为：</p>
          <div class="formula">EF，　BC，　XY。</div>
          <p>由三圆根轴定理（根心定理）：</p>
          <div class="formula key">EF、BC、XY 三线共点，记为 K。</div>`
        },
        {
          title: "在 MK 上引入 J，再造一个圆",
          body: `<p>作圆 (MEF)，令它与直线 MK 除 M 外再交于 J，于是</p>
          <div class="formula">M、E、F、J 共圆。</div>
          <p>结合 E、F、X、Y 共圆以及图中的共线关系，可推出</p>
          <div class="formula key">F、Y、K、J 四点共圆。</div>`
        },
        {
          title: "点幂连锁：把多个乘积串起来",
          body: `<p>依次使用点幂：</p>
          <div class="formula">KX·KY = KE·KF，</div>
          <div class="formula">KE·KF = KJ·KM，</div>
          <div class="formula">MF·MY = MJ·MK。</div>
          <p>再用第 2 步的 ME·MX=MF·MY，并注意 J 在线段 MK 上，因此 KJ+MJ=KM：</p>
          <div class="formula key">KX·KY + ME·MX = MK²。</div>
          <p>而 ME·MX=AM²，所以</p>
          <div class="formula key">MK² = KX·KY + AM²。　③</div>`
        },
        {
          title: "作 MG⊥BC：G 是 DH 的中点",
          body: `<p>从 M 向 BC 作垂线，垂足为 G。因为 AH⊥BC，所以 MG∥AH。</p>
          <p>在 △DAH 中，M 是 DA 的中点；过 M 作 AH 的平行线交 DH 于 G。由三角形中位线定理：</p>
          <div class="formula key">DG=GH。</div>`
        },
        {
          title: "用平方差把 KD·KH 与 MK² 联系起来",
          body: `<p>按图中点的顺序 D-G-H-K，有</p>
          <div class="formula">KD=KG+DG，　KH=KG−DG。</div>
          <p>所以</p>
          <div class="formula">KD·KH=KG²−DG²。</div>
          <p>△MKG 与 △MDG 都是直角三角形：</p>
          <div class="formula">MK²=KG²+MG²，　MD²=DG²+MG²。</div>
          <p>两式相减：</p>
          <div class="formula key">KD·KH=MK²−MD²。　④</div>`
        },
        {
          title: "代入中点条件，得到最终乘积",
          body: `<p>M 是 AD 的中点，所以 MD=AM。把 ③ 代入 ④：</p>
          <div class="formula">KD·KH = MK²−MD²</div>
          <div class="formula">= KX·KY+AM²−MD²</div>
          <div class="formula key">= KX·KY。</div>`
        },
        {
          title: "割线定理的逆收尾",
          body: `<p>由根心构造，K、D、H 共线且 K、X、Y 共线；又已经证明</p>
          <div class="formula key">KD·KH=KX·KY。</div>
          <p>由割线定理的逆：</p>
          <div class="formula key">D、H、X、Y 四点共圆。</div>`
        }
      ]
    }

  ]
};
