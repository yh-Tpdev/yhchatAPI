---
title: check
---

> 未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com` .

没写请求/响应项目表示不需要相关参数.

由于部分数据较为隐私，已省略.

## 获取云湖新版本（Android 版本）

```http request
POST /v1/check/check-version-mobile
###
POST /v1/check/get-latest-version
```

### 请求体

```JSONC
{
 "packageInfo":"{\"appName\":\"云湖\",\"packageName\":\"com.yhchat.app\",\"version\":\"1.4.83\",\"buildNumber\":\"347\"}", // 当前应用信息，为json数组，需转义后才可使用
 "platform":"android", // 设备标识
 "deviceinfo":"", // 这里填写设备信息
 "deviceId":"114514", // 设备id
 "userId":"114514" // 用户id （可带可不带）
}
```

::: info

`packageInfo` 转换后的 json 结构

```JSONC
{
  "appName": "云湖", // 软件名称
  "packageName": "com.yhchat.app", // 软件包名
  "version": "1.4.83", // 软件版本
  "buildNumber": "347" // 软件构建号
}
```

:::

### 响应体

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

## 获取云湖新版本（Windows 版本）

```http request
POST https://chat-go.jwzhd.com/v1/check/check-version
```

### 请求体

```jsonc
{
  "packageInfo": "{\"appName\":\"云湖\",\"packageName\":\"云湖\",\"version\":\"1.6.50\",\"buildNumber\":\"225\"}", // 当前应用信息，为 json 数组，需转义后才可使用
  "platform": "windows", // 平台
  "deviceinfo": "", // 这里填写设备信息
  "deviceId": "" // 设备id
}
```

::: info

`packageInfo` 转换后的 json 结构

```JSONC
{
  "appName": "云湖", // 软件名称
  "packageName": "云湖", // 软件包名
  "version": "1.6.50", // 软件版本
  "buildNumber": "225" // 软件构建号
}
```

:::

::: info

`deviceinfo` 设备信息示例。

```JSONC
{
  "computerName":"", // 设备名称
  "numberOfCores":12, // CPU 线程数
  "systemMemoryInMegabytes":16384, // 内存 MiB
  "userName":"", // 用户名
  "majorVersion":10, // Windows 10, Windows 11
  "minorVersion":0,
  "buildNumber":26200, // Windows 操作系统版本
  "platformId":2,
  "csdVersion":"",
  "servicePackMajor":0,
  "servicePackMinor":0,
  "suitMask":256,
  "productType":1,
  "reserved":0,
  "buildLab":"26100.ge_release.240331-1435", // Windows 操作系统版本
  "buildLabEx":"26100.1.amd64fre.ge_release.240331-1435",
  "digitalProductId":[], // 数字产品 ID (数字数组)
  "displayVersion":"25H2", // Windows 版本号
  "editionId":"Professional", // Windows 版本
  "installDate":"2024-12-01T15:40:13.000", // 安装时间
  "productId":"", // 产品 ID
  "productName":"Windows 11 Pro", // Windows 全名
  "registeredOwner":"", // 所有者
  "releaseId":"2009",
  "deviceId":"" // 设备ID
}
```

:::

### 响应体

```jsonc
{
  "code": 1, // 成功
  "data": {
    "latestDesc": "1、全新发布云湖APP\\n2、修复多个bug", // 更新日志
    "latestVersion": "1.6.50", // 最新版本
    "update": 0
  },
  "msg": "success" // 返回消息
}
```
