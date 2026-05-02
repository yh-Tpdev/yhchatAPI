---
url: /api/web/v1/rss.md
---
未特别说明情况下请求域名均为 `chat-web-go.jwzhd.com`\
没写请求/响应项目表示不需要相关参数.

## 获取 RSS 推荐大全

GET /v1/rss/recommend-list

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "list": [
      {
        "id": 1, // RSS 推荐 id
        "categoryId": 2, // 分类 id
        "title": "少数派", // 标题
        "rssUrl": "https://sspai.com/feed", // RSS 链接
        "description": "少数派致力于更好地运用数字产品或科学方法，帮助用户提升工作效率和生活品质", // 分类
        "siteUrl": "https://sspai.com", // 网站链接
        "lastPubTime": 1771479180, // 最新内容时间戳
        "sort": 0, // 排序
        "delFlag": 0, // 是否被删除
        "lastPubTimeText": "6小时前", // 最新内容时间文本
        "category": { // 分类
          "id": 2, // 分类 id
          "name": "🖥️ 科技数码", // 分类标题
          "anchor": "technology", // 分类英文
          "sort": 100, // 分类排序
          "delFlag": 0 // 分类是否被删除
        }
      }
      // ...
    ],
    "total": 28 // RSS 推荐总数
  },
  "msg": "success" // 返回消息
}
```

## 提交 RSS

POST /v1/rss/recommend-apply

请求体:

```JSONC
{
    "title": "轻雨Purainity的小站", // 网站标题
    "rssUrl": "https://jibukeshi.dpdns.org/rss.xml", // RSS 地址
    "siteUrl": "https://jibukeshi.dpdns.org/", // 网站地址
    "description": "一位热爱钻研技术、分享经验的互联网爱好者" // 描述
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```
