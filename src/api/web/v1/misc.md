---
title: misc
---

未特别说明情况下请求域名均为 `chat-web-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.  

## 获取更新日志

POST /v1/misc/updates

请求体:  

```JSONC
{
    "platform": "android", // 平台，可选 android/ios/harmony/windows/macos/linux
    "size": 5, // 一页返回的数量
    "page": 1 // 页码
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "total": 23, // 更新日志总数
    "updates": [
      {
        "id": 53, // 版本 id
        "version": "1.5.24+385", // 版本 号
        "platform": "android", // 平台
        "content": "1. 深色模式下举报页面优化\n2. 用户详情页页面优化，支持小尺寸屏幕\n3. 软件冷启动速度提升\n4. 群推荐列表按钮优化\n5. 群成员可以看标签组列表\n6. 社区主页改为文章列表", // 更新日志
        "createTime": 1769585053 // 发布时间戳
      },
      {
        "id": 50,
        "version": "1.5.18+379",
        "platform": "android",
        "content": "1. 增加文章置顶功能\n2. 设置管理员功能改到群成员列表中\n3. 封禁用户增加申诉功能\n4. 个人页面增加社区板块入口\n5. 其他问题修复",
        "createTime": 1767094135
      },
      {
        "id": 49,
        "version": "1.5.15+376",
        "platform": "android",
        "content": "1. 好友请求列表支持分页加载\n2. 修复没有手机卡的情况下点击登录的问题\n3. 增加社区板块管理功能",
        "createTime": 1766124219
      },
      {
        "id": 47,
        "version": "1.5.9+370",
        "platform": "android",
        "content": "1. 增加隐藏群成员列表功能，避免乱加好友\n2. 解决群内限制文本消息类型时导致markdown也不能发送的问题",
        "createTime": 1763476085
      },
      {
        "id": 46,
        "version": "1.5.7+368",
        "platform": "android",
        "content": "1. 开放社区板块创建功能\n2. 创建群时群简介支持多行\n3. 个人资料解决日期错误问题\n4. 其他问题修复",
        "createTime": 1763113823
      }
    ]
  },
  "msg": "success" // 返回消息
}
```
