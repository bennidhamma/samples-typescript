/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  // preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['mocha'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/lib/'],
  coverageProvider: 'v8',
};
