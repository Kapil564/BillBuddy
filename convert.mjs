import fs from 'fs';
import path from 'path';
import babel from '@babel/core';

function getFiles(dir, files = []) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== '.next') {
        getFiles(fullPath, files);
      }
    } else {
      if ((fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) && !fullPath.endsWith('.d.ts')) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

const files = getFiles(process.cwd());
const targets = ['app', 'components', 'lib', 'hooks', 'convex'];
const filteredFiles = files.filter(f => {
  const rel = path.relative(process.cwd(), f);
  return targets.some(t => rel.startsWith(t + path.sep));
});

filteredFiles.forEach(file => {
  const ext = path.extname(file);
  const isTSX = ext === '.tsx';
  const newExt = isTSX ? '.jsx' : '.js';
  const newPath = file.slice(0, -ext.length) + newExt;
  
  const code = fs.readFileSync(file, 'utf8');
  try {
    const result = babel.transformSync(code, {
      filename: file,
      presets: [
        ['@babel/preset-typescript', { isTSX, allExtensions: true }]
      ],
      plugins: ['@babel/plugin-syntax-jsx'],
      retainLines: true,
      generatorOpts: {
        retainLines: true,
      }
    });
    fs.writeFileSync(newPath, result.code, 'utf8');
    fs.unlinkSync(file);
    console.log(`Converted: ${file} -> ${newPath}`);
  } catch (e) {
    console.error(`Error with ${file}:`, e.message);
  }
});
