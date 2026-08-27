---
title: sticker
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.

<!-- 写给贡献者的提醒:

此处表情和表情包不是一个东西,表情是单个图片表情包是多个表情的集合. -->

## 获取收藏表情包

POST /v1/sticker/list

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

响应体:

```JSON
{
 "code": 1,
 "data": {
  "stickerPacks": [
   {
    "id": 114514,
    "name": "表情包名称",
    "createBy": "7356666", // 创建者 ID
    "createTime": 114514, // 创建时间戳
    "delFlag": 0, // 是否被删除
    "userCount": 2, // 使用人数
    "hot": 0, // 表情包热度,不知道为啥全 0
    "uuid": "dddddddd-dddd-2333-1145-ddddddabcdef", // UUID
    "updateTime": 2333, // 更新时间戳
    "sort": 0, // 分类?我这边都是 0
    "stickerItems": [
     {
      "id": 114514,
      "name": "表情名称",
      "url": "sticker/114514abcdd444456aaaaaaaaee0d454.jpg", // 表情包 URL,需要前面加上 https://chat-img.jwznb.com/
      "stickerPackId": 114514, // 所属表情包 ID
      "createBy": "7356666", // 创建者 ID
      "createTime": 2333, // 更新时间戳
      "delFlag": 0
     },
     // ...
    ]
   }
  ]
 },
 "msg": "success"
}
```

## 查看表情包详情

POST /v1/sticker/detail

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```JSON
{
  "id": 123 // 表情包 ID
}
```

响应体:

```JSON
{
    "code": 1,
    "data": {
        "stickerPack": {
            "id": 894, // 表情包 ID
            "name": "图标梗", // 表情包名称
            "createBy": "9120256", // 创建者
            "createTime": 1730724963, // 创建时间(时间戳)
            "delFlag": 0,
            "userCount": 8, // 用户人数
            "hot": 0, // 热度? 我这边抓到的都是 0
            "uuid": "216d7881-64ae-4409-aa0a-4f4d1a8f649d", // UUID
            "updateTime": 1754363209, // 更新时间
            "sort": 0, // 分类相关?
            "stickerItems": [
                {
                    "id": 18951, // 表情 ID
                    "name": "汇总部分", // 表情名称
                    "url": "sticker/4599f91519364bcc2be6718c3915d388.jpg", // 表情 URL,前面需加上 https://chat-img.jwznb.com/
                    "stickerPackId": 894, // 所属表情包 ID
                    "createBy": "9120256", // 创建者 ID
                    "createTime": 1730724991, // 创建时间
                    "delFlag": 0
                },
                // ...
            ]
        },
        "user": {
            "id": 56922, // 似乎是名称 ID?
            "user_id": "9120256", // 创建者用户 ID
            "nickname": "千米", // 创建者用户名
            "avatar_url": "https://uapis.cn/api/imgapi/bq/youshou.php" // 头像地址
        }
    },
    "msg": "success"
}
```

## 添加表情包

POST /v1/sticker/add

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```JSON
{
  "id": 894 // 表情包 ID
}
```

响应体:

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 移除收藏表情包

POST /v1/sticker/remove-sticker-pack

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```JSON
{
  "id": 123 // 要移除的表情包的 ID
}
```

响应体:

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 更改收藏表情包的排序

POST /v1/sticker/sort

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```JSON
{
  "sort": "[
    {
      \"id\":\"123\", // 表情包 ID
      \"sort\":\"2\" // 排序,数字越大越靠前
    },
    {
      \"id\":\"456\",
      \"sort\":\"1\"
    },
    // ...
    ]"
}
```

::: details 备注: 使用 Python 请求代码

```Python
headers = {"token": token}
sticker = [
            {
              "id": "1","sort": "1", # 不知道为啥 id 前面是数值这里为啥变成了字符串,sort 越大排序越靠前
            },
            {
              "id": "2","sort": "2"
            }
          ]
payload = {"sort": json.dumps(sticker)} # 注意是 json.dumps,不是 str
response = httpx.post("https://chat-go.jwzhd.com/v1/sticker/sort", headers = headers, json = payload)
print(response.text)
```

