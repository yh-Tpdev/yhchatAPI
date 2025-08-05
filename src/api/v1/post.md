---
title: post
---

未特别说明情况下请求域名均为 https://chat-go.jwzhd.com
没写请求/响应项目表示不需要相关参数.  

## 帖子打赏接口文档  

POST /v1/community/posts/post-reward

请求头  
| 名称  | 必须 | 备注 |  
|-------|------|------|  
| token | 是   | 用户认证令牌 |  

请求体 (JSON)  
```json  
{  
  "postId": 1145,  // 帖子ID  
  "recvId": "7058262",
  "amount": 0.01  
}  
```  

成功响应  
```json  
{  
  "code": 1,  
  "msg": "success"  
}  
```  

---  

## 帖子收藏接口文档  

POST /v1/community/posts/post-collect

请求头  
| 名称  | 必须 | 备注 |  
|-------|------|------|  
| token | 是   | 用户认证令牌 |  

请求体 (JSON)  
```json  
{  
  "id": 1145
}  
```  

成功响应  
```json  
{  
  "code": 1,  
  "msg": "success"  
}  
```  

---  

## 帖子点赞接口文档  

POST /v1/community/posts/post-like

请求头  
| 名称  | 必须 | 备注 |  
|-------|------|------|  
| token | 是   | 用户认证令牌 |  

请求体 (JSON)  
```json  
{  
  "id": 1145
}  
```  

成功响应  
```json  
{  
  "code": 1,  
  "msg": "success"  
}  
```  

---  
