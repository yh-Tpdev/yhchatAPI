---
url: /api/v1/community.md
---
未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`\
没写请求/响应项目表示不需要相关参数.

## 创建文章

POST /v1/community/posts/create

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```JSONC
{
  "baId": 40, // 文章分区ID
  "groupId": "123", // 文本引用群聊ID
  "title": "测试文章标题", // 文章标题
  "content": "测试文章内容", // 文章内容
  "contentType": 1, // 文章内容类别，1-文本，2-markdown
  "draftId": 123 // 草稿ID，若此值不为0则云湖会删除这里设定的草稿ID所对应的草稿
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

POST /v1/community/posts/delete

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

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

POST /v1/community/posts/post-reward

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

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

POST /v1/community/comment/comment-reward

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

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

POST /v1/community/posts/post-like

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

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

POST /v1/community/posts/post-collect

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

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

POST /v1/community/posts/edit

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

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

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

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
        "id": 123, // 文章id
        "baId": 41, // 分区id
        "senderId": "114514", // 文章作者id
        "senderNicknameId": 123, // 发送者昵称 Id
        "senderAvatarId": 123, // 发送者头像 Id
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
        "senderAvatar": "https://.。。", // 作者头像url
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

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

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

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

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

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

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
        "id": 123, // 打赏id
        "senderId": "123", // 打赏者id
        "recvId": "123", // 文章作者id
        "postId": 123, // 文章id
        "commentId": 123, // 评论id
        "amount": 0.01, // 打赏者减少金币的数量
        "recvAmount": 0.01, // 收到的金币数量
        "createTime": 1753427517,
        "reason": "打赏文章扣金币", // 扣大赏者金币原因
        "remark": "", // 备注
        "post": {
          "id": 123, // 文章id
          "baId": 41,  // 分区id
          "senderId": "123", // 文章作者id
          "senderNicknameId": 123, // 发送者名字id
          "senderAvatarId": 84, // 发送者头像id
          "groupId": "", // 文章关联群组id
          "title": "测试文章标题", // 文章标题
          "contentType": 1, // 文章类型（1-Markdown，0-普通文章）
          "delTime": 0, // 删除时间戳
          "createTime": 1751721707, // 创建时间时间戳
          "updateTime": 0, // 更新时间时间戳
          "lastActive": 1753194392, // 上次活跃时间戳
          "likeNum": 4, // 文章点赞数量
          "commentNum": 2, // 评论数量
          "collectNum": 6, // 收藏数量
          "amountNum": 0.01, // 文章投币数量
          "senderNickname": "测试打赏者名称", // 文章作者昵称
          "senderAvatar": "https://...", // 文章作者头像url
          "createTimeText": "2025-07-05 21:21:47", // 创建文章时间
          "auditStatus": 0
        },
        "sender": {
          "id": 106634, // 打赏id
          "user_id": "123", // 打赏者id
          "nickname": "测试打赏者昵称", // 打赏者昵称
          "avatar_url": "https://..." // 打赏者头像url
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
    ],
    "total": 1 // 总共的记录
  },
  "msg": "success" // 返回消息
}
```

## 评论文章

POST /v1/community/comment/comment

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSONC
{
  "postId": 123, // 文章id
  "commentId": 123, // 评论id（若直接评论文章那id=0）
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

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

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
        "id": 123, // 评论id
        "postId": 123, // 文章id
        "parentId": 0, // 父id
        "senderId": "114514", //发送者id
        "sender_nicknameId": 123, // 发送者名称id
        "sender_avatarUd": 123, // 发送者头像id
        "content": "？", // 评论内容
        "delTime": 0, // 删除时间戳
        "createTime": 1754746982, // 发送时间戳
        "likeNum": 0, // 该评论的赞数
        "repliesNum": 0, // 该评论下的回复
        "amountNum": 0, // 该评论的投币数
        "auditStatus": 0, // 审核状态
        "replies": [], // 评论内容
        "senderNickname": "测试评论发送者名称", // 发送者昵称
        "senderAvatar": "https://...", // 发送者头像url
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
```

