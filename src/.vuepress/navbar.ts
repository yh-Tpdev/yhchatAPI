import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
      text: "API文档",
      icon: "book",
      prefix: "/api/",
      children: [
        {
        text: "v1",
        link: "v1/"
        }
        {
        text: "wss",
        link: "wss/"
        }
      ]
  }
])
