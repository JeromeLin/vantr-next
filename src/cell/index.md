---
title: Cell 单元格
nav:
  title: 组件
  path: /components
---

# Cell 单元格

单元格为列表中的单个展示项。

<code src="./demo/index" hidden/>

## 基础用法

<code src="./demo/basic" desc='`Cell` 可以单独使用，也可以与 `CellGroup` 搭配使用，`CellGroup` 可以为 `Cell` 提供上下外边框。' pure/>

## 卡片风格

<code src="./demo/inset" desc='通过 `CellGroup` 的 `inset` 属性，可以将单元格转换为圆角卡片风格' pure/>

## 单元格大小

<code src="./demo/size" desc='通过 `size` 属性可以控制单元格的大小。' pure/>

## 展示图标

<code src="./demo/icon" desc='通过 `icon` 属性在标题左侧展示图标。' pure/>

## 展示箭头

<code src="./demo/arrow" desc='设置 `arrow` 属性后会在单元格右侧显示箭头，并且可以通过 `arrow` 属性控制箭头方向。' pure/>

## 分组标题

<code src="./demo/group" desc='通过 `CellGroup` 的 `title` 属性可以指定分组标题。' pure/>

## 垂直居中方式

<code src="./demo/align" desc='通过 `align` 属性可以设置 `Cell` 的垂直居中方式。' pure/>

<API />

# CellGroup 单元格分组

<API src="../cell-group/index.tsx" />
