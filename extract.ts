import fs from 'fs';
import path from 'path';
import { services } from './src/data/services.ts';

const outDir = path.join(process.cwd(), 'src', 'content', 'services');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

services.forEach(service => {
  const filePath = path.join(outDir, `${service.slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(service, null, 2), 'utf8');
  console.log(`Created ${filePath}`);
});
