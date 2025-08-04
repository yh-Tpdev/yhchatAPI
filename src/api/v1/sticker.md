---
title: sticker
---

未特别说明情况下请求域名均为 https://chat-go.jwzhd.com
没写请求/响应项目表示不需要相关参数.  

## 获取收藏表情包

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

响应体:  
```JSON
{
 "code": 1,
 "data": {
  "stickerPacks": [
   {
    "id": 114514,
    "name": "表情包名称",
    "createBy": "创建者ID",
    "createTime": 创建时间戳,
    "delFlag": 0,
    "userCount": 使用人数(数值),
    "hot": 0,
    "uuid": "dddddddd-dddd-2333-1145-ddddddabcdef",
    "updateTime": 更新时间戳,
    "sort": 0, // 分类?我这边都是0
    "stickerItems": [
     {
      "id": 114514,
      "name": "表情名称",
      "url": "sticker/114514abcdd444456aaaaaaaaee0d454.jpg",
      "stickerPackId": 114514, // 所属表情包ID
      "createBy": "创建者ID",
      "createTime": 创建时间戳,
      "delFlag": 0
     }
    ]
   }
  ]
 },
 "msg": "success"
}
```
