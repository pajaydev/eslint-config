module.exports = {
    extends: [
        './lib/recommended.js',
        './lib/stylistic.js'
    ],
    parserOptions: {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    rules: {},
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true,
        jquery: true
    }
};
