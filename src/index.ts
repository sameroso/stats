import { CsvFileReader } from "./CsvFileReader";

const csvfFileReader = new CsvFileReader("football.csv");
csvfFileReader.read();
const matches = csvfFileReader.data;
enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

let manUnitedWin = 0;
for (let match of matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWin++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWin++;
  }
}

console.log(`Man United won ${manUnitedWin} games.`);
