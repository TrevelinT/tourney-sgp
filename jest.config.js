module.exports = {
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>internals/testing/setup.js"],
  snapshotSerializers: ["jest-emotion"],
};
