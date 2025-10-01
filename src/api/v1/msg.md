---
title: msg
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.  

## 发送信息

POST /v1/msg/send-message

请求头:  

|名称|必须|备注|
|---|---|---|
|token|是|无|

请求体:  
建议参考proto文件中的内容.  

```ProtoBuf
msg_id: "信息ID"
chat_id: "欲发送到的信息对象"
chat_type: 1 // 欲发送到的信息对象的类别，1-用户，2-群聊，3-机器人
data {
  text: "信息文本"
  quote_msg_text: "引用信息文本"
  image_key: "欲发送图片key"
  msg_text1: "信息文本"
  msg_text2: "信息文本"
  form: "" // 表单消息
  temp_text2: ""
  temp_text3: ""
  temp_code1: 0
}
content_type: 1
temp_code: 0
quote_msg_id: "引用信息ID"
temp_text: ""
```

::: details ProtoBuf数据结构

```proto
// 发送消息
message send_message_send {
    string msg_id = 2; // 信息ID
    string chat_id = 3; // 欲发送到的信息对象
    uint64 chat_type = 4; // 欲发送到的信息对象的类别，1-用户，2-群聊，3-机器人
    Data data = 5;
    message Data {
        string text = 1; // 信息文本
        string buttons = 2; // 按钮
        string file_name = 4; // 欲发送文件名称
        string file_key = 5; // 欲发送文件key
        repeated string mentioned_id = 6; // @用户ID，可重复多个本属性
        string form = 7; // 表单消息
        string quote_msg_text = 8; // 引用信息文本
        string image = 9; // 欲发送图片key/url(expression/abcdef.jpg)
        string post_id = 10; // 文章ID
        string post_title = 11; // 文章标题
        string post_content = 12; // 文章内容
        string post_type = 13; // 文章类型:1-文本,2-Markdown
        string quote_image_url = 16; // 引用图片直链,https://...
        string quote_image_name = 17; // 引用图片文件名称
        uint64 file_size = 18; // 欲发送文件大小
        string video = 19; // 欲发送视频key/url(123.mp4)
        string audio = 21; // 语音key/url(123.m4a)
        uint64 audio_time = 22; // 语音秒数
        string quote_video_url = 23; // 引用视频直链,https://...
        uint64 quote_video_time = 24; // 引用视频时长
        uint64 sticker_item_id = 25; // 表情ID
        uint64 sticker_pack_id = 26; // 表情包ID
        string room_name = 29; // 语音房间发送显示信息的文本
    }
    uint64 content_type = 6; // 信息类别，1-文本，2-图片，3-markdown，4-文件，5-表单，6-文章，7-表情，8-html，11-语音，13-语音通话
    uint64 command_id = 7; // 所使用命令ID
    string quote_msg_id = 8; // 引用信息ID
    Media media = 9;
    message Media { // 在media发送对象为，图片/音频/视频
        string file_key = 1; // 发送对象key(就是上传后七牛对象存储给你返回的file_key)
        string file_hash = 2; // 发送对象上传返回哈希
        string file_type = 3; // 发送对象类别，image/jpeg-图片，video/mp4-音频
        uint64 image_height = 5; // 图片高度
        uint64 image_width = 6; // 图片宽度
        uint64 file_size = 7; // 发送对象大小
        string file_key2 = 8; // 发送对象key,和1一样,据说不写会报错
        string file_suffix = 9; // 发送对象后缀名
    }
}
```

:::

::: warning
在发送单种类别的信息时，其余类别的信息属性不存在，例如语音信息不存在引用信息.
:::

响应体:  

```ProtoBuf
status {
  number: 123456
  code: 1
  msg: "success"
}
```

::: details ProtoBuf数据结构

```proto
// 信息发送是否成功状态信息
message send_message {
    Status status = 1; // 状态码
}
```

:::

## 编辑消息

POST /v1/msg/edit-message

::: warning
云湖会限制一些编辑,例如说你不能把文本消息编辑为语音消息等.  
:::

