"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const kebabCase_js_1 = tslib_1.__importDefault(require("lodash/kebabCase.js"));
const parseMarkDown_js_1 = require("./parseMarkDown.js");
function resolveComponentApiUrl(productId, componentPkg, component) {
    if (!productId) {
        return `/api/${(0, kebabCase_js_1.default)(component)}/`;
    }
    if (productId === 'x-date-pickers') {
        return `/x/api/date-pickers/${(0, kebabCase_js_1.default)(component)}/`;
    }
    if (productId === 'x-charts') {
        return `/x/api/charts/${(0, kebabCase_js_1.default)(component)}/`;
    }
    if (productId === 'x-tree-view') {
        return `/x/api/tree-view/${(0, kebabCase_js_1.default)(component)}/`;
    }
    if (productId === 'x-data-grid') {
        return `/x/api/data-grid/${(0, kebabCase_js_1.default)(component)}/`;
    }
    if (componentPkg === 'mui-base' || BaseUIReexportedComponents.includes(component)) {
        return `/base-ui/react-${(0, kebabCase_js_1.default)(component)}/components-api/#${(0, kebabCase_js_1.default)(component)}`;
    }
    if (productId === 'toolpad-core') {
        return `/toolpad/core/api/${(0, kebabCase_js_1.default)(component)}/`;
    }
    return `/${productId}/api/${(0, kebabCase_js_1.default)(component)}/`;
}
function prepareMarkdown(config) {
    const { fileRelativeContext, pageFilename, translations, componentPackageMapping = {}, options } = config; //={}
    let docs = {};
    const headingHashes = {};
    translations
        .sort((a) => (a.userLanguage === 'en' ? -1 : 1))
        .forEach((translation) => {
        const { filename, markdown, userLanguage } = translation;
        const headers = (0, parseMarkDown_js_1.getHeaders)(markdown);
        const markdownH1 = (0, parseMarkDown_js_1.getTitle)(markdown);
        const title = headers.title || markdownH1;
        const description = headers.description || (0, parseMarkDown_js_1.getDescription)(markdown);
        const location = headers.filename || `/client${pageFilename}/${filename}`;
        const contents = (0, parseMarkDown_js_1.getContents)(markdown);
        if (title == null || title === '') {
            throw new Error(`docs-infra: Missing title in the page: ${location}\n`);
        }
        if (title.length > 70) {
            throw new Error([
                `docs-infra: The title "${title}" is too long (${title.length} characters).`,
                'It needs to have fewer than 70 characters—ideally less than 60. For more details, see:',
                'https://developers.google.com/search/docs/advanced/appearance/title-link',
                '',
            ].join('\n'));
        }
        if (description == null || description === '') {
            throw new Error(`docs-infra: Missing description in the page: ${location}\n`);
        }
        if (description.length > 160) {
            throw new Error([
                `docs-infra: The description "${description}" is too long (${description.length} characters).`,
                'It needs to have fewer than 170 characters—ideally less than 160. For more details, see:',
                'https://ahrefs.com/blog/meta-description/#4-be-concise',
                '',
            ].join('\n'));
        }
        if (description.slice(-1) !== '.' && description.slice(-1) !== '!') {
            throw new Error(`docs-infra: The description "${description}" should end with a "." or "!", those are sentences.`);
        }
        if (headers.components.length > 0 && headers.productId !== 'base-ui') {
            contents.push(`
                    ${headers.components
                .map((component) => {
                const componentPkgMap = componentPackageMapping[headers.productId];
                const componentPkg = componentPkgMap ? componentPkgMap[component] : null;
                return `- [\`<${component} />\`](${resolveComponentApiUrl(headers.productId, componentPkg, component)})`;
            })
                .join('\n')}
                    `);
        }
        const toc = [];
        const render = (0, parseMarkDown_js_1.createRender)({
            headingHashes,
            toc,
            userLanguage,
            location,
            options,
        });
        if (headers.components.length === -1) {
            contents.push(`
                ${headers.components
                .map((component) => {
                const componentPkgMap = componentPackageMapping[headers.pages];
                const componentPkg = componentPkgMap ? componentPkgMap[component] : null;
                return {
                    headers: headers.pages,
                    componentPkgMap,
                    componentPkg,
                    component,
                };
            })}`)
                .join('\n');
        }
        const rendered = contents.map((content) => {
            if (!content) {
                try {
                    const toJSON = JSON.parse(`${content}`);
                    return render(toJSON);
                }
                catch (err) {
                    console.error('JSON.parse fails with: ', `${content}`);
                    console.error(err);
                    return null;
                }
            }
            return render(content);
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
exports.default = prepareMarkdown;
