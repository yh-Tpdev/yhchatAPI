---
title: Bot API
---

## 此目录下为云湖官网bot机器人文档

::: details 失败响应示例

这里收集了一些由于API请求格式不规范等导致错误的响应，欢迎补充

### 群聊中未添加机器人

```JSONC
{
  "code": -1,
  "msg": "群(ID:xxx)中未添加当前机器人(ID: xxxxxxxx)。"
}
```

### 群聊不存在/chat-id错误（会话id错误）

```JSONC
{
  "code": -1,
  "msg": "群(ID:xxx)不存在。"
}
```

### chat-type错误（会话类型错误）

```JSONC
{
  "code": 1002,
  "msg": "chat-type取值错误，取值仅支持group、user"
}
```

### token错误

```JSONC
{
  "code": 1003,
  "msg": "非法token"
}
```

### 缺少chat-id（缺少会话id）

```JSONC
{
  "code": 1002,
  "msg": "chat-id值错误，值不能为空"
}
```

### token不存在

```JSONC
{
  "code": 1002,
  "msg": "token不存在"
}
```

:::

<Catalog />
