const cases = [
  { title: 'Hand Gesture Store', category: 'AI Visual Interaction', value: '将手势识别转化为无接触商品浏览与互动导购体验。', tags: ['MediaPipe', 'Web Camera', 'Canvas'], path: 'cases/hand-gesture-store/', status: 'Available' },
  { title: 'MediaPipe Magic Ball', category: 'AI Visual Interaction', value: '用实时手势与动态视觉，验证互动大屏和品牌活动的参与体验。', tags: ['MediaPipe', 'JavaScript', 'Canvas'], path: 'cases/mediapipe-magic-ball/', status: 'Available' },
  { title: 'RAG Knowledge UI', category: 'RAG Knowledge Base', value: '让企业知识检索、答案引用与内容溯源变得清晰可用。', tags: ['RAG', 'UX Prototype', 'Citations'], path: 'cases/rag-knowledge-ui/', status: 'Available' },
  { title: 'AI Agent Workflow Visualizer', category: 'AI Agent Workflow', value: '将复杂任务的分解、执行状态与工具链路可视化。', tags: ['AI Agent', 'Workflow', 'State UI'], path: 'cases/ai-agent-workflow/', status: 'Available' },
  { title: 'Insurance Claim Assistant', category: 'Industry Solutions', value: '保险理赔场景的智能问询与材料准备原型。', tags: ['Insurance', 'Multimodal', 'Copilot'], path: '#', status: 'Coming Soon' },
  { title: 'AI Learning Platform', category: 'Industry Solutions', value: '面向个性化学习路径与知识掌握反馈的产品原型。', tags: ['Education', 'RAG', 'Learning'], path: '#', status: 'Coming Soon' }
];
const grid = document.querySelector('#case-grid');
if (grid) grid.innerHTML = cases.map((item) => `
  <article class="case-card">
    <div class="case-top"><span class="case-category">${item.category}</span><span class="status ${item.status === 'Available' ? 'available' : ''}">${item.status}</span></div>
    <h3>${item.title}</h3><p>${item.value}</p>
    <div class="tags">${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
    <div class="case-actions">${item.status === 'Available' ? `<a href="${item.path}">Live Demo →</a><a href="${item.path}">Details →</a>` : '<span class="muted">In discovery</span>'}</div>
  </article>`).join('');
const year = document.querySelector('#year'); if (year) year.textContent = new Date().getFullYear();
