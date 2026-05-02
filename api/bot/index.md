---
url: /api/bot/index.md
---
## 此目录下为云湖官网bot机器人文档

::: tip

这里收集了一些由于API请求格式不规范等导致错误的响应，欢迎补充
（请求头：服务器会区分大小写）
:::

::: tabs#BotApiErrpr

@tab:active 群聊中未添加机器人

```JSONC
{
  "code": -1,
  "msg": "群(ID:xxx)中未添加当前机器人(ID: xxxxxxxx)。"
}
```

@tab:active 不存在/chat-id错误

```JSONC
{
  "code": -1,
  "msg": "群(ID:xxx)不存在。"
}
```

@tab:active chat-type错误

群聊：

```JSONC
{
  "code": 1002,
  "msg": "chat-type取值错误，取值仅支持group、user"
}
```

用户：

```JSONC
{
  "code": 1002,
  "msg": "recvType取值错误，取值仅支持group、user"
}
```

@tab:active token错误

```JSONC
{
  "code": 1003,
  "msg": "非法token"
}
```

@tab:active 缺少chat-id

```JSONC
{
  "code": 1002,
  "msg": "chat-id值错误，值不能为空"
}
```

@tab:active token不存在

```JSONC
{
  "code": 1002,
  "msg": "token不存在"
}
```

@tab:active 请求json错误

第一种：

```JSONC
{
  "code": 1002,
  "msg": "请求参数应为json格式，Body内容为: {}" // {}是请求json内容
}
```

第二种：

```JSONC
{
  "code": 1002,
  "msg": "请求参数应为json格式"
}
```

@tab:active 用户未添加机器人

```JSONC
{
  "code": 1003,
  "msg": "recvId值错误，该用户不是机器人好友"
}
```

@tab:active contentType错误

```JSONC
{
  "code": 1002,
  "msg": "contentType取值错误，请翻看文档"
}
```

@tab:active 消息为空

```JSONC
{
  "code": 1002,
  "msg": "消息内容不能为空"
}
```

@tab:active msgId错误/无权修改

```JSONC
{
  "code": -1,
  "msg": "消息不存在或无权限修改"
}
```

@tab:active 媒体上传失败

图片：

```JSONC
{
  "code": -1,
  "msg": "图片获取失败"
}
```

视频：

```JSONC
{
  "code": -1,
  "msg": "视频获取失败"
}
```

文件：

```JSONC
{
  "code": -1,
  "msg": "文件获取失败"
}
```

@tab:active 看板content内容为空

```JSONC
{
  "code": 1002,
  "msg": "看板内容不能为空"
}
```

:::
