import { fileURLToPath } from 'url';
import { promises as fs, readdirSync } from 'fs';
import { join, basename, dirname, sep } from 'path';
import { prepareMarkdown } from './parseMarkDown.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const notEnglishMarkdownRegExp = /-([a-z]{2})\.md$/;

function upperCaseFirst(string) {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
}

function moduleIDToJSIdentifier(moduleID) {
  const delimiter = /(\.|-|\/)/;
  return moduleID
    .split(delimiter)
    .filter((part) => !delimiter.test(part))
    .map((part) => (part.length === 0 ? '$' : part))
    .map(upperCaseFirst)
    .join('');
}

const componentPackageMapping = {
  'blog': {},
  'ecommerse':{},
  base: {},
};

const packages = [
  {
    pages: 'blog',
    paths: [
      join(__dirname, '../client/blog/src'),
    ],
  },
  {
    pages: 'ecommerse',
    paths: [join(__dirname, '../client/ecommerse/src')],
  },
];

packages.forEach((pkg) => {
  pkg.paths.forEach((pkgPath) => {
    const match = pkgPath.match(/client(?:\\|\/)([^/\\]+)(?:\\|\/)src/);
    const packageName = match ? match[1] : null;
    if (!packageName) {
      throw new Error(`cannot find package name from path: ${pkgPath}`);
    }
    const filePaths = readdirSync(pkgPath);
    filePaths.forEach((folder) => {
      if (folder.match(/^[A-Z]/)) {
        if (!componentPackageMapping[pkg.pages]) {
          throw new Error(`componentPackageMapping must have "${pkg.pages}" as a key`);
        }
        // filename starts with Uppercase = component
        componentPackageMapping[pkg.pages][folder] = packageName;
      }
    });
  });
});

export default async function demoLoader() {
  const englishFilepath = this.resourcePath;

  const englishFilename = basename(englishFilepath, '.md');

  const files = await fs.readdir(dirname(englishFilepath));
  const translations = await Promise.all(
    files
      .map((filename) => {
        if (filename === `${englishFilename}.md`) {
          return {
            filename,
            userLanguage:'en',
          };
        }

        if (filename.startsWith(englishFilename)) {
            return {
              filename,
            };
        }

        return null;
      })
      .filter((translation) => translation)
      .map(async (translation) => {
        const filepath = join(dirname(englishFilepath), translation.filename);
        this.addDependency(filepath);
        const markdown = await fs.readFile(filepath, { encoding: 'utf8' });

        return {
          ...translation,
          markdown,
        };
      }),
  );

  const pageFilename = this.context
    .replace(this.rootContext, '')
    // win32 to posix
    .replace(/\\/g, '/');
  console.log('I am pageFilename: ',pageFilename);
  const { docs } = prepareMarkdown({ pageFilename, translations, componentPackageMapping });

  const transformed = `
    export const docs = ${JSON.stringify(docs, null, 2)};
    
  `;
  // .join('\n')}};
  return transformed;
};

