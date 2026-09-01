# Dify 导入说明

`dify-workflow-draft.yml` 是节点与变量映射草稿，不保证兼容每个 Dify 发行版本的导入格式。请在本地 Dify 新建 Workflow 后按 `workflow-spec.md` 建立 5 个 LLM 节点，复制对应 Prompt 内容，并为每个 JSON 节点启用结构化输出/Schema 校验。最后用 `samples/test-input.json` 运行，并以 `outputs/sample-output.json` 校验字段。
