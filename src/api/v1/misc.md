---
title: misc
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.  

## 获取功能路由

GET /v1/misc/configure-distribution

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

响应体:  

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "audioUrl": "https://chat-audio1.jwznb.com/", // 音频路由
    "fileUrl": "https://chat-file.jwznb.com/", // 文件路由
    "imageUrl": "https://chat-img.jwznb.com/", // 图片路由
    "serverUrl": "http://chat.jwznb.com:8888/", // 未知
    "shareUrl": "https://yhfx.jwznb.com/", // 分享链接路由
    "videoUrl": "https://chat-video1.jwznb.com/", // 视频路由
    "websocketUrl": "wss://chat-ws-go.jwzhd.com/ws" // ws路由
  },
  "msg": "success" // 返回消息
}
```

## 获取图片上传token

GET /v1/misc/qiniu-token

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

响应体:  

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "token": "123:123" // 图片上传token
  },
  "msg": "success" // 返回消息
}
```

## 获取音频上传token

GET /v1/misc/qiniu-token-audio

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|否|无|

响应体:  

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "token": "123:123" // 音频上传token
  },
  "msg": "success" // 返回消息
}
```

## 获取文件上传token

GET /v1/misc/qiniu-token2

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

响应体:  

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "token": "123:123" // 文件上传token
  },
  "msg": "success" // 返回消息
}
```

## 获取视频上传token

GET /v1/misc/qiniu-token-video

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

响应体:  

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "token": "123:123" // 视频上传token
  },
  "msg": "success" // 返回消息
}
```

## 获取群文件上传token

GET /v1/misc/qiniu-token-group-disk

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

响应体:  

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "token": "123:123" // 群文件上传token
  },
  "msg": "success" // 返回消息
}
```

## 获取云端设置

GET /v1/misc/setting

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|否|无|

响应体:  

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "fileSizeLimitNormal": 40, // 非vip用户文件上传大小，单位MB
    "fileeSizeLimitVip": 1024, // VIP用户文件上传大小 /单位MB
    "imageSizeLimitNormal": 40, // 非vip用户图片上传大小，单位MB
    "imageSizeLimitVip": 50, // vip用户图片上传大小，单位MB
    "videoSizeLimitNormal": 40, // 非vip用户视频上传大小，单位MB
    "videoSizeLimitVip": 200 // vip用户视频上传大小，单位MB
  },
  "msg": "success" // 返回消息
}
```

## 获取灰色状态

GET /v1/misc/gray-status

响应体:  

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "status": 0 // 0-不为灰色状态，1-灰色状态，处于灰色状态下云湖窗口将加上一层灰色滤镜
  },
  "msg": "success" // 返回消息
}
```

## 获取自动更新最新版本

GET /v1/misc/auto-update

URL 参数:  

```TEXT
platform=windows // 目标平台标识符，windows，android，macos，ios
userId=123 // 获取更新的用户ID
```

响应体:  

```XML
<rss version="2.0" xmlns:sparkle="http://www.andymatuschak.org/xml-namespaces/sparkle">
  <channel>
    <title>云湖社交</title>
    <description>云湖社交更新中</description>
    <item>
      <enclosure url="" sparkle:dsaSignature="" sparkle:version="+0" sparkle:os="windows" length="0" type="application/octet-stream"></enclosure>
// url属性为更新安装包网址，参数platform为macos，ios是此值可能为空
// version属性为版本号
    </item>
  </channel>
</rss>
```
