module.exports = {
  rootDir: '../',
  setupFiles: ['<rootDir>/config/jest.setup.js'],
  moduleDirectories: ['node_modules'],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/out/'],
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverage: true,
  coverageDirectory: '<rootDir>/reports/coverage',
  collectCoverageFrom: [
    '**app/components/**/*.js',
    '**app/core/**/*.js',
    '!**app/components/**/*.mock.js',
    '!**app/components/**/*.story.js',
    '!**lib/components/**/*.styles.js',
    '!**app/styles/**/*.js',
    '!**/node_modules/**',
  ],
  coveragePathIgnorePatterns: [
    // exceptions.
    '/node_modules/',
  ],
  coverageReporters: ['lcov', 'json', 'text-summary'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  verbose: true,
};
