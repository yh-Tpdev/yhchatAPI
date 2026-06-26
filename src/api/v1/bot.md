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

```JSON
{
  "code": 1,
  "data": {
    "banners": [
      {
        "id": 123, // banner 的 ID
        "title": "测试标题", // 标题
        "introduction": "测试介绍", // 介绍
        "targetId": "", // "查看详情"点击后的 ID
        "targetUrl": "https://...", // "查看详情"跳转的链接
        "imageUrl": "https://...", // banner 背景图
        "sort": 123, // 排列顺序
        "delFlag": 0,
        "createTime": 0, // 创建时间
        "remark": "", // 备注
        "createBy": 0, // banner 创建者
        "typ": 2 // 类型
      }
      // ...
    ]
  },
  "msg": "success"
}
```

## 机器人商店列表

POST /v1/bot/new-list

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

响应头：

```JSON
{
  "code": 1,
  "data": {
    "bots": [
      {
        "chatId": "123", // 机器人 ID
        "chatType": "3", // 对象类别: 1-用户，2-群聊，3-机器人
        "headcount": "25", // 机器人使用人数
        "nickname": "测试机器人名称", // 机器人名字
        "introduction": "测试机器人介绍", // 机器人介绍
        "instructions": "",
        "avatarUrl": "https://..." // 机器人头像 URL
      },
      // ...
    ]
  },
  "msg": "success"
}
```

## 使用该机器人的群组

