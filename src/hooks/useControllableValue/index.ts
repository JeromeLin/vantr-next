import { useCallback, useState } from 'react';
import useUpdateEffect from '../useUpdateEffect';

export interface Options<T> {
  defaultValue?: T;
  defaultValuePropName?: string;
  valuePropName?: string;
  trigger?: string;
}

export interface Props {
  [key: string]: any;
}

interface StandardProps<T> {
  value: T;
  defaultValue?: T;
  onChange: (val: T) => void;
}
function useControllableValue<T = unknown>(
  props: StandardProps<T>,
): [T, (value: T) => void];
function useControllableValue<T = unknown>(
  props?: Props,
  options?: Options<T>,
): [T, (value: T, ...args: unknown[]) => void];
function useControllableValue<T = unknown>(
  props: Props = {},
  options: Options<T> = {},
) {
  const {
    defaultValue,
    defaultValuePropName = 'defaultValue',
    valuePropName = 'value',
    trigger = 'onChange',
  } = options;

  const value = props[valuePropName] as T;

  const [state, setState] = useState<T>(() => {
    if (valuePropName in props) {
      return value;
    }
    if (defaultValuePropName in props) {
      return props[defaultValuePropName];
    }
    return defaultValue;
  });

  useUpdateEffect(() => {
    if (valuePropName in props) {
      setState(value);
    }
  }, [value, valuePropName]);

  const handleSetState = useCallback(
    (v: T, ...args: unknown[]) => {
      if (!(valuePropName in props)) {
        setState(v);
      }
      if (props[trigger]) {
        props[trigger](v, ...args);
      }
    },
    [props, valuePropName, trigger],
  );

  return [valuePropName in props ? value : state, handleSetState] as const;
}

export default useControllableValue;
