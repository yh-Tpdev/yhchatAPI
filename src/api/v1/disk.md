---
title: disk
---

未特别说明情况下请求域名均为 https://chat-go.jwzhd.com
没写请求/响应项目表示不需要相关参数.  

## 创建群网盘文件夹

POST /v1/disk/create-folder

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  
```JSONC
{
  "chatId": "群聊id9位数", // 群聊id
  "chatType": 2, // 会话类型
  "folderName": "文件名",
  "parentFolderId": 0 // 父文件夹id
}
```

响应体：
```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```
