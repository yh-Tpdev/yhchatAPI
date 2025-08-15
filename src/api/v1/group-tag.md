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
