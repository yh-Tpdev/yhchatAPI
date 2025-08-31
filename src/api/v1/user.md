---
title: user
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.  

## 获取人机验证图片

POST /v1/user/captcha  

响应体:  

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "b64s": "image//png;base64...", // 人机验证图片base64
    "id": "123" // 人机验证ID
  },
  "msg": "success" // 返回消息 
}
```

## 短信验证码登录  

POST /v1/user/verification-login

请求体:  

```JSONC
{  
  "mobile": "12312312300", // 登录手机号
  "captcha": "123123", // 手机验证码
  "deviceId": "awa", // 登陆设备唯一标识符，可自定义
  "platform": "windows" // 登陆平台名称,一般为windows,web等可自定义
}
```

响应体:  

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "token": "f87TJHF9-****-****-************" // 账户登录token
  },
  "msg": "success" // 返回消息
}
```

## 获取用户自身信息

GET /v1/user/info  

请求头:  

|名称|必须|备注|
|-----|------|-----|
|token|是|无|

响应体:  

```ProtoBuf
status {
  number: 114514
  code: 1 // 请求状态码，1为正常
  msg: "success" // 返回消息
}
data {
  id: "123" // 用户id
  name: "测试用户" // 用户名
  avatar_url: "https://..." // 头像URL
  avatar_id: 123 //头像ID 
  phone: "12312312300" // 手机号
  email: "123@123.com" // 邮箱
  coin: 123 // 金币数
  is_vip: 0 // 是否为VIP
  vip_expired_time: 1231231230 // VIP过期时间
  invitation_code: "123" // 邀请码
}
```

::: details ProtoBuf数据结构

```proto
// 用户自身信息
message info {

    Status status = 1;
    message Data {
        // 11是描述手机号长整数的,懒得解析了
        string id = 1; // 用户id
        string name = 2; // 用户名
        string avatar_url = 4; // 头像URL
        uint64 avatar_id = 5; // 头像ID
        string phone = 6; // 手机号
        string email = 7; // 邮箱
        double coin = 8; // 金币数
        int32 is_vip = 9; // 是否为VIP
        uint64 vip_expired_time = 10; // VIP过期时间
        string invitation_code = 12; // 邀请码
    }
    Data data = 2;
}
```

:::

## 获取用户信息

POST /v1/user/get-user

请求头:  

|名称|必须|备注|
|---|---|---|
|token|是|可以瞎写一个|

请求体:  

```ProtoBuf
id: "用户id"
```

::: details ProtoBuf数据结构

```proto
message get_user_send {
    string id = 2;
}
```

:::

响应体:  

```ProtoBuf
status {
  number: 123456
  code: 1 // 请求状态码，1为正常
  msg: "success" // 返回消息
}
data {
  id: "123" // 用户ID
  name: "测试用户" // 用户名
  name_id: 123 // 名称ID
  avatar_url: "https://..." // 头像URL
  avatar_id: 123 // 头像ID
  medal {
    id: 1 // 勋章ID
    name: "测试勋章" // 勋章名称
    sort: 100 // 勋章顺序
  }
  // ...
  register_time: "1234-12-12 12:12:12" // 注册时间(YYYY-MM-DD hh:mm:ss)
  ban_time: 123123123 // 封禁结束时间
  online_day: 123 // 在线时长
  continuous_online_day: 123 // 连续在线时长
  is_vip: 1 // 是否为VIP
  vip_expired_time: 123123123 // vip的unix时间戳
}
```

::: details ProtoBuf数据结构

```proto
// 勋章信息
message Medal_info {
    uint64 id = 1; // 勋章ID
    string name = 2; // 勋章名称
    uint64 sort = 5;  // 勋章顺序
}

// 获取用户信息
message get_user {
    Status status = 1; // 状态码
    Data data = 2; //数据
    message Data {
        string id = 1; // 用户id
        string name = 2; // 用户名
        uint64 name_id = 3; // 名称ID
        string avatar_url = 4; //头像URL
        uint64 avatar_id = 5; // 头像ID
        repeated Medal_info medal = 6; // 勋章信息
        string register_time = 7; // 注册时间,格式: YYYY-MM-DD hh:mm:ss
        uint64 ban_time = 10; // 封禁结束事件(时间戳)
        uint64 online_day = 11; // 在线天数
        uint64 continuous_online_day = 12; // 连续在线天数
        int32 is_vip = 13; // 是否为vip
        uint64 vip_expired_time = 14; // VIP过期时间(时间戳)
    }
}
```

