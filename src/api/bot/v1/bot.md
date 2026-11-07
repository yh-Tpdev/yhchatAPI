---
title: bot
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.  
`GET` 接口的参数均放在 URL 查询字符串中，无需请求正文。

## 获取机器人信息

仅返回当前 token 对应的机器人，无需传入 botId。停用或封禁状态不影响此只读查询；响应不包含 token、机器人配置或创建者信息。

```http
GET /open-apis/v1/bot/info?token={机器人token}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success", // 返回消息
  "data": {
    "botId": "987654", // 机器人ID
    "nickname": "示例机器人", // 机器人名称
    "avatarUrl": "https://example.com/bot.png", // 头像URL
    "introduction": "示例机器人简介", // 简介
    "isStop": 0, // 停用状态，0-正常，1-停用
    "isBanned": false, // 当前是否处于封禁状态
    "banEndTime": 0, // 封禁结束的Unix秒时间戳，永久封禁为0，未封禁或已到期也为0，需结合isBanned判断
    "banReason": "" // 当前封禁原因，未封禁或已到期为空字符串
  }
}
```

## 机器人发送信息

```http
POST /open-apis/v1/bot/send?token={机器人token}
```

请求体：

```JSONC
{
  "recvId": "123", // 目标对象ID
  "recvType": "user", // 目标对象类别，user-用户，group-群聊
  "contentType": "text", // 信息类别，text-文本信息，image-图片信息，video-视频信息，file-文件信息，markdown-Markdown信息，html-HTML信息，post-文章
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

响应体：

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

```http
POST /open-apis/v1/bot/batch_send?token={机器人token}
```

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

响应体：

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

```http
POST /open-apis/v1/bot/send-stream?token={机器人token}&recvId={对象ID}&recvType={目标对象类别，user-用户，group-群聊}&contentType={信息类别，text-文本信息，markdown-Markdown信息}
```

请求头:

| 名称 | 数值 | 必须 | 备注 |
| ---- | ---- | ---- | ---- |
| Transfer-Encoding | chunked | 是 | 使用分块传输编码 |

请求体：

```text
{data-binary/二进制文本数据，此处直接传入文本}
```

响应体：

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

```go
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

```http
POST /open-apis/v1/bot/edit?token={机器人token}
```

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

响应体：

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

```http
POST /open-apis/v1/bot/recall?token={机器人token}
```

请求体：

