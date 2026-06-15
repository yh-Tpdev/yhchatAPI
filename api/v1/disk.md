---
url: /api/v1/disk.md
---
未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`\
没写请求/响应项目表示不需要相关参数.

## 创建群网盘文件夹

POST /v1/disk/create-folder

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```JSON
{
  "chatId": "群聊id", // 群聊 id
  "chatType": 2, // 会话类型
  "folderName": "文件名",
  "parentFolderId": 0 // 父文件夹 id
}
```

响应体:

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 获取群网盘文件列表

POST /v1/disk/file-list

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```JSON
{
  "chatId": "群聊 id",
  "chatType": 2, // 会话类型
  "folderId": 0, // 文件夹 id（在根目录就是 0）
  "sort": "name_asc" // 排序
}
```

响应体:

```JSON
{
  "code": 1,
  "data": {
    "list": [
      {
        "id": 1818, // 文件 id
        "name": "114514", // 文件名称
        "fileSize": 0, // 文件大小
        "objectType": 1, // 对象类型
        "uploadTime": 1754534188, // 更新时间
        "uploadBy": "114514", // 上传者 id
        "uploadByName": "上传者名称",
        "qiniuKey": "" // 七牛云密钥
      },
     // ...
    ]
  },
  "msg": "success" // 返回消息
}
```

## 获取群网盘文件总大小

POST /v1/disk/file-size

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```JSON
{
  "chatId": "群聊 id",
  "chatType": 2, // 会话类型
}
```

响应体:

```JSON
{
  "code": 1,
  "data": {
    "totalSize": 0 // 群网盘总占用大小（单位：B）
  },
  "msg": "success"
}
```

## 上传文件

POST /v1/disk/upload-file

需搭配[获取上传文件token](/api/v1/misc.html#%E8%8E%B7%E5%8F%96%E5%8A%9F%E8%83%BD%E8%B7%AF%E7%94%B1)使用.

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```JSON
{
  "chatId": "群聊 id",
  "chatType": 2, // 会话类型
  "fileSize": 124080, // 文件大小（单位是 KB）
  "fileName": "1114514.png", // 文件名
  "fileMd5": "6b14eab6a86c93c802de85e09561cb5c.png", // 文件的 md5+文件拓展名（你的文件上传到云端文件名就是“文件的 md5.文件拓展名”）
  "fileEtag": "FqhRXAMU8qSP_omDntW7D6BUk50q", // Etag
  "qiniuKey": "disk/6b14eab6a86c93c802de85e09561cb5c.png", // 七牛云 key（目测在七牛云文件的路径）
  "folderId": 0 // 文件夹 id（在根目录就是 0）
}
```

响应体:

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 更改文件名

POST /v1/disk/rename

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```JSON
{
  "id": 123, // 文件 ID
  "objectType": 2, // 文件类型（1-文件夹, 2-文件）
  "name": "测试文件名称" // 文件名称
}
```

响应体:

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 删除文件

POST /v1/disk/remove

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```JSON
{
  "id": 123, // 文件 ID
  "objectType": 2, // 文件类型（1-文件夹, 2-文件）
}
```

响应体:

```JSON
{
  "code": 1,
  "msg": "success"
}
```