:::

## 用户勋章

POST /v1/user/medal

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|空|

响应体:  

```ProtoBuf
status {
  number: 114514
  code: 1 // 请求状态码，1为正常
  msg: "success" // 返回消息
}
medal {
  id: 1 // 勋章ID
  name: "测试勋章" // 勋章名称
  sort: 100 // 勋章顺序
}
```

::: details ProtoBuf数据结构

```proto
// 勋章
message medal {
    Status status = 1; // 状态信息
    repeated Medal_info medal = 2; // 勋章信息
}

// 勋章信息
message Medal_info {
    uint64 id = 1; // 勋章ID
    string name = 2; // 勋章名称
    uint64 sort = 5;  // 勋章顺序
}
```

:::

## 更改用户名称

POST /v1/user/edit-nickname

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|空|

请求体:  

```ProtoBuf
name: "123" // 用户名称
```

::: details ProtoBuf数据结构

```proto
message edit_nickname_send {
    string name = 3;
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
```

::: details ProtoBuf数据结构

```proto
// 更改名称状态信息
message edit_nickname {
    Status status = 1; // 状态信息
}
```

:::

## 更改用户头像

POST /v1/user/edit-avatar

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|空|

请求体:  

```ProtoBuf
url: "https://..." // 用户头像url
```

::: details ProtoBuf数据结构

```proto
message edit_avatar_send {
    string url = 2;
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
```

::: details ProtoBuf数据结构

```proto
// 更改名称状态信息
message edit_avatar {
    Status status = 1; // 状态信息
}
```

:::

## 用户邮箱密码登录

POST /v1/user/email-login

请求体：

```JSONC
{
    "email": "123456@example.com", // 登录邮箱
    "password": "123456", // 登录密码
    "deviceId": "awa", // 登录设备唯一标识符
    "platform": "android" // 登录平台名称
}
```

响应体:  

```JSONC
{
    "code": 1, // 请求状态码，1为正常
    "data": {
        "token": "abcdefg1-xxxx-xxxx-xxxxxxxxxx" // 登录效验令牌
    },
    "msg": "success" // 返回消息
}
```

## 退出登录

POST /v1/user/logout

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|空|

请求体:  

```JSONC
{
  "device-id": "123123123" // 设备ID
}
```

响应体:  

```JSONC
{
    "code": 1, // 请求状态码，1为正常
    "msg": "success" // 返回消息
}
```

## 获取发现群聊分区

POST /v1/user/recommend-category-list

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|空|

请求体：

```JSONC
{
 "appChannel": "default"
}
```

响应体：

```JSONC
{
  "code": 1, // 状态码，正常为1
  "data": {
    "categories": [ // 群聊类别
      "精选",
      "粉丝群",
      "地区",
      "IT/互联网",
      "玩机",
      "游戏",
      "资讯订阅"
    ]
  },
  "msg": "success" // 状态信息
}
```

## 获取发现群聊列表

POST /v1/user/recommend-list

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|空|

请求体：

```JSONC
{
  "category": "精选", // 群聊类别
  "keyword": "", // 关键词
  "size": 30, // 尺寸
  "page": 1 // 页码
}
```

响应体：

```JSONC
{
  "code": 1, // 状态码，正常为1
  "data": {
    "groupList": [
      {
        "chatId": "787149149", // 群聊id
        "banId": 0, // 顾名思义
        "nickname": "小说交流群", // 群聊名字
        "introduction": "小说交流群", // 群聊介绍
        "avatarUrl": "https://chat-img.jwznb.com/e96780b45546654e0774d48727432b05.jpeg", // 群聊头像
        "headcount": 71, // 群聊内人数
        "createTime": 1751264890 // 创建时间戳
      }
     // ...
    ]
  },
  "msg": "success" // 状态信息
}
```

## 获取机器人推荐列表

