import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();
const out = resolve(root, 'out');
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? '';
const basePathPart = configuredBasePath.replace(/^\/+|\/+$/g, '');
const basePath = basePathPart ? `/${basePathPart}/` : './';

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
for (const file of ['index.html', 'style.css', 'script.js']) {
  await cp(resolve(root, file), resolve(out, file));
}
try {
  const publicDirectory = resolve(root, 'public');
  await cp(publicDirectory, resolve(out, 'public'), { recursive: true });
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}

const htmlPath = resolve(out, 'index.html');
const html = await readFile(htmlPath, 'utf8');
if (!html.includes('<base href="./" data-base-path />')) {
  throw new Error('Could not find the portfolio base path marker in index.html');
}
await writeFile(
  htmlPath,
  html.replace('<base href="./" data-base-path />', `<base href="${basePath}" />`),
);
await writeFile(resolve(out, '.nojekyll'), '');
console.log(`Static site written to out/ (base path: ${basePath})`);
