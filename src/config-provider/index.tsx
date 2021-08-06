import * as React from 'react';
import { IIconConfig } from '@icon-park/react/lib/runtime';
import { ConfigConsumerProps } from './context';

export interface ConfigProviderProps {
  /**
   * 设置统一样式前缀。注意：需要配合 less 变量 @vanr-prefix 使用
   * @default vanr
   */
  prefixCls?: string;
  /**
   * 自定义主题变量
   * @type object
   */
  themes?: Record<string, string | number>;
  /**
   * 图标默认配置
   * @type IconConfig
   */
  iconConfig?: Omit<IIconConfig, 'prefix'>;
}

interface ProviderChildrenProps extends ConfigProviderProps {
  parentContext: ConfigConsumerProps;
}

export const defaultPrefixCls = 'vanr';

let globalPrefixCls: string;

const setGlobalConfig = (params: Pick<ConfigProviderProps, 'prefixCls'>) => {
  if (params.prefixCls !== undefined) {
    globalPrefixCls = params.prefixCls;
  }
};

function getGlobalPrefixCls() {
  return globalPrefixCls || defaultPrefixCls;
}

const ConfigProvider: React.FC<ConfigProviderProps> = (props) => {
  const { prefixCls } = props;
  return <></>;
};

export default ConfigProvider;