!!其实云湖的编辑消息和发送消息的 proto 可以共用,只需要 msg_id 改成要编辑的消息即可.!!

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|消息发送者的Token|

请求体:  

```ProtoBuf
msg_id: "123456" // 要编辑的消息ID
chat_id: "big" // 消息所属聊天对象的ID
chat_type: 2 // 消息所属聊天对象的类型,1-用户 2-群组 3-机器人
content {
  text: "123" // 文本
  // 剩下的建议看proto文件
}
content_type: 1 // 要编辑为的消息类型,1-文本 3-markdown 8-html
quote_msg_id: "11451419180" // 引用的消息ID
```

::: details ProtoBuf数据结构

```proto
// 编辑消息
message edit_message_send {
    string msg_id = 2;
    string chat_id = 3;
    int32 chat_type = 4;
    Content content = 5;
    message Content {
        string text = 1; // 文本
        string buttons = 2; // 按钮
        string quote_msg_text = 8; // 引用消息文字
    }
    uint64 content_type = 6; // 信息类别，1-文本，3-markdown，8-html
    string quote_msg_id = 8; // 引用信息ID
}
```

:::

响应体:  

```ProtoBuf
status {
  number: 114514
  code: 1
  msg: "success"
}
```

::: details ProtoBuf数据结构

```proto
message edit_message {
    Status status = 1;
}
```

:::

## 按消息序列列出消息（不包含指定消息）

POST /v1/msg/list-message-by-seq  

::: warning
由于没有所有消息情况,因此此处响应相关内容(尤其是指令等测试群不常见部分)可能会有缺失/错误,见谅.同时建议参照proto文件理解相关内容.也欢迎来PR补充.  
:::

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  

```ProtoBuf
msg_start: 1234 // 开始的消息序列
chat_type: 2 // 对象类型, 1-用户 2-群聊 3-机器人
chat_id: "big" // 对象ID
```

::: details ProtoBuf数据结构

```proto
// 通过消息序列列出消息
message list_message_by_seq_send {
    uint64 msg_start = 3; // 从第N个消息开始
    uint64 chat_type = 4; // 对象类型
    string chat_id = 5; // 对象ID
}
```

:::

响应体:  

```ProtoBuf
status {
  number: 114514
  code: 1
  msg: "success"
}
msg {
  msg_id: "abcdef" // 消息ID
  sender {
    chat_id: "7356666" // 发送者ID
    chat_type: 1 // 发送者类型。
    name: "测试" // 发送者名称
    avatar_url: "https://chat-img.jwznb.com/..." // 头像URL
    tag_old: "测试成员" // 标签(旧版显示)
    // ...
    tag {
      id: 114514 // 标签ID
      text: "测试成员" // 标签文字
      color: "#FFFFFFFF" // 颜色
    }
    // ...
  }
  direction: "left" // 在聊天中的位置(左边/右边)
  content_type: 1 // 消息类型
  content {
    text: "ok" // 消息内容
    // 剩下的建议看ProtoBuf序列文件,太多不写了
  }
  send_time: 123456789 // 发送时间(毫秒时间戳)
  cmd {
    name: "指令名" // 指令名
    type: 1 // 指令类型
  }
  msg_delete_time: 8888 // 消息撤回时间(毫秒时间戳)
  quote_msg_id: "abcdef" // 引用消息的ID
  msg_seq: 6666 // 消息序列
  edit_time: 1234 // 最后编辑时间
}
// ...
total: 23 // 获取的消息数量,貌似最大31个,实际获取的数量是请求中的数量+1
```

::: details ProtoBuf数据结构

