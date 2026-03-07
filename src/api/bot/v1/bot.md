---
title: bot
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.

## 机器人发送信息

POST /open-apis/v1/bot/send?token={机器人token}

请求体：

```JSONC
{
  "recvId": "123", // 目标对象ID
  "recvType": "user", // 目标对象类别，user-用户，group-群聊
  "contentType": "text", // 信息类别，text-文本信息，image-图片信息，video-视频信息，file-文件信息，markdown-Markdown信息，html-HTML信息
  "content": {
    "text": "测试消息文本", // 消息文本
    "at":"123,123,123", // @用户ID，使用","符号分割
    "imageKey": "123123123.jpg", // 图片Key
    "fileKey": "123123123.txt", // 文件key
    "videoKey": "123123123.mp4", // 视频key
    "buttons": [
      [
        {
          "text": "测试跳转网站",
          "actionType": 1, // 按钮类别，1-复制按钮，2-跳转按钮
          "url": "https://www.yhchat.com/"
        },
        {
          "text": "测试复制文本",
          "actionType": 2, // 按钮类别，1-复制按钮，2-跳转按钮
          "value": "测试被复制文本" // 被复制的文本
        }
      ]
    ]
  },
  "parentId":"123123123123123123123", // 引用信息ID
}
```

响应头：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "messageInfo": {
      "msgId": "123123123123123123123", // 信息ID
      "recvId": "123", // 目标对象ID
      "recvType": "user" // 目标对象类别，user-用户，group-群聊
    }
  },
  "msg": "success" // 返回消息
}
```

## 机器人批量发送信息

POST /open-apis/v1/bot/batch_send?token={机器人token}

请求体：

```JSONC
{
  "recvIds": ["123","123"], // 目标对象ID数组，支持多个对象，相同对象ID只发送一次
  "recvType": "user", // 目标对象类别，user-用户，group-群聊
  "contentType": "text", // 信息类别，text-文本信息，image-图片信息，video-视频信息，file-文件信息，markdown-Markdown信息，html-HTML信息
  "content": {
    "text": "测试消息文本", // 消息文本
    "at":"123,123,123", // @用户ID，使用","符号分割
    "imageKey": "123123123.jpg", // 图片Key
    "fileKey": "123123123.txt", // 文件key
    "videoKey": "123123123.mp4", // 视频key
    "buttons": [
      [
        {
          "text": "测试跳转网站",
          "actionType": 1, // 按钮类别，1-复制按钮，2-跳转按钮
          "url": "https://www.yhchat.com/"
        },
        {
          "text": "测试复制文本",
          "actionType": 2, // 按钮类别，1-复制按钮，2-跳转按钮
          "value": "测试被复制文本" // 被复制的文本
        }
      ]
    ]
  },
  "parentId":"123123123123123123123", // 引用信息ID
}
```

响应头：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "successCount": 1, // 成功发送数量
    "successList": [
      {
        "msgId": "123123123123123123123", // 信息ID
        "recvId": "123", // 目标对象ID
        "recvType": "user" // 目标对象类别，user-用户，group-群聊
      }
      // ...
    ]
  },
  "msg": "success" // 返回消息
}
```

## 机器人流式发送信息

POST /open-apis/v1/bot/send-stream?token={机器人token}&recvId={对象ID}&recvType={目标对象类别，user-用户，group-群聊}&contentType={信息类别，text-文本信息，markdown-Markdown信息}

请求头:

| 名称  | 数值 | 必须 | 备注 |
| ----- | ---- | ---- |
| Transfer-Encoding | chunked | 是 | 使用分块传输编码 |

请求体：

{data-binary/二进制文本数据，此处直接传入文本}


