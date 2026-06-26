---
url: /api/v1/msg.md
---
未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`\
没写请求/响应项目表示不需要相关参数.

## 发送信息

POST /v1/msg/send-message

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```protobuf
<!-- @include: @src/full.proto#SendMsgRequest -->
```

:::: details 发送消息指引

### 任何消息

下面说的各种消息是需要额外注意/填写部分,填写内容建议看 proto 的注释.

必填:

* `msg_id` # 可以使用 `uuid.uuid4.hex()` 生成一个.
* `chat_id`
* `chat_type`
* `content_type` # 按照实际填写

可选:

* `msg_content.mentioned_id`
* `msg_content.buttons` # 部分消息填写此项会非常生草
* `quote_msg_id` # 服务端会自动忽略无效的 `msg_id`,部分消息不支持
* `msg_content.quote_msg_text` # 可以自定义,服务端不校验,格式: `用户名: 消息内容`
* `msg_content.quote_image_name` # 填写图片 URL(例如说 test.jpg)
* `msg_content.quote_video_url` # 填写引用视频 URL,示例同上
* `command_id`

::: tabs
@tab:active 文本类消息

此处文本类消息指 `普通文本`,`html 消息`,`markdown 消息`.
必填:

* `msg_content.text`

@tab 图片消息

必填:

* `msg_content.image_url`

@tab 文件消息

必填:

* `msg_content.file_key` # 直接填文件 URL,例如 123.bin
* `msg_content.file_size` # 文件大小,服务端不校验,建议如实填写

@tab 视频消息

必填:

* `msg_content.video` # 直接填视频 URL,例如 123.mp4

@tab 语音消息

必填:

* `msg_content.audio` # 语音文件 URL(例如说 test.m4a)
* `msg_content.audio_time` # 语音时长,服务端不校验,建议按照实际填写

注: 服务端会忽略引用消息相关的参数.

@tab 个人收藏表情

必填:

* `msg_content.image`
* `msg_content.expression_id` # 注意 proto 中此项为 str 类型,服务端不校验,建议如实填写否则会导致无法添加/添加表情和图片不一致等问题

@tab 表情包表情

必填:

* `msg_content.image`
* `msg_content.sticker_item_id` # 表情 ID,服务端不校验,建议如实填写,否则会出现不一致/无法添加等问题
* `msg_content.sticker_pack_id` # 表情包 ID,服务端不校验,建议如实填写否则会出现不一致/无法预览等问题

@tab 文章消息

建议使用 community 的转发文章 API 而不是手动填写,手动填写容易出问题.

@tab 表单消息

必填:

* `msg_content.form` # 具体内容自己抓包看吧

## 表单消息发送小指引

使用 [v1/group/bot-list](group.html#获取群机器人列表) 获取机器人表单
找到一个你想要调用的机器人，提取其字段3（Instruction\_data）一个数据组内的字段10，这是发送表单消息需要的，示例：

```原Json已压缩成行，示例内是已经格式化后的
[
  {
    "key": 0,
    "type": "radio",
    "title": "Radio 单选框",
    "propsValue": {
      "label": "Radio 单选框标签",
      "options": "Radio 单选框选项，全部指令类型的选项使用#分割"
    },
    "props": [
      {
        "type": "label",
        "name": "标签",
        "value": ""
      },
      {
        "type": "options",
        "name": "选项",
        "placeholder": "用#分割，如：北京#上海#天津",
        "value": ""
      }
    ],
    "id": "bodnzx"
  },
  {
    "key": 1,
    "type": "input",
    "title": "Input 输入框",
    "propsValue": {
      "label": "Input 输入框标签",
      "defaultValue": "Input 输入框默认内容",
      "placeholder": "Input 输入框占位文本"
    },
    "props": [
      {
        "type": "label",
        "name": "标签",
        "value": ""
      },
      {
        "type": "defaultValue",
        "name": "默认内容",
        "value": ""
      },
      {
        "type": "placeholder",
        "name": "占位文本",
        "value": ""
      }
    ],
    "id": "kfumpw"
  },
  {
    "key": 2,
    "type": "switch",
    "title": "Switch 开关",
    "propsValue": {
      "label": "Switch 开关标签",
      "defaultValue": "Switch 开关默认状态，0-关闭，1-开启"
    },
    "props": [
      {
        "type": "label",
        "name": "标签",
        "value": ""
      },
      {
        "type": "defaultValue",
        "name": "默认状态",
        "placeholder": "1：默认打开，0：默认关闭",
        "value": ""
      }
    ],
    "id": "rpzjmd"
  },
  {
    "key": 4,
    "type": "textarea",
    "title": "textarea 多行输入框",
    "propsValue": {
      "label": "textarea 多行输入框标签",
      "placeholder": "textarea 多行输入框占位文本"
    },
    "props": [
      {
        "type": "label",
        "name": "标签",
        "value": ""
      },
      {
        "type": "placeholder",
        "name": "占位文本",
        "value": ""
      }
    ],
    "id": "uqojdl"
  },
  {
    "key": 5,
    "type": "select",
    "title": "Select 选择器",
    "propsValue": {
      "label": "Select 选择器标签",
      "options": "Select 选择器选项"
    },
    "props": [
      {
        "type": "label",
        "name": "标签",
        "value": ""
      },
      {
        "type": "options",
        "name": "选项",
        "placeholder": "用#分割，如：北京#上海#天津",
        "value": ""
      }
    ],
    "id": "pqnhhd"
  }
]
```

先来看看第一个，这是Radio单选框，其中有两个选项（options），分别是 "Radio 单选框选项，全部指令类型的选项使用" 和 "分割"，选择其中一种，就用 "分割" 作为表单请求

然后取里面的id（bodnzx），作为代表这一项设置选项（Radio单选框）的id

:::

## 下面是请求表单值内部分属性的解析

::: warning

注意，JSON对象（一个对象把整个属性包起来的，如示例内的bodnzx，不是id内的），就叫JSON对象

:::

::: details type详情

云湖的type分为 "radio" "input" "switch" "textarea" "select" 这几项，

其中 "radio" "select" 是需要 "selectIndex" "selectValue" 这两个键的，不需要value

当使用 "switch"（开关）时，对应value值就为 `true` 或 `false`

:::

::: details label详情

对应项的名称，不填可能会造成一些不良影响

:::

::: details selectIndex详情

这个根据你选择的是第几项，就填第几项-1（第一项对应0，第二项对应1，以此类推）

:::

::: details value详情

这个就是刚才提到的options，在options自行选一个项填入

当使用 "switch"（开关）时，对应value值就为 `true` 或 `false`

:::

::: details selectValue详情

和 value 相同

:::

### 下面是示例完整请求（需压缩成行）：

```
{
  "bodnzx": {
    "id": "bodnzx",
    "type": "radio",
    "label": "Radio 单选框标签",
    "selectIndex": 1,
    "selectValue": "分割"
  },
  "kfumpw": {
    "id": "kfumpw",
    "type": "input",
    "label": "Input 输入框标签",
    "value": "fdsgg默认内容hhhhhh"
  },
  "rpzjmd": {
    "id": "rpzjmd",
    "type": "switch",
    "label": "Switch 开关标签",
    "value": true
  },
  "uqojdl": {
    "id": "uqojdl",
    "type": "textarea",
    "label": "textarea 多行输入框标签",
    "value": "extrasdad"
  },
  "pqnhhd": {
    "id": "pqnhhd",
    "type": "select",
    "label": "Select 选择器标签",
    "selectIndex": 0,
    "selectValue": "Select 选择器选项"
  }
}
```

:::

::::

响应体:

```protobuf
<!-- @include: @src/full.proto#StatusResponse -->
```

## 编辑消息

POST /v1/msg/edit-message

::: warning
云湖会限制一些编辑,例如说你不能把文本消息编辑为语音消息等.\
:::

!!其实云湖的编辑消息和发送消息的 proto 可以共用,只需要 msg\_id 改成要编辑的消息即可.!!

请求头:

| 名称  | 必须 | 备注              |
| ----- | ---- | ----------------- |
| token | 是   | 消息发送者的Token |

请求体:

```protobuf
// 懒得改名了,就这样吧
<!-- @include: @src/full.proto#SendMsgRequest -->
```

响应体:

```protobuf
<!-- @include: @src/full.proto#StatusResponse -->
```

## 按消息序列列出消息（不包含指定消息）

POST /v1/msg/list-message-by-seq

::: warning
由于没有所有消息情况,因此此处响应相关内容(尤其是指令等测试群不常见部分)可能会有缺失/错误,见谅.同时建议参照 proto 文件理解相关内容.也欢迎来 PR 补充.\
:::

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```protobuf
// 通过消息序列列出消息
<!-- @include: @src/full.proto#ListMsgBySeqRequest-->
```

响应体:

```protobuf
<!-- @include: @src/full.proto#ListMsgResponse-->
```

## 列出消息

POST /v1/msg/list-message

::: warning
由于没有所有消息情况,因此此处响应相关内容(尤其是指令等测试群不常见部分)可能会有缺失/错误,见谅.同时建议参照 proto 文件理解相关内容.也欢迎来 PR 补充.\
:::

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```protobuf
<!-- @include: @src/full.proto#ListMsgRequest-->
```

响应体:\
列出的是指定消息 ID 前的消息.

```protobuf
<!-- @include: @src/full.proto#ListMsgResponse-->
```

## 按消息ID列出消息（包含消息id指定的消息）

POST /v1/msg/list-message-by-mid-seq

::: warning
由于没有所有消息情况,因此此处响应相关内容(尤其是指令等测试群不常见部分)可能会有缺失/错误,见谅.同时建议参照 proto 文件理解相关内容.也欢迎来 PR 补充.\
:::

::: tip
此接口和 list-message 的区别在于此接口获取到的消息包含请求的消息 ID 的消息内容. 实际获取到的消息数量是请求消息数量+1
:::

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```protobuf
<!-- @include: @src/full.proto#ListMsgByMidSeqRequest-->
```

响应体:

```protobuf
<!-- @include: @src/full.proto#ListMsgResponse-->
```

## 获取信息历史编辑内容

POST /v1/msg/list-message-edit-record

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 空   |

请求体：

```JSON
{
  "msgId": "12312312312312312312312313", // 信息 ID
  "size": 10, // 获取的历史编辑内容数
  "page": 1 // 页面数
}
```

响应体：

```JSON
{
  "code": 1,
  "data": {
    "list": [
      {
        "id": 1018684, // 信息编辑 ID
        "msgId": "123123123123123123123123", // 信息 ID
        "contentType": 1, // 信息类别
        "contentOld": "{\"text\":\"测试原始编辑文本\"}", // 信息文本，转义后 json 数据
        "createTime": 1231231231230, // 信息创建时间戳
        "msgTime": 1231231231230 // 编辑时间戳
      }
      // ...
    ],
    "total": 1 // 历史编辑总数
  },
  "msg": "success"
}
```

## 发送按钮点击事件

POST /v1/msg/button-report

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 空   |

请求体:

```protobuf
<!-- @include: @src/full.proto#ButtonReportRequest-->
```

响应体:

```protobuf
<!-- @include: @src/full.proto#StatusResponse -->
```

## 撤回信息

POST /v1/msg/recall-msg

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 空   |

请求体:

```protobuf
<!-- @include: @src/full.proto#RecallMsg -->
```

响应体:

```protobuf
<!-- @include: @src/full.proto#StatusResponse-->
```

## 批量撤回消息

POST /v1/msg/recall-msg-batch

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 空   |

请求体:

```protobuf
<!-- @include: @src/full.proto#RecallMsg -->
```

响应体:

```protobuf
<!-- @include: @src/full.proto#StatusResponse-->
```

## 文件消息下载记录

POST /v1/msg/file-download-record

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 空   |

请求体:

```JSON
{
  "msgId": "5040d27fc975416680a14e5a1b37ef06", // 文件消息 id
  "downloadPath": "/storage/emulated/0/Download/云湖/恶臭(1).txt" // 下载路径
}
```

响应体：

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 转发消息

POST v1/msg/msg-forward

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 空   |

请求体:

```JSON
{
  "msgId": "e22342a5a1a54f03bc3xxxxxxxxxxxx", // 被转发的消息 msgId
  "chatType": 2, // 被转发消息的会话类型
  "receive": [
    {
      "chatId": "1234567", // 要转发到的会话 id
      "chatType": 1 // 要转发到的会话类型
    }
  ]
}
```

响应体：

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 获取消息列表内的图片

POST v1/msg/pic-list-message-by-mid-seq

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 空   |

请求体：

```protobuf
<!-- @include: @src/full.proto#PicListMsgByMidSeqRequest -->
```

响应体：

```protobuf
<!-- @include: @src/full.proto#ListMsgResponse-->
```

## 删除消息

```http request
POST /v1/msg/delete
```

此处是长按消息-删除请求的 API,不是撤回消息的 API.

请求头：

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSON
{
  "chatId": "123", // 聊天 ID
  "msgId": "123", // 消息 ID
  "chatType": 1 // 聊天类型
}
```

