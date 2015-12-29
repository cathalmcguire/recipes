exports.config = {
  specs: [
    'tests/e2e/features/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  baseUrl: 'http://recipes.com/',
};
