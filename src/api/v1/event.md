---
title: event
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.  

## 获取机器人事件订阅配置

POST /v1/event/list

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体：

```JSONC
{
  "botId": "123" // 机器人id
}
```

响应体：

```JSONC
{
    "code": 1, // 请求状态码，1为正常
    "data": {
        "list": {
            "id": 123, // 列表ID
            "botId": "123", // 机器人ID
            "messageReceiveNormal": 1, // 推送普通信息事件，0-不推送，1-推送
            "messageReceiveInstruction": 1, // 推送指令信息事件，0-不推送，1-推送
            "groupJoin": 0, // 推送加入群事件，0-不推送，1-推送
            "groupLeave": 0, // 推送退出群事件，0-不推送，1-推送
            "botFollowed": 0, // 推送关注机器人事件，0-不推送，1-推送
            "botUnfollowed": 0, // 推送取关机器人事件，0-不推送，1-推送
            "botSetting": 0, // 推送机器人信息设置事件，0-不推送，1-推送
            "del_flag": 0 // 删除flag标签
        }
    },
    "msg": "success" // 返回消息
}
```
