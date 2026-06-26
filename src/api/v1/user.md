---
title: user
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.

## 获取人机验证图片

POST /v1/user/captcha

响应体:

```JSON
{
  "code": 1,
  "data": {
    "b64s": "image//png;base64...", // 人机验证图片 Base64
    "id": "123" // 人机验证 ID
  },
  "msg": "success"
}
```

## 短信验证码登录

POST /v1/user/verification-login

请求体:

```JSON
{
  "mobile": "12312312300", // 登录手机号
  "captcha": "123123", // 手机验证码
  "deviceId": "awa", // 登录设备唯一标识符，可自定义
  "platform": "windows" // 登录平台名称,一般为 windows,web 等可自定义,不校验
}
```

响应体:

```JSON
{
  "code": 1,
  "data": {
    "token": "f87TJHF9-****-****-************" // 账户 token
  },
  "msg": "success"
}
```

## 获取用户自身信息

GET /v1/user/info

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

响应体:

```protobuf
<!-- @include: @src/full.proto#UserInfo -->
```

## 获取用户信息

POST /v1/user/get-user

请求头:

| 名称  | 必须 | 备注         |
| ----- | ---- | ------------ |
| token | 是   | 可以瞎写一个 |

请求体:

```protobuf
<!-- @include: @src/full.proto#GetUserRequest -->
```

响应体:

```protobuf
// 勋章信息
<!-- @include: @src/full.proto#MedalInfo -->

// 备注信息
<!-- @include: @src/full.proto#RemarkInfo -->

// 个人信息
<!-- @include: @src/full.proto#ProfileInfo -->

// 获取用户响应
<!-- @include: @src/full.proto#GetUserResponse -->
```

## 获取自身勋章

POST /v1/user/medal

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 空   |

响应体:

```protobuf
// 获取自身勋章
<!-- @include: @src/full.proto#GetSelfMedal -->

// 勋章信息
<!-- @include: @src/full.proto#MedalInfo -->
```

## 更改自身名称

POST /v1/user/edit-nickname

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 空   |

请求体:

```protobuf
<!-- @include: @src/full.proto#EditNicknameRequest -->
```

响应体:

```protobuf
<!-- @include: @src/full.proto#StatusResponse -->
```

## 更改自身头像

POST /v1/user/edit-avatar

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 空   |

请求体:

```protobuf
<!-- @include: @src/full.proto#EditAvatarRequest -->
```

响应体:

```protobuf
<!-- @include: @src/full.proto#StatusResponse -->
```

## 用户邮箱密码登录

POST /v1/user/email-login

请求体：

```JSON
{
    "email": "123456@example.com", // 登录邮箱
    "password": "123456", // 登录密码
    "deviceId": "awa", // 登录设备唯一标识符
    "platform": "android" // 登录平台名称
}
```

响应体:

```JSON
{
    "code": 1,
    "data": {
        "token": "abcdefg1-xxxx-xxxx-xxxxxxxxxx" // 账号 token
    },
    "msg": "success"
}
```

## 退出登录

POST /v1/user/logout

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 空   |

请求体:

```JSON
{
  "device-id": "123123123" // 设备 ID
}
```

响应体:

```JSON
{
    "code": 1,
    "msg": "success"
}
```

## 获取发现群聊分区

POST /v1/user/recommend-category-list

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 空   |

请求体：

```JSON
{
 "appChannel": "default"
}
```

响应体：

```JSON
{
  "code": 1,
  "data": {
    "categories": [ // 群聊类别
      "精选",
      "粉丝群",
      "地区",
      "IT/互联网",
      "玩机",
      "游戏",
      "资讯订阅"
    ]
  },
  "msg": "success"
}
```

## 获取发现群聊列表

POST /v1/user/recommend-list

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 空   |

请求体：

```JSON
{
  "category": "精选", // 群聊类别
  "keyword": "", // 关键词
  "size": 30, // 尺寸
  "page": 1 // 页码
}
```

响应体：

