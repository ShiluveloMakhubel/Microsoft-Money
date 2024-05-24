module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.js', '**/src/**/*.test.js'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    },
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',
        diagnostics: false
      }
    }
  };
  