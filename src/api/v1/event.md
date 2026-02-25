---
title: event
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.

## 获取机器人事件订阅配置

POST /v1/event/list

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

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

## 机器人消息订阅设置

POST /v1/event/edit

请求头:

| 名称  | 必须 | 备注              |
| ----- | ---- | ----------------- |
| token | 是   | 机器人管理员token |

请求体：

```JSONC
{
  "botId": "75282754", // 机器人id
  "messageReceiveNormal": 1, // 普通消息事件，1开启，0-关闭
  "messageReceiveInstruction": 0, // 指令消息事件，1开启，0-关闭
  "botFollowed": 1, // 关注机器人事件，1开启，0-关闭
  "botUnfollowed": 1, // 取关机器人事件，1开启，0-关闭
  "groupJoin": 1, // 加入群事件，1开启，0-关闭
  "groupLeave": 1, // 退出群事件，1开启，0-关闭
  "botSetting": 1, // 机器人设置消息事件，1开启，0-关闭
  "typ": "messageReceiveInstruction" // 每次机器人设置的key值，为该请求2-8的key值中的一个
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```
