const target = document.getElementById("typed-text");
const lines = [
  "我正在构建一个有趣、动态、可交互的个人主页。",
  "这里会展示我的项目、技能和思考。",
  "欢迎来到我的 GitHub Pages 世界。",
];

let lineIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = lines[lineIndex];

  if (!deleting) {
    charIndex += 1;
    target.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIndex -= 1;
    target.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      lineIndex = (lineIndex + 1) % lines.length;
    }
  }

  setTimeout(typeLoop, deleting ? 35 : 70);
}

typeLoop();
