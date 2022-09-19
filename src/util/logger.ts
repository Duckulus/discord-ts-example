import { Logger } from "tslog";

export const logger = new Logger({
  name: "avatar-history",
  type: "pretty",
  colorizePrettyLogs: true,
  displayFunctionName: false,
  displayFilePath: "hidden",
  minLevel: "silly",
});
