# Husky
 [husky](https://typicode.github.io/husky/) 是一个管理 `git` 钩子的工具
 + 例如  本项目
 ```bash
 # pre-commit 执行
 pnpm vue-tsc -b
 ```
+ 在 `git commit` 之前执行`tsc` 校验，失败时会中断提交

----
# TypeScript
如上，`tsc` 是 [TypeScript]() 的编译命令，关于 `TypeScript` 的取舍通常由多方面决定，比如
+ 项目规模
+ 项目开发团队规模、人员流动性
+ 项目预期持续时间
+ 其他团队要求等

> 至于实际语法，高级用法也不少，值得慢慢学习

---
# EsLint
[EsLint](https://zh-hans.eslint.org/docs/latest/use/getting-started) 的核心功能
+ 强制团队使用一样的缩进和分号风格
+ 类似 `TypeScript` 一样检查部分潜在的逻辑风险（配合框架推荐插件非常实用）
+ 比如官方ESLint Vue 插件：[eslint-plugin-vue](https://eslint.vuejs.org/)

---
# Prettier
[Prettier](https://prettier.io/) 只是一个格式化工具
+ 它跟 `EsLint` 之间一般项目其实可以二选一
+ 但是如果是要求严格的项目往往又会结合使用
+ Prettier 不会处理未使用变量等问题，其目标应该是视觉上的代码整洁
+ 而 `EsLint` 由于涉及部分逻辑判断，往往质量优先的项目会使用（EsLint 包优先的）
+ 但是配置时可能需要关注二者之间配置是否存在冲突，或者代码被轮流（反复）格式化的问题

---
# Line-staged
[lint-staged](https://github.com/lint-staged/lint-staged#readme) 是一个在 Git 暂存文件上运行 linter 的工具，避免全量检查。
+ 匹配暂存区的文件，执行格式化命令，并将改动暂存
```json
{
  "lint-staged": {
    "*.{ts,vue}": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ]
  }
}
```
+ 配合Husky使用
 ```bash
 # pre-commit 执行
 pnpm lint-staged # 执行lint-staged的格式化后
 pnpm vue-tsc -b # 还应不应该去检查整个项目？(#^.^#)
 ```