```proto
message Tag {
    uint64 id = 1; // 标签ID(貌似)
    string text = 3;
    string color = 4;
}

message list_message_by_seq {
    Status status = 1;
    repeated Msg msg = 2;
    uint64 msg_count = 3; // 消息数
    
    message Msg {
        string msg_id = 1; // 消息ID
        Sender sender = 2;
        string direction = 3; // 消息位置,左边/右边
        uint64 content_type = 4;
        Content content = 5;
        uint64 send_time = 6; // 时间戳(毫秒)
        Cmd cmd = 7; // 指令
        uint64 msg_delete_time = 8; // 消息撤回时间
        string quote_msg_id = 9; // 引用消息ID
        uint64 msg_seq = 10;
        uint64 edit_time = 12; // 最后编辑时间
        
        message Cmd {
            string name = 2; // 指令名
            uint64 type = 4; // 指令类型
        }
        // 消息
        message Content {
            string text = 1; // 消息内容
            string buttons = 2; // 按钮
            string image_url = 3; // 图像URL
            string file_name = 4; // 文件名
            string file_url = 5; // 文件URL
            string form = 7; // 表单消息
            string quote_msg_text = 8; // 引用消息文字
            string sticker_url = 9; // 表情URL
            string post_id = 10; // 文章ID
            string post_title = 11; // 文章标题
            string post_content = 12; // 文章内容
            string post_content_type = 13; // 文章类型
            string expression_id = 15; // 个人表情ID(不知道为啥为STR)
            string quote_image_url = 16; // 引用图片直链,https://...
            string quote_image_name = 17; // 引用图片文件名称
            uint64 file_size = 18; // 文件/图片大小(字节)
            string video_url = 19; // 视频URL
            string audio_url = 21; // 语音URL
            uint64 audio_time = 22; // 语音时长
            string quote_video_url = 23; // 引用视频直链,https://...
            uint64 quote_video_time = 24; // 引用视频时长
            uint64 sticker_item_id = 25; // 表情ID
            uint64 sticker_pack_id = 26; // 表情包ID
            string call_text = 29; // 语音通话文字
            string call_status_text = 32; // 语音通话状态文字
            uint64 width = 33; // 图片的宽度
            uint64 height = 34; // 图片的高度
            string tip = 37; // 提示信息
        }
        // 发送者信息
        message Sender {
            string chat_id = 1; // 发送者ID
            uint64 chat_type = 2; // 发送者类型
            string name = 3; // 发送者名称
            string avatar_url = 4; // 头像URL
            repeated string tag_old = 6; // 标签(旧版显示)
            repeated Tag tag = 7; // 标签
        }
    }
}
```

:::

## 列出消息

POST /v1/msg/list-message  

::: warning
由于没有所有消息情况,因此此处响应相关内容(尤其是指令等测试群不常见部分)可能会有缺失/错误,见谅.同时建议参照proto文件理解相关内容.也欢迎来PR补充.  
:::

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  

```ProtoBuf
msg_count: 233 // 获取的消息数
msg_id: "abcdef" // 从指定消息id开始,可不写
chat_type: 2 // 对象类型,1-用户 2-群聊 3-机器人
chat_id: "big" // 对象ID
```

::: details ProtoBuf数据结构

```proto
message list_message_send {
    uint64 msg_count = 2; // 获取消息数
    string msg_id = 3; // 从指定消息ID开始
    uint64 chat_type = 4; // 对象类型
    string chat_id = 5; // 对象ID
}
```

:::

响应体:  
列出的是指定消息ID前的消息.  

```ProtoBuf
status {
  number: 114514
  code: 1
  msg: "success"
}
msg {
  msg_id: "abcdef" // 消息ID
  sender {
    chat_id: "7356666" // 发送者ID
    chat_type: 1 // 发送者类型。
    name: "测试" // 发送者名称
    avatar_url: "https://chat-img.jwznb.com/..." // 头像URL
    tag_old: "测试成员" // 标签(旧版显示)
    // ...
    tag {
      id: 114514 // 标签ID
      text: "测试成员" // 标签文字
      color: "#FFFFFFFF" // 颜色
    }
    // ...
  }
  direction: "left" // 在聊天中的位置(左边/右边)
  content_type: 1 // 消息类型
  content {
    text: "ok" // 消息内容
    // 剩下的建议看ProtoBuf序列文件,太多不写了
  }
  send_time: 123456789 // 发送时间(毫秒时间戳)
  cmd {
    name: "指令名" // 指令名
    type: 1 // 指令类型
  }
  msg_delete_time: 8888 // 消息撤回时间(毫秒时间戳)
  quote_msg_id: "abcdef" // 引用消息的ID
  msg_seq: 6666 // 消息序列
  edit_time: 1234 // 最后编辑时间
}
// ...
```

