---
title: community
---

未特别说明情况下请求域名均为 https://chat-go.jwzhd.com
没写请求/响应项目表示不需要相关参数.  

## 发送文章

GET /v1/community/posts/create

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  
```JSONC
{  
  "baId": 40, // 文章分区ID
  "groupId": "123", // 文本引用群聊ID
  "title": "测试文章标题", // 文章标题
  "content": "测试文章内容", // 文章内容
  "contentType": 1 // 文章内容类别，1-文本，2-markdown
}
```

响应体:  
```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "audioUrl": 123, // 文章ID
  },
  "msg": "success" // 返回消息
}
```

## 删除文章

GET /v1/community/posts/delete

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  
```JSONC
{
  "postId": 123 // 文章ID
}
```

响应体:  
```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 打赏文章

GET /v1/community/posts/post-reward

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  
```JSONC
{
  "postId": 123, // 文章ID
  "amount": 1.0 // 打赏金币数
}
```

响应体:  
```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 打赏文章评论

GET /v1/community/comment/comment-reward

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  
```JSONC
{
  "postId": 123, // 文章ID
  "commentId": 123, // 打赏评论
  "amount": 1.0// 打赏金币数
}
```

响应体:  
```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 点赞/取消点赞文章

GET /v1/community/posts/post-like

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  
```JSONC
{
  "id": 123, // 文章ID
}
```

响应体:  
```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 收藏/取消收藏文章

GET /v1/community/posts/post-collect

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  
```JSONC
{
  "id": 123, // 文章ID
}
```

响应体:  
```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 编辑收藏文章

GET /v1/community/posts/edit

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  
```JSONC
{
  "postId": 123, // 文章ID
  "title": "测试文章标题",
  "content": "测试文章内容", // 文章内容
  "contentType": 2 // 文章内容类别，1-文本，2-markdown
}
```

响应体:  
```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "id": 123 // 文章ID(不知道为什么要再返回一遍)
  },
  "msg": "success" // 返回消息
}
```

## 获取文章列表

POST /v1/community/posts/post-list

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体：
```JSONC
{
  "typ": 1, // 典型值
  "baId": 41, // 分区id
  "size": 20, // 尺寸
  "page": 1 // 页数
}
```

响应体：
```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "posts": [
      {
        "id": 11451, // 文章id
        "baId": 41, // 分区id
        "senderId": "114514", // 文章作者id
        "senderNicknameId": 171342, // 发送者昵称 Id
        "senderAvatarId": 42481, // 发送者头像 Id
        "groupId": "", // 绑定该分区且从这个群聊发送文章的群聊id
        "title": "我是标题", // 标题
        "contentType": 2, // 文章类型(2是Markdown，1是普通文本)
        "content": "文章内容部分预览",
        "delTime": 0, // 删除时间
        "createTime": 1754382613, // 创建文章时间戳
        "updateTime": 0, // 更新时间
        "editTime": 1754382741, // 编辑时间
        "lastActive": 1754474179, // 上次活跃时间
        "likeNum": 2, // 此文章点赞数量
        "commentNum": 4, // 评论数量
        "collectNum": 0, // 收藏数量
        "amountNum": 0, // 投币数量
        "senderNickname": "文章作者id",
        "senderAvatar": "https://chat-img.jwznb.com/225f9d692979928a7734d9b8cc0a4d74.gif", // 作者头像url
        "createTimeText": "2025-08-05 16:30:13", // 创建文章时间
        "group": { // 以下是绑定该分区且从这个群聊发送文章的群聊id
          "id": 0, // 
          "groupId": "", // 群聊id
          "name": "", // 群聊名字
          "introduction": "", // 群聊简介
          "createBy": "", // 群主id
          "createTime": 0, // 创建时间戳
          "avatarId": 0, // 群聊头像id
          "del_flag": 0,
          "avatarUrl": "", // 群聊头像url
          "headcount": 0, // 群聊人数
          "readHistory": 0, // 是否开启新成员浏览历史信息（1为开启，0为关闭）
          "alwaysAgree": 0, // 是否直接进群（1为开启，0为关闭）
          "categoryId": 0, // 群聊分类Id
          "category": "", // 群聊所属分类
          "private": 0, // 是否私有（1为开启，0为关闭）
          "banId": 0, // 被禁言的id
          "gag": 0, // 是否禁言
          "gagBy": "", // 禁言者
          "msgTypeLimit": "" // 消息类型限制
        },
        "isLiked": "0", // 你有没有给这个文章点赞
        "isCollected": 0, // 你有没有收藏这个文章
        "isReward": 0, // 你有没有给这个文章投币
        "isVip": 0 // 文章作者是不是vip
      }
    // ...
    ],
    "total": 360 // 已经加载的文章（共360篇文章）
  },
  "msg": "success" // 返回消息
}
```

## 分区信息获取

POST /v1/community/ba/info

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体：
```JSONC
{
  "id": 41 // 分区id
}
```

响应体：
```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "ba": {
      "id": 41, // 分区id
      "name": "云湖", // 分区名
      "avatar": "https://chat-img2.jwznb.com/FoHHKnX-QNuD33-NnGWlq74xkgpg.webp", // 分区头像url
      "delTime": 0, // 删除时间
      "createTime": 1665233353, // 创建时间戳
      "lastActive": 1754474179, // 上次活跃时间戳
      "memberNum": 1053, // 加入此分区的成员
      "postNum": 9656, // 该分区的文章数量
      "groupNum": 55, // 绑定该分区的群聊数量
      "createTimeText": "2022-10-08 20:49:13", // 分区创建时间
      "isFollowed": "1" // 你是否关注了此分区（1为已关注，0为未关注）
    }
  },
  "msg": "success" // 返回消息
}
```
