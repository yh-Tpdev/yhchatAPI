---
title: ccD2s
author: ccD2s
---

云湖后端还是太神秘了，请听我给你慢慢分解：

- protobuf 折磨自己。（
- 带 token 时返回 proto ，token 为空时返回 json ，我们至今不知道这是什么逻辑。（
- 既然都用上 protobuf 了，为什么发送数据时还是用 json，省带宽但是只省了一半说是。（
