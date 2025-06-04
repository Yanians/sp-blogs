
'use strict';

export const ForkTsCheckerWebpackPlugin = require('./ForkTsCheckerWebpackPlugin');

module.exports = class ForkTsCheckerWarningWebpackPlugin {
  apply(compiler) {
    new ForkTsCheckerWebpackPlugin().apply(compiler);

    const hooks = ForkTsCheckerWebpackPlugin.getCompilerHooks(compiler);

    hooks.issues.tap('ForkTsCheckerWarningWebpackPlugin', issues =>
      issues.map(issue => ({ ...issue, severity: 'warning' }))
    );
  }
};
