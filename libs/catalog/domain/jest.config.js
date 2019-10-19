module.exports = {
  name: 'catalog-data-access',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/catalog/data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
