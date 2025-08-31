---
title: group
---

未特别说明情况下请求域名均为 `chat-web-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.  

## 获取群聊信息

POST /v1/group/group-info

请求体:  

```JSONC
{
  "groupId": "big" // 你要查询群组的ID
}
```

响应体:  

```JSONC
{
  "code": 1,
  "data": {
    "group": {
      "id": 1, // 群聊在数据库中的序列(?)
      "groupId": "big", // 群聊ID
      "name": "全员群", // 群聊名称
      "introduction": "15亿用户总群\n新注册用户默认加入这个群，请不要刷屏发消息\n不想用全员群可以选择退群，退群后也可以重新加入\n玩机问题进对应手机群询问，不要在全员群询问\n\n在开始聊天前请阅读全员群规范: https://www.yhchat.com/c/p/796\n\n如有引导性消费或者不在正规平台进行交易的 请谨慎交易\n如有人称是本软件官方人员 请公开询问此群管理员或ID ", // 群聊简介
      "createBy": "7058262", // 创建者
      "createTime": 0, // 创建时间戳
      "avatarId": 32040, // 头像ID
      "avatarUrl": "https://chat-img.jwznb.com/...", // 头像URL
      "headcount": 112998, // 群人数
      "readHistory": 1, // 历史消息, 1表示允许新成员获取以前的历史消息
      "category": "", // 分类
      "uri": "http://chat.jwznb.com:8888/open-apis/v1/bot/send?token=", // 不知道干啥的
      "groupBotRel": { // 也不知道干啥的
        "id": 0,
        "groupId": "",
        "botId": "",
        "delFlag": 0,
        "createTime": 0,
        "updateTsime": 0,
        "bot": {
          "id": 0,
          "botId": "",
          "nickname": "",
          "nicknameId": 0,
          "avatarId": 0,
          "avatarUrl": "",
          "token": "",
          "link": "",
          "introduction": "",
          "createBy": "",
          "createTime": 0,
          "headcount": 0,
          "private": 0,
          "checkChatInfoRecord": {
            "id": 0,
            "chatId": "",
            "chatType": 0,
            "checkWay": "",
            "reason": "",
            "status": 0,
            "createTime": 0,
            "updateTime": 0,
            "delFlag": 0
          }
        }
      },
      "checkChatInfoRecord": {
        "id": 1160, // 似乎是某种神秘的ID
        "chatId": "big", // 对象ID
        "chatType": 2, // 对象类型
        "checkWay": "", // 不知道干啥的
        "reason": "", // 还是不知道干啥的
        "status": 0, // 状态?
        "createTime": 1670655084, // 创建时间戳
        "updateTime": 1748487950, // 最近更新时间戳
        "delFlag": 0 // 是否被删除
      }
    }
  },
  "msg": "success"
}
```
