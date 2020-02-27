module.exports = {
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest'
  },
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  reporters: [
    "default",
    ["jest-junit", {outputDirectory: "reports/test", outputName: `test-${Date.now()}.xml`}]
  ],
  coverageReporters: ['html']
};
