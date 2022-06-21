import { promises as fs } from "fs";
import MarkdownRenderer from "./MarkdownRenderer.js";

export default async (filename: string) => {
  const renderer = new MarkdownRenderer();
  const file = await fs.readFile(filename, "utf8");
  const data = JSON.parse(file);
  const output = data.kind == "sheet" ? renderer.render(data.document) : undefined;

  return output;
};
