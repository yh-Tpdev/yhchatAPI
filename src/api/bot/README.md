---
title: Bot API
---

## 此目录下为云湖官网bot机器人文档

::: tabs#失败响应示例

这里收集了一些由于API请求格式不规范等导致错误的响应，欢迎补充

@tab:active 群聊中未添加机器人 1

```JSONC
{
  "code": -1,
  "msg": "群(ID:xxx)中未添加当前机器人(ID: xxxxxxxx)。"
}
```

@tab:active 群聊不存在/chat-id错误（会话id错误） 2

```JSONC
{
  "code": -1,
  "msg": "群(ID:xxx)不存在。"
}
```

@tab:active chat-type错误（会话类型错误） 3

```JSONC
{
  "code": 1002,
  "msg": "chat-type取值错误，取值仅支持group、user"
}
```

@tab:active token错误 4

```JSONC
{
  "code": 1003,
  "msg": "非法token"
}
```

@tab:active 缺少chat-id（缺少会话id） 5

```JSONC
{
  "code": 1002,
  "msg": "chat-id值错误，值不能为空"
}
```

@tab:active token不存在 6

```JSONC
{
  "code": 1002,
  "msg": "token不存在"
}
```

:::

<Catalog />
