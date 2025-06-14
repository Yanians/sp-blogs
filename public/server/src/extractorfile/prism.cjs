"use strict";
const prism = require('prismjs');
require('prismjs/components/prism-css');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-diff');
require('prismjs/components/prism-javascript');
require('prismjs/components/prism-json');
require('prismjs/components/prism-jsx');
require('prismjs/components/prism-markup');
require('prismjs/components/prism-yaml');
require('prismjs/components/prism-tsx');
function highlight(code, language) {
    let prismLanguage;
    switch (language) {
        case 'ts':
            prismLanguage = prism.languages.tsx;
            break;
        case 'js':
            prismLanguage = prism.languages.jsx;
            break;
        case 'sh':
            throw new Error([
                `docs-infra: Unsupported language: "sh" in:`,
                '',
                '```sh',
                code,
                '```',
                '',
                'Use "bash" instead.',
                '',
            ].join('\n'));
        case 'diff':
            prismLanguage = { ...prism.languages.diff };
            // original `/^[-<].*$/m` matches lines starting with `<` which matches
            // <SomeComponent />
            // we will only use `-` as the deleted marker
            prismLanguage.deleted = /^[-].*$/m;
            break;
        default:
            prismLanguage = prism.languages[language];
            break;
    }
    if (!prismLanguage) {
        if (language) {
            throw new Error(`unsupported language: "${language}", "${code}"`);
        }
        else {
            prismLanguage = prism.languages.jsx;
        }
    }
    return prism.highlight(code, prismLanguage);
}
module.exports = highlight;
