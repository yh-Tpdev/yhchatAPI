---
title: document
---

未特别说明情况下请求域名均为 `chat-web-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.

## 获取开放文档菜单选项

GET /v1/document/menus

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "menu": [
      {
        "id": 1, // 菜单Id
        "name": "接入准备", // 菜单名称
        "parent_id": 0, // 父id（0-一整个大菜单，1-所属一个大菜单其中的一个选项）
        "subItems": [
          {
            "id": 3,
            "name": "开发须知",
            "parent_id": 1,
            "subItems": null
          },
          {
            "id": 4,
            "name": "服务端API列表",
            "parent_id": 1,
            "subItems": null
          },
          {
            "id": 5,
            "name": "服务端错误代码",
            "parent_id": 1,
            "subItems": null
          }
        ]
      }
    // ...
    ]
  },
  "msg": "success" // 返回消息
}
```

## 获取开放文档(Markdown版本)

GET /v1/document/detail

请求参数：

| 名称       | 必须 | 备注                           |
| ---------- | ---- | ------------------------------ |
| documentId | 是   | Id必须大写，这个参数必须带数字 |

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "detail": {
      "id": 4, // 文档id
      "name": "服务端API列表", // 该文档名称
      "parentId": 1, // 父id（0-一整个大菜单，1-所属一个大菜单其中的一个选项）
      "markdown": "# **服务端API列表** ...", // 文档内容（Markdown）
      "sort": 20, // 排序（全是20）
      "version": 0, // 版本（全是0）
      "delFlag": 0,
      "createBy": 0, // 创建者（全是0）
      "createTime": "2022-03-21T17:23:21+08:00", // 创建时间
      "updateBy": 0, // 更新该文档的用户id（全是0）
      "updateTime": "2022-03-21T17:23:25+08:00", // 更新时间
      "remark": "11" // 不知道
    }
  },
  "msg": "success" // 返回消息
}
```
