module.exports = {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '^src/(.*)': '<rootDir>/src/$1'
  },
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public', 'cypress'],
  globals: {
    __PATH_PREFIX__: ''
  },
  testURL: 'http://localhost',
  setupFilesAfterEnv: ['./setupTests.js'],
  moduleDirectories: ['<rootDir>', 'node_modules', 'src']
};
