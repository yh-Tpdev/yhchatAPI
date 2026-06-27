---
url: /api/v1/friend.md
---
未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`\
没写请求/响应项目表示不需要相关参数.

## 添加用户/群聊/机器人

```http request
POST /v1/friend/apply
```

请求头

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体

```JSON
{
  "chatId": "123", // 目标对象 ID
  "chatType": 2, // 目标对象类别: 1-用户，2-群聊，3-机器人
  "remark": "测试申请简介" // 申请简介
}
```

响应体

::: tabs
@tab:active 正常添加

```JSON
{
  "code": 1,
  "msg": "success"
}
```

@tab 无效对象 ID

```JSON
{
  "code": -1,
  "msg": "<群聊/用户/机器人>不存在"
}
```

@tab 已在添加过对象 ID

```JSON
{
  "code": -9,
  "msg": "您已添加过对方"
}
```

:::

## 删除用户/群聊/机器人

```http request
POST /v1/friend/delete-friend
```

请求头

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体

```JSON
{
  "chatId": "123", // 目标对象 ID
  "chatType": 2, // 目标对象类别: 1-用户，2-群聊，3-机器人
}
```

响应体

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 处理用户/群聊/机器人添加申请

```http request
POST /v1/friend/agree-apply
```

请求头

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体

```JSON
{
  "id": 123, // 申请 ID
  "agree": 1 // 1-通过请求，2-拒绝请求，3-显示请求过期，4-显示已解散
}
```

响应体

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 忽略申请

```http request
POST /v1/friend/ignore-apply
```

请求头

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体

```JSON
{
  "id": 123, // 申请 ID
  "ignore": 1
}
```

响应体

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 获取通讯录

```http request
POST /v1/friend/address-book-list
```

请求头

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体

```protobuf
<!-- @include: @src/full.proto#AddressBookListRequest-->
```

响应体

```protobuf
<!-- @include: @src/full.proto#AddressBookListResponse-->
```

## 获取申请/邀请列表

```http request
POST /v1/friend/request-list
```

请求头

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

响应体

```protobuf
<!-- @include: @src/full.proto#RequestListResponse -->
```

## 设置会话免打扰

```http request
POST /v1/friend/no-notify
```

请求头

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体

```JSON
{
  "chatId": "118738312", // 会话 ID
  "noNotify": 0 // 0-取消免打扰，1-设置免打扰
}
```

响应体

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 删除好友/邀请请求

```http request
POST /v1/friend/delete-request
```

请求头

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体

```JSON
{
  "id": 123 // 请求ID
}
```

响应体

```JSON
{
  "code": 1,
  "msg": "success"
}
```
