---
title: community
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
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

## 编辑文章

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
        "isLiked": "0", // 你有没有给这个文章点赞（1为是，0则不是）
        "isCollected": 0, // 你有没有收藏这个文章（1为是，0则不是）
        "isReward": 0, // 你有没有给这个文章投币 （1为是，0则不是）
        "isVip": 0 // 你是不是vip（1为是，0则不是）
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

## 获取分区列表

POST /v1/community/ba/following-ba-list

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体：

```JSONC
{
  "typ": 2, // 类型
  "size": 20, // 排序
  "page": 1 // 页数
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "ba": [
      {
        "id": 41, // 分区id
        "name": "云湖", // 分区名字
        "avatar": "https://chat-img2.jwznb.com/FoHHKnX-QNuD33-NnGWlq74xkgpg.webp", // 分区头像url
        "delTime": 0, // 删除时间
        "createTime": 1665233353, // 创建时间
        "lastActive": 1754474179, // 上次活跃时间
        "memberNum": 1053, // 该分区的成员数
        "postNum": 9656, // 该分区的文章数
        "groupNum": 55, // 该分区绑定的群聊数
        "createTimeText": "2022-10-08 20:49:13" // 分区创建时间
      }
    // ...
    ],
    "total": 11 // 总共的分区数量（共11个）
  },
  "msg": "success" // 返回消息
}
```

## 获取文章打赏记录

POST /v1/community/reward-record

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体：

```JSONC
{
  "typ": "post", // 类型（post-文章,comment-评论）
  "size": 20, // 尺寸
  "page": 1 // 页数
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "rewards": [
      {
        "id": 1474, // 打赏id
        "senderId": "打赏者id",
        "recvId": "文章作者id",
        "postId": 文章id,
        "commentId": 评论id,
        "amount": 0.01, // 打赏者减少金币的数量
        "recvAmount": 0.01, // 收到的金币数量
        "createTime": 1753427517,
        "reason": "打赏文章扣金币", // 扣大赏者金币原因
        "remark": "", // 备注
        "post": {
          "id": 30506, // 文章id
          "baId": 41,  // 分区id
          "senderId": "文章作者id",
          "senderNicknameId": 128769, // 发送者名字id
          "senderAvatarId": 84, // 发送者头像id
          "groupId": "", // 文章关联群组id
          "title": "QQ云湖消息互通机器人", // 文章标题
          "contentType": 1, // 文章类型（1-Markdown，0-普通文章）
          "delTime": 0, // 删除时间戳
          "createTime": 1751721707, // 创建时间时间戳
          "updateTime": 0, // 更新时间时间戳
          "lastActive": 1753194392, // 上次活跃时间戳
          "likeNum": 4, // 文章点赞数量
          "commentNum": 2, // 评论数量
          "collectNum": 6, // 收藏数量
          "amountNum": 0.01, // 文章投币数量
          "senderNickname": "那狗吧", // 文章作者昵称
          "senderAvatar": "https://chat-img.jwznb.com/defalut-avatars/Nellie%20Bly.png", // 文章作者头像url
          "createTimeText": "2025-07-05 21:21:47", // 创建文章时间
          "auditStatus": 0
        },
        "sender": {
          "id": 106634, // 打赏id
          "user_id": "打赏者id",
          "nickname": "", // 打赏者昵称
          "avatar_url": "https://chat-img.jwznb.com/1523c36f6d5b0a73dfb0fe4d3494c1f2.jpg" // 打赏者头像url
        },
        "comment": {
          "id": 0, 
          "postId": 0,
          "parentId": 0,
          "senderId": "",
          "sender_nicknameId": 0,
          "sender_avatarUd": 0,
          "content": "",
          "delTime": 0,
          "createTime": 0,
          "likeNum": 0,
          "repliesNum": 0,
          "amountNum": 0,
          "senderNickname": "",
          "senderAvatar": "",
          "createTimeText": "",
          "isLiked": "",
          "isReward": 0
        }
      }
    // ...
    ]
    "total": 1 // 总共的记录
  },
  "msg": "success" // 返回消息
}
```

## 评论文章

POST /v1/community/comment/comment

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体：

```JSONC
{
  "postId": 31108, // 文章id
  "commentId": 6051, // 评论id（若直接评论文章那id=0）
  "content": "🤣" // 评论内容
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 获取文章评论列表

POST /v1/community/comment/comment-list

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体：

```JSONC
{
  "postId": 31153, // 文章id
  "size": 10, // 尺寸
  "page": 1 // 页数
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "comments": [
      {
        "id": 6173, // 评论id
        "postId": 31153, // 文章id
        "parentId": 0, // 父id
        "senderId": "114514", //发送者id
        "sender_nicknameId": 178312, // 发送者名称id
        "sender_avatarUd": 87, // 发送者头像id
        "content": "？", // 评论内容
        "delTime": 0, // 删除时间戳
        "createTime": 1754746982, // 发送时间戳
        "likeNum": 0, // 该评论的赞数
        "repliesNum": 0, // 该评论下的回复
        "amountNum": 0, // 该评论的投币数
        "auditStatus": 0, // 审核状态
        "replies": [], // 评论内容
        "senderNickname": "22928kkkk", // 发送者昵称
        "senderAvatar": "https://chat-img.jwznb.com/defalut-avatars/Pearl%20Kendrick.png", // 发送者头像url
        "createTimeText": "2025-08-09 21:43:02", // 评论时间
        "isLiked": "0", // 是否点赞(1-是，0-否)
        "isReward": 0, // 是否投币(1-是，0-否)
        "isVip": 0 // 判断是否为vip(1-是，0-否)
      },
    // ...
    ],
    "isAdmin": 0, // 判断你是否为管理员(1/是，2-否)
    "total": 3 // 总共评论数量(3个)
  },
  "msg": "success" // 返回消息
}
