module.exports = {
  modulePaths: ["<rootDir>/app"],
  moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx", "node"],
  setupFilesAfterEnv: ["<rootDir>internals/testing/setup.js"],
  snapshotSerializers: ["jest-emotion"],
};
