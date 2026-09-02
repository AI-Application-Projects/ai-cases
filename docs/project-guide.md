# 项目维护指南（简版）

## 项目目标

这是一个可部署到 GitHub Pages 的 AI 应用案例作品集。首页用于索引，`cases/` 是唯一案例库；每个案例独立访问、独立演示。

## 目录规则

```text
index.html / style.css / main.js  # 首页与案例卡片
cases/<slug>/                     # 唯一案例目录
  index.html                      # 案例页面
  style.css / main.js             # 案例私有样式和交互
  assets/                         # 素材
  poc/                            # 可选：工作流、提示词、样例、测试产物
docs/                             # 维护、定位、案例模板文档
```

禁止在项目根目录或其他目录复制同一案例。案例路径统一为：`/cases/<slug>/`。

## 新增案例

1. 复制 `cases/ai-tender-evaluator/` 或其他相近案例为 `cases/<slug>/`。
2. 修改案例页面与 POC 资料，确保直接打开可用。
3. 在根目录 `main.js` 的 `data.zh` 与 `data.en` 同时注册卡片，路径写为 `cases/<slug>/`。
4. 使用 `docs/case-template.md` 补齐业务价值、技术边界和后续计划。
5. 不把演示数据称为真实运行；真实运行产物须保存到案例的 `poc/runtime-evidence/`。

## 发布与验证

```bash
python3 -m http.server 8000
```

检查首页、每个 `/cases/<slug>/` 路径、移动端样式和浏览器控制台。提交后推送到 `main`；GitHub Pages 从仓库根目录发布。

## 维护原则

- 首页只维护索引与摘要，详细资料留在案例目录。
- 技术结论区分：已验证事实、演示假设、待确认事项。
- 禁止提交密钥、账号信息、未脱敏请求或日志。
- 修改路由前先搜索引用；删除目录前先完成替代入口验证。
