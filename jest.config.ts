export default {
  roots: ['<rootDir>/src'],
  collectCoverage: ['<rootDir>/src'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
