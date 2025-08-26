---
title: verification
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.  

## 获取短信验证码

POST /v1/verification/get-verification-code

请求体:  

```JSONC
{  
  "mobile": "12312312300", // 手机号
  "code": "123123", // 人机验证校验码
  "id": "123", // 人机验证ID
  "platform": "windows" // 登陆平台名称,一般为windows,web等可自定义
}
```

响应体:  

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 获取邮箱验证码

POST /v1/verification/get-email-verification-code

请求体:  

```JSONC
{  
  "email": "123@123.123", // 手机号
  "typ": "forget_password", // 验证类别，forget_password-更改密码验证
  "code": "123123", // 人机验证校验码
  "id": "123", // 人机验证ID
}
```

响应体:  

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```
