---
title: API
---
## 目录

::: warning

- 音频路由:
- `https://chat-audio1.jwznb.com/`
- 文件路由:
- `https://chat-file.jwznb.com/`
- `https://chat-storage1.jwznb.com/`(有签名校验,无 referer 限制)
- `https://chat-file-oss.jwznb.com/`(无 referer 限制,一般 chat-file 的大文件会被重定向到这里)
- 图片路由:
- `https://chat-img.jwznb.com/`
- `https://chat-img2.jwznb.com/`
- `https://chat-img3.jwznb.com/`
- 视频路由:
- `https://chat-video1.jwznb.com/`
  
云湖数据床地址需要请求头加上 `Referer: http://myapp.jwznb.com` 才可正常获取内容，否则会403.  

chat_type 聊天对象的类型: 1-用户, 2-群组, 3-机器人  
content_type 信息类型: 1-文本，2-图片，3-markdown，4-文件，5-表单，6-文章，7-表情，8-html，11-语音，13-语音通话, 14-A2UI  
:::

::: tip 如何让 LLM 写出可用性更高的代码
仅供参考,请根据实际情况调整.  
:::: details
```markdown
# 角色

你是 XX 领域的专家,现在请你帮助用户调用云湖 API 完成用户的需求.

# 依据

请使用下面 URL 对应的文件作为调用云湖 API 的唯一依据,除非用户告诉你文档中存在缺失/过时内容时可以额外参考其他依据,但是必须是用户发送给你的依据.
https://yh-api.yyyyt.top/llms-full.txt
如果你不能获取完整文件内容(完整内容 >10000 行),请要求用户手动下载完整文件并上传给你.
**请完全基于该文件中的内容回答.**

# 重要提醒

**请勿随意补全,猜测内容.如果你对内容有任何疑问的请立马询问用户确认.**
**发送给后端的请求格式严格遵循文档所写的格式,其他格式不兼容(JSON 相关的请求请勿带注释).**
**如果你使用 Python 语言编写而且使用谷歌官方的 protobuf 库,请务必注意 json_format 的 MessageToDict 函数输出的时候会把所有 int64 uint64 sint64 转成 str,此处更推荐使用第三方库规避这个问题.**
**请务必注意 protobuf 协议本身的特性.**
**云湖账号的 Token 请务必小心对待不要泄露,不要将 token 硬编码到代码中.**
```

:::


<Catalog />
