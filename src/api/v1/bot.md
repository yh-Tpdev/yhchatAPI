---
title: bot
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.

## 机器人商店banner

POST /v1/bot/banner

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

响应头：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "banners": [
      {
        "id": 123, // banner的id
        "title": "测试标题", // 标题
        "introduction": "测试介绍", // 介绍
        "targetId": "", // "查看详情"点击后的id
        "targetUrl": "https://...", // "查看详情"跳转的链接
        "imageUrl": "https://...", // banner背景图
        "sort": 123, // 排列顺序
        "delFlag": 0,
        "createTime": 0, // 创建时间
        "remark": "", // 备注
        "createBy": 0, // banner创建者
        "typ": 2 // 类型
      }
      // ...
    ]
  },
  "msg": "success" // 返回消息
}
```

## 机器人商店列表

POST /v1/bot/new-list

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

响应头：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "bots": [
      {
        "chatId": "123", // 机器人id
        "chatType": "3", // 识别对象类别，1-用户，2-群聊，3-机器人
        "headcount": "25", // 机器人使用人数
        "nickname": "测试机器人名称", // 机器人名字
        "introduction": "测试机器人介绍", // 机器人介绍
        "instructions": "",
        "avatarUrl": "https://..." // 机器人头像url
      }
     // ...
    ]
  },
  "msg": "success" // 返回消息
}
```

## 使用该机器人的群组

POST /v1/bot/bot-detail

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSONC
{
  "id": "123" // 机器人id
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "bot": {
      "id": 1, // 排序id（？
      "botId": "123", // 机器人id
      "nickname": "测试机器人每次",  //机器人名字
      "nicknameId": 123, // 名称id
      "avatarId": 123, // 头像id
      "avatarUrl": "https://.。。", // 头像url
      "type": 0,  // 类型
      "introduction": "测试机器人介绍", // 机器人介绍
      "createBy": "123", // 机器人创建者id
      "createTime": 1231231230, // 机器人创建时间戳
      "headcount": 123, // 机器人使用人数
      "private": 0, // 是否私有（0为否，1为私人）
      "isStop": 0, // 是否停用（0为启用，1为停用）
      "settingJson": "",  // 机器人设置json（需转义）
      "del_flag": 0,
      "alwaysAgree": 1, // 是否总是同意添加群聊
      "banId": 0, // 顾名思义
      "uri": "https://chat-go.jwzhd.com/open-apis/v1/bot/send?token=" // 机器人发送消息url（？
    },
    "groups": [
      {
        "id": 0, // 排序 （不知道为什么很多字段没有值，而客户端加入这个群显示群聊信息正常）
        "groupId": "123", // 群组id
        "name": "测试群聊名称", // 群聊名字
        "introduction": "测试群聊简介", // 群聊介绍
        "createBy": "", // 群聊创建者id
        "createTime": 0, // 群聊创建时间
        "avatarId": 0, // 群聊头像id
        "del_flag": 0,
        "avatarUrl": "https://...", // 群聊头像url
        "headcount": 0, // 群聊人数
        "readHistory": 0, // 是否启用新成员查看历史记录
        "alwaysAgree": 0, // 是否总是直接加入群聊
        "categoryId": 0, // 类别id
        "category": "", // 类别
        "private": 0, // 群聊是否私有
        "banId": 0, // ban人的id
        "gag": 0,
        "gagBy": "",
        "msgTypeLimit": ""
      },
    // ...
    ],
  "msg": "success" // 返回消息
  },
}
```

## 获取创建的所有机器人信息

POST /v1/bot/bot-group-list

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "botsTotal": 1, // 机器人数量
    "list": {
      "bots": [
        {
          "id": 0, // 机器人排列位置ID
          "botId": "123", // 机器人ID
          "nickname": "测试机器人名称", // 机器人名称
          "nicknameId": 0, // 机器人名称ID
          "avatarId": 0, // 机器人头像ID
          "avatarUrl": "https://...", // 机器人头像ID
          "token": "123123123123123123123", // 机器人token
          "link": "", // 机器人分享链接？
          "type": 0, // 未知
          "introduction": "测试机器人简介", // 机器人简介
          "createBy": "", // 创建者id
          "createTime": 0, // 机器人创建时间
          "headcount": 0, // 未知
          "private": 0, // 是否私有
          "isStop": 0, // 是否停用
          "settingJson": "", // 机器人设置json，需转义
          "del_flag": 0, // 删除标签
          "alwaysAgree": 0, // 拉机器人时机器人是否直接进群
          "groupLimit": 0, // 机器人进群限制
          "banId": 0, // 被封禁的id
          "linkStop": 0, // 未知
          "uri": "https://chat-go.jwzhd.com/open-apis/v1/bot/send?token=" // 机器人示例API接口
        },
      ]
    }
  },
  "msg": "success" // 返回消息
}
```

