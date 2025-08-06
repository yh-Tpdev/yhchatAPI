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
  id: "123" //群聊ID
  name: "测试群聊" // 群聊名称
  avatar_url: "https://..." // 头像url
  avatar_id: 123 // 头像ID
  introduction: "测试群聊" // 群聊简介
  member: 123 // 群人数
  create_by: "123" // 创建者ID
  direct_join: 0 // 进群免审核,1为开启
  permisson_level: 2 // 权限等级(普通用户无此项(数值为0或无此项),群主100,管理员2)
  history_msg: 1 // 历史消息,1为开启
  category_name: "无" // 分类名
  category_id: 40 // 分类ID
  private: 0 // 是否私有,1为私有
  do_not_disturb: 1 // 免打扰,1为开启
  community_id: 123 // 加入社区的ID
  community_name: "云湖" // 加入社区的名称
  top: 0 // 置顶会话,1为开启
  admin: "123" // 管理员ID,可以有多个
  limited_msg_type: "" // 被限制的消息类型,如1,2,3,使用","分格
  owner: "123" // 群主ID
  recommandation: 1 // 是否加入群推荐,1为开启
  tag_old: "冲刺一百万用户！" // 标签
  tag {
    id: 123 // 标签id
    text: "" // 标签文字
    color: "#FFFFFFFF" // 标签颜色
  }
}
history_bot {
  id: "123" // 机器人ID
  name: "测试" // 机器人名称
  name_id: 123 // 机器人名称的序列(数据库中第N个用户/机器人/群组)
  avatar_url: "https://..." // 头像URL
  avatar_id: 123 // 头像ID
  introduction: "测试机器人" // 机器人简介
  create_by: "123" // 创建者ID
  create_time: 1231231230 // 创建时间戳
  user_number: 123 // 使用人数
  private: 1 // 1表示私有机器人.
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
```JSONC
{
  "group_id": "123" // 群聊id
}
```

响应数据:  
```JSONC
{
  "code": 1,  // 请求状态码，1为正常
  "data": {
    "rooms": [
      {
        "userId": "123", // 房间管理员用户ID
        "roomId": "123", // 房间ID
        "chatId": "123", // 房间所属对象ID
        "title": "测试房间", // 房间名称
        "chatType": 2, // 房间所属对象类别，一般为2-群聊
        "status": 0, // 房间状态码
        "createBy": "123", // 房间创建用户ID
        "createTime": 1231231230, //房间创建时间戳
        "nickname": "测试用户", // 房间创建用户名称
        "count": 123, // 房间内人数
        "avatarUrl": "https://..." // 房间头像url
      }
    ]
  },
  "msg": "success" // 返回消息
}
```

## 获取群指令列表

POST /v1/group/instruction-list

请求头:  
|名称|必须|备注|
|---|---|---|
|token|是|无|

请求体:  
```JSONC
{
  "groupId": "big" // 目标群聊
}
```

响应数据:  
```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "instructions": [
      {
        "botId": "123", // 机器人ID
        "botName": "测试机器人", // 机器人名称
        "name": "测试指令", // 指令名称
        "desc": "测试指令简介", // 指令简介
        "id": 123, // 指令ID
        "sort": 0, // 未知
        "auth": 0 // 可用状态，0-所有人可用，1-所有人禁用，2-群主可用，3-群主管理员可用
      },
      // ...
    ]
  },
  "msg": "success" // 返回状态消息
}
```

## 邀请加入群聊

POST /v1/group/invite

请求头:  
|名称|必须|备注|
|---|---|---|
|token|是|无|

请求体:  
```JSONC
{
  "chatId": "123", // 邀请成员ID
  "chatType": 1, // 邀请成员类别，1-用户，3-机器人
  "groupId": "123" // 目标群聊
}
```

响应数据:  
```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回状态消息
}
```

## 获取群组标签列表

POST /v1/group-tag/list

请求头:  
|名称|必须|备注|
|---|---|---|
|token|是|无|

请求体:  
```JSONC
{
    "groupId": "123456789", //要获取的群聊ID
    "size": 20,// 页面总数
    "page": 1,//页码
    "tag": ""// 搜索词语
}
```

响应体:  
```JSONC
{
    "code": 1,
    "data": {
        "list": [
            {
                "id": 1234, // 标签ID
                "groupId": "123456789", // 群聊ID
                "tag": "一个标签", // 标签名称
                "color": "#E91E63", // 标签颜色
                "desc": "", // 描述
                "sort": 0, // 排序
                "delFlag": 0, 
                "createTime": 1753719847 // 创建时间
            }
        ]
    },
    "msg": "success"
}
```

## 关联用户标签

POST /v1/group-tag/relate

请求头:  
|名称|必须|备注|
|---|---|---|
|token|是|必须为群聊管理员token|

请求体:  
```JSONC
{
    "userId": "1234567", // 要关联的用户ID
    "tagGroupId": 1145 // 要关联的标签ID
}
```

响应体:  
```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回状态消息
}
```

## 取消关联用户标签

POST /v1/group-tag/relate-cancel

请求头:  
|名称|必须|备注|
|---|---|---|
|token|是|必须为群聊管理员token|

请求体:  
```JSONC
{
    "userId": "1234567", // 要关联的用户ID
    "tagGroupId": 1145 // 要关联的标签ID
}
```

响应体:  
```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回状态消息
}
```

## 编辑群组标签

POST /v1/group-tag/edit

请求头:  
|名称|必须|备注|
|---|---|---|
|token|是|必须为群聊管理员token|

请求体:  
```JSONC
{
    "id": 1234, // 要更改的标签ID
    "groupId": "123456789", // 要更改的标签所在的群聊ID
    "tag": "一个标签", // 标签名称
    "color": "#E91E63", // 标签颜色
    "desc": "", //，标签描述
    "sort": 0 // 标签排序
}
```

响应体:  
```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回状态消息
}
```

## 新增群组标签

POST /v1/group-tag/create

请求头:  
|名称|必须|备注|
|---|---|---|
|token|是|必须为群聊管理员token|

请求体：
```JSONC
{
    "groupId": "123456789", // 要创建标签的群聊ID
    "tag": "标签名称", // 标签名称
    "color": "#2196F3", // 标签颜色
    "desc": "", // 标签描述
    "sort": 0 // 标签排序
}

```

响应体：
```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回状态消息
}
```

## 删除群组标签

请求头:  
|名称|必须|备注|
|---|---|---|
|token|是|必须为群聊管理员token|

请求体:  
```JSONC
{
    "id": 1234 // 要删除的标签ID
}
```

响应体:  
```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回状态消息
}
```

## 踢出用户

请求头:  
|名称|必须|备注|
|---|---|---|
|token|是|必须为群聊管理员token|

请求体:  
```JSONC
{
  "groupId": "123", // 目标群聊ID
  "userId": "123" // 踢出用户ID
}
```

响应体:  
```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回状态消息
}
```

## 禁言用户

请求头:  
|名称|必须|备注|
|---|---|---|
|token|是|必须为群聊管理员token|

请求体:  
```JSONC
{
  "groupId": "123", // 目标群聊ID
  "userId": "123" // 踢出用户ID
  "gag": 0 // 禁言时间，0-取消禁言
}
```

响应体:  
```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回状态消息
}
```
