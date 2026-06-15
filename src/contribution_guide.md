---
title: 贡献指南
icon: book
---

## 简言:

本文将会教您如何正确贡献内容给 API 文档,以及一些注意事项.  
在贡献之前,请确保您有以下基础:

- VuePress 基础
- Markdown 基础
- CLI 基础
- Git 基础
- 正确使用 AI 工具的基础
- 抓包/调试基础

如果没有以上基础可以学.

## 内容规范:

1. JSON 请求类型应该写 JSON,而不是 JSONC.
2. 注释完备,但是不要过度注释,目前不需要注释的内容有: status 中普通的 code 和 msg(特殊的仍然需要注释).  
   protobuf(含 proto) 中的 chat_type 和 content_type 均不需要注明数字对应的类型,文档 API 目录首页已经注明,除非存在不一致的情况.  
   如果需要写数字对应的类型请按照以下格式:

```JSON
{
    "type": 1 // XX 类型: 1-类型1, 2-类型2, 3-类型3 ...
}
```

3. 遵循[中文排版指南](https://github.com/aaranxu/chinese-copywriting-guidelines)  
   不要求遵循争议和推荐部分,标点符号的全角半角不强制要求遵循.
4. 所写内容应能通过 VuePress 构建并且页面内容正常显示.

## 如何贡献:

1. Fork [本仓库](https://github.com/yh-Tpdev/yhchatAPI)到自己账号名下.
2. 通过抓包等方式获取修改依据.
3. Git clone Fork 后的仓库到本地后修改并提交或者是直接在 GitHub 网页编辑器(不推荐)修改.
4. 测试是否能够正常构建.
5. 提交更改到远程仓库
6. 创建一个 Pull Request 提交更改.  
   请务必如实填写要求填写的内容,不符合要求可能会被打回.您可以到相关群聊询问审核人员请求审查和合并.

## 项目命令:

补全依赖

```bash
pnpm install
```

启动开发服务器

```bash
pnpm docs:dev
```

构建文档

```bash
pnpm docs:build
```

更新依赖(如果您执行了此项操作审核人员可能会加严审核)

```bash
pnpm dlx vp-update
```
