---
title: chat-ws-go.jwzhd.com
---

本文章下所有wss请求地址均为 wss://chat-ws-go.jwzhd.com/ws
没写请求/响应项目表示不需要相关参数,使用以下功能前必须先链接wss并 **登录云湖账号**.  

## 登录云湖账号

发送数据:  

```JSONC
{
  "seq": "123123123123123123123", // 请求标识码，可以随便写
  "cmd": "login", // 为login，代表登录
  "data": {
    "userId": "123", // 登录用户ID
    "token": "nj104901-****-****-****-************",
    "platform": "windows", // 登录平台，只能为windows，web等
    "deviceId": "123" //设备识别码，可随便写
  }
}
```

## 发送心跳包

发送数据:  

```JSONC
{
  "seq": "123123123123123123123", // 请求标识码，可以随便写
  "cmd": "heartbeat", // 为heartbeat，代表心跳包
  "data": {}
}
```

返回数据:  

```ProtoBuf
data: {
  seq: "123123123123123123123", // 请求标识码
  cmd: "heartbeat_ack" // 为heartbeat_ack，代表心跳包的返回
}
```

::: details ProtoBuf数据结构

```proto
// 心跳包返回信息
message heartbeat_ack_info {
    Data data = 1; //数据
    message Data {
        string id = 1; // 请求标识码，可以随便写
        string cmd = 2; // 为heartbeat，代表心跳包
    }
}
```

:::

## 发送笔记同步

发送数据:  

```JSONC
{
  "seq": "123123123123123123123", // 请求标识码，可以随便写
  "cmd": "inputInfo", // 为inputInfo，代表发送笔记同步
  "data": {
    "chatId": "872440499", // 用户ID
    "input": "测试笔记同步", // 笔记同步内容
    "deviceId": "123" // 设备唯一识别码
  }
}
```

## 接收笔记同步

返回数据:  

```ProtoBuf
info {
  seq: "abcdef" // 请求标识符
  cmd: "draft_input" // 操作类型
}

data {
  cmd: "type.googleapis.com/proto.MsgInput" // 操作类型(?)
  draft {
    chat_id: "8826687" // 聊天对象ID
    input: "测试草稿同步" // 草稿内容
  }
}
```

::: details ProtoBuf数据结构

```proto
// 共用区
// 信息
message INFO {
    string seq = 1; // 请求标识码
    string cmd = 2; // 操作类型
}
// 共用区结束

// 草稿同步
message draft_input {
    INFO info = 1;
    Data data = 2;
    
    message Data {
        string cmd = 1;
        Draft draft = 2;
        
        message Draft {
            string chat_id = 1; // 对象ID
            string input = 2; // 草稿内容
        }
    }
}
```

:::

## 推送消息  

返回数据:  

```ProtoBuf
info {
  seq: "1234567abcd" // 请求标识码
  cmd: "push_message" // 推送消息
}

data {
  cmd: "type.googleapis.com/proto.PushMessage" // 操作类型?
  msg {
    msg_id: "abcdef" // 消息ID
    sender {
      chat_id: "7357777" // 发送者ID
      chat_type: 1 // 发送者类型,1-用户 3-机器人
      name: "测试" // 发送者名称
      avatar_url: "https://chat-img.jwznb.com/...." // 头像URL
      tag_old: "测试成员" // 标签(旧版)
      // ...
      tag {
        id: 123 // 标签id
        text: "" // 标签文字
        color: "#FFFFFFFF" // 标签颜色
      }
      // ...
    }
    recv_id: "7356666" // 接收者ID
    chat_id: "big" // 会话的ID
    chat_type: 2 // 会话的类型,1-用户 2-群组 3-机器人
    content {
      text: "Feng的大手发力了" // 消息文字
      // 剩下的建议参考proto,太多不写了
    }
    content_type: 1 // 消息类型
    timestamp: 123456789 // 时间戳(毫秒)
    cmd {
      id; 999 // 指令ID
      name: "MAC地址查询" // 指令名称
    }
    msg_seq: 1145 // 消息序列
  }
}
```

::: details ProtoBuf数据结构

