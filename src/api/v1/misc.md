---
title: misc
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.

## 获取功能路由

GET /v1/misc/configure-distribution

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

响应体:

```JSON
{
  "code": 1,
  "data": {
    "audioUrl": "https://chat-audio1.jwznb.com/", // 音频路由
    "fileUrl": "https://chat-file.jwznb.com/", // 文件路由
    "imageUrl": "https://chat-img.jwznb.com/", // 图片路由
    "serverUrl": "http://chat.jwznb.com:8888/", // 未知
    "shareUrl": "https://yhfx.jwznb.com/", // 分享链接路由
    "videoUrl": "https://chat-video1.jwznb.com/", // 视频路由
    "websocketUrl": "wss://chat-ws-go.jwzhd.com/ws" // WS 路由
  },
  "msg": "success"
}
```

---

::: tip 七牛 kodo 相关参考文档

~~如果不在意体积的话可以直接使用七牛云的 SDK,更省事.~~  
~~应该没人在意那几百 KB 空间吧.~~

[上传策略](https://developer.qiniu.com/kodo/1206/put-policy)  
[上传凭证](https://developer.qiniu.com/kodo/1208/upload-token)  
[直传文件](https://developer.qiniu.com/kodo/1312/upload)  
[分片上传 v2 版](https://developer.qiniu.com/kodo/6364/multipartupload-interface)  

如果你的能力足够推荐使用分片上传 V2 版,支持断点续传,占用更小.  
~~或者是直接用七牛 kodo 的 SDK.~~

通过 access_key 和 bucket 获取上传 Host方法:  
注意: 这不是七牛官方文档中的内容,但是确实是七牛官方 SDK 在用的 API.

GET `https://api.qiniu.com/v4/query?ak=<access_key>&bucket=<bucket>`

响应中 `up` 下的域名就是上传 Host.

:::

## 获取图片上传token

GET /v1/misc/qiniu-token

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

响应体:

```JSON
{
  "code": 1,
  "data": {
    "token": "123:123" // 图片上传 token
  },
  "msg": "success"
}
```

## 获取音频上传token

GET /v1/misc/qiniu-token-audio

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 否   | 无   |

响应体:

```JSON
{
  "code": 1,
  "data": {
    "token": "123:123" // 音频上传 token
  },
  "msg": "success"
}
```

## 获取文件上传token

GET /v1/misc/qiniu-token2

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

响应体:

```JSON
{
  "code": 1,
  "data": {
    "token": "123:123" // 文件上传 token
  },
  "msg": "success"
}
```

## 获取视频上传token

GET /v1/misc/qiniu-token-video

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

响应体:

```JSON
{
  "code": 1,
  "data": {
    "token": "123:123" // 视频上传 token
  },
  "msg": "success"
}
```

## 获取群文件上传token

GET /v1/misc/qiniu-token-group-disk

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

响应体:

```JSON
{
  "code": 1,
  "data": {
    "token": "123:123" // 群文件上传 token
  },
  "msg": "success"
}
```

## 获取云端设置

GET /v1/misc/setting

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 否   | 无   |

响应体:

```JSON
{
  "code": 1,
  "data": {
    "fileSizeLimitNormal": 40, // 非 vip 用户文件上传大小，单位 MB
    "fileeSizeLimitVip": 1024, // vip 用户文件上传大小 /单位 MB
    "imageSizeLimitNormal": 40, // 非 vip 用户图片上传大小，单位 MB
    "imageSizeLimitVip": 50, // vip 用户图片上传大小，单位 MB
    "videoSizeLimitNormal": 40, // 非 vip 用户视频上传大小，单位 MB
    "videoSizeLimitVip": 200 // vip 用户视频上传大小，单位 MB
  },
  "msg": "success"
}
```

## 获取灰色状态

GET /v1/misc/gray-status

响应体:

```JSON
{
  "code": 1,
  "data": {
    "status": 0 // 0-不为灰色状态，1-灰色状态，处于灰色状态下云湖窗口将加上一层灰色滤镜
  },
  "msg": "success"
}
```

## 获取自动更新最新版本

GET /v1/misc/auto-update

URL 参数:

```TEXT
platform=windows // 目标平台标识符: windows，android，macos，ios
userId=123 // 获取更新的用户 ID
```

响应体:

```XML
<rss version="2.0" xmlns:sparkle="http://www.andymatuschak.org/xml-namespaces/sparkle">
  <channel>
    <title>云湖社交</title>
    <description>云湖社交更新中</description>
    <item>
      <enclosure url="" sparkle:dsaSignature="" sparkle:version="+0" sparkle:os="windows" length="0" type="application/octet-stream"></enclosure>
// url属性为更新安装包网址，参数 platform 为 macos，ios 是此值可能为空
// version 属性为版本号
    </item>
  </channel>
</rss>
```