::: details ProtoBuf数据结构

```proto
// 标签
message Tag {
    uint64 id = 1; // 标签ID(貌似)
    string text = 3;
    string color = 4;
}

message Msg {
    string msg_id = 1; // 消息ID
    Sender sender = 2;
    string direction = 3; // 消息位置,左边/右边
    uint64 content_type = 4;
    Content content = 5;
    uint64 send_time = 6; // 时间戳(毫秒)
    Cmd cmd = 7; // 指令
    uint64 msg_delete_time = 8; // 消息撤回时间
    string quote_msg_id = 9; // 引用消息ID
    uint64 msg_seq = 10;
    uint64 edit_time = 12; // 最后编辑时间
        
    message Cmd {
        string name = 2; // 指令名
        uint64 type = 4; // 指令类型
    }
    // 消息
    message Content {
        string text = 1; // 消息内容
        string buttons = 2; // 按钮
        string image_url = 3;
        string file_name = 4;
        string file_url = 5;
        string form = 7; // 表单消息
        string quote_msg_text = 8; // 引用消息文字
        string sticker_url = 9; // 表情URL
        string post_id = 10; // 文章ID
        string post_title = 11; // 文章标题
        string post_content = 12; // 文章内容
        string post_content_type = 13; // 文章类型
        string expression_id = 15; // 个人表情ID(不知道为啥为STR)
        string quote_image_url = 16; // 引用图片直链,https://...
        string quote_image_name = 17; // 引用图片文件名称
        uint64 file_size = 18; // 文件/图片大小(字节)
        string video_url = 19; // 视频URL
        string audio_url = 21; // 语音URL
        uint64 audio_time = 22; // 语音时长
        string quote_video_url = 23; // 引用视频直链,https://...
        uint64 quote_video_time = 24; // 引用视频时长
        uint64 sticker_item_id = 25; // 表情ID
        uint64 sticker_pack_id = 26; // 表情包ID
        string call_text = 29; // 语音通话文字
        string call_status_text = 32; // 语音通话状态文字
        uint64 width = 33; // 图片的宽度
        uint64 height = 34; // 图片的高度
        string tip = 37; // 提示信息
    }
    // 发送者信息
    message Sender {
        string chat_id = 1;
        uint64 chat_type = 2;
        string name = 3;
        string avatar_url = 4;
        repeated string tag_old = 6;
        repeated Tag tag = 7;
    }
}

// 获取消息
message list_message { // 其实可以和 list-message-by-seq共用的。
    Status status = 1;
    repeated Msg msg = 2;
}
```

:::

## 按消息ID列出消息（包含消息id指定的消息）

POST /v1/msg/list-message-by-mid-seq  

::: warning
由于没有所有消息情况,因此此处响应相关内容(尤其是指令等测试群不常见部分)可能会有缺失/错误,见谅.同时建议参照proto文件理解相关内容.也欢迎来PR补充.  
:::

::: tip
此接口和 list-message 的区别在于此接口获取到的消息包含请求的消息ID的消息内容. 实际获取到的消息数量是请求消息数量+1
:::

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  

```ProtoBuf
msg_seq: 123456 // 开始消息的seq,不写默认0
chat_type: 2 // 对象类型,1-用户 2-群聊 3-机器人
chat_id: "big" // 对象ID
unknown: 0 // 不知道干啥的
msg_count: 10 // 请求获取消息数量
msg_id: abcdef // 消息ID
```

::: details ProtoBuf 数据结构

```proto
// 列出包含请求 msg_id 消息
message list_message_by_mid_seq_send {
    uint64 msg_seq = 3; // 开始消息的seq
    uint64 chat_type = 4;
    string chat_id = 5;
    uint64 unknown = 6; // 不知道干啥的
    uint64 msg_count = 7;
    string msg_id = 8;
}
```

