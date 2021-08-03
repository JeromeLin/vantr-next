export interface BaseProps {
  /**
   * 设置组件样式前缀
   * @description.en-US Set component className prefix
   */
  prefixCls: string;
  /**
   * 组件样式名
   * @description.en-US Set component className
   */
  className?: string;
  /**
   * 组件样式
   * @description.en-US Set component CSSProperties
   */
  style?: React.CSSProperties;
}
