---
title: bot
---

未特别说明情况下请求域名均为 `chat-web-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.  

## 获取机器人信息

POST /v1/bot/bot-info

请求体:  

```JSONC
{
  "botId": "13972254" // 你要查询bot的ID
}
```

响应体:  

```JSONC
{
  "code": 1,
  "data": {
    "bot": {
      "id": 44, // 机器人在数据库中的序列(?)
      "botId": "13972254", // botID
      "nickname": "迎宾小精灵", // 名称
      "nicknameId": 42878, // 名称ID
      "avatarId": 10959, // 头像ID
      "avatarUrl": "https://chat-img.jwznb.com/...", // 头像URL
      "token": "", // bot token(实际上就是空)
      "link": "", // bot订阅接口URL(实际上也是空)
      "introduction": "全员群机器人", // 简介
      "createBy": "7058262", // 创建者
      "createTime": 1650849911, // 创建时间
      "headcount": 1, // 使用人数
      "private": 1, // 私有
      "checkChatInfoRecord": {
        "id": 39, // 某种神秘的ID(?)
        "chatId": "13972254", // 对象ID
        "chatType": 3, // 对象类型
        "checkWay": "", // 也不知道干啥的
        "reason": "", // 原因(?)
        "status": 0, // 状态
        "createTime": 1670654316, // 创建时间
        "updateTime": 0, // 更新时间
        "delFlag": 0 // 是否被删除
      }
    }
  },
  "msg": "success"
}
```
