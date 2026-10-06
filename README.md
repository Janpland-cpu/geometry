# 数学习题集（GitHub Pages 静态网站）

这是一个 **无框架、无数据库、无需构建** 的静态习题集。把仓库直接部署到 GitHub Pages 就能使用。

当前已经包含：

- `GEO-001 角平分线、中点与四点共圆`
- 解法一：反演
- 解法二：相似（旋转位似）＋根心定理
- 解法三：白板法——相似＋根心＋点幂连锁
- 三个独立的逐步互动演示 HTML
- 首页搜索、标签筛选、已掌握标记（保存在浏览器 localStorage）

## 目录结构

```text
math-exercise-book/
├─ index.html                    # 首页 / 习题目录
├─ problem.html                  # 通用习题详情页
├─ about.html                    # 网站结构 / 维护说明页
├─ .nojekyll                     # GitHub Pages 不经过 Jekyll
├─ README.md
├─ ADD_PROBLEM.md                # 新增习题的最短流程
├─ assets/
│  ├─ css/site.css               # 全站样式
│  ├─ js/catalog.js              # 习题目录清单（新增题目要登记这里）
│  ├─ js/home.js                 # 首页逻辑
│  ├─ js/problem.js              # 通用详情页逻辑
│  └─ icons/favicon.svg
└─ problems/
   ├─ geo-001/
   │  ├─ data.js                 # 题目 + 多解法正文
   │  ├─ figure.svg              # 题目主图
   │  └─ demos/
   │     ├─ inversion.html
   │     ├─ similarity-radical-center.html
   │     └─ whiteboard-radical-center.html
   └─ _template/
      ├─ data.example.js
      └─ figure.example.svg
```

## 上传到 GitHub Pages

1. 在 GitHub 新建一个仓库，例如 `math-exercise-book`。
2. 把本文件夹里的 **全部文件和文件夹** 上传到仓库根目录。
3. 打开仓库 `Settings → Pages`。
4. 在 `Build and deployment` 选择 `Deploy from a branch`。
5. Branch 选择 `main`，Folder 选择 `/ (root)`，保存。
6. 等待 GitHub 部署完成，即可获得网址：

   `https://你的用户名.github.io/仓库名/`

整个站点只使用相对路径，因此仓库名可以任意修改。

## 本地预览

可以直接双击 `index.html`。如果浏览器对本地脚本限制较严格，更推荐在文件夹中运行：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000/`。

## 网站的扩展原则

这个结构刻意保持简单：

- **首页只负责目录**：`assets/js/catalog.js`
- **题目正文各自独立**：`problems/<id>/data.js`
- **详情页只有一个**：所有题目都复用根目录 `problem.html`
- **互动演示完全可选**：有就放在题目自己的 `demos/` 目录，没有也不影响
- **不需要复制整套网页样式**：新增题目只写内容数据

这样以后从 1 道题扩展到几十道题，仍然不会出现“每题复制一整套 HTML、改一个地方要改几十份”的问题。

## 已掌握状态

“已掌握”状态保存在当前浏览器的 `localStorage`，不会上传到 GitHub，也不需要账号或数据库。如果以后要多设备同步，再考虑加入后端即可；当前版本故意不增加复杂度。
