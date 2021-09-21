import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

const csvfFileReader = new CsvFileReader("football.csv");
csvfFileReader.read();
const matches = csvfFileReader.data;

let manUnitedWin = 0;
for (let match of matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWin++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWin++;
  }
}

console.log(`Man United won ${manUnitedWin} games.`);
