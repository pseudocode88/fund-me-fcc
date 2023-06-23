const hre = require("hardhat");

async function main() {
  console.log("Deploying Contract ...");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
