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
        link: "v1/",
      },
      {
        text: "wss",
        link: "wss/",
      },
      {
        text: "web",
        link: "web/",
      },
      {
        text: "bot",
        link: "bot/",
      },
      {
        text: "完整 proto",
        link: "full_proto",
      },
      {
        text: "url_scheme",
        link: "url_scheme",
      }
    ],
  },
  {
    text: "API吐槽",
    icon: "comment",
    link: "/云湖API吐槽/",
  },
  {
    text: "贡献指南",
    icon: "book",
    link: "/contribution_guide",
  },
  {
    text: "Awesome 云湖 API",
    icon: "eye",
    link: "/awesome",
  },
]);
