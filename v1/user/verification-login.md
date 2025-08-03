## 登录云湖账户-获取登录token(手机号)
#### /v1/user/verification-login

#### 请求数据(json)
```json
{  
"mobile": "{登录手机号}",
"captcha": "{手机验证码}",
"deviceId": "{要登陆设备的唯一标识符}",
"platform": "{登陆平台名称,一般为windows,web等可自定义}"
}
```
#### 响应数据(json)
```json
{
"code": 0,
// 请求状态码，1为正常
"data": {
  "token": "{账户登录token}"
}
"msg": "{返回状态概括}"
}
```
