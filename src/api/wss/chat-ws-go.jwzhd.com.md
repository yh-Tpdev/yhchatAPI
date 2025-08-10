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

## 推送消息  

返回数据:  

```ProtoBuf
info {
  seq: "1234567abcd" // 请求表示码
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
    msg_type: 1 // 消息类型
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
            uint64 msg_type = 7;
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
  seq: "1234567abcd" // 请求表示码
  cmd: "file_send_message" // 推送超级文件分享
}

data {
  cmd: "type.googleapis.com/proto.PushMessage" // 操作类型?
  file_send: {
      send_user_id: "123" // 分享者用户ID
      user_id: "123" // 接收者用户ID
      temp_code: 1 // 未知
      send_type: "candidate" // 分享类别区分文本
      data: "{}" // 经过转意后的json格式发送数据
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

// ws推送消息
message file_send_message {
  INFO info = 1;
  Data data = 2;

  message Data {
    string cmd = 1;
    Msg msg = 2;
        
    message file_send_message {
      string send_user_id = 1; // 分享者用户ID
      string user_id = 2; // 接收者用户ID
      uint64 temp_code = 3; // 未知
      string send_type = 4; // 分享类别区分文本
      string data = 5; // 经过转意后的json格式发送数据
      string send_deviceId = 6; // 发送者设备唯一标识符
    }
  }
}
```

:::
