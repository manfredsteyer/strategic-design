module.exports = {
  name: 'catalog-api',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/catalog/api',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
