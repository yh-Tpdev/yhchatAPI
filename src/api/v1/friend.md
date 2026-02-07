---
title: friend
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.  

## 添加用户/群聊/机器人

POST /v1/friend/apply

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  

```JSONC
{
  "chatId": "123", // 目标对象ID
  "chatType": 2, // 目标对象类别，1-用户，2-群聊，3-机器人
  "remark": "测试申请简介" // 申请简介
}
```

响应体:  

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 删除用户/群聊/机器人

POST /v1/friend/delete-friend

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  

```JSONC
{
  "chatId": "123", // 目标对象ID
  "chatType": 2, // 目标对象类别，1-用户，2-群聊，3-机器人
}
```

响应体:  

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 处理用户/群聊/机器人添加申请

POST /v1/friend/agree-apply

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  

```JSONC
{
  "id": 123, // 申请ID
  "agree": 1 // 1-通过请求，2-拒绝请求，3-显示请求过期，4-显示已解散
}
```

响应体:  

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 获取所有聊天对象

POST /v1/friend/address-book-list

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  

```ProtoBuf
number: "123123" // 请求标识ID，可以随便写
```

::: details ProtoBuf数据结构

```proto
// 请求标识符
message address_book_list_send {
    string number = 2;
}
```

:::

响应体:  

```ProtoBuf
status {
  number: 114514
  code: 1 // 请求状态码，1为正常
  msg: "success" // 返回消息
}
data {
  list_name: "测试聊天对象列表名称" // 聊天对象列表名称，为"用户"，"我加入的群聊"，"机器人"
  data: {
    chat_id: "123" // 聊天对象ID
    chat_name: "测试聊天对象名称" // 聊天对象名称
    chat_avatar_url: "https://..." // 聊天对象头像url
    permisson_level: 2 // 群权限等级(普通用户无此项(数值为0或无此项),群主100,管理员2),只有群列表才有此项
    temp_text1 = 1 // 未知
    chat_name_up: "测试聊天对象名称" // 聊天对象名称
  }
  // ...单个列表输出完成后，连带list_name一起重复
}
```

::: details ProtoBuf数据结构

```proto
// 聊天对话列表
message address_book_list {
  Status status = 1;
  repeated Data data = 2;

  // 列表数据
  Data data {
    string list_name = 1; // 聊天对象列表名称，为"用户"，"我加入的群聊"，"机器人"
    repeated Data_list data = 2;

    // 聊天对象数据
    message Data_list {
      string chat_id = 1; // 聊天对象ID
      string name = 2; // 聊天对象名称
      string avatar_url = 3; // 聊天对象头像url
      int32 permisson_level = 4; // 群权限等级(普通用户无此项(数值为0或无此项),群主100,管理员2),只有群列表才有此项
      bool noDisturb = 5; // 免打扰
      //int32 field6 = 6; // 未知
    }
  }
}
```

:::

## 获取对象请求列表

POST /v1/friend/request-list

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

响应体:  

```ProtoBuf
status {
  number: 114514
  code: 1 // 请求状态码，1为正常
  msg: "success" // 返回消息
}
requests {
  receiverName: "测试接收者名称" // 接收者名称
  receiverAvatar: "https://..." // 接收者头像
  name: "测试用户名称" // 请求方名称
  avatar: "https://..." // 请求方头像
  groupName: "测试群组名称" // 群组名称
  groupAvata: "https://..." // 群组头像
  inviterId: "123" // 邀请者ID (字段8同此含义)
  ourceType: 1 // 来源类型
  targetType: 1 // 目标类型
  targetId: "123" // 目标ID
  receiverId: "123" // 接收者ID
  result: 0 // 处理结果
  processedAt: 1231231230 // 处理时间戳
  inviteAt: 1231231230 // 邀请时间戳
  inviteAtStr: "1231-23-12 31:23:00" // 邀请时间字符串
  requestI: 123; // 请求ID
  botName: 测试机器人名称" // 机器人名称
  botAvatar: "https://..." // 机器人头像
  processorName: "测试处理者名称" 处理者名称
  note: "测试对象请求" // 备注信息
}
total: 1 // 总请求数
pending: 0 // 待处理请求数
```

::: details ProtoBuf数据结构

```proto
// 对象请求列表
message Response {
  Status status = 1;
  message Request {
      string receiverName = 1; // 接收者名称
      string receiverAvatar = 2; // 接收者头像
      string name = 3; // 请求方名称
      string avatar = 4; // 请求方头像
      string groupName = 5; // 群组名称
      string groupAvatar = 6; // 群组头像
      string inviterId = 7; // 邀请者ID (字段8同此含义)
      int32 sourceType = 9; // 来源类型
      int32 targetType = 10; // 目标类型
      string targetId = 11; // 目标ID
      string receiverId = 12; // 接收者ID
      int32 result = 13; // 处理结果
      int64 processedAt = 14; // 处理时间戳
      int64 inviteAt = 16; // 邀请时间戳
      string inviteAtStr = 17; // 邀请时间字符串
      int32 requestId = 18; // 请求ID
      string botName = 19; // 机器人名称
      string botAvatar = 20; // 机器人头像
      string processorName = 22; // 处理者名称
      string note = 23; // 备注信息
    }
    repeated Request requests = 2; // 请求列表
    int32 total = 3; // 总请求数
    int32 pending = 4; // 待处理请求数
}
```

:::

## 设置会话免打扰

POST /v1/friend/no-notify

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体：

```JSONC
{
  "chatId": "118738312", // 会话ID
  "noNotify": 0 // 0-取消免打扰，1-设置免打扰
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```
