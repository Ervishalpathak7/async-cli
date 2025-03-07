import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function bumpActionVersion() {
  const packageJsonPath = path.join(__dirname, '../../', 'package.json');
  const packageJsonVersion = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8')).version;

  const templatePath = path.join(__dirname, '../../', 'action-template.yml');
  const outputPath = path.join(__dirname, '../../', 'action.yml');

  const templateContent = fs.readFileSync(templatePath, 'utf8');
  const updatedContent = templateContent.replace(/\${ version }/g, packageJsonVersion);

  fs.writeFileSync(outputPath, updatedContent, 'utf8');
  console.log(`Updated action.yml with version ${packageJsonVersion}`);
}

bumpActionVersion();
