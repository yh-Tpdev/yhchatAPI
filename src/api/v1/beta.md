---
title: beta
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.  

## 获取内测状态

POST /v1/beta/info

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "beta": "allow", // 是否为内测用户，allow-是，noapply-否
    "info": "\n即将内测的功能：\n1、更加完整的内测功能\n2、邀请码自定义功能\n3、地区排名活动\n4、网页版云湖\n"
  }, // 内测信息
  "msg": "success" // 返回消息
}
```
