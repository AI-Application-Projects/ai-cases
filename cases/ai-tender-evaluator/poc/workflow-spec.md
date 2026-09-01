# AI Tender / Proposal Evaluator｜Dify POC 工作流

## 业务目标
将脱敏招标文本与当前方案响应转为可追溯的结构化评审结果，辅助投标决策与人工复核。

## 输入与输出
- 输入：`tender_text`（必填）、`proposal_text`（必填）、`language`（默认 `zh-CN`）。
- 输出：符合 `schemas/tender-review-output.schema.json` 的 JSON，以及 Markdown 评审报告。

## 节点
| 节点 | 目标 | 输入 → 输出 | Prompt | 失败处理 |
|---|---|---|---|---|
| Start | 接收文本 | 表单变量 → 原始变量 | — | 缺任一文本即阻断 |
| 1 Project Info | 抽取项目背景 | `tender_text` → `project_info` | `01-extract-project-info.md` | 返回“未明确”，记录 warning |
| 2 Mandatory | 识别硬性条款 | `tender_text` + `proposal_text` → `mandatory_requirements` | `02-extract-mandatory-requirements.md` | 解析失败重试一次，否则人工复核 |
| 3 Scoring | 提取评分规则 | `tender_text` → `scoring_criteria` | `03-extract-scoring-criteria.md` | 返回空数组并标识未识别 |
| 4 Risk & Gap | 比对方案缺口 | 节点 2/3 + `proposal_text` → `gap_analysis` | `04-risk-and-gap-analysis.md` | 高风险默认人工复核 |
| 5 Report | 汇总结论 | 全部结构化结果 → `report_markdown` | `05-generate-review-report.md` | 降级输出 JSON 摘要 |
| End | 返回结果 | JSON + Markdown | — | 保留节点 warning |

## 异常处理与人工复核
- 模型输出必须经过 JSON Schema 校验；失败时最多重试一次，仍失败则终止并返回可定位错误。
- 金额、日期、资质、废标条件、法律/合规解释及报价必须由人工核验。
- 任何 Critical Gap、证据缺失或文本冲突，进入 `manual_review_queue`；系统不作最终投标授权。

## POC 边界
仅处理文本输入与单次评审；不含上传、登录、数据库、自动写标书或在线审批。

## 后续工程化路径
接入 OCR/版面解析与文件存储；增加版本化证据定位、规则库、人工审批流、审计日志与权限控制。
