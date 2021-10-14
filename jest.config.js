/* eslint-disable-next-line import/no-extraneous-dependencies -- is a dev file */
const { createJestConfig, createJestProject } = require('carna');

module.exports = createJestConfig(__dirname, {
  projects: [
    // => colors: red green yellow blue magenta cyan gray

    // single repo
    createJestProject({ color: 'cyan', testFolder: 'unit', customeConfig: {} }),
    createJestProject({ color: 'magenta', testFolder: 'integration', customeConfig: {} }),
    createJestProject({ color: 'yellow', testFolder: 'e2e', customeConfig: {} }),

    // monoreepo
    createJestProject({ color: 'cyan', testFolder: 'unit', workspaceFolder: 'package-app', customeConfig: {} }),
    createJestProject({ color: 'cyan', testFolder: 'integration', workspaceFolder: 'package-app', customeConfig: {} }),
    createJestProject({ color: 'cyan', testFolder: 'e2e', workspaceFolder: 'package-app', customeConfig: {} }),
    createJestProject({ color: 'magenta', testFolder: 'unit', workspaceFolder: 'package-cli', customeConfig: {} }),
    createJestProject({
      color: 'magenta',
      testFolder: 'integration',
      workspaceFolder: 'package-cli',
      customeConfig: {},
    }),
    createJestProject({ color: 'magenta', testFolder: 'e2e', workspaceFolder: 'package-cli', customeConfig: {} }),
    createJestProject({ color: 'yellow', testFolder: 'unit', workspaceFolder: 'package-lib', customeConfig: {} }),
    createJestProject({
      color: 'yellow',
      testFolder: 'integration',
      workspaceFolder: 'package-lib',
      customeConfig: {},
    }),
    createJestProject({ color: 'yellow', testFolder: 'e2e', workspaceFolder: 'package-lib', customeConfig: {} }),
  ],

  // extend options for this project

  // ...
});
