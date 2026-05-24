---
title: conversation
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.

## 将对话设为已读

POST /v1/conversation/dismiss-notification

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```JSONC
{
 "chatId": "123" // 用户/机器人/群组ID
}
```

响应体:

```JSONC
{
 "code": 1, // 返回状态码,1为正常
 "msg": "success" // 返回信息
}
```

## 获取对话列表

POST /v1/conversation/list

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

响应体:

```ProtoBuf
status {
  number: 114514
  code: 1
  msg: "success"
}
data {
  chat_id: "7356666" // 对象ID
  chat_type: 1 // 对象类型,1-用户 2-群聊 3-机器人
  remark: "测试" // 备注名称
  chat_content: "我信(" // 会话内容
  timestamp_ms: 1755566778727 // 加入对话列表时间戳(毫秒)
  unread_message: 1 // 是否存在未读消息
  at: 1 // 是否被@,1表示被@
  avatar_id: 12345 // 头像ID
  avatar_url: "https://chat-img.jwznb.com/..." // 头像URL
  do_not_disturb: 1 // 免打扰,1表示开启
  send_timestamp: 1755566778 // 消息发送时间戳(秒)
  at_data {
    unknown: 123456 // 似乎是名称ID
    mentioned_id: "7356666" // 被@的ID
    mentioned_name: "测试" // 被@人名称
    mentioned_in: "8826666" // @消息所属的对话ID,例如群ID
    mentioner_id: "8827777" // 发起@的对象的ID
    mentioner_name: "测试" // 发起@的对象的名称
    msg_seq: 1234 // 消息序列
  }
  name: "测试"; // 用户真实名称
  certification_level: 1 // 认证相关,1是官方,2是地区
}
// ...
total: 8 // 会话数目
request_id: "abcdef"

```

::: details ProtoBuf数据结构

```proto
// 列出对话
message list {
    Status status = 1;
    repeated Data data = 2;
    uint64 total = 3; // 列表中对话的数量
    string request_id = 4; // 似乎是请求ID

    message Data {
        string chat_id = 1; // 对象ID
        uint64 chat_type = 2; // 对象类型
        string remark = 3; // 备注名称
        string chat_content = 4; // 消息内容
        uint64 timestamp_ms = 5; // 加入对话列表时间戳(毫秒)
        uint64 unread_message = 6; // 1表示有未读消息
        uint64 at = 7; // 是否被@
        uint64 avatar_id = 8; // 头像ID
        string avatar_url = 9; // 头像URL
        uint64 do_not_disturb = 11; // 免打扰
        uint64 send_timestamp = 12; // 消息发送时间戳(秒)
        At_data at_data = 14; // @数据
        string name = 15; // 用户真实名称
        uint64 certification_level = 16; // 认证,1是官方 2是地区

        message At_data {
            uint64 unknown = 1; // 似乎是名称ID
            string mentioned_id = 2; // 被@的ID,感觉没啥用
            string mentioned_name = 3; // 被@的名称,感觉也没啥用
            string mentioned_in = 4; // @消息所属的对话ID(例如群ID),感觉还没啥用
            string mentioner_id = 6; // 发起@的对象ID
            string mentioner_name = 7; // 发起@对象的名称
            uint64 msg_seq = 8; // 发起@的消息序列
        }
    }
}
```

:::

## 更改对话排序

POST /v1/conversation/sort-change

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```JSONC
{
  "userId": "123" // 对象ID
}
```

响应体:

```JSONC
{
 "code": 1, // 返回状态码,1为正常
 "msg": "success" // 返回信息
}
```

## 删除对话

POST /v1/conversation/remove

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```JSONC
{
  "chatId": "123" // 用户/机器人/群组ID
}
```

响应体:

```JSONC
{
 "code": 1, // 返回状态码,1为正常
 "msg": "success" // 返回信息
}
```