POST /v1/bot/bot-detail

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSON
{
  "id": "123" // 机器人 ID
}
```

响应体：

```JSON
{
  "code": 1,
  "data": {
    "bot": {
      "id": 1, // 排序 ID（？
      "botId": "123", // 机器人 ID
      "nickname": "测试机器人每次",  //机器人名字
      "nicknameId": 123, // 名称 ID
      "avatarId": 123, // 头像 ID
      "avatarUrl": "https://.。。", // 头像 URL
      "type": 0,  // 类型
      "introduction": "测试机器人介绍", // 机器人介绍
      "createBy": "123", // 机器人创建者 ID
      "createTime": 1231231230, // 机器人创建时间戳
      "headcount": 123, // 机器人使用人数
      "private": 0, // 是否私有（0为否，1为私人）
      "isStop": 0, // 是否停用（0为启用，1为停用）
      "settingJson": "",  // 机器人设置json（需转义）
      "del_flag": 0,
      "alwaysAgree": 1, // 是否总是同意添加群聊
      "banId": 0, // 顾名思义
      "uri": "https://chat-go.jwzhd.com/open-apis/v1/bot/send?token=" // 机器人发送消息 URL（？
    },
    "groups": [
      {
        "id": 0, // 排序 （不知道为什么很多字段没有值，而客户端加入这个群显示群聊信息正常）
        "groupId": "123", // 群组 ID
        "name": "测试群聊名称", // 群聊名字
        "introduction": "测试群聊简介", // 群聊介绍
        "createBy": "", // 群聊创建者 ID
        "createTime": 0, // 群聊创建时间
        "avatarId": 0, // 群聊头像 ID
        "del_flag": 0,
        "avatarUrl": "https://...", // 群聊头像 URL
        "headcount": 0, // 群聊人数
        "readHistory": 0, // 是否启用新成员查看历史记录
        "alwaysAgree": 0, // 是否总是直接加入群聊
        "categoryId": 0, // 分类 ID
        "category": "", // 分类
        "private": 0, // 是否私有
        "banId": 0, // ban 人的 ID
        "gag": 0,
        "gagBy": "",
        "msgTypeLimit": ""
      },
    // ...
    ],
  "msg": "success"
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

```JSON
{
  "code": 1,
  "data": {
    "botsTotal": 1, // 机器人数量
    "list": {
      "bots": [
        {
          "id": 0, // 机器人排列位置ID
          "botId": "123", // 机器人 ID
          "nickname": "测试机器人名称", // 机器人名称
          "nicknameId": 0, // 机器人名称 ID
          "avatarId": 0, // 机器人头像 ID
          "avatarUrl": "https://...", // 机器人头像 ID
          "token": "123123123123123123123", // 机器人 token
          "link": "", // 机器人分享链接？
          "type": 0, // 未知
          "introduction": "测试机器人简介", // 机器人简介
          "createBy": "", // 创建者 ID
          "createTime": 0, // 机器人创建时间
          "headcount": 0, // 未知
          "private": 0, // 是否私有
          "isStop": 0, // 是否停用
          "settingJson": "", // 机器人设置 json，需转义
          "del_flag": 0, // 删除标签
          "alwaysAgree": 0, // 拉机器人时机器人是否直接进群
          "groupLimit": 0, // 机器人进群限制
          "banId": 0, // 被封禁的 ID
          "linkStop": 0, // 未知
          "uri": "https://chat-go.jwzhd.com/open-apis/v1/bot/send?token=" // 机器人示例 API 接口
        },
      ]
    }
  },
  "msg": "success"
}
```

## 更改机器人设置

POST /v1/bot/edit-setting-json

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSON
{
  "id": "123", // 机器人 ID
  "settingJson": "[]" // 机器人设置 json，需转义
}
```

响应体：

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 更改机器人信息

POST /v1/bot/web-edit-bot

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSON
{
  "nickname":"测试机器人名称", // 机器人名称
  "introduction":"测试机器人简介", // 机器人简介
  "avatarUrl":"https://...", //机器人头像
  "botId":"123", // 机器人 ID
  "private":0 // 0-公开，1-私有
}
```

响应体：

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 获取机器人信息

POST /v1/bot/bot-info

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```protobuf
<!-- @include: @src/full.proto#BotInfoRequest-->
```

响应体:

```protobuf
<!-- @include: @src/full.proto#BotInfoResponse-->

```

## 获取机器人群聊看板

POST /v1/bot/board

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```protobuf
<!-- @include: @src/full.proto#BoardRequest-->
```

响应体:

```protobuf
<!-- @include: @src/full.proto#BoardResponse-->
```

## 删除用户对机器人的添加

POST /v1/bot/remove-follower

请求头:

| 名称  | 必须 | 备注              |
| ----- | ---- | ----------------- |
| token | 是   | 机器人管理员token |

请求体：

```JSON
{
  "botId": "123", // 机器人 ID
  "userId": "123" // 用户 ID
}
```

响应体：

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 删除群聊对机器人的添加

POST /v1/bot/remove-group

请求头:

| 名称  | 必须 | 备注              |
| ----- | ---- | ----------------- |
| token | 是   | 机器人管理员token |

请求体：

```JSON
{
  "botId": "123", // 机器人 ID
  "groupId": "123" // 群聊 ID
}
```

响应体：

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 获取可用AI模型列表

POST /v1/bot/llm/llm-setting-list

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

响应体：

```JSON
{
  "code": 1,
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
            "tag": "测试模型数据" // tag数据，若无则为 null
          }
          // ...
        ],
        "tag": "测试模型数据" // tag数据，若无则为 null
      }
      // ...
    ],
  "msg": "success"
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

```JSON
{
  "botId": "123", // 机器人 ID
}
```

响应体：

```JSON
{
  "code": 1,
  "data": {
    "historyCount": 0,
    "id": 0,
    "isBigModel": 0, // 是否开启大模型: 0-关闭，1-开启
    "isNeedReply": 0,
    "key": "", // 大模型 APIkey
    "llmBaseUrl": "",
    "llmId": 0, // 大模型组 ID
    "llmModelName": "测试大模型-chat", // 大模型名称
    "llmName": "测试大模型", // 大模型组名称
    "mcpJson": "", // mcpJSON 数据，json 转义
    "paramJson": "", // paramJSON 数据，json 转义
    "prompt": "" // AI 提示词
  },
  "msg": "success"
}
```

## 重置机器人token

POST /v1/bot/reset-bot-token

请求头:

| 名称  | 必须 | 备注              |
| ----- | ---- | ----------------- |
| token | 是   | 机器人管理员token |

请求体：

```JSON
{
  "botId": "123", // 机器人 ID
}
```

响应体：

```JSON
{
  "code": 1,
  "data": {
    "token": "123" // 重置后的机器人 token
  },
  "msg": "success"
}
```

## 创建机器人

POST /v1/bot/create-bot

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```protobuf
<!-- @include: @src/full.proto#CreateBotRequest-->
```

响应体：

```protobuf
<!-- @include: @src/full.proto#CreateBotResponse-->
```

## 设置机器人消息订阅接口

POST /v1/bot/edit-subscribed-link

请求头:

| 名称  | 必须 | 备注              |
| ----- | ---- | ----------------- |
| token | 是   | 机器人管理员token |

请求体：

```JSON
{
  "botId": "75282754", // 机器人 ID
  "link": "http(s)://xxxxxx", // 设置消息订阅接口（地址）
  "subscribeType": 0 // 订阅类别: 0-url 订阅，1-wss 订阅
}
```

响应体：

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 获取群聊内机器人设置

POST /v1/bot/get-user-settings-json

请求头:

| 名称  | 必须 | 备注            |
| ----- | ---- | --------------- |
| token | 是   | 群聊管理员token |

请求体：

```JSON
{
  "botId": "2468910", // 机器人 ID
  "chatId": "1234567" // 会话 ID(一般是群聊)
}
```

响应体： （具体settingsJson更多解释请看[这里](/api/v1/instruction.html#%E5%88%9B%E5%BB%BA%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%8C%87%E4%BB%A4)）

```JSON
{
  "code": 1,
  "data": {
    "settingsJson": [
      {
        "id": "pqkyru", // 该项的 ID（表单ID）
        "key": 0, // 第几个项，这里是第一个
        "props": [
          {
            "name": "标签", // 该项名称
            "type": "label", // 类型，一个用于设置“标签”的配置项，有 radio-单选框，input-输入框，switch-开关，chexkbox-多选框，textarea-多行输入框，select-选择器
            "value": "" // 这个类型预定的值，默认空
          },
          {
            "name": "选项",
            "placeholder": "用#分割，如：北京#上海#天津", // 带有输入框的项/类型，会有选项，然后里面有占位符，这个就是占位符文本，其实这个叫选项
            "type": "options", // 带 placeholder 的类型有，Radio 单选框，Checkbox 多选框，Select 选择器
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

请求体： （具体settingJson更多解释请看[这里](/api/v1/instruction.html#%E5%88%9B%E5%BB%BA%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%8C%87%E4%BB%A4)）

```JSON
{
  "id": "12345", // 机器人 ID
  "groupId": "678910", // 群聊 ID
  "settingJson": "" // 机器人设置 json 数组（需转义）
}
```

响应体：

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 智能体机器人清除上下文

POST /v1/bot/llm/clean-content

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|机器人创建者token|

请求体：

```JSON
{
  "botId": "25637484" // 机器人 ID
}
```

响应体：

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 获取智能体机器人知识库

POST /v1/bot/llm/knowledge/list

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|机器人创建者token|

请求体：

```JSON
{
  "botId": "123123123" // 机器人 ID
}
```

响应体：

```JSON
{
  "code": 1,
  "data": {
    "list": [
      {
        "id": 123, // 知识文件ID
        "botId": "123123123", // 机器人 ID
        "botLlmId": 123, // Llm智能体机器人 ID
        "name": "轻韵助手-第三方云湖助手：第三方扩展插件编写文档.txt",
        "url": "https://chat-file.jwznb.com/knowledge/835a1ab0d63ba9921c25d5f4e8c3bfe5.txt",
        "status": 0, // 知识库文件处理状态: 0-处理中，1-处理成功，2-处理失败
        "isStop": 0, // 是否停用此文件: 0-不停用，1-停用
        "charLength": 0, // 字符长度
        "paragraphCount": 0, // 分段数
        "createBy": "123", // 知识库文件创建者 ID
        "createTime": 123123123, // 知识库文件创建时间戳
        "updateBy": "", // 知识库文件更新用户 ID
        "updateTime": 0, // 知识库文件更新时间戳
        "delFlag": 0 // 删除标签
      },
      // ...
    ]
  },
  "msg": "success"
}
```

## 智能体机器人上传知识文件

POST /v1/bot/llm/knowledge/create

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|机器人创建者token|

请求体：

```JSON
{
  "botId": "123123123", // 机器人 ID
  "knowledgeId": 123 // 知识文件 ID
}
```

响应体：

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 获取我创建的机器人

POST /v1/bot/console/my-bots

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

响应体：

```JSON
{
  "code": 1,
  "data": {
    "botsTotal": 1, // 创建的机器人总数
    "list": {
      "bots": [
        {
          "botId": "123123123", // 机器人 ID
          "nickname": "测试机器人名称", // 机器人名称
          "avatarUrl": "https://...", // 机器人头像
          "token": "123123123123123123123", // 机器人 token
          "link": "", // 订阅链接
          "linkStop": "0", // 订阅链接是否被停用: 0-未停用，1-已停用
          "subscribeType": "0", // 订阅类别: 0-url 订阅，1-wss 订阅
          "settingJson": "", // 机器人设置配置 json，需将 json 数据转义后填入
          "introduction": "测试机器人简介" // 机器人简介
        }
        // ...
      ]
    }
  },
  "msg": "success"
}
```

## 获取群机器人权限列表

POST /v1/bot/group-permission-get

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

响应体：

```JSON
{
  "code": 1,
  "data": {
    "allowEditGroupInfo": 0, // 允许编辑群信息: 0-不允许，1-允许
    "allowGagMember": 0, // 允许禁言用户: 0-不允许，1-允许
    "allowRemoveMember": 0, // 允许移除用户: 0-不允许，1-允许
    "allowGroupTagManage": 0 // 允许管理群标签: 0-不允许，1-允许
  },
  "msg": "success"
}
```

## 获取智能体机器人参数参考

POST /v1/bot/llm/llm-setting-ref-params

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体：

```JSON
{
  "chatId": "123123123", // 对象 ID
  "chatType": 2 // 对象类别
}
```

响应体：

```JSON
{
  "code": 1,
  "data": {
    "list": [] // 暂无实例数据
  },
  "msg": "success"
}
```

## 更改群机器人权限

POST /v1/bot/group-permission-edit

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|必须为目标群群主|

请求体：

```JSON
{
  "botId": "123123", // 机器人 ID
  "groupId": "123123123", // 群聊 ID
  "allowEditGroupInfo": 0, // 允许编辑群信息: 0-不允许，1-允许
  "allowGagMember": 0, // 允许禁言用户: 0-不允许，1-允许
  "allowRemoveMember": 0, // 允许移除用户: 0-不允许，1-允许
  "allowGroupTagManage": 0 // 允许管理群标签: 0-不允许，1-允许
}
```

响应体：

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 获取使用者列表

```http request
POST /v1/bot/follower-list
```

请求头：

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```protobuf
<!-- @include: @src/full.proto#ListFollowerRequest-->
```

响应体：

```protobuf
<!-- @include: @src/full.proto#ListFollowerResponse-->
```

## 获取加入群聊列表

```http request
POST /v1/bot/join-group-list
```

请求头：

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```protobuf
<!-- @include: @src/full.proto#JoinGroupListRequest-->
```

响应体：

```protobuf
<!-- @include: @src/full.proto#JoinGroupListResponse-->
```
