// jest.config.js
export default {
    transform: {},
    // Remove the extensionsToTreatAsEsm setting as it's automatically inferred
    moduleNameMapper: {
      '^(\\.{1,2}/.*)\\.js$': '$1'
    }
  }