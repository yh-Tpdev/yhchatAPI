---
title: group-tag
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.

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

POST /v1/group-tag/delete

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

## 获取标签绑定的用户列表

POST /v1/group-tag/members

请求头:  

|名称|必须|备注|
|---|---|---|
|token|是|无|

请求体:  

```ProtoBuf
data {
  size: 50 // 分页大小
  page: 1 // 页数
}
group_id: "123" // 群聊ID
tag_id: 123 // 标签ID
```

::: details ProtoBuf数据结构

```proto
message tag_member_send {
    Data data = 2;
    message Data {
        int32 size = 1; // 分页大小
        int32 page = 2; // 页数
    }
    string group_id = 3; // 标签所处群聊ID
    int64 tag_id = 4; // 标签ID
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
    user_id: "123" // 用户ID
    name: "测试用户名" // 用户名
    avatar_url: "https://..." // 头像URL
    int32 is_vip: 0 // 是否为vip，0-非vip用户，1-vip用户
  }
    permission_level: 0 // 权限等级, 群主100 管理员2 普通用户无/0
    gag_time: 123 // 禁言时间戳
    is_gag: 0; // 是否被禁言，0-未被禁言，1-已被禁言
}
total: 1 // 总数
```

::: details ProtoBuf数据结构

```proto
// 标签绑定的用户列表
message tag_member {
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
        int32 permission_level = 3; // 权限等级, 群主100 管理员2 普通用户无/0
        int64 gag_time = 4; // 禁言时间戳
        int32 is_gag = 5; // 是否被禁言
    }
    int64 total = 3; // 总数
}
```

:::
