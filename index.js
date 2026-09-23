#!/usr/bin/env node
import { spawn } from "node:child_process";
import readline from "node:readline";
import figlet from "figlet";
import gradient from "gradient-string";
import boxen from "boxen";
import chalk from "chalk";

const portfolioGradient = gradient([
  "#4A90E2",
  "#5B7FE5",
  "#7B68EE",
  "#9B59D6",
  "#B85C99",
  "#C67B8F",
  "#D89BA0",
]);

const me = {
  name: "SURAJ PATEL",
  role: "Full Stack Developer | Linux Enthusiast",
  links: {
    Portfolio: "https://itsurajpatel.in",
    GitHub: "https://github.com/suraj7974",
    LinkedIn: "https://linkedin.com/in/surajpatel7974",
    Email: "mailto:surajpatelsuraj55@gmail.com",
  },
};

const accent = chalk.hex("#7B68EE");
const dim = chalk.gray;
const label = (text) => chalk.hex("#B85C99").bold(text.padEnd(11));
const pretty = (url) => url.replace(/^(https?:\/\/|mailto:)/, "");

const openUrl = (url) => {
  const [cmd, args] =
    process.platform === "darwin"
      ? ["open", [url]]
      : process.platform === "win32"
        ? ["cmd", ["/c", "start", "", url]]
        : ["xdg-open", [url]];
  try {
    spawn(cmd, args, { stdio: "ignore", detached: true })
      .on("error", () => {})
      .unref();
  } catch {}
};

const buildCard = () => {
  const lines = [
    chalk.bold.white(me.role),
    "",
    ...Object.entries(me.links).map(
      ([name, url]) => `${label(name)}${accent(pretty(url))}`,
    ),
  ];

  return boxen(lines.join("\n"), {
    padding: 1,
    margin: { top: 1, bottom: 1 },
    borderStyle: "round",
    borderColor: "#7B68EE",
    title: " hey there ",
    titleAlignment: "center",
  });
};

const menu = [
  { key: "p", text: "Open portfolio", url: me.links.Portfolio },
  { key: "g", text: "Open GitHub", url: me.links.GitHub },
  { key: "l", text: "Open LinkedIn", url: me.links.LinkedIn },
  { key: "e", text: "Send me an email", url: me.links.Email },
  { key: "q", text: "Quit" },
];

const runMenu = () =>
  new Promise((resolve) => {
    console.log(chalk.bold("  What would you like to do?\n"));
    for (const item of menu) {
      console.log(`  ${accent(`[${item.key}]`)} ${item.text}`);
    }
    console.log();

    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    process.stdin.resume();

    const done = () => {
      process.stdin.setRawMode(false);
      process.stdin.pause();
      process.stdin.off("keypress", onKey);
      resolve();
    };

    const onKey = (_str, key = {}) => {
      if (key.ctrl && key.name === "c") return done();
      const item = menu.find((m) => m.key === key.name);
      if (!item) return;
      if (!item.url) return done();
      openUrl(item.url);
      console.log(dim(`  ↗ opening ${pretty(item.url)}`));
    };

    process.stdin.on("keypress", onKey);
  });

const main = async () => {
  const ascii = figlet.textSync(me.name, { font: "ANSI Shadow" });
  console.log(portfolioGradient.multiline(ascii));

  console.log(buildCard());

  if (process.stdin.isTTY && process.stdout.isTTY) {
    await runMenu();
  }

  console.log(portfolioGradient("\n  Thanks for stopping by! Let's build something cool ✨\n"));
  process.exit(0);
};

main();