## 查找文章

POST /v1/community/search

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSONC
{
  "typ": 3, // 未知
  "keyword": "123", // 关键词文本
  "size": 10, // 返回文章数量
  "page": 1 // 页数
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "ba": [],
      "posts": [
        {
          "id": 30315, // 文章ID
          "baId": 43, // 文章所属分区ID
          "senderId": "123", // 文章发送者ID
          "senderNicknameId": 123, // 文章发送者名称ID
          "senderAvatarId": 123, // 文章发送者头像ID
          "groupId": "", // 文章引用群聊ID
          "title": "测试文章标题", // 文章标题
          "contentType": 2, // 文章内容类别，1-文本，2-Markdown
          "content": "测试文章内容", // 文章内容
          "delTime": 0, // 未知
          "createTime": 1749736140, // 文章创建时间戳
          "updateTime": 0, // 未知
          "editTime": 0, // 未知
          "lastActive": 1749736140, // 文章上次活跃时间戳
          "likeNum": 0, // 文章点赞人数
          "commentNum": 0, // 文章评论人数
          "collectNum": 0, // 文章收藏人数
          "amountNum": 0, // 文章打赏金币数量
          "senderNickname": "测试文章发送者名称", // 文章发送者名称
          "senderAvatar": "https://...",
          "createTimeText": "2025-06-12 21:49:00", // 文章发送时间
          "group": {
            "id": 0, // 未知
            "groupId": "", // 未知
            "name": "", // 未知
            "introduction": "", // 未知
            "createBy": "", // 未知
            "createTime": 0, // 未知
            "avatarId": 0, // 未知
            "del_flag": 0, // 未知
            "avatarUrl": "", // 未知
            "headcount": 0, // 未知
            "readHistory": 0, // 未知
            "alwaysAgree": 0, // 未知
            "categoryId": 0, // 未知
            "category": "", // 未知
            "private": 0, // 未知
            "banId": 0, // 未知
            "gag": 0, // 未知
            "gagBy": "", // 未知
            "msgTypeLimit": "" // 未知
          },
        "ba": {
          "id": 123, // 文章所处分区ID
          "name": "测试文章所处分区名称", // 文章所处分区名称
          "avatar": "https://...", // 文章所处分区头像
          "delTime": 0, // 未知
          "createTime": 1675671165, // 文章所处分区创建时间戳
          "lastActive": 1755075037, // 文章所处分区最近活跃时间戳
          "memberNum": 123, // 文章所处分区关注数
          "postNum": 123, // 文章所处分区贴子数
          "groupNum": 123 // 文章所处分区引用群聊数
          },
        "isLiked": 0, // 未知
        "isCollected": 0, // 未知
        "isReward": 0, // 未知
        "isVip": 0 // 未知
        }
      // ...
      ]
    },
  "msg": "success" // 返回消息
}
```

## 屏蔽指定用户文章

POST /v1/community/set-black-list

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSONC
{
  "isAdd": 0, // 0-取消屏蔽，1-屏蔽
  "authorId": "123"
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 获取屏蔽指定用户文章列表

POST /v1/community/black-list

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSONC
{
  "size": 20, // 返回文章数量
  "page": 1 // 页数
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "list": [
      {
        "id": 0, // 屏蔽ID
        "user_id": "123", // 屏蔽用户ID
        "nickname": "测试屏蔽用户", // 屏蔽用户名称
        "avatar_url": "https://..." // 屏蔽用户头像
      }
      // ...
    ],
    "total": 1 // 屏蔽用户数
  },
  "msg": "success" // 返回消息
}
```

## 查看文章详情

