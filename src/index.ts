import fs from "fs";
console.log("Hi there");
const matches = fs
  .readFileSync("football.csv", { encoding: "utf-8" })
  .split("\n")
  .map((row: string): string[] => row.split(","));
console.log(matches);

let manUnitedWin = 0;
for (let match of matches) {
  if (match[1] === "Man United" && match[5] === "H") {
    manUnitedWin++;
  } else if (match[2] === "Man United" && match[5] === "A") {
    manUnitedWin++;
  }
}

console.log(`Man United won ${manUnitedWin} games.`);
