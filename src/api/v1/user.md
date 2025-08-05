---
title: user
---

未特别说明情况下请求域名均为 https://chat-go.jwzhd.com
没写请求/响应项目表示不需要相关参数.  

## 获取人机验证图片

POST /v1/user/captcha  

响应数据:  
```JSON
{
  "code": "请求状态码，1为正常，此值为数值",
  "data": {
    "b64s": "{人机验证图片base64，image//png;base64}",
    "id": "{人机验证ID}"
  },
  "msg": "{返回消息}"
}
```

## 短信验证码登录  

POST /v1/user/verification-login

请求体:  
```JSON
{  
  "mobile": "{登录手机号}",
  "captcha": "{手机验证码}",
  "deviceId": "{要登陆设备的唯一标识符}",
  "platform": "{登陆平台名称,一般为windows,web等可自定义}"
}
```

响应体:  
```json
{
  "code": "请求状态码，1为正常,此值为数值",
  "data": {
    "token": "{账户登录token}"
  }
  "msg": "{返回消息}"
}
```

## 获取用户自身信息

GET /v1/user/info  

请求头参数:  
|名称|必须|备注|
|-----|------|-----|
|token|是|无|

响应数据:  
```ProtoBuf
status {
  number: 114514
  code: 1
  msg: "success"
}
data {
  id: "用户id"
  name: "用户名"
  avatar_url: "头像URL"
  avatar_id: 头像ID(整数)
  phone: "手机号"
  email: "邮箱"
  coin: 金币数
  vip_expired_time: VIP过期时间(时间戳)
  invitation_code: "邀请码"
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
  code: 1
  msg: "success"
}
data {
  id: "用户ID"
  name: "用户名"
  name_id: 名称ID
  avatar_url: "头像URL"
  avatar_id: 头像ID(整数)
  medal {
    id: 1
    name: "内测用户"
    sort: 100
  }
  medal {
    id: 6
    name: "100000用户"
    sort: 500
  }
  register_time: "注册时间(YYYY-MM-DD hh:mm:ss)"
  online_day: 在线时长(整数)
  continuous_online_day: 连续在线时长(整数)
  vip_expired_time: unix时间戳
}
```
::: details ProtoBuf数据结构
```proto
// 勋章信息
message Medal_info {
    uint64 id = 1;
    string name = 2;
    uint64 sort = 5;   
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
        uint64 online_day = 11; // 在线天数
        uint64 continuous_online_day = 12; // 连续在线天数
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
  code: 1
  msg: "success"
}
medal {
  id: 1
  name: "内测用户"
  sort: 100
}
medal {
  id: 6
  name: "100000用户"
  sort: 500
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
    string name = 2; // 勋章名
    uint64 sort = 5; // 勋章排列相关?
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
name: "用户名称"
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
  code: 1
  msg: "success"
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
url: "用户头像url"
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
  code: 1
  msg: "success"
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