POST /v1/community/posts/post-detail

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSONC
{
  "id": 31622 //文章id
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "ba": {
      "id": 41, // 文章分区id
      "name": "云湖", // 分区名称
      "avatar": "https://chat-img2.jwznb.com/FoHHKnX-QNuD33-NnGWlq74xkgpg.webp", // 作者头像url
      "delTime": 0, // 删除时间(戳)
      "createTime": 1665233353, // 文章创建时间戳
      "lastActive": 1757794419, // 上次活跃时间戳
      "memberNum": 1118, // 该分区订阅的人数
      "postNum": 9752, // 该分区的文章数量
      "groupNum": 64, // 该分区绑定的群聊数量
      "createTimeText": "2022-10-08 20:49:13", // 分区创建时间
      "isFollowed": "0"
    },
    "isAdmin": 0, // 文章作者是否为管理员
    "post": {
      "id": 123, // 文章id
      "baId": 41, // 该文章所处的分区id
      "senderId": "7384288", // 文章作者id
      "senderNicknameId": 123, // 文章作者名称id
      "senderAvatarId": 123, // 文章作者头像id
      "groupId": "", // 该文章所处的群聊id
      "title": "文章标题", // 文章标题
      "contentType": 2, // 文章类型，1-普通文字，2-Markdown
      "content": "文章内容", // 文章内容
      "delTime": 0, // 删除时间(戳)
      "createTime": 1757755754, // 文章发送时间戳
      "updateTime": 0, // 文章更新时间戳
      "editTime": 1757755828, // 文章上次编辑时间戳
      "lastActive": 1757755828, // 文章上次活跃(编辑)时间戳
      "likeNum": 0, // 文章点赞数量
      "commentNum": 0, // 文章评论数量
      "collectNum": 0, // 文章收藏数量
      "isDraft": 0, // 是否为草稿，0-不是，1-是
      "isSticky": 0, // 置顶时间戳，若不是置顶则为0
      "amountNum": 0, // 文章投币数量
      "senderNickname": "作者名称", // 文章作者名称
      "senderAvatar": "https://c...", // 文章作者头像url
      "createTimeText": "2025-09-13 17:29:14", // 文章发送时间
      "group": { // 该文章下绑定的群聊信息
        "id": 0, // 会话类型id
        "groupId": "", // 群聊id
        "name": "", // 群聊名称
        "introduction": "", // 群聊简介
        "createBy": "", // 该群群主id
        "createTime": 0, // 群聊创建时间戳
        "avatarId": 0, // 群头像id
        "del_flag": 0,
        "avatarUrl": "", // 群头像url
        "headcount": 0, // 群聊人数
        "readHistory": 0, // 是否开启群聊历史消息选项，0-关，1-开
        "alwaysAgree": 0, // 是否总是默认新成员进群选项，0-关，1-开
        "categoryId": 0, // 群聊类型id
        "category": "", // 群聊类型
        "private": 0, // 是否私有选项，0-关，1-开
        "banId": 0, // 被ban的id
        "gag": 0, // 被禁言群成员id
        "gagBy": "", // 谁禁言的成员id
        "msgTypeLimit": "" // 群聊消息类型限制
      },
      "ba": { // 分区相关信息
        "id": 41, // 该文章所属分区id
        "name": "云湖", // 分区名称
        "avatar": "https://chat-img.jwznb.com/1665235278282.2976yunhu192.png", // 分区头像url
        "delTime": 0, // 分区删除时间戳
        "createTime": 1665233353, // 分区创建时间戳
        "lastActive": 1757794419, // 分区上次活跃时间戳
        "memberNum": 1118, // 分区成员数量
        "postNum": 9752, // 分区文章数量
        "groupNum": 64 // 该分区下绑定的群聊数量
      },
      "isLiked": 0, // (你)是否给文章点赞，0-没有，1-点了
      "isCollected": 0, // (你)是否收藏该文章，0-没有，1-收了
      "isReward": 0, // (你)是否给文章投币，0-没有，1-投了
      "isVip": 0 // 文章作者是否为vip，0-没有，1-有
    }
  },
  "msg": "success" // 返回消息
}
```

## 查看自己发布的文章

POST /v1/community/posts/my-post-list

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSONC
{
  "size": 20, // 显示文章数量
  "page": 1 // 页数
}
```

响应体：

