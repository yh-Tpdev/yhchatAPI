---
title: group
---

未特别说明情况下请求域名均为 https://chat-go.jwzhd.com
没写请求/响应项目表示不需要相关参数.  

## 获取群聊信息  

POST /v1/group/info  

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

::: warning
此处响应数据部分项目需要在打开相应开关后才会出现,例如private必须打开群聊私有才能在响应数据中看到.  
:::

响应数据:  
```ProtoBuf
status {
  number: 114514
  code: 1
  msg: "success"
}
data {
  id: "群聊ID"
  name: "群聊名称"
  avatar_url: "头像URL"
  avatar_id: 头像ID(数值)
  introduction: "群聊简介"
  member: 群人数(数值)
  create_by: "创建者ID"
  direct_join: 进群免审核,1为开启
  permisson_level: 权限等级(普通用户无此项(据说数值为0),群主100,管理员2)
  history_msg: 历史消息,1为开启
  category_name: "分类名"
  category_id: 分类ID
  private: 是否私有,1为私有
  do_not_disturb: 免打扰,1为开启
  community_id: 加入社区的ID
  community_name: "加入社区的名称"
  top: 置顶会话,1为开启
  admin: "管理员ID,可以有多个"
  limited_msg_type: "被限制的消息类型,如1,2,3"
  owner: "群主ID"
  recommandation: 是否加入群推荐,1为开启
  tag_old: "标签"
  tag {
    id: 标签id(数值)
    text: "标签文字"
    color: "#FFFFFFFF"
  }
}
history_bot {
  id: "机器人ID"
  name: "机器人名称"
  name_id: 机器人名称的序列(数据库中第N个用户/机器人/群组)
  avatar_url: "头像URL"
  avatar_id: 头像ID(数值)
  introduction: "机器人简介"
  create_by: "创建者ID"
  create_time: 创建时间戳
  user_number: 使用人数(数值)
  private: 1表示私有机器人.
}
```

::: details ProtoBuf数据结构
```proto
// 群聊信息
message info_send {
    string id = 2;
}

message info {
    Status status = 1;
    Group_data data = 2;
    repeated Bot_data history_bot = 3;

    // 群聊数据
    message Group_data {
        string id = 1;
        string name = 2;
        string avatar_url = 3;
        uint64 avatar_id = 4; // 头像ID
        string introduction = 5;
        uint64 member = 6; // 群人数
        string create_by = 7;
        uint64 direct_join = 8; // 进群免审核
        uint64 permisson_level = 9; // 权限等级
        uint64 history_msg = 10; // 历史消息
        string category_name = 11; // 分类名
        uint64 category_id = 12; // 分类ID
        uint64 private = 13; // 是否为私有群聊
        uint64 do_not_disturb = 14; // 免打扰
        uint64 community_id = 15;
        string community_name = 16;
        uint64 top = 19; // 会话置顶
        repeated string admin = 20;
        string limited_msg_type = 22; // 被限制的消息类型,例如 1,2,3
        string owner = 23;
        uint64 recommandation = 24; // 是否加入群推荐
        repeated string tag_old = 26; // 标签(旧版)
        repeated Tag tag = 27;

        // 已使用标签信息,2没啥用不解析了
        message Tag {
            uint64 id = 1; // 标签ID(貌似)
            string text = 3;
            string color = 4;
        }
    }
    
    // 群聊中使用过的机器人数据
    message Bot_data {
        string id = 1;
        string name = 2;
        uint64 name_id = 3; // 机器人名称在数据库中序列,包括用户,群聊,机器人
        string avatar_url = 4;
        uint64 avatar_id = 5;
        string introduction = 6;
        string create_by = 7;
        uint64 create_time = 8;
        uint64 user_number = 9; // 使用人数
        uint64 private = 10; // 是否为私有机器人
    }

}
```
:::

## 获取群聊语音房间

POST /v1/group/live-room

请求头:  

|名称|必须|备注|
|---|---|---|
|token|是|无|

请求体:  
```JSON
{
  "group_id": "群聊id"
}
```

响应数据:  
```JSON
{
  "code": "请求状态码，1为正常，此值为数值",
  "data": {
    {
    "userId": "8372435",
        "roomId": "{房间ID}",
        "chatId": "{房间所属对象ID}",
        "title": "{房间名称}",
        "chatType": "房间所属对象类别，一般为2-群聊，此值为数值",
        "status": "房间状态码，此值为数值",
        "createBy": "{房间创建用户ID}",
        "createTime": "房间创建时间戳，此值为数值",
        "nickname": "{房间创建用户名称}",
        "count": "房间内人数，此值为数值",
        "avatarUrl": "{房间头像url}"
    }
  },
  "msg": "{返回消息}"
}
```