```JSONC
{
  "msgId": "123123123123123", // 目标信息ID
  "chatId": "123", // 目标对象ID
  "chatType": "user" // 目标对象类别，user-用户，group-群聊
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 机器人获取信息列表

```http
POST /open-apis/v1/bot/messages?token={机器人token}&chat-id={目标信息ID}&chat-type={目标对象类别，user-用户，group-群聊}&message-id={消息ID，不填时可以配合before参数返回最近的N条消息}&after={指定消息ID后N条，默认0条}&before={指定消息ID前N条，默认0条}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "list": [
      {
        "msgId": "123123123123", // 信息ID
        "parentId": "123123123123", // 引用ID
        "senderId": "123", // 发送对象ID
        "senderType": "user", // 发送对象类别，user-用户，bot-机器人
        "senderNickname": "测试发送者名称", // 发送对象名称
        "contentType": "text", // 信息类别，text-文本信息，image-图片信息，video-视频信息，file-文件信息，markdown-Markdown信息，html-HTML信息，expression-表情信息，audio-语音信息
        "content": {
          "text": "测试文本", // 信息文本
          "formJson": { // 表单消息
            "bodnzx": {
              "id": "bodnzx", // 自定义输入项每个项的id，外层键名与内层id字段的值保持一致（键名与id值同步）
              "label": "Radio 单选框标签", // 表单label
              "selectIndex": 1, // 如果选中为1，未选中为-1
              "selectValue": "分割", // 选中时的值
              "type": "radio" // 表单类型
            },
            "kfumpw": {
              "id": "kfumpw", // 自定义输入项每个项的id
              "label": "Input 输入框标签", // 表单label
              "type": "input", // 表单类型
              "value": "Input 输入框默认内容"
            },
            "pqnhhd": {
              "id": "pqnhhd", // 自定义输入项每个项的id
              "label": "Select 选择器标签", // 表单label
              "selectIndex": 0, // 如果选中为1，未选中为-1
              "selectValue": "Select 选择器选项", // 选中时的值
              "type": "select" // 表单类型
            },
            "rpzjmd": {
              "id": "rpzjmd", // 自定义输入项每个项的id
              "label": "Switch 开关标签", // 表单label
              "type": "switch", // 表单类型
              "value": false // 选中时的值
            },
            "uqojdl": {
              "id": "uqojdl", // 自定义输入项每个项的id
              "label": "textarea 多行输入框标签", // 表单label
              "type": "textarea", // 表单类型
              "value": "" // 选中时的值
            }
          },
          "etag": "123123123123123123123123", // 媒体etag，图片/视频/语音信息都会有此项
          "imageHeight": 123, // 图片高度
          "imageName": "123.jpg", // 图片名称，大部分情况下可以当作图片key使用
          "imageWidth": 123, // 图片宽度
          "videoDuration": 123, // 视频时长
          "videoUrl": "123.mp4", // 图片网址，大部分情况下可以当作视频key使用
          "audioDuration": 123, // 语音时长
          "audioUrl": "123.mps", // 语音网址，大部分情况下可以当作语音key使用
          "at": [ // at的ID列表，可带多个
            "1234567",
            "9876543"
          ],
          "parent": "我是1名字 : 12345", // 引用消息内容
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

## 机器人所在群列表

仅包含当前机器人仍在其中、且未解散的群，已退出或被移除的群不返回。按群内部 ID 倒序排列，`total` 为全部符合条件的群数量；无结果或页码超出结果范围时 `list` 为空数组。当前不支持按群名称搜索。停用或封禁状态不影响此只读查询；列表可能包含封禁中的群，可通过群信息查询其状态。

```http
GET /open-apis/v1/bot/groups?token={机器人token}&page={页码，默认1，范围1–1000000}&size={每页条数，默认20，范围1–100}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success", // 返回消息
  "data": {
    "list": [
      {
        "groupId": "123456", // 群ID，可用于群信息及消息接口
        "name": "示例群", // 群名称
        "avatarUrl": "https://example.com/group.png" // 群头像URL
      }
      // ...
    ],
    "total": 1, // 符合条件的群总数
    "page": 1, // 当前页码
    "size": 20 // 每页条数
  }
}
```

## 获取群信息

机器人必须仍在目标群中，且群未解散；查询本身不要求机器人具有群管理权限。`permissions` 表示当前机器人在该群获得的权限，0 为未授权，1 为已授权，实际写操作仍会执行各自的权限及业务校验。停用或封禁状态不影响此只读查询。

```http
GET /open-apis/v1/group/info?token={机器人token}&groupId={群ID}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success", // 返回消息
  "data": {
    "groupId": "123456", // 群ID
    "name": "示例群", // 群名称
    "avatarUrl": "https://example.com/group.png", // 群头像URL
    "introduction": "示例群简介", // 群简介
    "headcount": 20, // 群人数
    "msgTypeLimit": "1,2", // 逗号分隔的消息类型数字ID，如1,2；空字符串表示无限制。与设置接口的英文类型参数格式不同
    "isBanned": false, // 当前是否处于封禁状态
    "banEndTime": 0, // 封禁结束的Unix秒时间戳，永久封禁为0，未封禁或已到期也为0，需结合isBanned判断
    "banReason": "", // 当前封禁原因，未封禁或已到期为空字符串
    "permissions": { // 当前机器人在该群的管理权限
      "allowEditGroupInfo": 1, // 是否允许修改群信息，0/1
      "allowGagMember": 1, // 是否允许禁言成员，0/1
      "allowRemoveMember": 0, // 是否允许移除成员，0/1
      "allowGroupTagManage": 1, // 是否允许管理群标签，0/1
      "allowGetGroupMembers": 0 // 是否允许获取群成员列表，0/1，默认0
    }
  }
}
```

## 获取群成员列表

群主或管理员须在群内机器人权限设置中开启“允许获取群成员列表”，默认关闭；仅有禁言、踢人等其他权限不能读取成员列表。开启授权后，机器人可以读取完整成员名单，包括开启“隐藏群成员”的群；关闭授权后后续请求会被拒绝，机器人退出后重新加入需要重新授权。机器人必须仍在目标群中且群未解散。仅返回仍在群中的未删除用户，按成员等级及群成员记录 ID 倒序，`list` 与 `total` 使用相同的成员过滤条件。接口沿用现有开放接口限流，触发时返回 1007。不返回手机号、邮箱、密码或其他个人资料。

```http
GET /open-apis/v1/group/members?token={机器人token}&groupId={群ID}&page={页码，默认1，范围1–1000000}&size={每页数量，默认20，范围1–100}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success", // 返回消息
  "data": {
    "list": [
      {
        "userId": "654321", // 用户ID
        "nickname": "示例用户", // 账号昵称
        "groupNickname": "群内昵称", // 群昵称，未设置时为空字符串，展示时可优先使用群昵称
        "avatarUrl": "https://example.com/avatar.png", // 头像URL
        "userLevel": "member" // 群成员角色，owner-群主，admin-管理员，member-普通成员
      }
      // ...
    ],
    "total": 1, // 符合条件的成员总数
    "page": 1, // 当前页码
    "size": 20 // 每页数量
  }
}
```

MCP 对应只读工具 `list_group_members`，权限限制与 REST 接口一致。

```json
{"name":"list_group_members","arguments":{"groupId":"123456","page":1,"size":20}}
```

凭证使用 MCP 的 Authorization: Bearer 请求头，不放在工具参数中。

## 通用错误码

业务结果请检查响应中的 `code`，这些业务错误仍返回 HTTP 200。

| 错误码 | 说明 |
| ---- | ---- |
| 1 | 成功 |
| 1002 | token 缺失或请求参数有误，含 groupId 缺失、分页参数越界等情况 |
| 1003 | token 无效或对应机器人已删除；查询群相关接口时也表示机器人未加入该群、群不存在、群已解散或未获得成员列表权限 |
| 1007 | 请求过于频繁，请降低频次 |
| -1 | 数据库查询失败，请稍后重试 |
