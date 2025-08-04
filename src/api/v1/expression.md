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
```JSON
{
  "code": 1,
  "data": {
    "expression": [
      {
        "id": 114514,
        "url": "expression/abcdef123456789abcdef123456789ab.jpg", // 需要前面加上 https://chat-img.jwznb.com/
        "urlOriginal": "https://chat-img.jwznb.com/123456789abcdefabcf43bce54e4e242.jpg", // 来源URL
        "delFlag": 0,
        "createTime": 创建时间戳,
        "createBy": "创建者"
      }
    ]
  },
  "msg": "success"
}
```