```proto
// 共用区
// 信息
message INFO {
    string seq = 1; // 请求标识码
    string cmd = 2; // 操作类型
}

// 标签
message Tag {
    uint64 id = 1; // 标签ID(貌似)
    string text = 3;
    string color = 4;
}
// 共用区结束

// ws推送消息
message push_message {
    INFO info = 1;
    Data data = 2;

    message Data {
        string cmd = 1;
        Msg msg = 2;
        
        message Msg {
            string msg_id = 1;
            Sender sender = 2;
            string recv_id = 3; // 接收者ID
            string chat_id = 4; // 会话的ID
            uint64 chat_type = 5; // 会话类型
            Content content = 6; // 消息内容
            uint64 content_type = 7;
            uint64 timestamp = 8; // 时间戳(毫秒)
            Cmd cmd = 9; // 指令
            uint64 delete_timestamp = 10; // 撤回消息时间,和8差别不大
            string quote_msg_id = 11; // 引用消息ID
            uint64 msg_seq = 12; // 消息序列,在撤回时也是被撤回消息的序列
            
            message Cmd {
                uint64 id = 1; // 命令ID
                string name = 2; // 命令名称
            }
            
            message Sender {
                string chat_id = 1;
                uint64 chat_type = 2;
                string name = 3;
                string avatar_url = 4;
                repeated string tag_old = 6;
                repeated Tag tag = 7;
            }
            
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
        }
    }
}
```

:::

## 推送超级文件分享

返回数据:  

```ProtoBuf
info {
  seq: "1234567abcd" // 请求标识码
  cmd: "file_send_message" // 推送超级文件分享
}

data {
  cmd: "type.googleapis.com/proto.PushMessage" // 操作类型?
  file_send: {
      send_user_id: "123" // 分享者用户ID
      user_id: "123" // 接收者用户ID
      temp_code: 1 // 未知
      send_type: "candidate" // 分享类别区分文本
      data: "{}" // 经过转意义的json格式发送数据
      send_deviceId: "123123123123" // 发送者设备唯一标识符
    }
}
```

::: details ProtoBuf数据结构

```proto
// 信息
message INFO {
    string seq = 1; // 请求标识码
    string cmd = 2; // 操作类型
}

// 超级文件分享
message file_send_message {
  INFO info = 1;
  Data data = 2;

  message Data {
    string cmd = 1;
    Sender sender = 2;
        
    message Sender {
      string send_user_id = 1; // 分享者用户ID
      string user_id = 2; // 接收者用户ID
      uint64 temp_code = 3; // 未知
      string send_type = 4; // 分享类别区分文本
      string data = 5; // 经过转义后的json格式发送数据
      string send_deviceId = 6; // 发送者设备唯一标识符
    }
  }
}
```

:::

## 编辑消息接收

!!其实可以和接收消息推送的 proto 基本共用,只是编辑消息额外多了个14 edit_time.!!  

返回数据:  

```ProtoBuf
info {
  seq: "123123123123123123123" // 请求标识码
  cmd: "edit_message" // 消息编辑推送
}

data {
  cmd: "type.googleapis.com/proto.PushMessage" // 操作类型?
  msg {
    "msg_id": "123123123123" // 信息ID
    "chat_id": "123" // 信息对象ID
    "content": {
      “text": "测试信息文本" // 信息文本
      "buttons": "测试信息文本" // 按钮信息文本数据
      "quote_msg_text": "测试引用信息文本" // 引用信息文本
    }
    "content_type": 1 // 信息类别，1-文本，3-markdown，8-html
    "quote_msg_id": "123123123123" // 引用信息ID
  }
}
```

::: details ProtoBuf数据结构

```proto
message INFO {
    string seq = 1; // 请求标识码
    string cmd = 2; // 操作类型
}

message Msg {
    string msg_id = 1;
    string recv_id = 3; // 接收者ID,但是不知道为啥到编辑这里就和4一样了
    string chat_id = 4; // 会话的ID
    Content content = 6; // 消息内容
    uint64 content_type = 7;
    string quote_msg_id = 11; // 引用消息ID
    uint64 edit_time = 14; // 编辑时间
            
    message Content {
        string text = 1; // 消息内容
        string buttons = 2; // 按钮
        string quote_msg_text = 8; // 引用消息文字
    }
}

// ws接收编辑消息
message edit_message {
    INFO info = 1;
    Data data = 2;
    
    message Data {
        string cmd = 1;
        Msg msg = 2;
    }
}
```

:::