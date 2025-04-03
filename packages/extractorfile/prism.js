// import { languages, highlight as _highlight } from 'prismjs';
// import 'prismjs/components/prism-css.js';
// import 'prismjs/components/prism-diff.js';
// import 'prismjs/components/prism-javascript.js';
// import 'prismjs/components/prism-json.js';
// import 'prismjs/components/prism-jsx.js';
// import 'prismjs/components/prism-markup.js';
// import 'prismjs/components/prism-tsx.js';

// function highlight(code, language) {
//   let prismLanguage;
//   switch (language) {
//     case 'ts':
//       prismLanguage = languages.tsx;
//       break;

//     case 'js':
//     case 'sh':
//       prismLanguage = languages.jsx;
//       break;

//     case 'diff':
//       prismLanguage = { ...languages.diff };
//       // original `/^[-<].*$/m` matches lines starting with `<` which matches
//       // <SomeComponent />
//       // we will only use `-` as the deleted marker
//       prismLanguage.deleted = /^[-].*$/m;
//       break;

//     default:
//       prismLanguage = languages[language];
//       break;
//   }

//   if (!prismLanguage) {
//     if (language) {
//       throw new Error(`unsupported language: "${language}", "${code}"`);
//     } else {
//       prismLanguage = languages.jsx;
//     }
//   }

//   return _highlight(code, prismLanguage);
// }

// export default highlight;
