---
title: ConfigProvider 全局配置
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  path: /basic
---

# ConfigProvider 全局配置

用于配置 Vantr 组件的配置

<API />

## 图标配置

### IconConfig

| 属性名         | 描述           | 类型                                                   | 默认值             |
| -------------- | -------------- | ------------------------------------------------------ | ------------------ |
| size           | 图标尺寸       | `"lg" \| "md" \| "sm" \| "xs"`                         | `md`               |
| strokeWidth    | 描边宽度       | `number`                                               | `4`                |
| strokeLinecap  | 描边端点类型   | `"butt" \| "round" \| "square"`                        | `round`            |
| strokeLinejoin | 描边连接线类型 | `"miter" \| "round" \| "bevel"`                        | `round`            |
| theme          | 默认主题       | `"outline" \| "filled" \| "two-tone" \| "multi-color"` | `outline`          |
| colors         | 默认主题色     | `IconConfigColors`                                     | `IconConfigColors` |

### IconConfigColors

```json
{
  "outline": {
    "fill": "#333",
    "background": "transparent"
  },
  "filled": {
    "fill": "#333",
    "background": "#fff"
  },
  "twoTone": {
    "fill": "#333",
    "twoTone": "#2080f0"
  },
  "multiColor": {
    "outStrokeColor": "#333",
    "outFillColor": "#2080f0",
    "innerStrokeColor": "#fff",
    "innerFillColor": "#43CCF8"
  }
}
```
