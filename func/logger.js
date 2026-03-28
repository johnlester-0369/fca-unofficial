const chalk = require("chalk");

module.exports = (text, type) => {
  const s = String(type || "info").toLowerCase();
  if (s === "warn") {
    process.stderr.write(chalk.hex("#007bff")(`\r[ FCA-WARN ] > ${text}`) + "\n");
    return;
  }
  if (s === "error") {
    process.stderr.write(chalk.bold.hex("#ff0000")(`\r[ FCA-ERROR ]`) + ` > ${text}\n`);
    return;
  }
  if (s === "info") {
    process.stderr.write(chalk.bold(chalk.hex("#007bff")(`\r[ FCA-UNO ] > ${text}`)) + "\n");
    return;
  }
  process.stderr.write(chalk.bold(chalk.hex("#007bff")(`\r[ ${s.toUpperCase()} ] > ${text}`)) + "\n");
};