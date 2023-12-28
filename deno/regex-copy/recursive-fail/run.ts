import { regexCopy } from "https://deno.land/x/regex_copy@1.0.3/mod.ts";

const targetPath = '.project-copy'
const projectPath = Deno.cwd();

try {
  Deno.mkdirSync(targetPath);
} catch (e) {
  if (!(e instanceof Deno.errors.AlreadyExists)) {
    throw e;
  }
}

await regexCopy(
  [projectPath, targetPath],
  {
    removeEmpty: false,
    /** empty destination before copying */
    reset: true
  },
);
