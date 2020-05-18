module.exports = {
  moduleFileExtensions: ['js', 'json'],
  rootDir: 'src/__tests__',
  testRegex: ['.spec.js$', '.test.js$'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  moduleDirectories: [
    'node_modules'
  ],
  modulePaths: [
    'src',
    '__tests__'
  ],
  presets: ['@babel/preset-env', '@babel/preset-react']
};
