# 案例组织规范

每个解决方案以 `cases/<slug>/` 为唯一源目录；页面与 POC 工件同仓保留，便于展示、复盘和演示。

```text
cases/<slug>/
├── index.html              # 可独立访问的 Demo
├── style.css / main.js     # 案例私有交互与样式
├── assets/                 # 截图、图标、封面
├── poc/                    # 可选：工作流、提示词、样例、Schema、输出
└── README.md               # 可选：案例复盘与运行说明
```

新增流程：创建案例目录 → 完成独立 Demo → 在根目录 `main.js` 注册中英文卡片 → 用 `docs/case-template.md` 补齐案例说明。首页只承载索引与价值摘要；体验、POC 证据与技术资料留在案例目录内。
