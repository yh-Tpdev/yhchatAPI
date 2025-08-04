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
