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
```



