---
title: community
---

未特别说明情况下请求域名均为 `chat-web-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.  

## 获取分区列表

POST /v1/community/c/following-ba-list

请求体：

```JSONC
{
  "size": 100, // 一页返回的数量
  "page": 1 // 页码
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "ba": [
      {
        "id": 41, // 分区 id
        "name": "云湖\u0026功能反馈", // 分区名字
        "avatar": "https://chat-img.jwznb.com/1665235278282.2976yunhu192.png", // 分区头像 url
        "delTime": 0, // 删除时间
        "createTime": 1665233353, // 分区创建时间戳
        "lastActive": 1771478468, // 上次活跃时间
        "memberNum": 4184, // 该分区的成员数
        "postNum": 10254, // 该分区的文章数
        "groupNum": 112, // 该分区绑定的群聊数
        "createTimeText": "2022-10-08 20:49:13" // 分区创建时间文本
      }
      // ...
    ],
    "total": 11 // 分区总数
  },
  "msg": "success" // 返回消息
}
```

## 获取文章列表

POST /v1/community/posts/post-list

请求体：

```JSONC
{
  "typ": 1, // 典型值
  "baId": 41, // 分区 id
  "size": 10, // 一页返回的数量
  "page": 1 // 页码
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "posts": [
      {
        "id": 123, // 文章 id
        "baId": 41, // 分区 id
        "senderId": "114514", // 作者 id
        "senderNicknameId": 123, // 作者昵称 id
        "senderAvatarId": 123, // 作者头像 id
        "groupId": "", // 绑定该分区且从这个群聊发送文章的群聊 id
        "title": "我是标题", // 标题
        "contentType": 2, // 文章类型(2 是Markdown，1 是普通文本)
        "content": "文章内容部分预览",
        "delTime": 0, // 删除时间
        "createTime": 1754382613, // 创建文章时间戳
        "updateTime": 0, // 更新时间戳
        "lastActive": 1754474179, // 上次活跃时间戳
        "likeNum": 2, // 点赞数量
        "collectNum": 0, // 收藏数量
        "amountNum": 0, // 投币数量
        "commentNum": 4, // 评论数量
        "senderNickname": "文章作者", // 作者昵称
        "senderAvatar": "https://.。。", // 作者头像 url
        "createTimeText": "2025-08-05 16:30:13", // 创建文章时间文本
        "group": { // 以下是绑定该分区且从这个群聊发送文章的群聊 id
          "id": 0, // 群聊序号
          "groupId": "", // 群聊 id
          "name": "", // 群聊名字
          "introduction": "", // 群聊简介
          "createBy": "", // 群主 id
          "createTime": 0, // 创建时间戳
          "avatarId": 0, // 群聊头像 id
          "avatarUrl": "", // 群聊头像 url
          "headcount": 0, // 群聊人数
          "readHistory": 0, // 是否开启新成员浏览历史信息（1为开启，0为关闭）
          "category": "", // 群聊所属分类
        },
        "isLiked": "0", // 你有没有给这个文章点赞（1为是，0则不是）
        "isCollected": 0, // 你有没有收藏这个文章（1为是，0则不是）
        "isReward": 0, // 你有没有给这个文章投币 （1为是，0则不是）
      }
      // ...
    ],
    "total": 750 // 文章总数
  },
  "msg": "success" // 返回消息
}
```

## 获取分区信息

POST /v1/community/c/info

请求体：

```JSONC
{
  "id": 41 // 分区 id
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "ba": {
      "id": 41, // 分区 id
      "name": "云湖\u0026功能反馈", // 分区名
      "avatar": "https://chat-img.jwznb.com/1665235278282.2976yunhu192.png", // 分区头像url
      "delTime": 0, // 删除时间
      "createTime": 1665233353, // 分区创建时间戳
      "lastActive": 1771478468, // 上次活跃时间戳
      "memberNum": 4184, // 加入此分区的成员
      "postNum": 10254, // 该分区的文章数量
      "groupNum": 112, // 绑定该分区的群聊数量
      "createTimeText": "2022-10-08 20:49:13", // 分区创建时间文本
      "isFollowed": "0" // 你是否关注了此分区（1为已关注，0为未关注）
    }
  },
  "msg": "success" // 返回消息
}
```

