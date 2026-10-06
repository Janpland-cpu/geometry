# 如何新增一道习题

只需要 4 步。

## 1. 复制模板目录

复制：

```text
problems/_template/
```

例如改名为：

```text
problems/geo-002/
```

把 `data.example.js` 改名为 `data.js`。

## 2. 编辑题目内容

在 `problems/geo-002/data.js` 中填写：

- `id`：必须与文件夹名相同，例如 `geo-002`
- `code`：显示编号，例如 `GEO-002`
- `title`
- `statement`
- `goal`
- `solutions`

每个解法由多个 `steps` 组成；每一步只有 `title` 和 `body`，因此很容易继续增加。

正文支持普通 HTML。常用样式：

```html
<div class="formula">一般公式</div>
<div class="formula key">关键公式</div>
<div class="theorem-box">定理说明</div>
<div class="note-box">补充说明</div>
```

## 3. 放入示意图

推荐 SVG，因为缩放不会模糊：

```text
problems/geo-002/figure.svg
```

如果使用 PNG/JPG，只要同时修改 `data.js` 中的 `figure` 路径即可。

互动演示是可选的，例如：

```text
problems/geo-002/demos/solution-1.html
```

并在该解法的 `demo` 字段填写路径。

## 4. 在目录登记一条数据

打开：

```text
assets/js/catalog.js
```

复制一个对象，修改为：

```js
{
  id: "geo-002",
  code: "GEO-002",
  title: "新题目",
  summary: "一句话摘要",
  subject: "平面几何",
  difficulty: "中等",
  tags: ["圆", "相似"],
  solutionCount: 2,
  updated: "2026-10-05"
}
```

保存并推送 GitHub。完成。

---

## 推荐编号

可以按领域划分：

- `GEO-001`：平面几何
- `ALG-001`：代数
- `NT-001`：数论
- `COM-001`：组合
- `CAL-001`：微积分

文件夹 ID 使用小写，例如 `geo-001`、`alg-001`。
