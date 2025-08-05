---
title: msg
---

未特别说明情况下请求域名均为 https://chat-go.jwzhd.com
没写请求/响应项目表示不需要相关参数.  

## 发送信息（未完成，请勿参考！）

POST /v1/msg/send-message

请求头:  

|名称|必须|备注|
|---|---|---|
|token|是|无|

请求体:  
```ProtoBuf
msg_id: "信息ID"
chat_id: "欲发送到的信息对象"
chat_type: "欲发送到的信息对象的类别，1-用户，2-群聊，3-机器人"
data {
  msg_text: "信息文本"
  quote_msg_text: "引用信息文本"
  image_key: "欲发送图片key"
  msg_text1: "信息文本"
  msg_text2: "信息文本"
  temp_text1: ""
  temp_text2: ""
  temp_text3: ""
  temp_code1: 0
}
msg_type: 1
temp_code: 0
quote_msg_id: "引用信息ID"
temp_text: ""
```
::: details ProtoBuf数据结构
```proto
message send_message_send {
    string msg_id = 2; // 信息ID
    string chat_id = 3; // 欲发送到的信息对象
    string chat_type = 4; // 欲发送到的信息对象的类别，1-用户，2-群聊，3-机器人
    Data data = 5;
    message data {
        string msg_text = 1; // 信息文本
        string quote_msg_text = 8; // 引用信息文本
        string image_key = 9; // 欲发送图片key
        string msg_text1 = 11; // 信息文本
        string msg_text2 = 12; // 信息文本
        string temp_text1 = 16; // 不知道干啥的
        string temp_text2 = 17; // 不知道干啥的
        string temp_text3 = 23; // 不知道干啥的
        uint64 temp_code1 = 24; // 不知道干啥的
    }
    uint64 msg_type = 6; // 信息类别，1-文本，2-图片，3-markdown，4-文件，5-表单，6-文章，7-表情，8-html
    uint64 temp_code = 7; // 不知道干啥的
    string quote_msg_id = 8; // 引用信息ID
    string temp_text = 9; // 不知道干啥的
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
message get_user {
    Status status = 1; // 状态码
}
```
:::

## 通过消息序列列出消息

POST /v1/msg/list-message-by-seq  

::: warning
由于没有所有消息情况,因此此处响应相关内容(尤其是指令等测试群不常见部分)可能会有缺失/错误,,建议参照proto文件,见谅.也欢迎来PR补充.  
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
    tag {
      id: 114514 // 标签ID
      text: "测试成员" // 标签文字
      color: "#FFFFFFFF" // 颜色
    }
  }
  direction: "left" // 在聊天中的位置(左边/右边)
  msg_type: 1 // 消息类型
  msg_content {
    content: "ok" // 消息内容
    // 剩下的建议看ProtoBuf序列文件,太多不写了
  }
  send_time: 123456789 // 发送时间(毫秒时间戳)
  cmd {
    name: "指令名" // 指令名
    type: 1 // 指令类型
  }
  msg_delete_time: 8888 // 消息撤回时间(毫秒时间戳)
  quote_msg_id: "abcdef" // 引用消息的ID
  msg_order: 6666 // 消息序列
  edit_time: 1234 // 最后编辑时间
}
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
        uint64 msg_type = 4;
        Msg_content msg_content = 5;
        uint64 send_time = 6; // 时间戳(毫秒)
        Cmd cmd = 7; // 指令
        uint64 msg_delete_time = 8; // 消息撤回时间
        string quote_msg_id = 9; // 引用消息ID
        uint64 msg_order = 10;
        uint64 edit_time = 12; // 最后编辑时间
        
        message Cmd {
            string name = 2; // 指令名
            uint64 type = 4; // 指令类型
        }
        // 消息
        message Msg_content {
            string content = 1; // 消息内容
            string buttons = 2; // 按钮
            string image_url = 3; // 图像URL
            string file_name = 4; // 文件名
            string file_url = 5; // 文件URL
            string quote_msg_text = 8; // 引用消息文字
            string sticker_url = 9; // 表情URL
            string post_id = 10; // 文章ID
            string post_title = 11; // 文章标题
            string post_content = 12; // 文章内容
            string post_content_type = 13; // 文章类型
            string expression_id = 15; // 个人表情ID(不知道为啥为STR)
            uint64 file_size = 18; // 文件/图片大小(字节)
            string video_url = 19; // 视频URL
            string audio_url = 21; // 语音URL
            uint64 audio_time = 22; // 语音时长
            uint64 sticker_item_id = 25; // 表情ID
            uint64 sticker_pack_id = 26; // 表情包ID
            string call_text = 29; // 语音通话文字
            string call_status_text = 32; // 语音通话状态文字
            uint64 width = 33; // 图片的宽度
            uint64 height = 34; // 图片的高度
            
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