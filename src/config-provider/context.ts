import * as React from 'react';
import { IIconConfig } from '@icon-park/react/lib/runtime';

export interface ConfigConsumerProps {
  iconConfig?: IIconConfig;
  rootPrefixCls?: string;
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
}

const defaultGetPrefixCls = (
  suffixCls?: string,
  customizePrefixCls?: string,
) => {
  if (customizePrefixCls) return customizePrefixCls;
  return suffixCls ? `vanr-${suffixCls}` : 'vanr';
};

export const ConfigContext = React.createContext<ConfigConsumerProps>({
  getPrefixCls: defaultGetPrefixCls,
});

export const ConfigConsumer = ConfigContext.Consumer;
