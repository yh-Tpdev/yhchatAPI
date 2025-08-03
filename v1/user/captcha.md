## 获取人机验证图片
#### POST-/v1/user/captcha

#### 响应数据(json)
```json
{
  "code": "请求状态码，1为正常，注意！此值为数值",
  "data": {
    "b64s": "{人机验证图片base64，image//png;base64}",
    "id": "{人机验证ID}"
  },
  "msg": "{返回状态概括}"
}
```