响应体：

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 触发A2UI表单提交信息

```http request
POST /v1/msg/a2ui-form-report
```

请求头：

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSON
{
  "msgId": "123", // 触发事件的信息ID
  "chatType": 3, // 触发对象的来源类别，为A2UI信息原来在哪，例如机器人触发则为3
  "chatId": "123123", // 触发对象的来源ID，为A2UI信息原来在哪，例如机器人ID为123123触发
  "senderId": "123123123123", // 触发提交信息的原始发送者ID
  "actionName": "testA2UIName", // A2UI信息中表单提交设置的name名称
  "sourceComponentId": "testId", // A2UI信息中表单提交设置的id名称
  "formContext": { // 该项为需要提交的数据
    "subLink": "https://..." // 例如提交一个为数组名为subLink值为https://...的数据
  },
  "interactionJson": "{\"version\":\"v0.9\",\"action\":{\"name\":\"testA2UIName\",\"sourceComponentId\":\"testId\",\"timestamp\":\"1234-12-25T16:28:56.403510\",\"context\":{\"subLink\":\"https://...\"},\"surfaceId\":\"testA2UIName\"}}" // 是触发表单提交A2UI信息的一些基础信息，大部分为原始A2UI信息的部分
}
```

响应体：

```JSON
{
  "code": 1,
  "data": {
    "actionName": "testA2UIName", // A2UI信息中表单提交设置的name名称
    "chatId": "123123", // 触发对象的来源ID，为A2UI信息原来在哪，例如机器人ID为123123触发
    "chatType": 3, // 触发对象的来源类别，为A2UI信息原来在哪，例如机器人触发则为3
    "formContext": { // 该项为提交的数据，服务器返回用于确认提交客户端提交的数据
      "subLink": "https://..." // 提交一个为数组名为subLink值为https://...的数据
    },
    "interactionJson": "{\"version\":\"v0.9\",\"action\":{\"name\":\"testA2UIName\",\"sourceComponentId\":\"testId\",\"timestamp\":\"1234-12-25T16:28:56.403510\",\"context\":{\"subLink\":\"https://...\"},\"surfaceId\":\"testA2UIName\"}}" // 是触发表单提交A2UI信息的一些基础信息，大部分为原始A2UI信息的部分
    "msgId": "123", // 触发事件的信息ID
    "senderId": "123123123", // 触发提交信息的原始发送者ID
    "sourceComponentId": "testId", // A2UI信息中表单提交设置的id名称
    "timestamp": 123123123123, // 服务器返回触发该时间的事件
    "uid": "123" // 为触发用户的ID
  },
  "msg": "success"
}
```
