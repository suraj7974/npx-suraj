#!/usr/bin/env node
import figlet from "figlet";
import gradient from "gradient-string";

// Custom gradient colors (blue → purple → dull pink)
const portfolioGradient = gradient([
  "#4A90E2", // lighter blue
  "#5B7FE5", // blue
  "#7B68EE", // medium purple
  "#9B59D6", // purple
  "#B85C99", // muted magenta
  "#C67B8F", // dull pink
  "#D89BA0"  // dusty pink
]);

// Generate the ASCII art for your name
let ascii = figlet.textSync("SURAJ PATEL", {
  font: "ANSI Shadow",
  horizontalLayout: "default",
  verticalLayout: "default"
});

// Apply gradient to the name
console.log(portfolioGradient.multiline(ascii));

// Portfolio information in a box
const boxWidth = 60;
const topBorder = "╔" + "═".repeat(boxWidth - 2) + "╗";
const bottomBorder = "╚" + "═".repeat(boxWidth - 2) + "╝";

const createBoxLine = (content) => {
  const padding = boxWidth - content.length - 4;
  return "║ " + content + " ".repeat(padding) + " ║";
};

console.log("\n" + portfolioGradient(topBorder));
console.log(portfolioGradient(createBoxLine("👨‍💻 Full Stack Developer | Designer | Problem Solver")));
console.log(portfolioGradient(createBoxLine("")));
console.log(portfolioGradient(createBoxLine("📍 Location: Your City")));
console.log(portfolioGradient(createBoxLine("📧 Email: your.email@example.com")));
console.log(portfolioGradient(createBoxLine("🔗 GitHub: github.com/yourusername")));
console.log(portfolioGradient(createBoxLine("💼 LinkedIn: linkedin.com/in/yourusername")));
console.log(portfolioGradient(createBoxLine("")));
console.log(portfolioGradient(createBoxLine("💡 Skills:")));
console.log(portfolioGradient(createBoxLine("  • Frontend: React, Next.js, TypeScript")));
console.log(portfolioGradient(createBoxLine("  • Backend: Node.js, Python, Express")));
console.log(portfolioGradient(createBoxLine("  • Database: MongoDB, PostgreSQL, Redis")));
console.log(portfolioGradient(createBoxLine("  • Tools: Git, Docker, AWS")));
console.log(portfolioGradient(createBoxLine("")));
console.log(portfolioGradient(createBoxLine("📂 Featured Projects:")));
console.log(portfolioGradient(createBoxLine("  1. Project Name - Brief description")));
console.log(portfolioGradient(createBoxLine("  2. Another Project - What it does")));
console.log(portfolioGradient(createBoxLine("  3. Cool App - Why it's awesome")));
console.log(portfolioGradient(createBoxLine("")));
console.log(portfolioGradient(createBoxLine("✨ Type 'help' for more commands or visit my website!")));
console.log(portfolioGradient(bottomBorder));
console.log();
