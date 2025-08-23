---
title: expression
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
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
  "code": 1,
  "data": {
    "expression": [
      {
        "id": 114514,
        "url": "expression/abcdef123456789abcdef123456789ab.jpg", // 需要前面加上 https://chat-img.jwznb.com/
        "urlOriginal": "https://chat-img.jwznb.com/123456789abcdefabcf43bce54e4e242.jpg", // 来源URL
        "delFlag": 0,
        "createTime": 114514, // 创建时间戳
        "createBy": "7356666" // 创建者ID
      }
    ]
  },
  "msg": "success"
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
  "url": "https://chat-img.jwznb.com/......" // 图片URL
}
```

响应体:  

```JSONC
{
    "code": 1, // 状态码，正常为1
    "msg": "success" // 状态信息
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
  "id": 114514 // // 要删除的表情ID
}
```

响应体:  

```JSONC
{
    "code": 1, // 状态码，正常为1
    "msg": "success" // 状态信息
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
  "id": 114514 // 要置顶的表情ID
}
```

响应体:  

```JSONC
{
    "code": 1, // 状态码，正常为1
    "msg": "success" // 状态信息
}
```

## 添加已有表情包

POST /v1/expression/add

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  

```JSONC
{
  "id": 123 // 表情ID
}
```

响应体:  

```JSONC
{
    "code": 1, // 状态码，正常为1
    "msg": "success" // 状态信息
}
```
