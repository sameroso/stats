import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const reader = MatchReader.fromCsv("football.csv");
const summary = Summary.winsAnalysisWithHtmlReport("Man United");


reader.load();
summary.buildAndPrintReport(reader.matches);
