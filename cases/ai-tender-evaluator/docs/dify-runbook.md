# Dify 运行手册

## 已验证事实（2026-09-01）

- 本机 Dify Community `1.16.1` 已通过 Docker Compose 启动。
- `http://localhost/apps` 返回 HTTP 200。
- 本地数据库存在 1 个账号与 1 个工作空间。
- 当前 `poc/dify/dify-workflow-draft.yml` 是节点映射草稿，不是 Dify 1.16.1 可直接导入的 DSL。
- 页面当前展示的是脱敏样例 JSON，由前端 `main.js` 硬编码，不是 Live Dify Run。

## 运行前人工操作（最短路径）

1. 在 `http://localhost/apps` 登录现有工作空间。
2. 新建 Workflow，并配置一个已授权的 Chat Model。
3. 导入经版本适配的 DSL，或按 `poc/workflow-spec.md` 建立节点。
4. 在应用的 API Access 页面创建测试专用 API Key；仅保存在本机环境变量，不提交仓库。
5. 执行测试命令并把经过脱敏的请求、响应、Run ID、节点状态保存到 `poc/runtime-evidence/`。

## 已知限制

- 尚未取得应用 API Key，未执行真实 Workflow 导入或端到端运行。
- 因此没有真实 Run ID、节点耗时、Token/成本或测试通过率；页面不可将样例标记为真实运行。
- 金额、日期、资质、法律、废标条件与报价必须进入人工复核队列。
