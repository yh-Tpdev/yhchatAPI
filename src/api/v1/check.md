---
title: check
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.  

## 获取云湖新版本（Android版本）

POST /v1/check/check-version-mobile

POST /v1/check/get-latest-version

请求体:  

```JSONC
{
 "packageInfo":"{\"appName\":\"云湖\",\"packageName\":\"com.yhchat.app\",\"version\":\"1.4.83\",\"buildNumber\":\"347\"}", // 当前应用信息，为json数组，需转义后才可使用
 "platform":"android", // 设备标识
 "deviceinfo":"", // 这里填写设备信息
 "deviceId":"114514", // 设备id
 "userId":"114514" // 用户id （可带可不带）
}
```

::: packageInfo转换后的json结构

```JSONC
"packageInfo": "{
 "appName": "云湖" // 软件名称
 "packageName": "com.yhchat.app", // 软件包名
 "version": "1.4.83", // 软件版本
 "buildNumber": "347" // 软件构建号
}"
```

:::

响应体：

```JSONC
{
  "ApkMd5": "", // 更新包MD5
  "ApkSize": 74491, // 包体大小
  "Code": 0, 
  "DownloadUrl": "https://app-cdn1.jwznb.com/android/yunhu-1.4.84.apk", // 下载地址
  "Level": 0,
  "Message": "success", // 返回消息
  "ModifyContent": "1、全新发布云湖APP\n2、修复多个bug", // 更新内容
  "UpdateStatus": 1, // 更新状态，1-需要更新，0-不需要更新
  "VersionCode": 348, // 应用的versioncode
  "VersionName": "1.4.84" // 应用版本号
}
```
