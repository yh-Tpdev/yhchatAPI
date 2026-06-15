---
url: /api/v1/verification.md
---
未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`\
没写请求/响应项目表示不需要相关参数.

## 获取短信验证码

POST /v1/verification/get-verification-code

请求体:

```JSON
{
  "mobile": "12312312300", // 手机号
  "code": "123123", // 人机验证校验码
  "id": "123", // 人机验证 ID
  "platform": "windows" // 登录平台名称,一般为 windows,web 等可自定义,后端不校验
}
```

响应体:

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 获取邮箱验证码

POST /v1/verification/get-email-verification-code

请求体:

```JSON
{
  "email": "123@123.123", // 邮箱
  "typ": "forget_password", // 验证类别: forget_password-更改密码验证，其他所有验证都为空
  "code": "123123", // 人机验证校验码
  "id": "123" // 人机验证 ID
}
```

响应体:

```JSON
{
  "code": 1,
  "msg": "success"
}
```
