---
title: sticky
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.  

## 首页置顶信息获取

POST /v1/sticky/list

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

响应头：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "sticky": [
      {
        "id": 8977, // 
        "chatType": 2, //识别对象类别，1-用户，2-群聊，3-机器人
        "chatId": "114514", //群聊id
        "chatName": "example", // 群聊名字
        "sort": 1751616217, // 不知道，跟群聊创建时间戳一样（?
        "avatarUrl": "https://chat-img.jwznb.com/xxxxxxxxxxxxxxx.jpg", // 群聊头像地址
        "createTime": 1751616217, // 群聊创建时间戳
        "delFlag": 0,
        "userId": "1234567", // 用户id
        "certificationLevel": 0 // 识别是否为官方出品，1为官方出品，0则不是
      }
      // ...
    ]
  },
  "msg": "success" // 返回消息
}
```
