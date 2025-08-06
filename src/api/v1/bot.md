---
title: bot
---

未特别说明情况下请求域名均为 https://chat-go.jwzhd.com
没写请求/响应项目表示不需要相关参数.  

# 机器人商店banner

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
        "targetId": "", // "查看详情"跳转的链接
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

# 机器人商店列表

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
