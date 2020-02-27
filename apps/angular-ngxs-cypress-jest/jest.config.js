module.exports = {
  name: 'angular-ngxs-cypress-jest',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-ngxs-cypress-jest',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
