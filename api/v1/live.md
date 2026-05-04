---
url: /api/v1/live.md
---
未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`\
没写请求/响应项目表示不需要相关参数.

## 获取语音频道进入token

POST /v1/live/add

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSONC
{
  "roomId": "123123123123", // 目标语音频道ID
  "chatId": "123" // 目标语言频道所处对象ID
}
```

响应体:

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "joinToken": "123123123123123123", // 语音频道进入token,是 livekit 的 access_token
  },
  "msg": "success" // 返回消息
}
```

## 关闭语音频道

POST /v1/live/close

请求头:

| 名称  | 必须 | 备注                |
| ----- | ---- | ------------------- |
| token | 是   | 语音频道管理员token |

请求体：

```JSONC
{
  "roomId": "123123123123", // 目标语音频道ID
}
```

响应体:

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 挂断语音频道

POST /v1/live/hang\_up

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSONC
{
  "roomId": "123123123123", // 目标语音频道ID
}
```

响应体:

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {},
  "msg": "success" // 返回消息
}
```

## 获取语音频道信息

POST /v1/live/room-info

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSONC
{
  "roomId": "123123123123", // 目标语音频道ID
}
```

响应体:

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "room": {
      "id": 18658,
      "userId": "123", // 房间管理员用户ID
      "roomId": "ef8beba697c84a5f889af45211b449a1", // 房间ID
      "recvIds": "", // 未知
      "chatId": "872440499", // 房间ID所属对象
      "title": "测试频道", // 房间ID标题
      "chatType": 2, // 房间ID所属对象类别
      "status": 0, //房间状态
      "duration": 0, // 未知
      "typ": 2, // 未知
      "createBy": "8264925", // 房间创建用户名称
      "createTime": 1754454550, // 房间创建时间戳
      "updateBy": "8264925", // 房间更新用户名称
      "updateTime": 1754455159 // 房间创建时间戳
    }
  },
  "msg": "success" // 返回消息
}
```

## 编辑语音频道标题

POST /v1/live/title-edit

请求头:

| 名称  | 必须 | 备注                |
| ----- | ---- | ------------------- |
| token | 是   | 语音频道管理员token |

请求体：

```JSONC
{
  "roomId": "123123123123", // 目标语音频道ID
  "title": "测试语音频道名称" //目标语音频道名称
}
```

响应体:

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 获取正在发起的通话

POST /v1/live/get-calling

请求头:

| 名称  | 必须 | 备注                  |
| ----- | ---- | --------------------- |
| token | 是   | 必须是被打的用户token |

响应体:

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "callTime": 12, // 请求呼叫时间
    "chatType": 1, // 发起通话的会话类型
    "message": {
      "msgId": "20902d6a256d436ebfc4a2xxxxxxxxxx", // 发起通话的消息id
      "senderId": "1234567", // 发起通话的用户id
      "senderType": 0, // 未知
      "senderAvatarId": 123456, // 发送者头像id
      "senderNicknameId": 123456, // 发送者名称id
      "contentType": 13, // 发起通话的消息类型
      "content": "" // 语音通话参数
    },
    "senderAvatar": "https://chat-img.jwznb.com/123....jpg", // 发起通话的用户头像Url
    "senderNickname": "1114" // 发起通话的用户名称
  },
  "msg": "success" // 返回消息
}
```

::: details content值示例内容（语音通话参数，未经处理）

```JSON
{\"formJson\":{\"type\":\"offer\",\"sdp\":\"v=0\\r\\no=- 4594442093964212757 2 IN IP4 127.0.0.1\\r\\ns=-\\r\\nt=0 0\\r\\na=group:BUNDLE 0\\r\\na=extmap-allow-mixed\\r\\na=msid-semantic: WMS c86e64f8-1cfd-49f9-ba89-c64c1edf02fc\\r\\nm=audio 9 UDP/TLS/RTP/SAVPF 111 63 9 0 8 13 110 126\\r\\nc=IN IP4 0.0.0.0\\r\\na=rtcp:9 IN IP4 0.0.0.0\\r\\na=ice-ufrag:2ubM\\r\\na=ice-pwd:TZ8aa+rVZqfUlbQMj5hPRtaS\\r\\na=ice-options:trickle renomination\\r\\na=fingerprint:sha-256 E8:A6:6A:DE:D1:51:EE:30:CB:C6:A9:4F:D1:C7:54:10:3A:2A:80:D9:0A:9D:F0:27:A7:BA:E2:D8:FC:DF:57:7F\\r\\na=setup:actpass\\r\\na=mid:0\\r\\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\\r\\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\\r\\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\\r\\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\\r\\na=sendrecv\\r\\na=msid:c86e64f8-1cfd-49f9-ba89-c64c1edf02fc 5f7cf8af-4691-4645-9a92-5449530064c2\\r\\na=rtcp-mux\\r\\na=rtcp-rsize\\r\\na=rtpmap:111 opus/48000/2\\r\\na=rtcp-fb:111 transport-cc\\r\\na=fmtp:111 minptime=10;useinbandfec=1\\r\\na=rtpmap:63 red/48000/2\\r\\na=fmtp:63 111/111\\r\\na=rtpmap:9 G722/8000\\r\\na=rtpmap:0 PCMU/8000\\r\\na=rtpmap:8 PCMA/8000\\r\\na=rtpmap:13 CN/8000\\r\\na=rtpmap:110 telephone-event/48000\\r\\na=rtpmap:126 telephone-event/8000\\r\\na=ssrc:1148727064 cname:SVr9elEOhHAAZrJH\\r\\na=ssrc:1148727064 msid:c86e64f8-1cfd-49f9-ba89-c64c1edf02fc 5f7cf8af-4691-4645-9a92-5449530064c2\\r\\n\"},\"liveInviteUserIds\":[\"8516939\"],\"liveType\":\"语音通话\",\"liveStatusText\":\"等待接通\"}
```

:::