## 更改机器人设置

POST /v1/bot/edit-setting-json

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSONC
{
  "id": "123", // 机器人id
  "settingJson": "[]" // 机器人设置json，需转义
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 更改机器人信息

POST /v1/bot/web-edit-bot

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSONC
{
  "nickname":"测试机器人名称", // 机器人名称
  "introduction":"测试机器人简介", // 机器人简介
  "avatarUrl":"https://...", //机器人头像
  "botId":"123", // 机器人ID
  "private":0 // 0-公开，1-私有
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 获取机器人信息

POST /v1/bot/bot-info

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```ProtoBuf
id: 123 // 机器人ID
```

::: details ProtoBuf数据结构

```proto
message bot_info_send {
    string id = 2; // 机器人ID
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
Bot_data {
  bot_id: "123" // 机器人ID
  name: "测试机器人名称" // 机器人名称
  name_id: 123 // 机器人名称ID
  avatar_url: "https://..." // 机器人头像url
  avatar_id: 123 // 机器人头像ID
  introduction: "测试机器人介绍" // 机器人介绍
  create_by: "123" // 机器人创建者ID
  create_time: 123123123 // 机器人创建时间戳
  headcount: 123 // 使用人数
  private: 0 // 是否为私有，0-公开，1-私有
  is_stop: 0 // 是否停用，0-启用，1-停用
  always_agree: 0 // 自动进群，0-不自动进群，1-自动进群
  do_not_disturb: 0 // 免打扰，0-不免打扰，1-免打扰
  top: 0 // 置顶，0-未置顶，1-已置顶
  group_limit: 0 // 限制进群，0-允许进群，1-限制进群
}
```

::: details ProtoBuf数据结构

```proto
// 获取机器人信息返回信息
message bot_info {
    Status status = 1;
    Bot_data data = 2;
    message Bot_data {
        string bot_id = 1; // 机器人ID
        string name = 2; // 机器人名称
        int64 name_id = 3; // 机器人名称ID
        string avatar_url = 4; // 机器人头像url
        string avatar_id = 5; // 机器人头像ID
        string introduction = 6; // 机器人介绍
        string create_by = 7; // 机器人创建者ID
        int64 create_time = 8; // 机器人创建时间戳
        int64 headcount = 9; // 使用人数
        int32 private = 10; // 是否为私有，0-公开，1-私有
        int32 is_stop = 11; // 是否停用，0-启用，1-停用
        int32 always_agree = 13; // 自动进群，0-不自动进群，1-自动进群
        int32 do_not_disturb = 15; // 免打扰，0-不免打扰，1-免打扰
        int32 top = 18; // 置顶，0-未置顶，1-已置顶
        int32 group_limit = 20; // 限制进群，0-允许进群，1-限制进群
    }
}

```

:::

## 获取机器人群聊看板

POST /v1/bot/board

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```ProtoBuf
id: 123 // 群聊ID
chat_type: 2 // 对象类型 1-用户 2-群聊 3-机器人
```

::: details ProtoBuf数据结构

```proto
// 看板
message board_send {
    string id = 3; // 群聊/用户/机器人ID
    int64 chat_type = 4; // 对象类型 1-用户 2-群聊 3-机器人
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
Board_data {
  bot_id: "123" // 机器人ID
  chat_id: "123" // 对象ID
  chat_type: 2 // 对象类别，2-群聊，3-机器人
  content: "测试看板内容" // 看板内容
  content_type = 5; // 看板内容类别，1-文本，2-markdown，3-html
  last_update_time: 123123123 // 最后更新时间戳
  bot_name: "测试机器人名称" // 设置看板机器人名称
}
```

::: details ProtoBuf数据结构

```proto
// 获取看板返回
message board {
    Status status = 1;
    Board_data data = 2;
    message Board_data {
        string bot_id = 1; // 机器人ID
        string chat_id = 2; // 对象ID
        int32 chat_type = 3; // 对象类别，2-群聊，3-机器人
        string content = 4; // 看板内容
        int32 content_type = 5; // 看板内容类别，1-文本，2-markdown，3-html
        int64 last_update_time = 6; // 最后更新时间戳
        string bot_name = 7; // 设置看板机器人名称
    }
}
```

:::

## 删除用户对机器人的添加

POST /v1/bot/remove-follower

请求头:

| 名称  | 必须 | 备注              |
| ----- | ---- | ----------------- |
| token | 是   | 机器人管理员token |

请求体：

```JSONC
{
  "botId": "123", // 机器人ID
  "userId": "123" // 用户ID
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 删除群聊对机器人的添加

POST /v1/bot/remove-group

请求头:

| 名称  | 必须 | 备注              |
| ----- | ---- | ----------------- |
| token | 是   | 机器人管理员token |

请求体：

```JSONC
{
  "botId": "123", // 机器人ID
  "groupId": "123" // 群聊ID
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 获取可用AI模型列表

POST /v1/bot/llm/llm-setting-list

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "list": [
      {
        "icon": "https://...", // 模型组图标
        "id": 1, // 模型组ID
        "name": "测试AI大模型", // 模型组名称
        "params": "[{\"name\": \"API Key\", \"type\": \"input\"}]", // 参数模板
        "parent_id": 0, // 参数ID
        "subItems": [
          {
            "icon": null, // 模型图标
            "id": 161, // 模型ID
            "name": "测试AI大模型-chat", // 模型名称
            "params": "[{\"name\": \"API Key\", \"type\": \"input\"}]", // 参数模板
            "parent_id": 1, // 参数模板ID
            "subItems": null,
            "tag": "测试模型数据" // tag数据，若无则为null
          }
          // ...
        ],
        "tag": "测试模型数据" // tag数据，若无则为null
      }
      // ...
    ],
  "msg": "success" // 返回消息
  },
}
```

## 获取机器人大模型设置

POST /v1/bot/llm/llm-setting-ref-info

请求头:

| 名称  | 必须 | 备注              |
| ----- | ---- | ----------------- |
| token | 是   | 机器人管理员token |

请求体：

```JSONC
{
  "botId": "123", // 机器人ID
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "historyCount": 0,
    "id": 0,
    "isBigModel": 0, // 是否开启大模型，0-关闭，1-开启
    "isNeedReply": 0,
    "key": "", // 大模型APIkey
    "llmBaseUrl": "",
    "llmId": 0, // 大模型组ID
    "llmModelName": "测试大模型-chat", // 大模型名称
    "llmName": "测试大模型", // 大模型组名称
    "mcpJson": "", // mcpJSON数据，json转义
    "paramJson": "", // paramJSON数据，json转义
    "prompt": "" // AI提示词
  },
  "msg": "success" // 返回消息
}
```

## 重置机器人token

POST /v1/bot/reset-bot-token

请求头:

| 名称  | 必须 | 备注              |
| ----- | ---- | ----------------- |
| token | 是   | 机器人管理员token |

请求体：

```JSONC
{
  "botId": "123", // 机器人ID
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "token": "123" // 重置后的机器人token
  },
  "msg": "success" // 返回消息
}
```

## 创建机器人

POST /v1/bot/create-bot

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```ProtoBuf
name: 2 //机器人名称
introduction: 3 //机器人简介
avatar_url：4 // 机器人头像Url
private:5 // 是否私有(0-公开，1-私有)
```

::: details ProtoBuf数据结构

```proto
message CreateBotRequest {
    string name = 2;                // 机器人名称
    string introduction = 3;        // 机器人简介
    string avatar_url = 4;          // 头像URL
    int32 private = 5;              // 是否私有(0-公开，1-私有)
}
```

:::

响应体：

```proto
message CreateBotResponse {
    Status status = 1;
    BotData data = 2;

    message Status {
        int64 number = 1;           // 可能是请求ID
        int32 code = 2;             // 1表示成功
        string msg = 3;             // success
    }

    message BotData {
        string bot_id = 1;          // 创建的机器人ID
    }
}
```

## 设置机器人消息订阅接口

POST /v1/bot/edit-subscribed-link

请求头:

| 名称  | 必须 | 备注              |
| ----- | ---- | ----------------- |
| token | 是   | 机器人管理员token |

请求体：

```JSONC
{
  "botId": "75282754", // 机器人id
  "link": "http(s)://xxxxxx" // 设置消息订阅接口（地址）
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 获取群聊内机器人设置

POST /v1/bot/get-user-settings-json

请求头:

| 名称  | 必须 | 备注            |
| ----- | ---- | --------------- |
| token | 是   | 群聊管理员token |

请求体：

```JSONC
{
  "botId": "2468910", // 机器人id
  "chatId": "1234567" // 会话id(一般是群聊)
}
```

响应体： （具体settingsJson更多解释请看[这里](https://yh-api.yyyyt.top/api/v1/instruction.html#%E5%88%9B%E5%BB%BA%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%8C%87%E4%BB%A4)）

```JSONC
{
  "code": 1,
  "data": {
    "settingsJson": [
      {
        "id": "pqkyru", // 该项的id（表单id）
        "key": 0, // 第几个项，这里是第一个
        "props": [
          {
            "name": "标签", // 该项名称
            "type": "label", // 类型，一个用于设置“标签”的配置项，有radio-单选框，input-输入框，switch-开关，chexkbox-多选框，textarea-多行输入框，select-选择器
            "value": "" // 这个类型预定的值，默认空
          },
          {
            "name": "选项",
            "placeholder": "用#分割，如：北京#上海#天津", // 带有输入框的项/类型，会有选项，然后里面有占位符，这个就是占位符文本，其实这个叫选项
            "type": "options", // 带placeholder的类型有，Radio 单选框，Checkbox 多选框，Select 选择器
            "value": ""
          }
        ],
        "propsValue": {
          "label": "标签",
          "options": "用#分割，如：北京#上海#天津"
        },
        "title": "Radio 单选框", // 该项标题
        "type": "radio"
      },
      {
        "id": "xmmtbi",
        "key": 1,
        "props": [
          {
            "name": "标签",
            "type": "label",
            "value": ""
          },
          {
            "name": "默认内容",
            "type": "defaultValue",
            "value": ""
          },
          {
            "name": "占位文本",
            "type": "placeholder",
            "value": ""
          }
        ],
        "propsValue": {
          "defaultValue": "默认内容",
          "label": "标签",
          "placeholder": "占位文本"
        },
        "title": "Input 输入框",
        "type": "input"
      },
      {
        "id": "vnafdx",
        "key": 2,
        "props": [
          {
            "name": "标签",
            "type": "label",
            "value": ""
          },
          {
            "name": "默认状态",
            "placeholder": "1：默认打开，0：默认关闭",
            "type": "defaultValue",
            "value": ""
          }
        ],
        "propsValue": {
          "defaultValue": "1：默认打开，0：默认关闭",
          "label": "标签"
        },
        "title": "Switch 开关",
        "type": "switch"
      },
      {
        "id": "sdudlm",
        "key": 3,
        "props": [
          {
            "name": "标签",
            "type": "label",
            "value": ""
          },
          {
            "name": "选项",
            "placeholder": "用#分割，如：北京#上海#天津",
            "type": "options",
            "value": ""
          }
        ],
        "propsValue": {
          "label": "标签",
          "options": "用#分割，如：北京#上海#天津"
        },
        "title": "Checkbox 多选框",
        "type": "checkbox"
      },
      {
        "id": "qievxs",
        "key": 4,
        "props": [
          {
            "name": "标签",
            "type": "label",
            "value": ""
          },
          {
            "name": "占位文本",
            "type": "placeholder",
            "value": ""
          }
        ],
        "propsValue": {
          "label": "标签",
          "placeholder": "占位文本"
        },
        "title": "textarea 多行输入框",
        "type": "textarea"
      },
      {
        "id": "pzdslt",
        "key": 5,
        "props": [
          {
            "name": "标签",
            "type": "label",
            "value": ""
          },
          {
            "name": "选项",
            "placeholder": "用#分割，如：北京#上海#天津",
            "type": "options",
            "value": ""
          }
        ],
        "propsValue": {
          "label": "标签",
          "options": "用#分割，如：北京#上海#天津"
        },
        "title": "Select 选择器",
        "type": "select"
      }
    ]
  },
  "msg": "success"
}
```

## 群聊内机器人设置保存

POST /v1/bot/send-setting-json

请求头:

| 名称  | 必须 | 备注            |
| ----- | ---- | --------------- |
| token | 是   | 群聊管理员token |

请求体： （具体settingJson更多解释请看[这里](https://yh-api.yyyyt.top/api/v1/instruction.html#%E5%88%9B%E5%BB%BA%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%8C%87%E4%BB%A4)）

```JSONC
{
  "id": "12345", // 机器人id
  "groupId": "678910", // 群聊id
  "settingJson": "" // 机器人设置json数组（需转义）
}
```
