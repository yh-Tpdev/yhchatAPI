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
  "code": "请求状态码，1为正常 此值为数值",
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
  avatar_id: 头像ID(数字)
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