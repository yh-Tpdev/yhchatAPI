---
title: bot
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.  

## 机器人商店banner

POST /v1/bot/banner

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

响应头：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "banners": [
      {
        "id": 6, // banner的id
        "title": "机器人开发指南", // 标题
        "introduction": "依托开放的服务接口，用户可以打造属于自己的机器人，提升工作生活效率", // 介绍
        "targetId": "", // "查看详情"点击后的id
        "targetUrl": "https://www.yhchat.com/document/1-3", // "查看详情"跳转的链接
        "imageUrl": "https://chat-img.jwznb.com/ca2b3753a9e7dbb94881b5f9364f7ffc.tmp", // banner背景图
        "sort": 40, // 排列顺序
        "delFlag": 0,
        "createTime": 0, // 创建时间
        "remark": "", // 备注
        "createBy": 0, // banner创建者
        "typ": 2 // 类型
      }
      // ...
    ]
  },
  "msg": "success" // 返回消息
}
```

## 机器人商店列表

POST /v1/bot/new-list

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

响应头：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "bots": [
      {
        "chatId": "35393533", // 机器人id
        "chatType": "3", // 识别对象类别，1-用户，2-群聊，3-机器人
        "headcount": "25", // 机器人使用人数
        "nickname": "红红火火恍恍惚惚", // 机器人名字
        "introduction": "介绍介绍介绍介绍介绍介绍介绍", // 机器人介绍
        "instructions": "",
        "avatarUrl": "https://chat-img.jwznb.com/1753199311790.647github-mark.png" // 机器人头像url
      }
     // ...
    ]
  },
  "msg": "success" // 返回消息
}
```

## 使用该机器人的群组(该注释含有较多不知道的字段，请谨慎使用)

POST /v1/bot/bot-detail

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体：

```JSONC
{
  "id": "30473864" // 机器人id
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "bot": {
      "id": 1, // 排序id（？
      "botId": "30473864", // 机器人id
      "nickname": "云湖AI助手",  //机器人名字
      "nicknameId": 151394, // 名称id
      "avatarId": 29016, // 头像id
      "avatarUrl": "https://chat-img.jwznb.com/cb1a825a1f7e4c5f782dc79200961907.png", // 头像url
      "type": 0,  // 类型
      "introduction": "官方的机器人，AI机器人。本机器人所有输出内容均由AI生成。", // 机器人介绍
      "createBy": "7058262", // 机器人创建者id
      "createTime": 1639670120, // 机器人创建时间戳
      "headcount": 115177, // 机器人使用人数
      "private": 0, // 是否私有（0为否，1为私人）
      "isStop": 0, // 是否停用（0为启用，1为停用）
      "settingJson": "",  // 设置json
      "del_flag": 0, 
      "alwaysAgree": 1, // 是否总是同意添加群聊
      "banId": 0, // 顾名思义
      "uri": "https://chat-go.jwzhd.com/open-apis/v1/bot/send?token=" // 机器人发送消息url（？
    },
    "groups": [ 
      {
        "id": 0, // 排序 （不知道为什么很多字段没有值，而客户端加入这个群显示群聊信息正常）
        "groupId": "161466900", // 群组id
        "name": "每日科技", // 群聊名字
        "introduction": "每天分享互联网科技信息", // 群聊介绍
        "createBy": "", // 群聊创建者id
        "createTime": 0, // 群聊创建时间
        "avatarId": 0, // 群聊头像id
        "del_flag": 0,
        "avatarUrl": "https://chat-img.jwznb.com/6eedb15cae0e7ddc59e8ae19a234c33c.png", // 群聊头像url
        "headcount": 0, // 群聊人数
        "readHistory": 0, // 是否启用新成员查看历史记录
        "alwaysAgree": 0, // 是否总是直接加入群聊
        "categoryId": 0, // 类别id
        "category": "", // 类别
        "private": 0, // 群聊是否私有
        "banId": 0, // ban人的id
        "gag": 0,
        "gagBy": "",
        "msgTypeLimit": ""
      },
    // ...
  ],
  "msg": "success" // 返回消息
}
```

## 获取创建的所有机器人信息

