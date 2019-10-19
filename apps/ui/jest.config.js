module.exports = {
  name: 'ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ui/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