```JSONC
{
  "code": 1,  // 请求状态码，1为正常
  "data": {
    "posts": [ // 帖子相关
      {
        "id": 123, // 文章id
        "baId": 49, // 文章所属分区id
        "senderId": "1659829", // 文章作者
        "senderNicknameId": 123, // 作者名称id
        "senderAvatarId": 123, // 作者头像id
        "groupId": "", // 文章所属群聊id
        "title": "test", // 文章标题
        "contentType": 1, // 文章类型，1-普通文字，2-Markdown
        "content": "内容", // 文章内容
        "delTime": 0, // 删除时间
        "createTime": 1757818078, // 文章发布时间戳
        "updateTime": 0, // 文章更新时间戳
        "editTime": 0, // 文章编辑时间戳
        "lastActive": 1757818078, // 文章上次活跃时间
        "likeNum": 0, // 文章赞数
        "commentNum": 0, // 文章评论数量
        "collectNum": 0, // 文章收藏数量
        "isDraft": 0, // 是否为草稿，0-不是，1-是
        "isSticky": 0, // 置顶时间戳，若不是置顶则为0
        "amountNum": 0, // 文章投币数量
        "senderNickname": "作者", // 文章作者名称
        "auditStatus": 0, // 审核状态，0-通过，1-不通过
        "senderAvatar": "https://...", // 文章作者头像url
        "createTimeText": "2025-09-14 10:47:58", // 文章发布时间
        "group": { // 文章绑定群聊相关
          "id": 0, // 文章所属群聊的类型id
          "groupId": "", // 文章所属群聊id
          "name": "", // 群聊名称
          "introduction": "", // 群聊简介
          "createBy": "", // 群聊群主id
          "createTime": 0, // 群聊创建时间戳
          "avatarId": 0, // 群聊头像id
          "del_flag": 0,
          "avatarUrl": "", // 群聊头像url
          "headcount": 0, // 群聊人数
          "readHistory": 0, // 是否开启聊天历史记录，0-没有，1-开了
          "alwaysAgree": 0, // 新成员是否直接进入群聊，0-没有，1-开了
          "categoryId": 0, // 群聊类型id
          "category": "", // 群聊类型
          "private": 0, // 群聊是否私有，0-没有，1-开了
          "banId": 0, // 被banid
          "gag": 0, // 被禁言者id
          "gagBy": "", // 禁言者id
          "msgTypeLimit": "" // 消息类型限制
        },
        "isLiked": "0",  // (你)是否点赞该文章，0-没有，1-点了
        "isCollected": 0, // (你)是否收藏该文章，0-没有，1-点了
        "isReward": 0, // (你)是否投币该文章，0-没有，1-点了
        "isVip": 0 // 暂时不清楚
      }
    ],
    "total": 1 // 文章数量
  },
  "msg": "success" // 返回成功消息
}
```

## 查看分区下绑定的群聊列表

