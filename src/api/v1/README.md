---
title: v1
index: false
feed: false
timeline: false
article: false
---

这里存的是云湖 v1 API 的文档.  
一般情况下 URL 开头为 `https://chat-go.jwzhd.com/v1/`  
一般为 JSON 或者是 Protobuf 格式.  
Proto 文件中的 Status 未特别备注均为下面内容:  

```proto
message Status {
    uint64 number = 1; // 不知道干啥的,可能是请求ID
    uint64 code = 2; // 状态码,1为正常
    string msg = 3; // 返回消息
}
```

无特别说明,请求成功返回状态信息中 code 为状态码,msg 为状态信息.一般情况下响应成功的状态信息为以下格式  

```JSONC
{
    "code":1, // 返回状态码
    "msg":"success" //返回状态信息
}
```

注意！部分标注未完成的文档不具有参考价值！
