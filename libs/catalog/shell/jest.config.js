module.exports = {
  name: 'catalog-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/catalog/shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
