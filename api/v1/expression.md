---
url: /api/v1/expression.md
---
未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`\
没写请求/响应项目表示不需要相关参数.

## 获取个人表情收藏

POST /v1/expression/list

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

响应体:

```JSON
{
  "code": 1,
  "data": {
    "expression": [
      {
        "id": 114514,
        "url": "expression/abcdef123456789abcdef123456789ab.jpg", // 需要前面加上 https://chat-img.jwznb.com/
        "urlOriginal": "https://chat-img.jwznb.com/123456789abcdefabcf43bce54e4e242.jpg", // 来源 URL
        "delFlag": 0,
        "createTime": 114514, // 创建时间戳
        "createBy": "7356666" // 创建者 ID
      }
    ]
  },
  "msg": "success"
}
```

## 添加图片到个人表情收藏

POST /v1/expression/create

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```JSON
{
  "url": "https://chat-img.jwznb.com/......" // 图片 URL
}
```

响应体:

```JSON
{
    "code": 1,
    "msg": "success"
}
```

## 删除个人表情收藏中的表情

POST /v1/expression/delete

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```JSON
{
  "id": 114514 // // 要删除的表情 ID
}
```

响应体:

```JSON
{
    "code": 1,
    "msg": "success"
}
```

## 置顶个人表情收藏中的表情

POST /v1/expression/topping

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```JSON
{
  "id": 114514 // 要置顶的表情 ID
}
```

响应体:

```JSON
{
    "code": 1,
    "msg": "success"
}
```

## 添加已有表情包

POST /v1/expression/add

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```JSON
{
  "id": 123 // 表情 ID
}
```

响应体:

```JSON
{
    "code": 1,
    "msg": "success"
}
```