```JSON
{
  "code": 1,
  "data": {
    "groupList": [
      {
        "chatId": "123", // 群聊 ID
        "banId": 0, // 顾名思义
        "nickname": "测试群聊名称", // 群聊名字
        "introduction": "测试群聊简介", // 群聊介绍
        "avatarUrl": "https://...", // 群聊头像
        "headcount": 123, // 群聊内人数
        "createTime": 1231231230 // 创建时间戳
      }
     // ...
    ]
  },
  "msg": "success"
}
```

## 获取机器人推荐列表

POST /v1/user/recommend

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 空   |

响应体：

```JSON
{
  "code": 1,
  "data": {
    "botList": [
      {
        "chatId": "123", // 机器人 ID
        "chatType": "3", // 识别对象类别，1-用户，2-群聊，3-机器人
        "headcount": "123", // 使用人数
        "nickname": "测试机器人名称", // 机器人名称
        "introduction": "测试机器人简介", // 机器人简介
        "introductions": "",
        "avatarUrl": "https://...", // 机器人头像 url
        "isAdd": 1, // 是否添加（1为可添加，0为不可添加）
        "isApply": 0, // 是否启用
        "alwaysAgree": 0 // 是否自动进群
      }
    // ...
    ]
  },
  "msg": "success"
}
```

## 模块忽略信息获取

POST /v1/user/module-ignore-info

请求头:

| 名称  | 必须 | 备注    |
| ----- | ---- | ------- |
| token | 是   | 需要vip |

请求体：

```JSON
{
 "deviceId": "1234"
}
```

响应体：

```JSON
{
  "code": 1,
  "data": {
    "ignore": {
      "id": 0, // 可能是模块设置 ID
      "userId": "1234567", // 用户 ID
      "updateTime": 123455660, // 更新时间戳
      "deviceId": "1234", // 设备 ID
      "ignore": ",30,20,10" // 模块 ID: 10-隐藏社区页面，20-隐藏发现页面，30-精简我的界面
    }
  },
  "msg": "success"
}
```

## 设置自定义模块

POST /v1/user/module-ignore

请求头:

| 名称  | 必须 | 备注    |
| ----- | ---- | ------- |
| token | 是   | 需要vip |

请求体：

```JSON
{
 "deviceId": "1234",
 "ignore": ",30,20,10" // 模块 ID，10-隐藏社区页面，20-隐藏发现页面，30-精简我的界面
}
```

响应体：

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 获取通知状态

POST /v1/user/notification-status

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 空   |

请求体：

```JSON
{
  "deviceId": "1114514", // 设备 ID
  "registrationId": "114514" // 注册 ID
}
```

响应体：

```JSON
{
  "code": 1,
  "data": {
    "notification": { // 通知 JSON
      "id": 110061, // 注册 ID
      "userId": "114514", // 用户 ID
      "deviceId": "114514", // 设备 ID
      "registrationId": "114514", // 通知注册 ID
      "isOpen": 1, // 是否打开系统消息通知（设置”系统消息通知“选项可控制这个数值，1-打开，0-关闭）
      "type": 2, // 类型
      "delFlag": 0,
      "createTime": 1231231230, // 创建时间戳
      "updateTime": 1231231230 // 更新时间戳
    }
  },
  "msg": "success"
}
```

## 获取通知注册信息

POST /v1/user/notification-info

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 空   |

请求体：

```JSON
{
  "deviceId": "114514", // 设备 ID
  "registrationId": "114514", // 注册通知 ID
  "isOpen": 1, // // 是否打开系统消息通知（设置”系统消息通知“选项可控制这个数值，1-打开，0-关闭）
  "type": 2 // 类型
}
```

响应体：

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 金币增减记录

POST /v1/user/gold-coin-increase-decrease-record

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSON
{
  "size": 20, // 单页数目
  "page": 1 // 页数
}
```

响应体：

```JSON
{
  "code": 1,
  "data": {
    "goldCoinRecord": [
      {
        "id": 193275, // 金币记录 ID
        "userId": "用户 ID",
        "typ": 8, // 类型
        "beforeAmount": 55.01, // 之前金币数量
        "afterAmount": 57.01, // 之后的金币数量
        "changeAmount": 2, // 增加/减少的金币数量
        "reason": "抽奖金币", // 增加/减少金币的原因
        "remark": "", // 备注
        "createTime": 1754669040 // 创建时间戳
      }
    // ...
    ],
    "total": 243 // 金币记录的总数量
  },
  "msg": "success"
}
```

## 绑定手机号

POST /v1/user/bing-phone

!!不要问为什么是 bing,我也不知道.!!

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSON
{
  "phone": "12312311230", // 欲绑定手机号
  "captcha": "123123" // 短信验证码
}
```

