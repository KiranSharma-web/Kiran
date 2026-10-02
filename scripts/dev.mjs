import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { access } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';

const root = process.cwd();
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
};

const server = createServer(async (request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  const requested = resolve(root, `.${pathname}`);
  if (requested !== root && !requested.startsWith(`${root}${sep}`)) {
    response.writeHead(403).end('Forbidden');
    return;
  }
  let file = pathname.endsWith('/') ? resolve(requested, 'index.html') : requested;
  try {
    await access(file);
  } catch {
    const publicRoot = resolve(root, 'public');
    const publicFile = resolve(publicRoot, `.${pathname}`);
    if (!publicFile.startsWith(`${publicRoot}${sep}`)) {
      response.writeHead(404).end('Not found');
      return;
    }
    try {
      await access(publicFile);
      file = publicFile;
    } catch {
      response.writeHead(404).end('Not found');
      return;
    }
  }
  response.writeHead(200, { 'Content-Type': mime[extname(file)] ?? 'application/octet-stream' });
  createReadStream(file).pipe(response);
});

const port = Number(process.env.PORT ?? 3000);
server.listen(port, '127.0.0.1', () => console.log(`Portfolio available at http://localhost:${port}/`));
