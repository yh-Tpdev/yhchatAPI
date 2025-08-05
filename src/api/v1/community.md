---
title: community
---

未特别说明情况下请求域名均为 https://chat-go.jwzhd.com
没写请求/响应项目表示不需要相关参数.  

## 发送文章

GET /v1/community/posts/create

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  
```JSONC
{  
  "baId": 40, // 文章分区ID
  "groupId": "123", // 文本引用群聊ID
  "title": "测试文章标题", // 文章标题
  "content": "测试文章内容", // 文章内容
  "contentType": 1 // 文章内容类别，1-文本，2-markdown
}
```

响应体:  
```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "audioUrl": 123, // 文章ID
  },
  "msg": "success" // 返回消息
}
```

## 删除文章

GET /v1/community/posts/delete

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  
```JSONC
{
  "postId": 123 // 文章ID
}
```

响应体:  
```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 打赏文章

GET /v1/community/posts/post-reward

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  
```JSONC
{
  "postId": 123, // 文章ID
  "amount": 1.0 // 打赏金币数
}
```

响应体:  
```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 打赏文章评论

GET /v1/community/comment/comment-reward

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  
```JSONC
{
  "postId": 123, // 文章ID
  "commentId": 123, // 打赏评论
  "amount": 1.0// 打赏金币数
}
```

响应体:  
```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 点赞/取消点赞文章

GET /v1/community/posts/post-like

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  
```JSONC
{
  "id": 123, // 文章ID
}
```

响应体:  
```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 收藏/取消收藏文章

GET /v1/community/posts/post-collect

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  
```JSONC
{
  "id": 123, // 文章ID
}
```

响应体:  
```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 编辑收藏文章

GET /v1/community/posts/edit

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  
```JSONC
{
  "postId": 123, // 文章ID
  "title": "测试文章标题",
  "content": "测试文章内存", // 文章内容
  "contentType": 2 // 文章内容类别，1-文本，2-markdown
}
```

响应体:  
```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "id": 30822 // 文章ID(不知道为什么要再返回一遍)
  },
  "msg": "success" // 返回消息
}
```
