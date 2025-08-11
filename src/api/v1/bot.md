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