:::

响应体:  

```ProtoBuf
status {
  number: 114514
  code: 1
  msg: "success"
}
msg {
  msg_id: "abcdef" // 消息ID
  sender {
    chat_id: "7356666" // 发送者ID
    chat_type: 1 // 发送者类型。
    name: "测试" // 发送者名称
    avatar_url: "https://chat-img.jwznb.com/..." // 头像URL
    tag_old: "测试成员" // 标签(旧版显示)
    // ...
    tag {
      id: 114514 // 标签ID
      text: "测试成员" // 标签文字
      color: "#FFFFFFFF" // 颜色
    }
    // ...
  }
  direction: "left" // 在聊天中的位置(左边/右边)
  content_type: 1 // 消息类型
  content {
    text: "ok" // 消息内容
    // 剩下的建议看ProtoBuf序列文件,太多不写了
  }
  send_time: 123456789 // 发送时间(毫秒时间戳)
  cmd {
    name: "指令名" // 指令名
    type: 1 // 指令类型
  }
  msg_delete_time: 8888 // 消息撤回时间(毫秒时间戳)
  quote_msg_id: "abcdef" // 引用消息的ID
  msg_seq: 6666 // 消息序列
  edit_time: 1234 // 最后编辑时间
}
// ...
total: 11 // 获取的消息数量
```

::: details ProtoBuf数据结构

```proto
// 标签
message Tag {
    uint64 id = 1; // 标签ID(貌似)
    string text = 3;
    string color = 4;
}

message Msg {
    string msg_id = 1; // 消息ID
    Sender sender = 2;
    string direction = 3; // 消息位置,左边/右边
    uint64 content_type = 4;
    Content content = 5;
    uint64 send_time = 6; // 时间戳(毫秒)
    Cmd cmd = 7; // 指令
    uint64 msg_delete_time = 8; // 消息撤回时间
    string quote_msg_id = 9; // 引用消息ID
    uint64 msg_seq = 10;
    uint64 edit_time = 12; // 最后编辑时间
        
    message Cmd {
        string name = 2; // 指令名
        uint64 type = 4; // 指令类型
    }
    // 消息
    message Content {
        string text = 1; // 消息内容
        string buttons = 2; // 按钮
        string image_url = 3;
        string file_name = 4;
        string file_url = 5;
        string form = 7; // 表单消息
        string quote_msg_text = 8; // 引用消息文字
        string sticker_url = 9; // 表情URL
        string post_id = 10; // 文章ID
        string post_title = 11; // 文章标题
        string post_content = 12; // 文章内容
        string post_content_type = 13; // 文章类型
        string expression_id = 15; // 个人表情ID(不知道为啥为STR)
        string quote_image_url = 16; // 引用图片直链,https://...
        string quote_image_name = 17; // 引用图片文件名称
        uint64 file_size = 18; // 文件/图片大小(字节)
        string video_url = 19; // 视频URL
        string audio_url = 21; // 语音URL
        uint64 audio_time = 22; // 语音时长
        string quote_video_url = 23; // 引用视频直链,https://...
        uint64 quote_video_time = 24; // 引用视频时长
        uint64 sticker_item_id = 25; // 表情ID
        uint64 sticker_pack_id = 26; // 表情包ID
        string call_text = 29; // 语音通话文字
        string call_status_text = 32; // 语音通话状态文字
        uint64 width = 33; // 图片的宽度
        uint64 height = 34; // 图片的高度
        string tip = 37; // 提示信息
    }
    // 发送者信息
    message Sender {
        string chat_id = 1;
        uint64 chat_type = 2;
        string name = 3;
        string avatar_url = 4;
        repeated string tag_old = 6;
        repeated Tag tag = 7;
    }
}

message list_message_by_mid_seq {
    Status status = 1;
    repeated Msg msg = 2;
    uint64 total = 3; // 消息数
}

```

:::

## 获取信息历史编辑内容

