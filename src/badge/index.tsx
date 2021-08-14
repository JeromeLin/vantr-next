// https://github.com/ant-design/ant-design/blob/master/components/badge/index.tsx

import * as React from 'react';
import { useRef, useMemo } from 'react';
import classnames from 'classnames';
import CSSMotion from 'rc-motion';
import { BaseProps, cloneElement } from '../_internal';
import { ConfigContext } from '../config-provider';
import ScrollNumber from '../scroll-number';
import './style';

export interface BadgeProps extends BaseProps {
  /**
   * 展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏
   */
  count?: React.ReactNode;
  /**
   * 当数值为 0 时，是否展示 Badge
   * @default false
   */
  showZero?: boolean;
  /**
   * 展示封顶的数字值
   * @default 99
   */
  overflowCount?: number;
  /**
   * 不展示数字，只有一个小红点
   * @default false
   */
  dot?: boolean;
  /**
   * 自定义小圆点的颜色
   */
  color?: string;
  /**
   * 	在设置了 count 的前提下有效，设置小圆点的大小
   */
  size?: 'large';
  /**
   * 设置状态点的位置偏移
   */
  offset?: [number | string, number | string];
  /**
   * 数字样式类名
   */
  scrollNumberPrefixCls?: string;
}

const Badge: React.FC<BadgeProps> = (props) => {
  const {
    prefixCls: customizePrefixCls,
    scrollNumberPrefixCls: customizeScrollNumberPrefixCls,
    className,
    color,
    count = null,
    overflowCount = 99,
    dot = false,
    size,
    offset,
    style,
    showZero = false,
    children,
    ...restProps
  } = props;

  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('badge', customizePrefixCls);

  const numberedDisplayCount = (
    (count as number) > (overflowCount as number) ? `${overflowCount}+` : count
  ) as string | number | null;

  const isZero = numberedDisplayCount === '0' || numberedDisplayCount === 0;

  const showAsDot = dot && !isZero;

  const mergedCount = showAsDot ? '' : numberedDisplayCount;

  const isHidden = useMemo(() => {
    const isEmpty =
      mergedCount === null || mergedCount === undefined || mergedCount === '';
    return (isEmpty || (isZero && !showZero)) && !showAsDot;
  }, [mergedCount, isZero, showZero, showAsDot]);

  // Count should be cache in case hidden change it
  const countRef = useRef(count);
  if (!isHidden) {
    countRef.current = count;
  }
  const livingCount = countRef.current;

  // We need cache count since remove motion should not change count display
  const displayCountRef = useRef(mergedCount);
  if (!isHidden) {
    displayCountRef.current = mergedCount;
  }
  const displayCount = displayCountRef.current;

  const isDotRef = useRef(showAsDot);
  if (!isHidden) {
    isDotRef.current = showAsDot;
  }

  const mergedStyle = useMemo<React.CSSProperties>(() => {
    if (!offset) {
      return { ...style };
    }

    const offsetStyle: React.CSSProperties = { marginTop: offset[1] };
    offsetStyle.right = -parseInt(offset[0] as string, 10);

    return {
      ...offsetStyle,
      ...style,
    };
  }, [offset, style]);

  const displayNode =
    !livingCount || typeof livingCount !== 'object'
      ? undefined
      : cloneElement(livingCount, (oriProps) => ({
          style: {
            ...mergedStyle,
            ...oriProps.style,
          },
        }));

  const badgeClassName = classnames(
    prefixCls,
    {
      [`${prefixCls}-not-a-wrapper`]: !children,
    },
    className,
  );

  return (
    <span {...restProps} className={badgeClassName}>
      {children}
      <CSSMotion
        visible={!isHidden}
        motionName={`${prefixCls}-zoom`}
        motionAppear={false}
      >
        {({ className: motionClassName }) => {
          const scrollNumberPrefixCls = getPrefixCls(
            'scroll-number',
            customizeScrollNumberPrefixCls,
          );

          const isDot = isDotRef.current;

          const scrollNumberCls = classnames(
            {
              [`${prefixCls}-dot`]: isDot,
              [`${prefixCls}-count`]: !isDot,
              [`${prefixCls}-count-large`]: size === 'large',
              [`${prefixCls}-multiple-words`]:
                !isDot && displayCount && displayCount.toString().length > 1,
            },
            motionClassName,
          );

          let scrollNumberStyle: React.CSSProperties = { ...mergedStyle };
          if (color) {
            scrollNumberStyle = scrollNumberStyle || {};
            scrollNumberStyle.background = color;
          }

          return (
            <ScrollNumber
              prefixCls={scrollNumberPrefixCls}
              className={scrollNumberCls}
              count={displayCount}
              style={scrollNumberStyle}
              key="scrollNumber"
            >
              {displayNode}
            </ScrollNumber>
          );
        }}
      </CSSMotion>
    </span>
  );
};

export default Badge;
