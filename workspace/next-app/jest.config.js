/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/spec/tsconfig.json'
    }
  },
  testMatch: [
    "**/*.spec.tsx"
  ],
};