import { MatchResult } from "./MatchResult";
import { MatchReader } from "./MatchReader";

const reader = new MatchReader("football.csv");
reader.read();
const matches = reader.data;

let manUnitedWin = 0;
for (let match of matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWin++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWin++;
  }
}

console.log(`Man United won ${manUnitedWin} games.`);