POST /v1/bot/bot-group-list

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "botsTotal": 1, // 机器人数量
    "list": {
      "bots": [
        {
          "id": 0, // 机器人排列位置ID
          "botId": "123", // 机器人ID
          "nickname": "测试机器人名称", // 机器人名称
          "nicknameId": 0, // 机器人名称ID
          "avatarId": 0, // 机器人头像ID
          "avatarUrl": "https://...", // 机器人头像ID
          "token": "123123123123123123123", // 机器人token
          "link": "", // 未知
          "type": 0, // 未知
          "introduction": "测试机器人简介", // 机器人简介
          "createBy": "", // 未知
          "createTime": 0, // 未知
          "headcount": 0, // 未知
          "private": 0, // 未知
          "isStop": 0, // 未知
          "settingJson": "", // 机器人设置json，需转义
          "del_flag": 0, // 未知
          "alwaysAgree": 0, // 未知
          "groupLimit": 0, // 未知
          "banId": 0, // 未知
          "linkStop": 0, // 未知
          "uri": "https://chat-go.jwzhd.com/open-apis/v1/bot/send?token=" // 机器人示例API接口
        },
      ]
    }
  },
  "msg": "success" // 返回消息
}
```

## 更改机器人设置

POST /v1/bot/edit-setting-json

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体：

```JSONC
{
  "id": "123", // 机器人id
  "settingJson": "[]" // 机器人设置json，需转义
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 更改机器人信息

POST /v1/bot/web-edit-bot

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体：

```JSONC
{
  "nickname":"测试机器人名称", // 机器人名称
  "introduction":"测试机器人简介", // 机器人简介
  "avatarUrl":"https://...", //机器人头像
  "botId":"123", // 机器人ID
  "private":0 // 0-公开，1-私有
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 获取机器人信息

POST /v1/bot/bot-info

请求头:  

|名称|必须|备注|
|-----|----|----|
|token|是|无|

请求体:  

```ProtoBuf
id: 123 // 机器人ID
```

::: details ProtoBuf数据结构

```proto
message bot_info_send {
    string id = 2; // 机器人ID
}
```

:::

响应体:  

```ProtoBuf
status {
  number: 114514
  code: 1
  msg: "success"
}
Bot_data {
  bot_id: "123" // 机器人ID
  name: "测试机器人名称" // 机器人名称
  name_id: 123 // 机器人名称ID
  avatar_url: "https://..." // 机器人头像url
  avatar_id: 123 // 机器人头像ID
  introduction: "测试机器人介绍" // 机器人介绍
  create_by: "123" // 机器人创建者ID
  create_time: 123123123 // 机器人创建时间戳
  headcount: 123 // 使用人数
  private: 0 // 是否为私有，0-公开，1-私有
  is_stop: 0 // 是否停用，0-启用，1-停用
  always_agree: 0 // 自动进群，0-不自动进群，1-自动进群
  do_not_disturb: 0 // 免打扰，0-不免打扰，1-免打扰
  top: 0 // 置顶，0-未置顶，1-已置顶
  group_limit: 0 // 限制进群，0-允许进群，1-限制进群
}
```

::: details ProtoBuf数据结构

```proto
// 获取机器人信息返回信息
message bot_info {
    Status status = 1;
    Bot_data data = 2;
    message Bot_data {
        string bot_id = 1; // 机器人ID
        string name = 2; // 机器人名称
        int64 name_id = 3; // 机器人名称ID
        string avatar_url = 4; // 机器人头像url
        string avatar_id = 5; // 机器人头像ID
        string introduction = 6; // 机器人介绍
        string create_by = 7; // 机器人创建者ID
        int64 create_time = 8; // 机器人创建时间戳
        int64 headcount = 9; // 使用人数
        int32 private = 10; // 是否为私有，0-公开，1-私有
        int32 is_stop = 11; // 是否停用，0-启用，1-停用
        int32 always_agree = 13; // 自动进群，0-不自动进群，1-自动进群
        int32 do_not_disturb = 15; // 免打扰，0-不免打扰，1-免打扰
        int32 top = 18; // 置顶，0-未置顶，1-已置顶
        int32 group_limit = 20; // 限制进群，0-允许进群，1-限制进群
    }
}

```

:::

## 获取机器人群聊看板

POST /v1/bot/board

请求头:  

|名称|必须|备注|
|-----|----|----|
|token|是|无|

请求体:  

```ProtoBuf
id: 123 // 群聊ID
chat_type: 2 // 对象类型 1-用户 2-群聊 3-机器人
```

::: details ProtoBuf数据结构

```proto
// 看板
message board_send {
    string id = 3; // 群聊/用户/机器人ID
    int64 chat_type = 4; // 对象类型 1-用户 2-群聊 3-机器人
}
```

:::

响应体:  

```ProtoBuf
status {
  number: 114514
  code: 1
  msg: "success"
}
Board_data {
  bot_id: "123" // 机器人ID
  chat_id: "123" // 对象ID
  chat_type: 2 // 对象类别，2-群聊，3-机器人
  content: "测试看板内容" // 看板内容
  content_type = 5; // 看板内容类别，1-文本，2-markdown，3-html
  last_update_time: 123123123 // 最后更新时间戳
  bot_name: "测试机器人名称" // 设置看板机器人名称
}
```

::: details ProtoBuf数据结构

```proto
// 获取看板返回
message board {
    Status status = 1;
    Board_data data = 2;
    message Board_data {
        string bot_id = 1; // 机器人ID
        string chat_id = 2; // 对象ID
        int32 chat_type = 3; // 对象类别，2-群聊，3-机器人
        string content = 4; // 看板内容
        int32 content_type = 5; // 看板内容类别，1-文本，2-markdown，3-html
        int64 last_update_time = 6; // 最后更新时间戳
        string bot_name = 7; // 设置看板机器人名称
    }
}
```

:::

## 删除用户对机器人的添加

POST /v1/bot/remove-follower

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|机器人管理员token|

请求体：

```JSONC
{
  "botId": "123", // 机器人ID
  "userId": "123" // 用户ID
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 删除群聊对机器人的添加

POST /v1/bot/remove-group

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|机器人管理员token|

请求体：

```JSONC
{
  "botId": "123", // 机器人ID
  "groupId": "123" // 群聊ID
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```
