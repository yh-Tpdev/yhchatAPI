---
title: instruction
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项项目表示不需要相关参数.

## 获取机器人指令列表（网页控制台）

POST /v1/instruction/web-list

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSONC
{
  "botId": "45669202" // 机器人id
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "list": [
      {
        "id": 2062, // 指令Id
        "botId": "45669202", // 机器人id
        "name": "普通指令", // 指令名称
        "desc": "指令描述", // 指令描述
        "instructionType": 1, // 指令类型，1-普通指令，2-直发指令，5-自定义输入指令，更多（如下两个指令）
        "hintText": "输入框提示文字", // 输入框提示文字
        "defaultText": "输入框默认文字", // 输入框默认文字
        "customJson": "", // 自定义输入指令json数组
        "createTime": 0, // 创建时间戳
        "sort": 0, // 排序
        "hidden": 0 // 是否隐藏(0-显示，1-隐藏)
      },
      {
        "id": 2063,
        "botId": "45669202",
        "name": "直发指令",
        "desc": "指令描述",
        "instructionType": 2,
        "hintText": "",
        "defaultText": "",
        "customJson": "",
        "createTime": 0,
        "sort": 0,
        "hidden": 0
      },
      {
        "id": 2064,
        "botId": "45669202",
        "name": "自定义输入指令",
        "desc": "指令描述",
        "instructionType": 5,
        "hintText": "",
        "defaultText": "",
        "customJson": "[{\"key\":0,\"type\":\"radio\",\"title\":\"Radio 单选框\",\"propsValue\":{\"label\":\"标签\",\"options\":\"用#分割，比如：北京#上海#天津\"},\"props\":[{\"type\":\"label\",\"name\":\"标签\",\"value\":\"\"},{\"type\":\"options\",\"name\":\"选项\",\"placeholder\":\"用#分割，如：北京#上海#天津\",\"value\":\"\"}],\"id\":\"ykwmdt\"}]",
        "createTime": 0,
        "sort": 0,
        "hidden": 0
      }
    ]
  },
  "msg": "success" // 返回消息
}
```

::: details 自定义输入指令部分解释

```JSONC
[{
  "key": 0,
  "type": "radio",
  "title": "Radio 单选框",
  "propsValue": { // propsValue是成品，保存了当前组件实际生效的配置数据。用于组件在页面上显示和运行。
    "label": "标签",
    "options": "用#分割，比如：北京#上海#天津"
  },
  "props": [{ // prop是蓝图，定义了可以配置什么，以及默认值是什么。用于渲染一个配置界面。
    "type": "label", // 类型，一个用于设置“标签”的配置项，有radio-单选框，input-输入框，switch-开关，chexkbox-多选框，textarea-多行输入框，select-选择器
    "name": "标签", // 显示给用户的名字叫“标签”
    "value": "" // 这个type预定的值，默认空
  }, {
    "type": "options",
    "name": "选项", // 显示给用户的名字叫“选项”
    "placeholder": "用#分割，如：北京#上海#天津", // 输入框里的提示文字，通常只有Radio-单选框，Checkbox-多选框，Select-选择器会有这个key
    "value": ""
  }],
  "id": "ykwmdt" // 该表单的id
}]
```

:::

## 创建机器人指令

POST /v1/instruction/create

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSONC
{
  "name": "名称", // 指令名称
  "desc": "描述", // 指令描述
  "hintText": "输入框提示文字", // 输入框提示文字
  "defaultText": "输入框默认文字", // 输入框默认文字
  "type": 1, // 指令类型，1-普通指令，2-直发指令，5-自定义输入指令
  "botId": "45669202" // 机器人id
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 编辑机器人指令

POST v1/instruction/edit

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSONC
{
  "id": 2064, // 已有的指令id
  "name": "自定义输入指令", // 指令名称
  "desc": "指令描述", // 指令描述
  "botId": "45669202", // 机器人id
  "customJson": "", // 自定义输入指令（表单指令），只有type为5的自定义输入指令需要，这个是json数组，需转义，具体设置可以看 **获取机器人指令列表（网页控制台）** 对一些表单指令的解释
  "type": 5, // 指令类型，1-普通指令，2-直发指令，5-自定义输入指令
  "delFlag": 0
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 获取机器人私聊指令

POST /v1/instruction/list

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```protobuf
id: "123123123"
```

```proto
message get_bot_instruction {
    string id = 3;
}
```

响应体：

```protobuf
status {
  number: 123456
  code: 1 // 请求状态码，1为正常
  msg: "success" // 返回消息
}
data {
  command_id: 123 // 指令id
  bot_id： 123123123 // 机器人id
  command_name: "测试指令名称" // 指令名称
  instruction_type: 5 // 指令类型，1-普通指令，2-直发指令，5-自定义输入指令
  command_defaultText: "测试默认输入文本" // 指令输入框默认文本
  command_settingsJso: "{}" // 指令设置JSON（表单指令，自定义输入指令）
}
```

```proto
message Status {
    uint64 number = 1; // 不知道干啥的,可能是请求ID
    uint64 code = 2; // 状态码,1为正常
    string msg = 3; // 返回消息
}

message instruction_list {
   Status status = 1;
   Data data = 2;
   message Data {
    uint64 command_id = 1; // 指令id
    string bot_id = 2; // 机器人id
    string command_name = 3; // 指令名称
    uint64 instruction_type = 5; // 指令类型，1-普通指令，2-直发指令，5-自定义输入指令
    string command_defaultText = 7; // 指令输入框默认文本
    string command_settingsJson = 10; // 指令设置JSON（表单指令，自定义输入指令）
   }
}
```
