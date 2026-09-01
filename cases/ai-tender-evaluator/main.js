const review = {
  decision: "Conditional Bid",
  rationale: "交付与核心产品基本匹配，但须先完成资质、案例和服务承诺的复核与补强。",
  mandatoryGaps: 3,
  manualReviewCount: 3,
  risks: [
    ["High", "教育行业案例", "当前仅有一个案例；补充合规案例或评估联合体方案。"],
    ["High", "ISO 27001 资质", "核验集团资质是否可授权使用；无法满足则建议 No-Bid。"],
    ["High", "7×24 服务", "完成三年服务成本核算并补充承诺材料。"]
  ]
};

document.querySelector("#decision").textContent = review.decision;
document.querySelector("#rationale").textContent = review.rationale;
document.querySelector("#mandatory-gaps").textContent = review.mandatoryGaps;
document.querySelector("#high-risks").textContent = review.risks.filter(([level]) => level === "High").length;
document.querySelector("#review-queue").textContent = review.manualReviewCount;
document.querySelector("#risk-list").innerHTML = review.risks.map(([level, topic, action]) => `<article class="risk"><b>${level} RISK</b><div><strong>${topic}</strong><p>${action}</p></div></article>`).join("");

const button = document.querySelector("#toggle-details");
const details = document.querySelector("#details");
button.addEventListener("click", () => {
  const expanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!expanded));
  button.textContent = expanded ? "展开评审明细" : "收起评审明细";
  details.hidden = expanded;
});