响应头：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "messageInfo": {
    "msgId": "123123123123123123123", // 信息ID
    "recvId": "123", // 目标对象
    "recvType": "user" // 目标对象类别，user-用户，group-群聊
   }
  },
  "msg": "success" // 返回消息
}
```

代码示例：
```Golang
    // 创建请求
    req, err := http.NewRequest("POST", "https://chat-go.jwzhd.com/open-apis/v1/bot/send-stream?token=xxxx&recvId=123&recvType=user&contentType=text", nil)
    if err != nil {
        fmt.Println("Error creating request:", err)
        return
    }

    // 创建一个管道，用于流式传输数据
    pr, pw := io.Pipe()

    // 启动一个 goroutine 来写入数据
    go func() {
        defer pw.Close()
        for i := 0; i < 15; i++ {
            data := fmt.Sprintf("Message %d", i)
            pw.Write([]byte(data))
            time.Sleep(1 * time.Second) // 模拟延迟
        }
    }()

    // 将管道的读取器作为请求的主体
    req.Body = pr

    // 发送请求
    resp, err := client.Do(req)
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()

    // 读取响应
    responseBody, err := io.ReadAll(resp.Body)
    if err != nil {
        fmt.Println("Error reading response:", err)
        return
    }
    fmt.Println("Response:", string(responseBody))
```

## 机器人编辑信息

POST /open-apis/v1/bot/edit?token={机器人token}

请求体：

```JSONC
{
  "msgId": "123123123123123", // 目标信息ID
  "recvId": "123", // 目标对象ID
  "recvType": "user", // 目标对象类别，user-用户，group-群聊
  "contentType": "text", // 信息类别，text-文本信息，image-图片信息，video-视频信息，file-文件信息，markdown-Markdown信息，html-HTML信息
  "content": {
    "text": "测试消息文本" // 消息文本
  }
}
```

响应头：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "successCount": 1 // 成功编辑数量
  },
  "msg": "success" // 返回消息
}
```

## 机器人撤回信息

POST /open-apis/v1/bot/recall?token={机器人token}

请求体：

```JSONC
{
  "msgId": "123123123123123", // 目标信息ID
  "chatId": "123", // 目标对象ID
  "chatType": "user" // 目标对象类别，user-用户，group-群聊
}
```

响应头：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 机器人获取信息列表

POST /open-apis/v1/bot/messages?token={机器人token}&chat-id={目标信息ID}&chat-type={目标对象类别，user-用户，group-群聊}&message-id={消息ID，不填时可以配合before参数返回最近的N条消息}&after={指定消息ID后N条，默认0条}&before={指定消息ID前N条，默认0条}

响应头：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "list": [
      {
        "msgId": "123123123123", // 信息ID
        "parentId": "123123123123", // 引用ID
        "senderId": "123", // 发送对象ID
        "senderType": "user", // 发送对象类别，user-bot-机器人
        "senderNickname": "测试发送者名称", // 发送对象名称
        "contentType": "text", // 信息类别，text-文本信息，image-图片信息，video-视频信息，file-文件信息，markdown-Markdown信息，html-HTML信息，expression-表情信息，audio-语音信息
        "content": {
          "text": "测试文本", // 信息文本
          "etag": "123123123123123123123123", // 媒体etag，图片/视频/语音信息都会有此项
          "imageHeight": 123, // 图片高度
          "imageName": "123.jpg", // 图片名称，大部分情况下可以当作图片key使用
          "imageWidth": 123, // 图片宽度
          "videoDuration": 123, // 视频时长
          "videoUrl": "123.mp4", // 图片网址，大部分情况下可以当作视频key使用
          "audioDuration": 123, // 语音时长
          "audioUrl": "123.mps", // 语音网址，大部分情况下可以当作语音key使用
          "buttons": [
            [
              {
                "text": "测试跳转网站",
                "actionType": 1, // 按钮类别，1-复制按钮，2-跳转按钮
                "url": "https://www.yhchat.com/"
              },
              {
                "text": "测试复制文本",
                "actionType": 2, // 按钮类别，1-复制按钮，2-跳转按钮
                "value": "测试被复制文本" // 被复制的文本
              }
            ]
          ]
        },
        "sendTime": 123123123123, // 信息发送时间戳
        "commandName": "", // 信息使用的指令名称
        "commandId": 0 // 信息使用的指令ID
      }
      // ...
    ],
    "total": 1 // 返回信息数量
  },
  "msg": "success" // 返回消息
}
```