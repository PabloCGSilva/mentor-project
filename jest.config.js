module.exports = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: [
     '/node_modules/',
     '/tests/',
     '/views/',
     '/keys/',
     '/public/',
     '/models/',
    ],
    globalSetup: './tests/setup.js',
    globalTeardown: './tests/teardown.js',
    setupFiles: [
     './tests/globalmocks.js',
    ],
    testEnvironment: 'node',
   }