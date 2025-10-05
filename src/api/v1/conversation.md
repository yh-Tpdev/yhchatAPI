---
title: conversation
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.  

## 将对话设为已读  

POST /v1/conversation/dismiss-notification

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

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

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

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
  name: "测试" // 名称
  chat_content: "我信(" // 会话内容
  timestamp_ms: 1755566778727 // 时间戳(毫秒)
  unread_message: 1 // 是否存在未读消息
  at: 1 // 是否被@,1表示被@
  avatar_id: 12345 // 头像ID
  avatar_url: "https://chat-img.jwznb.com/..." // 头像URL
  do_not_disturb: 1 // 免打扰,1表示开启
  timestamp: 1755566778 // 时间戳(秒)
  at_data {
    unknown: 123456 // 似乎是名称ID
    mentioned_id: "7356666" // 被@的ID
    mentioned_name: "测试" // 被@人名称
    mentioned_in: "8826666" // @消息所属的对话ID,例如群ID
    mentioner_id: "8827777" // 发起@的对象的ID
    mentioner_name: "测试" // 发起@的对象的名称
    msg_seq: 1234 // 消息序列
  }
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
        string name = 3; // 名称
        string chat_content = 4; // 消息内容
        uint64 timestamp_ms = 5; // 毫秒时间戳
        uint64 unread_message = 6; // 1表示有未读消息
        uint64 at = 7; // 是否被@
        uint64 avatar_id = 8; // 头像ID
        string avatar_url = 9; // 头像URL
        uint64 do_not_disturb = 11; // 免打扰
        uint64 timestamp = 12; // 秒级时间戳
        At_data at_data = 14; // @数据
        // 15和3重了就不解析了
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

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

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
