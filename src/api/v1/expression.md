---
title: expression
---

未特别说明情况下请求域名均为 https://chat-go.jwzhd.com
没写请求/响应项目表示不需要相关参数.  

## 获取个人表情收藏

POST /v1/expression/list

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

响应体:  
```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "expression": [
      {
        "id": 114514,
        "url": "expression/...", // 需要在前面加上 https://chat-img.jwznb.com/
        "urlOriginal": "https://...", // 来源URL
        "delFlag": 0, // 未知
        "createTime": 114514, // 创建时间戳
        "createBy": "123" // 创建者ID
      }
      // ...
    ]
  },
  "msg": "success" // 返回消息
}
```

## 添加图片到个人表情收藏

POST /v1/expression/create  

请求头:  
|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  
```JSONC
{
  "url": "https://..." // 图片URL
}
```

响应体:  
```JSONC
{
  "code":1, // 请求状态码，1为正常
  "msg":"success" // 返回消息
}
```

## 删除个人表情收藏中的表情

POST /v1/expression/delete

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  
```JSONC
{
  "id": 114514 // 表情ID
}
```

响应体:  
```JSONC
{
  "code":1 ,// 请求状态码，1为正常
  "msg":"success" // 返回消息
}
```

## 置顶个人表情收藏中的表情

POST /v1/expression/topping  

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  
```JSONC
{
"id": 114514 // 表情包ID
}
```

响应体:  
```JSONC
{
  "code":1, // 请求状态码，1为正常
  "msg":"success" // 返回消息
}
```