:::

响应体:

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 创建表情包

POST /v1/sticker/create-pack

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```json
{
  "name": "66665" // 欲创建表情包名称
}
```

响应体:

```json
{
  "code": 1,
  "data": {
    "id": 2676 // 创建表情包的 ID
  },
  "msg": "success"
}
```

---

::: tip

非表情包创建者操作需要表情包创建者权限的 API 的报错如下:

```json
{
  "code": -1,
  "msg": "仅表情包创建者可<action>"
}
```

表情包不存在:

```json
{
  "code": -1,
  "msg": "表情包不存在"
}
```

表情不存在:

```json
{
  "code": -1,
  "msg": "表情不存在"
}
```

:::

## 重命名表情包

POST /v1/sticker/rename-pack

请求头:

| 名称  | 必须 | 备注         |
| ----- | ---- | ------------ |
| token | 是   | 表情包创建者 |

请求体:

```json
{
  "id": 2652, // 表情包 ID
  "name": "《战双帕弥什》是活泼可爱治愈的合家欢游戏" // 重命名后的名称
}
```

响应体:

```json
{
  "code": 1,
  "msg": "success"
}
```

## 添加表情至表情包

POST /v1/sticker/add-sticker

请求头:

| 名称  | 必须 | 备注         |
| ----- | ---- | ------------ |
| token | 是   | 表情包创建者 |

请求体:

```json
{
  "name": "1730094050", // 表情名称
  "url": "sticker/abe73b4671e44aa984ab27ba3dda5951.png", // 表情 URL(和七牛云返回的 key 一致)
  "stickerPackId": 2676 // 所属表情包 ID
}
```

响应体:

```json
{
  "code": 1,
  "msg": "success"
}
```

## 删除表情包

POST /v1/sticker/delete-pack

请求头:

| 名称  | 必须 | 备注         |
| ----- | ---- | ------------ |
| token | 是   | 表情包创建者 |

请求体:

```json
{
  "id": 2676 // 欲删除的表情包的 ID
}
```

响应体:

```json
{
  "code": 1,
  "msg": "success"
}
```

## 导入表情包

POST /v1/sticker/import-pack

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```json
{
  "name": "跳过开机引导（先双清再刷入）", // 表情包名称
  "fileKey": "stickerZip/7f4ac069a32e8482e6e74c19a42b6e95.zip" // 文件 URL(和七牛 key 一样)
}
```

响应体:

::: tabs

@tab 存在异常文件

```json
{
  "code": -1,
  "msg": "导入失败。第2个文件格式不正确，支持JPG、JPEG、PNG、GIF、WEBP、TGS；第3个文件格式不正确，支持JPG、JPEG、PNG、GIF、WEBP、TGS；第4个文件格式不正确，支持JPG、JPEG、PNG、GIF、WEBP、TGS；第8个文件格式不正确，支持JPG、JPEG、PNG、GIF、WEBP、TGS；第13个文件格式不正确，支持JPG、JPEG、PNG、GIF、WEBP、TGS；第14个文件格式不正确，支持JPG、JPEG、PNG、GIF、WEBP、TGS；第15个文件格式不正确，支持JPG、JPEG、PNG、GIF、WEBP、TGS；"
}
```

:::

## 重命名表情包里的表情

POST /v1/sticker/rename-sticker

请求头:

| 名称  | 必须 | 备注         |
| ----- | ---- | ------------ |
| token | 是   | 表情包创建者 |

请求体:

```json
{
  "id": 47190, // 表情 ID
  "name": "173009405055" // 重命名后的名称
}
```

响应体:

```json
{
  "code": 1,
  "msg": "success"
}
```


~~删除表情 API 还没写~~