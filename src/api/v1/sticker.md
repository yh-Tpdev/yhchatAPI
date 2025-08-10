---
title: sticker
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.  

## 获取收藏表情包

POST /v1/sticker/list

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

响应体:  

```JSONC
{
 "code": 1,
 "data": {
  "stickerPacks": [
   {
    "id": 114514,
    "name": "表情包名称",
    "createBy": "7356666", // 创建者ID
    "createTime": 114514, // 创建时间戳
    "delFlag": 0, // 是否被删除
    "userCount": 2, // 使用人数
    "hot": 0, // 表情包热度,不知道为啥全0
    "uuid": "dddddddd-dddd-2333-1145-ddddddabcdef", // UUID
    "updateTime": 2333, // 更新时间戳
    "sort": 0, // 分类?我这边都是0
    "stickerItems": [
     {
      "id": 114514,
      "name": "表情名称",
      "url": "sticker/114514abcdd444456aaaaaaaaee0d454.jpg", // 表情包URL,需要前面加上 https://chat-img.jwznb.com/
      "stickerPackId": 114514, // 所属表情包ID
      "createBy": "7356666", // 创建者ID
      "createTime": 2333, // 更新时间戳
      "delFlag": 0
     }
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

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  

```JSONC
{
  "id": 123 // 表情包ID
}
```

响应体:  

```JSONC
{
    "code": 1,
    "data": {
        "stickerPack": {
            "id": 894, // 表情包ID
            "name": "图标梗", // 表情包名称
            "createBy": "9120256", // 创建者
            "createTime": 1730724963, // 创建时间(时间戳)
            "delFlag": 0,
            "userCount": 8, // 用户人数
            "hot": 0, // 热度? 我这边抓到的都是0
            "uuid": "216d7881-64ae-4409-aa0a-4f4d1a8f649d", // uuid
            "updateTime": 1754363209, // 更新时间
            "sort": 0, // 分类相关?
            "stickerItems": [
                {
                    "id": 18951, // 表情ID
                    "name": "汇总部分", // 表情名称
                    "url": "sticker/4599f91519364bcc2be6718c3915d388.jpg", // 表情URL,前面需加上 https://chat-img.jwznb.com/
                    "stickerPackId": 894, // 所属表情包ID
                    "createBy": "9120256", // 创建者ID
                    "createTime": 1730724991, // 创建时间
                    "delFlag": 0
                },
                // ...
            ]
        },
        "user": {
            "id": 56922, // 似乎是名称ID?
            "user_id": "9120256", // 创建者用户ID
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

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  

```JSONC
{
  "id": 894 // 表情包ID
}
```

响应体:  

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回状态消息
}
```

## 移除收藏表情包

POST /v1/sticker/remove-sticker-pack  

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  

```JSONC
{
  "id": 123 // 要移除的表情包的ID
}
```

响应体:  

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回状态消息
}
```

## 更改收藏表情包的排序  

POST /v1/sticker/sort  

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  

```JSONC
{
  "sort": "[
    {
      \"id\":\"123\", // 表情包ID
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

::: details 备注: 使用Python请求代码

```Python
headers = {"token": token}
sticker = [ 
            {
              "id": "1","sort": "1", # 不知道为啥id前面是数值这里为啥变成了字符串,sort越大排序越靠前
            },
            {
              "id": "2","sort": "2"
            }
          ]
payload = {"sort": str(sticker)}
response = httpx.post("https://chat-go.jwzhd.com/v1/sticker/sort", headers = headers, json = payload) 
print(response.text)
```

:::

响应体:  

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回状态消息
}
```
