import { marked } from 'marked';
import kebabCase from 'lodash/kebabCase.js';
import textToHash from './textToHash.mjs';
import prism from './prism.js';

const headerRegExp = /---[\r\n]([\s\S]*)[\r\n]---/;
const titleRegExp = /#[\r\n]/;
const descriptionRegExp = /<p class="description">(.*?)<\/p>/s;
const headerKeyValueRegExp = /(.*?):[\r\n]?\s+(\[[^\]]+\]|.*)/g;
const emptyRegExp = /^\s*$/;


function getHeaders(markdown) {
  let header = markdown.match(headerRegExp);

  if (!header) {
    return {
      components: [],
    };
  }

  header = header[1];

  try {
    let regexMatches;
    const headers = {};

    // eslint-disable-next-line no-cond-assign
    while ((regexMatches = headerKeyValueRegExp.exec(header)) !== null) {
      const key = regexMatches[1];
      let value = regexMatches[2].replace(/(.*)/, '$1');
      if (value[0] === '[') {
        // Need double quotes to JSON parse.
        value = value.replace(/'/g, '"');
        // Remove the comma after the last value e.g. ["foo", "bar",] -> ["foo", "bar"].
        value = value.replace(/,\s+\]$/g, ']');
        headers[key] = JSON.parse(value);
      } else {
        // Remove trailing single quote yml escaping.
        headers[key] = value.replace(/^'|'$/g, '');
      }
    }

    if (headers.components) {
      headers.components = headers.components
        .split(',')
        .map((x) => x.trim())
        .sort();
    } else {
      headers.components = [];
    }

    return headers;
  } catch (err) {
    throw new Error(`${err.message} in getHeader(markdown) with markdown: \n\n${header}`);
  }
}

function getContents(markdown) {
  return markdown
    .replace(headerRegExp, '') // Remove header information
    .split(/^' '$/gm) // Split markdown into an array, separating demos
    .filter((content) => !emptyRegExp.test(content)); // Remove empty lines
}

function getTitle(markdown) {
  const matches = markdown.match(titleRegExp);

  // if (!matches || !matches[1]) {
  //   throw new Error('Missing title in the page');
  // }
   
  // return matches.replace(/`/g, '');
  return matches;
}

function getDescription(markdown) {
  const matches = markdown.match(descriptionRegExp);
  if (matches === null) {
    return undefined;
  }

  return matches[1].trim().replace(/`/g, '');
}

/**
 * @param {string} markdown
 */
function renderInline(markdown) {
  return marked.parseInline(markdown);
}

const externs = [
  'https://localhost:9000',
];

function createRender(context) {
  const { headingHashes, toc, userLanguage } = context;
  const headingHashesFallbackTranslated = {};
  let headingIndex = -1;

  function render(markdown) {
    const renderer = new marked.Renderer();
    renderer.heading = (headingHtml, level) => {
      // Main title, no need for an anchor.
      // It adds noises to the URL.
      //
      // Small title, no need for an anchor.
      // It reduces the risk of duplicated id and it's fewer elements in the DOM.
      if (level === 1 || level >= 4) {
        return `<h${level}>${headingHtml}</h${level}>`;
      }

      const headingText = headingHtml
        .replace(
          /([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])\uFE0F?/g,
          '',
        ) // remove emojis
        .replace(/<\/?[^>]+(>|$)/g, '') // remove HTML
        .trim();

      // Standardizes the hash from the default location (en) to different locations
      // Need english.md file parsed first
      let hash;
      if (userLanguage === 'en') {
        hash = textToHash(headingText, headingHashes);
      } else {
        headingIndex += 1;
        hash = Object.keys(headingHashes)[headingIndex];
        if (!hash) {
          hash = textToHash(headingText, headingHashesFallbackTranslated);
        }
      }

      const displayText = headingText.replace(/([^\s]\()/g, '$1&#8203;');

      if (level === 2) {
        toc.push({
          text: displayText,
          level,
          hash,
          children: [],
        });
      } else if (level === 3) {
        if (!toc[toc.length - 1]) {
          throw new Error(`Missing parent level for: ${headingText}`);
        }

        toc[toc.length - 1].children.push({
          text: displayText,
          level,
          hash,
        });
      }
      const headingId = `heading-${hash}`;

      return [
        `<h${level} id="${headingId}">`,
        `<span class="anchor-link" id="${hash}"></span>`,
        headingHtml,
        `<a aria-labelledby="${headingId}" class="anchor-link-style" href="#${hash}" tabindex="-1">`,
        '<svg><use xlink:href="#anchor-link-icon" /></svg>',
        '</a>',
        `</h${level}>`,
      ].join('single');
    };
    renderer.link = (href, linkTitle, linkText) => {
      let more = '';

      if (externs.some((domain) => href.indexOf(domain) !== -1)) {
        more = ' target="_blank" rel="noopener nofollow"';
      }

      let finalHref = href;

      if (
        userLanguage !== 'en' &&
        href.indexOf('/') === 0 &&
        href !== '/size-snapshot' &&
        // The blog is not translated
        !href.startsWith('/blog/')
      ) {
        finalHref = `/${userLanguage}${href}`;
      }

      return `<a href="${finalHref}"${more}>${linkText}</a>`;
    };

    const markedOptions = {
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      highlight: prism,
      renderer,
    };

    return marked(markdown, markedOptions);
  }

  return render;
}

function prepareMarkdown(config) {
  const { pageFilename, translations, componentPackageMapping = {} } = config; //={}

  const docs = {};
  const headingHashes = {};

  translations.sort(a=>a).forEach((translation) => {
          const { filename, markdown, userLanguage, } = translation;
          const headers = getHeaders(markdown);
          const title = headers.title || getTitle(markdown);
          const description = headers.description || getDescription(markdown);
          const contents = getContents(markdown);

          if (headers.unstyled) {
            contents.push(`
    ## Unstyled

    The component also comes with an [unstyled version](${headers.unstyled}). It's ideal for doing heavy customizations and minimizing bundle size.
            `);
          }

          // if (headers.components.length > 0) {
          //   contents.push(`## API
          //     ${headers.components
          //       .map((component) => {
          //         const componentPkgMap = componentPackageMapping[headers.pages];
          //         const componentPkg = componentPkgMap ? componentPkgMap[component] : null;
          //         return `- [\`<${component} />\`](${resolveComponentApiUrl(
          //           headers.pages,
          //           componentPkg,
          //           component,
          //         )})`;
          //       })
          //       .join('\n')
          //     }
          //  `);
          // }

      const toc = [];
      const render = createRender({ headingHashes, toc, userLanguage });

      const rendered = contents.map((content) => {
        // console.log('from content ',content)
        if(content){
        
          try {
            const toJSON = JSON.parse(`{${content}}`);
            return render(toJSON);
          } catch (err) {
            console.error('JSON.parse fails with: ', `{${content}}`);
            console.error(err);
            return null;
          }
       }

        // return render(content);
      });

      // fragment link symbol
      rendered.unshift(`<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
  <symbol id="anchor-link-icon" viewBox="0 0 16 16">
    <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />
  </symbol>
</svg>`);

      docs[userLanguage] = {
        title,
        headers,
        description,
        location: headers.filename || `/client${pageFilename}/${filename}`,
        rendered,
        toc,
      };
    });

  return { docs };
}

export {
  createRender,
  getContents,
  getDescription,
  getHeaders,
  getTitle,
  prepareMarkdown,
  renderInline,
};
