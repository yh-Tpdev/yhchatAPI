---
title: user
---

## 获取用户自身信息

GET /v1/user/info  

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

响应体:  

```JSONC
{
  "code": 1, // 响应码,1表示正常
  "data": {
    "user": {
      "userId": "7356666", // 用户ID
      "nickname": "test", // 用户名
      "phone": "17588888888", // 手机号
      "avatarId": "11451", // 头像ID
      "avatarUrl": "https://...", // 头像URL
      "goldCoinAmount": 114.51 // 金币数
    }
  },
  "msg": "success" // 返回消息
}
```

## 获取用户主页信息

GET /v1/user/homepage?userId={你要查询的用户ID(例如1231230)}

::: tip
如果用户不存在/已注销仍然会返回数据,特点就是无头像,名称,注册时间戳为0等.  
:::

响应体:  

```JSONC
{
  "code": 1,
  "data": {
    "user": {
      "userId": "7058262", // 用户ID
      "nickname": "Feng", // 用户名
      "avatarUrl": "https://chat-img.jwznb.com/...", // 头像URL
      "registerTime": 1639627226, // 注册时间(时间戳)
      "registerTimeText": "2021-12-16 12:00:26", // 注册时间文本
      "onLineDay": 1190, // 在线天数
      "continuousOnLineDay": 277, // 连续在线天数
      "medals": [
        {
          "id": 1, // 勋章ID
          "name": "内测用户", // 勋章名称
          "desc": "内测用户", // 勋章描述
          "imageUrl": "", // 图像URL(?)
          "sort": 100 // 排序
        },
        // ...
      ],
      "isVip": 1 // 是否为 VIP, 1为是VIP
    }
  },
  "msg": "success" // 返回消息
}
```

## 复制用户token

GET /v1/user/get-token?token={需要复制的用户token}

响应体:  

```JSONC
{
  "code": 1, // 响应码,1表示正常
  "data": {
    "token": "19d7k3js-****-****-****-************"
  },
  "msg": "success" // 返回消息
}
```
