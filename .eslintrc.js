module.exports = {
    parser: 'vue-eslint-parser',

    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest', //支持的es版本
        sourceType: 'module', // 代码模块类型，默认为script，设置为module
        ecmaFeatures: {
            jsx: true
        }
    },
    //预设的 lint 包
    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended'
    ],
    plugins: ['@typescript-eslint/eslint-plugin'],

    rules: {
        // 自定义规则 https://eslint.org/docs/rules
    }
}
