---
title: Build a Dynamic 3D Map with WRLD 3D
description: his table ensures consistent module resolution across your tooling setup.
authors: ['Tres-Paylas']
date: May 6, 2025
tags: ['LATEST-TRENDS']
---

# 📦 Alias Reference Table (TypeScript, Webpack, Babel)

This table ensures consistent module resolution across your tooling setup.

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