POST /v1/user/recommend

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|空|

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "botList": [
      {
        "chatId": "30473864", // 机器人id
        "chatType": "3", // 识别对象类别，1-用户，2-群聊，3-机器人
        "headcount": "115190", // 使用人数
        "nickname": "云湖AI助手", // 机器人名称
        "introduction": "官方的机器人，AI机器人。本机器人所有输出内容均由AI生成。", // 机器人简介
        "introductions": "",
        "avatarUrl": "https://chat-img.jwznb.com/cb1a825a1f7e4c5f782dc79200961907.png", // 机器人头像url
        "isAdd": 1, // 是否添加（1为可添加，0为不可添加）
        "isApply": 0, // 是否应用
        "alwaysAgree": 0 // 是否总是同意
      }
    // ...
    ]
  },
  "msg": "success" // 返回消息
}
```

## 模块忽略信息获取

POST /v1/user/module-ignore-info

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|空|

响应体：

```JSONC
{
 "deviceId": "设备id"
}
```

(因为没有vip，这里为示例，请实际情况为准)
响应体：

```JSONC
{
  "code": -1, // 请求状态码，1为正常
  "msg": "此功能仅限VIP用户使用"
}
```

## 获取通知状态

POST /v1/user/notification-status

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|空|

请求体：

```JSONC
{
  "deviceId": "1114514", // 设备id
  "registrationId": "114514" // 注册id
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "notification": { // 通知json
      "id": 110061, // 注册id
      "userId": "114514", // 用户id
      "deviceId": "114514", // 设备id
      "registrationId": "114514", // 通知注册id
      "isOpen": 1, // 是否打开系统消息通知（设置”系统消息通知“选项可控制这个数值，1-打开，0-关闭）
      "type": 2, // 类型
      "delFlag": 0, 
      "createTime": 1743426921, // 创建时间戳
      "updateTime": 1754705620 // 更新时间戳
    }
  },
  "msg": "success" // 返回消息
}
```

## 获取通知注册信息

POST /v1/user/notification-info

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|空|

请求体：

```JSONC
{
  "deviceId": "114514", // 设备id
  "registrationId": "114514", // 注册通知id
  "isOpen": 1, // // 是否打开系统消息通知（设置”系统消息通知“选项可控制这个数值，1-打开，0-关闭）
  "type": 2 // 类型
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 金币增减记录

POST /v1/user/gold-coin-increase-decrease-record

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

响应体：

```JSONC
{
  "size": 20, // 尺寸
  "page": 1 // 页数
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "goldCoinRecord": [
      {
        "id": 193275, // 金币记录id
        "userId": "用户id",
        "typ": 8, // 类型
        "beforeAmount": 55.01, // 之前金币数量
        "afterAmount": 57.01, // 之后的金币数量
        "changeAmount": 2, // 增加/减少的金币数量
        "reason": "抽奖金币", // 增加/减少金币的原因
        "remark": "", // 备注
        "createTime": 1754669040 // 创建时间戳
      }
    // ...
    ],
    "total": 243 // 总共的金币记录
  },
  "msg": "success" // 返回消息
}
```

## 绑定手机号

POST /v1/user/bing-phone

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

响应体：

```JSONC
{
  "phone": "12312311230", // 欲绑定手机号
  "captcha": "123123" // 短信验证码
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 绑定邮箱

POST /v1/user/bing-email

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

响应体：

```JSONC
{
  "email": "123@123.com", // 欲绑定邮箱
  "captcha": "123123" // 邮件验证码
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 更改绑定手机号

POST /v1/user/change-phone-check

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

响应体：

```JSONC
{
  "phone": "12312341230", // 欲绑定手机号
  "captcha": "123123" // 短信验证码
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 更改绑定邮箱

POST /v1/user/change-email-check

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

响应体：

```JSONC
{
  "email": "123@123.com", // 欲绑定邮箱
  "captcha": "123123" // 邮件验证码
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 更改登陆密码

POST /v1/user/forget-password

响应体：

```JSONC
{
  "email": "123@123.com", // 欲绑定邮箱
  "captcha": "123123", // 邮件验证码
  "password": "测试登录密码" // 登录密码
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```
