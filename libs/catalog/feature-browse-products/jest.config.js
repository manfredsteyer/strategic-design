module.exports = {
  name: 'catalog-feature-browse-products',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/catalog/feature-browse-products',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
