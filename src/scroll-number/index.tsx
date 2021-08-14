// https://github.com/ant-design/ant-design/blob/master/components/badge/ScrollNumber.tsx

import * as React from 'react';
import classnames from 'classnames';
import { ConfigContext } from '../config-provider';
import { BaseProps, cloneElement } from '../_internal';
import SingleNumber from './SingleNumber';
import './style';

export interface ScrollNumberProps extends BaseProps {
  /** 展示数字 */
  count?: string | number | null;
}

export interface ScrollNumberState {
  animateStarted?: boolean;
  count?: string | number | null;
}

const ScrollNumber: React.FC<ScrollNumberProps> = ({
  prefixCls: customizePrefixCls,
  count,
  className,
  style,
  children,
  ...restProps
}) => {
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('scroll-number', customizePrefixCls);

  const newProps = {
    ...restProps,
    style,
    className: classnames(prefixCls, className),
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
      className: classnames(
        `${prefixCls}-custom-component`,
        oriProps?.className,
      ),
    }));
  }

  return <span {...newProps}>{numberNodes}</span>;
};

export default ScrollNumber;
