// jest.config.js
export default {
    transform: {},
    extensionsToTreatAsEsm: ['.js'],
    moduleNameMapper: {
      '^(\\.{1,2}/.*)\\.js$': '$1'
    }
  }