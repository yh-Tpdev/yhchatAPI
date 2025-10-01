---
title: beta
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.  

## 获取机器人订阅配置信息

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
            "messageReceiveNormal": 1, // 推送普通信息，0-不推送，1-推送
            "messageReceiveInstruction": 1, // 推送指令信息，0-不推送，1-推送
            "groupJoin": 0, // 未知
            "groupLeave": 0, // 未知
            "botFollowed": 0, // 未知
            "botUnfollowed": 0, // 未知
            "botSetting": 0, // 机器人设置，0-未进行过机器人设置，0-进行过机器人设置
            "del_flag": 0 // 删除flag标签
        }
    },
    "msg": "success" // 返回消息
}
```
