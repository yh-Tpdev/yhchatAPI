---
title: mount-setting
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.  

## 添加群WebDAV挂载

POST /v1/mount-setting/create

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|目标群管理员token|

请求体:  

```JSONC
{
  "groupId": "big", // 目标群聊ID
  "mountName": "测试挂载名称", // 挂载名称
  "webdavUrl": "https://...", // 挂载网址
  "webdavUserName": "测试挂载用户名", // 挂载用户名
  "webdavPassword": "测试挂载密码", // 挂载密码
  "webdavRootPath": "测试挂载目录" // 挂载目录
}
```

响应体:  

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 删除群WebDAV挂载

POST /v1/mount-setting/delete

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|目标群管理员token|

请求体:  

```JSONC
{
  "id": 123 // 挂载ID
}
```

响应体:  

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```
