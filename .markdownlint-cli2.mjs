export default {
    config: {
        default: true,
        MD013: false,
        MD024: {
            "siblings_only": true
        },
        MD033: {
            allowed_elements: [
                "div",
                "span",
                "br",
                "p",
                "img",
                "template",
                "script",
                "style",
                "iframe",
                "ArtPlayer",
                "AudioPlayer",
                "Badge",
                "BiliBili",
                "Catalog",
                "CodePen",
                "DemoProject",
                "HighlightPanel",
                "ProjectLink",
                "PDF",
                "Replit",
                "Share",
                "SiteInfo",
                "StackBlitz",
                "VPBanner",
                "VPCard",
                "VidStack",
                "VideoPlayer",
                "YouTube",
                "MyComponent",
                "ColorModeSwitch",
                "FlowChartPlayground",
                "IconDisplay",
                "KatexPlayground",
                "PrintButton",
                "ThemeColorPicker",
                "VPIcon",
                "ToggleFullScreenButton",
                "ToggleRTLButton",
                "LinkCard"
            ]
        }
    },
    ignores: [
        "**/node_modules/**",
        "**/.vuepress/**",
        "**/*.snippet.md",
        "**/src/云湖API吐槽/**",
        "**/.github/**"
    ]
};