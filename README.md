---
title: Summary from SP-BLOGS projects
description: This is the total summary of the projects including the setups, debugging, file structuring, analysis, troubleshooting and site mapping.
authors: ['Ayan-Fernandez']
card: true
date: Around 2025
tags: ['TOOLING']
---

## nodemon.json should setup inside root working folder

```json
{
    "watch": ["packages/client/src"],
    "ext": "tsx,ts,js,json",
    "ignore": ["**/*.spec.ts"],
    "exec": "ts-node packages/server/src/server.tsx"
  }
```
## 📦 Add Scripts to Root package.json (or workspace)

```json
"scripts": {
  "dev:client": "webpack --watch --config packages/client/webpack.config.js",
  "dev:server": "ts-node-dev --respawn --transpile-only packages/server/src/server.tsx",
  "dev": "concurrently \"npm run dev:client\" \"npm run dev:server\""
}


# 📦 Alias Reference Table (TypeScript, Webpack, Babel)

This table ensures consistent module resolution across tooling setup.

| **Alias Name**     | **TypeScript (`tsconfig.json`)**                                      | **Webpack (`resolve.alias`)**                                              | **Babel (`module-resolver`)**                                         |
|--------------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------|------------------------------------------------------------------------|
| `#treasury`        | `../../src/mui-treasury/layout-core-v5/`                               | `path.resolve(__dirname, '../../src/mui-treasury/layout-core-v5/')`       | `path.resolve(__dirname, 'src/mui-treasury/layout-core-v5')`          |
| `#lib`             | `src/components/lib/`                                                  | `path.resolve(__dirname, 'src/components/lib/')`                          | `path.resolve(__dirname, 'packages/client/src/components/lib')`       |
| `#routes`          | `src/routes/`                                                          | `path.resolve(__dirname, 'src/routes/')`                                  | `path.resolve(__dirname, 'packages/client/src/routes')`               |
| `#loader/marking`  | `../extractorfile/index.js`                                            | `path.resolve(__dirname, '../extractorfile/index.js')`                    | `path.resolve(__dirname, 'packages/extractorfile/index.js')`          |
| `#marking`         | `../extractorfile/*`                                                   | `path.resolve(__dirname, '../extractorfile')`                             | `path.resolve(__dirname, 'packages/extractorfile')`                   |
| `#treasury-center` | `../../src/mui-treasury/`                                              | `path.resolve(__dirname, '../../src/mui-treasury/')`                      | `path.resolve(__dirname, 'src/mui-treasury')`                         |
| `#client`          | `src/`                                                                 | `path.resolve(__dirname, 'src/')`                                         | `path.resolve(__dirname, 'packages/client/src')`                      |
| `#imagedir`        | `public/images/`                                                       | `path.resolve(__dirname, './public/images/')`                             | `path.resolve(__dirname, 'packages/client/src/public/images')`        |
| `@client`          | *(not defined)*                                                        | *(optional)*                                                               | `path.resolve(__dirname, 'packages/client/src')`                      |
| `@server`          | *(not defined)*                                                        | *(optional)*                                                               | `path.resolve(__dirname, 'packages/server/src')`                      |
| `@marking`         | *(redundant with `#marking`, if needed)*                               | *(optional)*                                                               | `path.resolve(__dirname, 'packages/extractorfile')`                   |
```



