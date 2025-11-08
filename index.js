import figlet from "figlet";
import gradient from "gradient-string";

const portfolioGradient = gradient([
  "#4A90E2",
  "#5B7FE5",
  "#7B68EE",
  "#9B59D6",
  "#B85C99",
  "#C67B8F",
  "#D89BA0",
]);

// Generate the ASCII art for your name
let ascii = figlet.textSync("SURAJ PATEL", {
  font: "ANSI Shadow",
  horizontalLayout: "default",
  verticalLayout: "default",
});

// Apply gradient to the name
console.log(portfolioGradient.multiline(ascii));

// Portfolio information in a box
const boxWidth = 60;
const topBorder = "╔" + "═".repeat(boxWidth - 2) + "╗";
const bottomBorder = "╚" + "═".repeat(boxWidth - 2) + "╝";

const createBoxLine = (content) => {
  // Count emojis (they take 2 visual spaces)
  const emojiCount = (content.match(/[\u{1F300}-\u{1F9FF}]/gu) || []).length;
  const visualLength = content.length + emojiCount;
  const padding = Math.max(0, boxWidth - visualLength - 4);
  return "║ " + content + " ".repeat(padding) + " ║";
};

console.log("\n" + portfolioGradient(topBorder));
console.log(
  portfolioGradient(createBoxLine("Full Stack Developer | Linux Enthusiast")),
);
console.log(portfolioGradient(createBoxLine("")));
console.log(
  portfolioGradient(createBoxLine("Email: surajpatelsuraj55@gmail.com")),
);
console.log(portfolioGradient(createBoxLine("GitHub: github.com/suraj7974")));
console.log(
  portfolioGradient(createBoxLine("LinkedIn: linkedin.com/in/surajpatel7974")),
);
console.log(portfolioGradient(createBoxLine("Portfolio: surajpatel.me")));
console.log(portfolioGradient(createBoxLine("")));
console.log(portfolioGradient(createBoxLine("More updates comming soon!")));
console.log(portfolioGradient(bottomBorder));
console.log();
