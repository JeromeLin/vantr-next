---
title: Popup 弹出层
nav:
  title: 组件
  path: /components
---

# Popup 弹出层

弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。

<code src="./demo/index" hidden/>

## 基础用法

<code src="./demo/basic" desc="通过 `visible` 控制弹出层是否展示。" pure/>

## 弹出位置

<code src="./demo/position" desc="通过 `position` 属性设置弹出位置，默认居中弹出，可以设置为 `top`、`bottom`、`left`、`right`。" pure/>

## 关闭图标

<code src="./demo/close" desc="设置 `closeable` 属性后，会在弹出层的右上角显示关闭图标，并且可以通过 `closeIcon` 属性自定义图标，使用 `closeIconPosition` 属性可以自定义图标位置。" pure/>

## 圆角弹窗

<code src="./demo/round" desc="设置 `round` 属性后，弹窗会根据弹出位置添加不同的圆角样式。" pure/>

## 指定挂载位置

<code src="./demo/container" desc="弹出层默认挂载到组件标签所在位置，可以通过 `container` 属性指定挂载位置。" pure/>

<API/>