POST /v1/msg/list-message-edit-record

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|空|

请求体：

```JSONC
{
  "msgId": "12312312312312312312312313", // 信息ID
  "size": 10, // 获取的历史编辑内容数
  "page": 1 // 页面数
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "list": [
      {
        "id": 1018684, // 信息编辑ID
        "msgId": "123123123123123123123123", // 信息ID
        "contentType": 1, // 信息类别
        "contentOld": "{\"text\":\"测试原始编辑文本\"}", // 信息文本，转义后json数据
        "createTime": 1231231231230, // 信息创建时间戳
        "msgTime": 1231231231230 // 编辑时间戳
      }
      // ...
    ],
    "total": 1 // 历史编辑总数
  },
  "msg": "success" // 返回消息
}
```

## 发送按钮点击事件

POST /v1/msg/button-report

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|空|

请求体:  

```ProtoBuf
msg_id: "123123123123123123" // 信息ID
chat_type: 2 // 对象类型, 1-用户 2-群聊 3-机器人
chat_id: "123" // 对象ID
user_id: "123" // 按钮事件发送者ID
button_value: "测试按钮文本" // 欲点击按钮的值
```

::: details ProtoBuf数据结构

```proto
// 通过按钮事件点击消息
message button_report_send {
    string msg_id = 2; // 信息ID
    uint64 chat_type = 3; // 对象类型, 1-用户 2-群聊 3-机器人
    string chat_id = 4; // 对象ID
    string user_id = 5; // 按钮事件发送者ID
    string button_value = 6; // 欲点击按钮的值
}
```

:::

响应体:  
列出的是指定消息ID前的消息.  

```ProtoBuf
status {
  number: 114514
  code: 1
  msg: "success"
}
```

::: details ProtoBuf数据结构

```proto
// 按钮事件点击返回状态信息
message button_report {
    Status status = 1;
}
```

:::

## 撤回信息

POST /v1/msg/recall-msg

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|空|

请求体:  

```ProtoBuf
msg_id: "123123123123123123" // 信息ID
chat_id: "123" // 信息所属对象ID
chat_type: 2 // 信息所属对象类型, 1-用户 2-群聊 3-机器人
```

::: details ProtoBuf数据结构

```proto
// 通过msgId撤回消息
message recall_msg_send {
    string msg_id = 2; // 信息ID
    string chat_id = 3; // 信息所属对象ID
    uint64 chat_type = 4; // 信息所属对象类型, 1-用户 2-群聊 3-机器人
}
```

:::

响应体:  

```ProtoBuf
status {
  number: 114514
  code: 1
  msg: "success"
}
```

::: details ProtoBuf数据结构

```proto
// 撤回消息返回数据
message recall_msg {
    Status status = 1;
}
```

:::

## 批量撤回消息

POST /v1/msg/recall-msg-batch

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|空|

请求体:  

```ProtoBuf
msg_id: "123123123123123123" // 信息ID
// ...
chat_id: "123" // 信息所属对象ID
chat_type: 2 // 信息所属对象类型, 1-用户 2-群聊 3-机器人
```

::: details ProtoBuf数据结构

```proto
// 通过msgId撤回消息
message recall_msg_batch_send {
    repeated string msg_id = 2; // 信息ID
    string chat_id = 3; // 信息所属对象ID
    uint64 chat_type = 4; // 信息所属对象类型, 1-用户 2-群聊 3-机器人
}
```

:::

响应体:  

```ProtoBuf
status {
  number: 114514
  code: 1
  msg: "success"
}
```

::: details ProtoBuf数据结构

```proto
// 批量信息撤回返回状态
message recall_msg_batch {
    Status status = 1;
}
```

:::

## 文件消息下载记录

POST /v1/msg/file-download-record

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|空|

请求体:  

```JSONC
{
  "msgId": "5040d27fc975416680a14e5a1b37ef06", // 文件消息id
  "downloadPath": "/storage/emulated/0/Download/云湖/恶臭(1).txt" // 下载路径
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```