响应体：

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 绑定邮箱

POST /v1/user/bing-email

!!不要问为什么是 bing,我也不知道.!!

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSON
{
  "email": "123@123.com", // 欲绑定邮箱
  "captcha": "123123" // 邮件验证码
}
```

响应体：

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 更改绑定手机号

POST /v1/user/change-phone-check

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSON
{
  "phone": "12312341230", // 欲绑定手机号
  "captcha": "123123" // 短信验证码
}
```

响应体：

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 更改绑定邮箱

POST /v1/user/change-email-check

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSON
{
  "email": "123@123.com", // 欲绑定邮箱
  "captcha": "123123" // 邮件验证码
}
```

响应体：

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 更改登录密码

POST /v1/user/forget-password

请求体：

```JSON
{
  "email": "123@123.com", // 欲绑定邮箱
  "captcha": "123123", // 邮件验证码
  "password": "测试登录密码" // 登录密码
}
```

响应体：

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 修改自身个人资料

POST /v1/user/save-user-data

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 空   |

请求体：

```JSON
{
  "introduction": "111", // 个人简介
  "gender": 3, // 性别: 1-男，2-女，3-其他
  "birthday": 1231231230, // 生日时间戳
  "province": "北京市", // 所在地省份
  "city": "北京城区", // 所在地城市
  "district": "东城区", // 所在地城区
  "locationCode": "110101" // 所在地邮政编码
}
```

响应体：

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 获取自身个人资料

POST /v1/user/get-user-data

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 空   |

响应体：

```JSON
{
  "code": 1,
  "data": {
    "data": {
      "id": 123, // 个人简介 ID
      "userId": "123", // 用户 ID
      "lastLoginTime": 1231231230, // 最后登录时间戳
      "update_time": 1231231230, // 个人简介最后更新时间戳
      "introduction": "测试个人简介", // 个人简介
      "gender": 3, // 性别: 1-男，2-女，3-其他
      "birthday": 1231231230, // 生日时间戳
      "province": "北京市", // 所在地省份
      "city": "北京城区", // 所在地城市
      "district": "东城区", // 所在地城区
     "locationCode": "110101" // 所在地邮政编码
    }
  },
  "msg": "success"
}
```

## 获取用户显示广告

POST /v1/user/get-user-show-adv

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 空   |

响应体：

```JSON
{
  "code": 1,
  "data": {
    "androidCodeId": "123", // Android ID
    "bottomHeight": 123, // 底部高度
    "iosCodeId": "123", // IOS ID
    "isShow": 0 // 是否显示: 0-不显示，1-显示
  },
  "msg": "success"
}
```

## 设置好友备注

POST /v1/user/save-user-remarks

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 空   |

请求体：

```JSON
{
  "friendId": "123123123", // 好友 ID
  "name": "测试好友备注名称", // 备注名称
  "phone": "123123123", // 备注手机号
  "others": "[{\"key\":\"123\",\"value\":\"123\"}]" // 更多备注，需将数据转义后填入
}
```

响应体：

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 注销账号

POST /v1/user/cancel-user

!!谁 TMD 想出来的这种命名?!!

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSON
{
  "phone": "123123123", // 手机号，手机号与邮箱之中只要有一个就行
  "email": "123123123@123.com", // 邮箱，手机号与邮箱之中只要有一个就行
  "captcha": "123123" // 短信/邮件验证码
}
```

响应体：

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 下线设备

POST /v1/user/device-offline

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSON
{
  "deviceId": "123123123123123" // 设备 ID，为登陆时填写的设备 ID
}
```

响应体：

```JSON
{
  "code": 1,
  "msg": "success"
}
```
