/*
 * @Author: yangshilin
 * @Date: 2023-07-02 12:03:23
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-07-02 12:03:29
 * @FilePath: commitlint.config.cjs
 * @Description: 请添加文件描述
 */

module.exports = {
    extends: ['@commitlint/config-conventional'],
    // 校验规则
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'docs',
                'style',
                'refactor',
                'perf',
                'test',
                'chore',
                'revert',
                'build',
            ],
        ],
        'type-case': [0],
        'type-empty': [0],
        'scope-empty': [0],
        'scope-case': [0],
        'subject-full-stop': [0, 'never'],
        'subject-case': [0, 'never'],
        'header-max-length': [0, 'always', 72],
    },
}
