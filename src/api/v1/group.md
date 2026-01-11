---
title: group
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.

## 获取群聊信息

POST /v1/group/info

请求头:

|名称|必须|备注|
|-----|----|----|
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
  my_group_nickname: "12345" // 我的群昵称
  group_code: "test1234" // 群口令
  auto_delete_message: 730 // 消息自动销毁时间（0-永久不删，90-2个月后删除，365-1年后删除，730-2年后删除）
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
    string group_id = 2;
}

message info {
    Status status = 1;
    Group_data data = 2;
    repeated Bot_data history_bot = 3;

    // 群聊数据
    message Group_data {
        string group_id = 1;
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
        string my_group_nickname = 28; // 我的群昵称
        string group_code = 29; // 群口令
        uint64 auto_delete_message = 32; // 消息自动销毁时间

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

## 获取群成员列表

POST /v1/group/list-member

请求头:  

|名称|必须|备注|
|-----|----|----|
|token|是|无|

请求体:  

```ProtoBuf
data {
  size: 50 // 分页大小
  page: 1 // 页数
}
group_id: "big" // 群聊ID
keywords: "测试群成员" // 搜索关键词
```

::: details ProtoBuf数据结构

```proto
message list_member_send {
    Data data = 2;
    
    message Data {
        int32 size = 1; // 分页大小
        int32 page = 2; // 页数
    }
    
    string group_id = 3; // 群聊ID
    string keywords = 4; // 搜索关键词
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
user {
  group_id: "big" // 所属群聊ID
  user_info {
    user_id: "7356666" // 用户ID
    name: "Feng" // 用户名
    avatar_url: "https://..." // 头像URL
    is_vip: 0 // 是否为vip用户, 0-不为vip用户, 1-vip用户
    
  }
  permission_level: 100 // 权限等级, 群主100 管理员2 普通用户无/0
  gag_time: 123456 // 禁言时间戳
  is_gag: 0 // 是否处于禁言状态
}
// 可以有多个
// ...
```

::: details ProtoBuf数据结构

```proto
message list_member {
    Status status = 1;
    repeated User user = 2;
    
    message User {
      string group_id = 1;
      User_info user_info = 2;

      message User_info {
          string user_id = 1;
          string name = 2;
          string avatar_url = 4;
          int32 is_vip = 6;
      }
        
      int32 permission_level = 3;
      int64 gag_time = 4; // 禁言时间
      int32 is_gag = 5; c
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
  "groupId": "123" // 群聊id
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
  "chatId": "123", // 邀请成员ID，必须为目标用户token已添加的token
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

## 踢出用户

POST /v1/group/remove-member

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

POST /v1/group/gag-member

请求头:  

|名称|必须|备注|
|---|---|---|
|token|是|必须为群聊管理员token|

请求体:

```JSONC
{
  "groupId": "123", // 目标群聊ID
  "userId": "123", // 禁言用户ID
  "gag": 0 // 禁言时间，只能为这些时间，0-取消禁言，600-10分钟，3600-1小时，21600-6小时，43200-12小时，1-永久禁言
}
```

响应体:

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回状态消息
}
```

## 搜索推荐群聊

POST /v1/group/recommend/list

请求头:  

|名称|必须|备注|
|---|---|---|
|token|是|无|

请求体:

```JSONC
{
  "categoryId": 22, // 群聊分类id
  "keyword": "114514" // 搜索关键词
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "groups": [
      {
        "id": 9910,
        "groupId": "114514",
        "name": "这是群聊名字",
        "introduction": "这是个群聊介绍",
        "createBy": "114514", // 创建者id
        "createTime": 1754113069, // 创建时间戳
        "avatarId": 43821, // 头像id
        "del_flag": 0,
        "avatarUrl": "https://chat-img.jwznb.com/3d805b635cc54829e461102ab315381b.gif", // 群头像url
        "headcount": 16, // 群聊人数
        "readHistory": 1, // 是否开启新成员查看消息历史记录（1为开启，0为关闭）
        "alwaysAgree": 1, // 是否直接进群（1为开启，0为关闭）
        "categoryId": 22, // 群聊分类id
        "category": "技术-IT/互联网", // 群聊分类名称
        "private": 0, // 群聊是否私有（1为开启，0为关闭）
        "banId": 0, //
        "gag": 0,  // 是否禁言（1为开启，0为关闭）
        "gagBy": "", // 被禁言的id
        "msgTypeLimit": "" // 消息类型限制
      },
    // ...
    ]
  },
  "msg": "success" // 返回状态消息
}
```

## 设置消息类型限制

POST /v1/group/msg-type-limit

请求头:  

|名称|必须|备注|
|---|---|---|
|token|是|必须是群主/管理员token|

请求体:

```JSONC
{
  "groupId": "群聊id",
  "type": "消息类型" // 1-文本消息，2-图片消息，3-Markdown消息，4-文件消息，6-帖子消息，7-表情消息，8-HTML消息，10-视频消息，11-语音消息，13-语音通话（限制多个消息类型一般是 1,2,3,4··· 之类）
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回状态消息
}
```

## 编辑群聊信息

POST /v1/group/edit-group

请求头:  

|名称|必须|备注|
|-----|----|----|
|token|是|群聊管理员token|

请求体:  

```ProtoBuf
group_id: "123" // 目标群聊ID
name: "测试群聊名称" // 群聊名称
introduction: "测试群聊简介" // 群聊简介
avatarUrl: "https://..." // 群聊头像url
direct_join: 0 // 进群免审核,1为开启
history_msg: 1 // 历史消息,1为开启
category_name: "无" // 分类名
category_id: 40 // 分类ID
private: 0 // 是否私有,1为私有
```

::: details ProtoBuf数据结构

```proto
message edit_group_send {
  string group_id = 2; // 目标群聊ID
  string name = 3; // 群聊名称
  string introduction = 4; // 群聊简介
  string avatarUrl = 5; // 群聊头像url
  uint64 direct_join = 6; // 进群免审核,1为开启
  uint64 history_msg = 7; // 历史消息,1为开启
  string category_name = 8; // 分类名
  uint64 category_id = 9; // 分类ID
  uint64 private = 10; // 是否私有,1为私有
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
message edit_group {
    Status status = 1;
}
```

:::

## 获取群机器人列表

POST /v1/group/bot-list

请求头:  

|名称|必须|备注|
|-----|----|----|
|token|是|群内成员|

请求体:  

```ProtoBuf
group_id: "123" // 目标群聊ID
```

::: details ProtoBuf数据结构

```proto
message edit_group_send {
  string group_id = 2; // 目标群聊ID
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
// ...
```

::: details ProtoBuf数据结构

```proto
// 获取群机器人列表
message bot_list_send {
    string group_id = 2;
}

message bot_list {
    Status status = 1;
    repeated Bot_data bot = 2;

    repeated Instruction_data instruction = 3;
    
    message Instruction_data {
        int64 id = 1;
        string bot_id = 2;
        string name = 3; // 指令名
        string desc = 4; // 指令描述
        int32 type = 5; // 指令类型
        string hint_text = 6; // 输入框提示文字
        string default_text = 7; // 输入框默认文字
        // int32 hidden/del_flag = 8; // 是否隐藏/删除,猜的,有误欢迎指正
        int64 sort = 9; // 和排序相关 不确定
        string form = 10; // 表单
        string bot_name = 11; // 机器人名称
    }
    repeated Menu_data menu = 4; // 快捷菜单相关

    message Menu_data {
        int64 id = 1;
        string bot_id = 2;
        // int32 hidden/del_flag = 3; // 是否隐藏/删除,猜的
        string name = 4;
        string content = 5; // 内容
        int32 menu_type = 6; // 按钮类型,1-普通按钮 2-选中按钮 3-下拉选择
        int64 create_time = 7;
        // 8,9没找到
        int32 menu_action = 10; // 操作类型
        string select = 99; // 选择的选项,在选择按钮的时候也作为状态,选中为1,未选中为0
    }
}
```

:::

## 移除群聊内机器人

POST /v1/group/remove-bot

请求头:  

|名称|必须|备注|
|-----|----|----|
|token|是|群内成员|

请求体:  

```JSONC
{
  "groupId": "123", // 群聊id
  "botId": "123" // 机器人id
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回状态消息
}
```

## 设置我的群昵称

POST /v1/group/edit-my-group-nickname

请求头:  

|名称|必须|备注|
|-----|----|----|
|token|是|群内成员|

```JSONC
{
  "groupId": "123", // 目标群聊ID
  "nickname": "测试群昵称" // 欲设置的群昵称
}
```

响应体：

```JSONC
{
  "msg": "success" // 返回状态消息
}
```

## 设置群口令

POST /v1/group/edit-group-keyword

::: details 功能简介
在 /v1/group/info-add-friend 中
搜索群口令就会显示群口令绑定的相应群聊
也就是在聊天主页列表最顶上的搜索栏搜索指定群口令时会显示设置为该群口令的群聊
:::

请求头:  

|名称|必须|备注|
|---|---|---|
|token|是|必须为vip用户且是目标群群主|

请求体:

```JSONC
{
  "groupId": "123", // 目前群聊ID
  "keyword": "测试群口令" // 欲设置的群口令
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回状态消息
}
```

## 获取指定群口令关联群聊

POST /v1/group/info-add-friend

请求头:  

|名称|必须|备注|
|---|---|---|
|token|是|无|

请求体:  

```ProtoBuf
keyword: "测试群口令" // 欲要搜索的群口令
```

::: details ProtoBuf数据结构

```proto
message info_add_friend_send {
  string keyword = 2; // 欲要搜索的群口令
}
```

:::

响应体：

```ProtoBuf
status {
  number: 114514
  code: 1
  msg: "success"
}

Data {
  id: "123" // 群聊ID
  name: "测试群名称" // 群聊名称
  avatar_url: "https://..." // 群聊头像url
  avatar_id: 123; // 群聊头像ID
  introduction: "测试群聊简介" // 群聊简介
  headcount: 123 // 群人数
  createBy: "123" // 群聊创建者ID
  readHistory: 1 // 是否允许阅读历史信息，0-不允许，1-允许
  limited_msg_type: "1" // 被限制的消息类型,如1,2,3,使用","分格
  keyword: "测试群口令" // 群聊设置的口令
}
```

::: details ProtoBuf数据结构

```proto
message info_add_friend {
    Status status = 1;
    Data data = 1;

    message Data {
      string id = 1; // 群聊ID
      string name = 2; // 群聊名称
      string avatar_url = 3; // 群聊头像url
      uint64 avatar_id = 4; // 群聊头像ID
      string introduction = 5; // 群聊简介
      uint64 headcount = 6; // 群人数
      string createBy = 7; // 群聊创建者ID
      uint64 readHistory = 10; // 是否允许阅读历史信息，0-不允许，1-允许
      string limited_msg_type = 22; // 被限制的消息类型,如1,2,3,使用","分格
      string keyword = 29; // 群聊设置的口令
  }
}
```

:::

## 设置群聊消息自动销毁时间

POST /v1/group/edit-auto-delete-message

请求头:  

|名称|必须|备注|
|---|---|---|
|token|是|必须是群主token|

请求体：

```JSONC
{
  "groupId": "123", // 群聊id
  "autoDeleteMessage": 0 // 消息自动销毁时间（0-永久不删，90-2个月后删除，365-1年后删除，730-2年后删除）
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回状态消息
}
```
