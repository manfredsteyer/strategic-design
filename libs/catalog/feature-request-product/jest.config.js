module.exports = {
  name: 'catalog-feature-request-product',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/catalog/feature-request-product',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
