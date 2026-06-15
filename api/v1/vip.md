---
url: /api/v1/vip.md
---
未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`\
没写请求/响应项目表示不需要相关参数.

## vip价格获取

POST /v1/vip/vip-product-list

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```JSON
{
  "platform": "Web"  // 平台标识码: 可选 web/Windows/android 等
}
```

响应体:

```JSON
{
  "code": 1,
  "data": {
    "list": [
      {
        "id": 1, // 商品 id
        "name": "VIP月付", // 商品名
        "description": "1个月", // 商品描述
        "price": 10, // 商品价格（单位为人民币(元)
        "priceOriginal": 20, // 商品原价
        "day": 31, // vip 持续时间
        "productId": "" // 产品 id（？
      },
      // ...
    ],
    "qrCodeUrl": "https://www.yhchat.com/" // 二维码(QRCode)获取地址（？
  },
  "msg": "success"
}
```

## vip特权获取

GET /v1/vip/vip-benefits-list

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

响应体：

```JSON
{
  "code": 1,
  "data": {
    "list": [
      {
        "id": 1, // 特权 id
        "name": "尊贵身份标识", // 特权主名
        "description": "贵族身份的象征", // 特权描述
        "target": "", //  针对xxx
        "sort": 100 // 排序
      },
      // ...
    ]
  },
  "msg": "success"
}
```