POST /v1/community/ba/group-list

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSONC
{
  "baId": 41, //分区id
  "size": 10, // 分页大小
  "page": 1 // 页数
}
```

响应体:

```JSONC
{
  "code": 1,  // 请求状态码，1为正常
  "data": {
    "groups": [
      {
        "id": 10497, // 群聊创建id
        "groupId": "554470989", // 群聊id
        "name": "这个是群聊", // 群聊名称
        "introduction": "这个是介绍", // 群聊简介
        "createBy": "6016104", // 群聊创建者id(群主id)
        "createTime": 1757207765, // 群聊创建时间戳
        "avatarId": 47524, // 头像id
        "del_flag": 0,
        "avatarUrl": "https://chat-img.jwznb.com/922717b67b6c61b79155fdb11bc1f796.jpg", // 群头像url
        "headcount": 35, // 群聊人数
        "readHistory": 1, // 是否开启新成员查看消息历史记录（1为开启，0为关闭）
        "alwaysAgree": 1, // 是否直接进群（1为开启，0为关闭）
        "categoryId": 21, // 绑定分区的id
        "category": "兴趣爱好-其他", // 群聊分类名称
        "private": 0, // 群聊是否私有（1为开启，0为关闭）
        "banId": 0, // 被ban者id
        "gag": 0,  // 是否禁言（1为开启，0为关闭）
        "gagBy": "",  // 禁言者id
        "msgTypeLimit": "", // 被限制的消息类型,如1,2,3,使用","分格。1-文本消息，2-图片消息，3-Markdown消息，4-文件消息，6-帖子消息，7-表情消息，8-HTML消息，10-视频消息，11-语音消息，13-语音通话（限制多个消息类型一般是 1,2,3,4··· 之类）
        "uri": "https://chat-go.jwzhd.com/open-apis/v1/bot/send?token\u003d", // 机器人消息发送接口
        "groupBotRel": null
      },
      {
        "id": 10494,
        "groupId": "960023663",
        "name": "测试群",
        "introduction": "114514",
        "createBy": "6016104",
        "createTime": 1757170885,
        "avatarId": 47509,
        "del_flag": 0,
        "avatarUrl": "https://chat-img.jwznb.com/b63c826d9a1906f8811b2c6df8aa8adf.jpg",
        "headcount": 20,
        "readHistory": 1,
        "alwaysAgree": 1,
        "categoryId": 0,
        "category": "",
        "private": 0,
        "banId": 0,
        "gag": 0,
        "gagBy": "",
        "msgTypeLimit": "",
        "uri": "https://chat-go.jwzhd.com/open-apis/v1/bot/send?token\u003d",
        "groupBotRel": null
      }
    // ...
    ],
    "total": 72 // 群聊总数
  },
  "msg": "success" // 返回状态消息
}
```

## 分享文章分区

POST /v1/community/ba/forward

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSONC
{
  "baId": 0,
  "receive": [
    {
      "chatId": "123", // 对象ID
      "chatType": 2 // 对象列表，1-用户，2-群聊，3-机器人
    }
    // ...
  ]
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 管理文章分区

POST /v1/community/ba/manage

请求头:

| 名称  | 必须 | 备注                 |
| ----- | ---- | -------------------- |
| token | 是   | 必须为文章分区所有者 |

请求体：

```JSONC
{
  "baId": 0, // 分区ID
  "visibleRange": 0, // 分区可见状态，0-所有人可见，1-只有分区所有者可见
  "publishAuthority": 0 // 分区开放度，0-所有人都可以发文章和评论，1-仅分区所有者可以发文章任何人都可以评论，2-仅分区所有者可以发文章和评论
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 创建文章分区

POST /v1/community/ba/create

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSONC
{
  "name": "1111111111", // 分区名称，最多10字
  "avatar": "https://..." // 分区头像
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "id": 0 // 分区ID
  },
  "msg": "success" // 返回消息
}
```

## 编辑文章分区

POST /v1/community/ba/edit

请求头:

| 名称  | 必须 | 备注                 |
| ----- | ---- | -------------------- |
| token | 是   | 必须为文章分区所有者 |

请求体：

```JSONC
{
  "baId": 0, // 分区ID
  "name": "1111111111", // 分区名称，最多10字
  "avatar": "https://..." // 分区头像
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 删除文章分区

POST /v1/community/ba/delete

请求头:

| 名称  | 必须 | 备注                 |
| ----- | ---- | -------------------- |
| token | 是   | 必须为文章分区所有者 |

请求体：

```JSONC
{
  "baId": 0 // 分区ID
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 创建文章草稿

POST /v1/community/posts/create-draft

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSONC
{
  "baId": 0, // 草稿所在分区ID
  "title": "测试完整草稿标题", // 草稿标题
  "content": "测试文章草稿内容", // 草稿内容
  "contentType": 1, // 草稿类别，1-文本，2-Markdown
  "draftId": 0 // 草稿ID，若此值不为0云湖将会删除这里设定的草稿ID所对应的草稿，以此实现草稿编辑
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "id": 123 // 草稿ID
  },
  "msg": "success" // 返回消息
}
```

## 获取文章草稿信息

POST /v1/community/posts/get-draft

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSONC
{
  "baId": 0, // 草稿所处文章分区ID，一般为0
  "draftId": 123 // 草稿ID
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "posts": { // 帖子相关
      "id": 123, // 文章id
      "baId": 41, // 文章所属分区id
      "senderId": "123", // 文章作者
      "senderNicknameId": 123, // 作者名称id
      "senderAvatarId": 123, // 作者头像id
      "groupId": "", // 文章所属群聊id
      "title": "test", // 文章标题
      "contentType": 1, // 文章类型，1-普通文字，2-Markdown
      "content": "内容", // 文章内容
      "delTime": 0, // 删除时间
      "createTime": 1757818078, // 文章发布时间戳
      "updateTime": 0, // 文章更新时间戳
      "editTime": 0, // 文章编辑时间戳
      "lastActive": 1757818078, // 文章上次活跃时间
      "likeNum": 0, // 文章赞数
      "commentNum": 0, // 文章评论数量
      "collectNum": 0, // 文章收藏数量
      "isDraft": 0, // 是否为草稿，0-不是，1-是
      "isSticky": 0, // 置顶时间戳，若不是置顶则为0
      "amountNum": 0, // 文章投币数量
      "senderNickname": "作者", // 文章作者名称
      "senderAvatar": "https://...", // 文章作者头像url
      "createTimeText": "2025-09-14 10:47:58", // 文章发布时间
      "group": { // 文章绑定群聊相关
      "id": 0, // 文章所属群聊的类型id
      "groupId": "", // 文章所属群聊id
      "name": "", // 群聊名称
      "introduction": "", // 群聊简介
      "createBy": "", // 群聊群主id
      "createTime": 0, // 群聊创建时间戳
      "avatarId": 0, // 群聊头像id
      "del_flag": 0,
      "avatarUrl": "", // 群聊头像url
      "headcount": 0, // 群聊人数
      "readHistory": 0, // 是否开启聊天历史记录，0-没有，1-开了
      "alwaysAgree": 0, // 新成员是否直接进入群聊，0-没有，1-开了
      "categoryId": 0, // 群聊类型id
      "category": "", // 群聊类型
      "private": 0, // 群聊是否私有，0-没有，1-开了
      "banId": 0, // 被banid
      "gag": 0, // 被禁言者id
      "gagBy": "", // 禁言者id
      "msgTypeLimit": "" // 消息类型限制
      },
    "isLiked": "0",  // (你)是否点赞该文章，0-没有，1-点了
    "isCollected": 0, // (你)是否收藏该文章，0-没有，1-点了
    "isReward": 0, // (你)是否投币该文章，0-没有，1-点了
    "isVip": 0 // 暂时不清楚
    }
  },
  "msg": "success" // 返回消息
}
```

## 删除文章草稿

POST /v1/community/posts/cancel-draft

请求头:

| 名称  | 必须 | 备注             |
| ----- | ---- | ---------------- |
| token | 是   | 必须为草稿创建者 |

请求体：

```JSONC
{
  "draftId": 123 // 草稿ID
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 关注分区

POST /v1/community/ba/user-follow-ba

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSONC
{
  "baId": 45, // 分区id
  "followSource": 2
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 取关分区

POST /v1/community/ba/user-unfollow-ba

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSONC
{
  "baId": 45, // 分区id
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 置顶/取消置顶文章

POST /v1/community/posts/edit-sticky

请求头:

| 名称  | 必须 | 备注             |
| ----- | ---- | ---------------- |
| token | 是   | 必须是分区管理者 |

请求体：

```JSONC
{
  "postId": 45008 // 文章id（如果已经置顶了，则会取消置顶）
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 获取分区关注者列表

POST /v1/community/ba/follower-list

请求头:

| 名称  | 必须 | 备注             |
| ----- | ---- | ---------------- |
| token | 是   | 必须是分区管理者 |

请求体：

```JSONC
{
  "id": 115, // 分区id
  "size": 20, // 每页显示的数量
  "page": 1, // 第1页
  "memberName": "" // 搜索关注者的关键词
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "followers": [
      {
        "id": 11930, //关注id（应该是）
        "baId": 115, // 分区id
        "userId": "1234567", // 关注者用户id
        "delTime": 0,
        "followSource": 2,
        "createTime": 1763132265, // 关注时间戳
        "userLevel": 0, // 关注者等级（0-普通，2-分区管理员）
        "nickname": "是个人", // 关注者名称
        "avatarUrl": "https://chat-img.jwznb.com/6900488d625d48ac45ba34eff5b1246c.jpg", // 关注者头像url
        "vipUserid": "1234567", // 关注者vip用户id
        "vipEndTime": 1765728069 // vip结束时间戳
      }
    ],
    "total": 1 // 总关注者数量
  },
  "msg": "success" // 返回消息
}
```

## 设置分区管理员

POST /v1/community/ba/manage-setting

请求头:

| 名称  | 必须 | 备注             |
| ----- | ---- | ---------------- |
| token | 是   | 必须是分区创建者 |

请求体：

```JSONC
{
  "baId": 115, // 分区id
  "userId": "1234567", // 用户id
  "userLevel": 2 // 关注者(用户)等级（0-普通，2-分区管理员）
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 获取用户创建的分区

POST /v1/community/ba/list-by-create

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSONC
{
  "userId": "1234567" // 用户id
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "ba": [
      {
        "id": 50, // 分区id
        "name": "123", // 分区名称
        "avatar": "https://..." // 分区头像url
      }
    ]
  },
  "msg": "success" // 返回消息
}
```

## 获取推荐文章

POST /v1/community/posts/post-list-recommend

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体：

```JSONC
{
 "size":1, // 每页的文章数量
 "page":2 // 页数
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "posts": [
      {
        "id": 29950, // 文章id
        "baId": 41, // 文章所属分区id
        "senderId": "1234567", // 文章作者id
        "senderNicknameId": 127504, // 作者昵称id
        "senderAvatarId": 32537, // 作者头像id
        "groupId": "", // 文章所属群聊id
        "title": "测试", // 文章标题
        "contentType": 2, // 文章类型，1-普通文字，2-Markdown
        "content": "如果缺少您所在的城市，欢迎反馈添加。", // 文章部分内容
        "delTime": 0, // 删除时间戳
        "createTime": 1748067660, // 创建时间戳
        "updateTime": 0, // 更新时间戳
        "editTime": 1767086078, // 编辑时间戳
        "lastActive": 1767086078, // 上次活跃时间戳
        "likeNum": 14, // 文章点赞数量
        "commentNum": 522, // 文章评论数量
        "collectNum": 1, // 文章收藏数量
        "isDraft": 0, // 是否为草稿，0-不是，1-是
        "isSticky": 0, // 置顶时间戳，0-不是，1-是
        "amountNum": 0, // 文章投币数量
        "auditStatus": 0, // 审核状态
        "delBy": "",
        "senderNickname": "昵称", // 作者昵称
        "senderAvatar": "https://chat-img.jwznb.com/xxx.jpg", // 作者头像url
        "createTimeText": "",
        "group": {
          "id": 0,
          "groupId": "",
          "name": "",
          "introduction": "",
          "createBy": "",
          "createTime": 0,
          "avatarId": 0,
          "del_flag": 0,
          "avatarUrl": "",
          "headcount": 0,
          "readHistory": 0,
          "alwaysAgree": 0,
          "categoryId": 0,
          "category": "",
          "private": 0,
          "banId": 0,
          "gag": 0,
          "gagBy": "",
          "msgTypeLimit": "",
          "keyword": "",
          "hideMember": 0,
          "allowRecommend": 0,
          "blockFriends": 0,
          "autoDeleteMessage": 0
        },
        "isLiked": "1", // 是否点赞，0-不是，1-是
        "isCollected": 0, // 是否收藏，0-不是，1-是
        "isReward": 0, // 是否投币，0-不是，1-是
        "isVip": 1, // 作者是否为vip
        "score": 877.005014928 // 文章分数（猜测）
      }
    ],
    "total": 3933 // 总文章数量
  },
  "msg": "success" // 返回消息
}
```
