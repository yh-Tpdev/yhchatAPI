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
