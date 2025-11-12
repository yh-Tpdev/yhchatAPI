---
title: common
---

未特别说明情况下请求域名均为 `chat-web-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.  

## 获取全平台最新版本

GET /v1/common/get-version

响应体：

```JSONC
{
  "code": 1,
  "data": {
    "androidVersion": "1.5.6", // 安卓最新版本号(截至2025-11-12，以下均同)
    "androidVersionDate": "2025/11/11", // 安卓最新版本更新时间(截至2025-11-12，以下均同)
    "harmonyVersion": "1.0.0", // 鸿蒙Next最新版本号
    "harmonyVersionDate": "2025/05/15", // 鸿蒙Next最新版本更新时间
    "iosVersion": "1.1.11", // IOS最新版本号
    "iosVersionDate": "2025/05/15", // IOS最新版本更新时间
    "linuxVersion": "1.5.33", // Linux最新版本号
    "linuxVersionDate": "2025/05/15", // Linux最新版本更新时间
    "macosVersion": "1.4.25", // MacOS最新版本号
    "macosVersionDate": "2025/05/15", // MacOS最新版本更新时间
    "windowsVersion": "1.6.39", // Windows最新版本号
    "windowsVersionDate": "2025/11/02" // Windows最新版本更新时间
  },
  "msg": "success" // 返回消息
}
```
