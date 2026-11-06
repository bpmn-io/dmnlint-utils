import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

const files = {
  ignored: [
    'dist',
    'coverage'
  ],
  build: [
    '*.mjs'
  ],
  lib: [
    'lib/**/*.js'
  ],
  test: [
    'test/**/*.mjs'
  ]
};

export default [
  {
    ignores: files.ignored
  },

  // build scripts
  ...bpmnIoPlugin.configs.node.map(config => ({
    ...config,
    files: files.build
  })),

  // import attributes
  {
    files: files.build,
    languageOptions: {
      ecmaVersion: 'latest'
    }
  },

  // library (ES modules)
  ...bpmnIoPlugin.configs.recommended.map(config => ({
    ...config,
    files: files.lib
  })),

  // tests
  ...bpmnIoPlugin.configs.recommended.map(config => ({
    ...config,
    files: files.test
  })),
  ...bpmnIoPlugin.configs.mocha.map(config => ({
    ...config,
    files: files.test
  }))
];
