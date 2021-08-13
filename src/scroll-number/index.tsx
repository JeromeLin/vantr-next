// https://github.com/ant-design/ant-design/blob/master/components/badge/ScrollNumber.tsx

import * as React from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider';
import { cloneElement } from '../_internal';
import SingleNumber from './SingleNumber';
import './style';

export interface ScrollNumberProps {
  prefixCls?: string;
  className?: string;
  motionClassName?: string;
  count?: string | number | null;
  children?: React.ReactElement<HTMLElement>;
  component?: string;
  style?: React.CSSProperties;
  title?: string | number | null;
  show: boolean;
}

export interface ScrollNumberState {
  animateStarted?: boolean;
  count?: string | number | null;
}

const ScrollNumber: React.FC<ScrollNumberProps> = ({
  prefixCls: customizePrefixCls,
  count,
  className,
  motionClassName,
  style,
  title,
  show,
  component = 'sup',
  children,
  ...restProps
}) => {
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('scroll-number', customizePrefixCls);

  const newProps = {
    ...restProps,
    'data-show': show,
    style,
    className: classNames(prefixCls, className, motionClassName),
    title: title as string,
  };

  let numberNodes: React.ReactNode = count;
  if (count && Number(count) % 1 === 0) {
    const numberList = String(count).split('');

    numberNodes = numberList.map((num, i) => (
      <SingleNumber
        prefixCls={prefixCls}
        count={Number(count)}
        value={num}
        key={numberList.length - i}
      />
    ));
  }

  if (style && style.borderColor) {
    newProps.style = {
      ...style,
      boxShadow: `0 0 0 1px ${style.borderColor} inset`,
    };
  }
  if (children) {
    return cloneElement(children, (oriProps) => ({
      className: classNames(
        `${prefixCls}-custom-component`,
        oriProps?.className,
        motionClassName,
      ),
    }));
  }
  return React.createElement(component, newProps, numberNodes);
};

export default ScrollNumber;
