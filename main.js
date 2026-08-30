const cases = [
  { title: '手势互动导购', category: 'AI 视觉交互', value: '将手势识别转化为无接触商品浏览与互动导购体验。', tags: ['MediaPipe', '摄像头', 'Canvas'], path: 'hand-gesture-store/', status: '已上线' },
  { title: 'MediaPipe 魔法球', category: 'AI 视觉交互', value: '用实时手势与动态视觉，验证互动大屏和品牌活动的参与体验。', tags: ['MediaPipe', 'JavaScript', 'Canvas'], path: 'mediapipe-magic-ball/', status: '已上线' },
  { title: 'RAG 知识库界面', category: 'RAG 知识库', value: '让企业知识检索、答案引用与内容溯源变得清晰可用。', tags: ['RAG', '界面原型', '引用溯源'], path: 'rag-knowledge-ui/', status: '已上线' },
  { title: 'AI 智能体工作流', category: 'AI 智能体工作流', value: '将复杂任务的分解、执行状态与工具链路可视化。', tags: ['AI 智能体', '工作流', '状态界面'], path: 'ai-agent-workflow/', status: '已上线' },
  { title: '保险理赔助手', category: '行业解决方案', value: '保险理赔场景的智能问询与材料准备原型。', tags: ['保险', '多模态', '助手'], path: '#', status: '筹备中' },
  { title: 'AI 学习平台', category: '行业解决方案', value: '面向个性化学习路径与知识掌握反馈的产品原型。', tags: ['教育', 'RAG', '学习'], path: '#', status: '筹备中' }
];
const grid = document.querySelector('#case-grid');
if (grid) grid.innerHTML = cases.map((item) => `
  <article class="case-card">
    <div class="case-top"><span class="case-category">${item.category}</span><span class="status ${item.status === '已上线' ? 'available' : ''}">${item.status}</span></div>
    <h3>${item.title}</h3><p>${item.value}</p>
    <div class="tags">${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
    <div class="case-actions">${item.status === '已上线' ? `<a href="${item.path}">在线体验 →</a><a href="${item.path}">查看详情 →</a>` : '<span class="muted">方案探索中</span>'}</div>
  </article>`).join('');
const year = document.querySelector('#year'); if (year) year.textContent = new Date().getFullYear();
