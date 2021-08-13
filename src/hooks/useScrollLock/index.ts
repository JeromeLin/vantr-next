import * as React from 'react';
import { useEffect, useContext } from 'react';
import useTouch from '../useTouch';
import { ConfigContext } from '../../config-provider';
import {
  isFunction,
  supportsPassive,
  getScrollParent,
  preventDefault,
} from '../../_internal';

let totalLockCount = 0;

const useScrollLock = (
  rootRef: React.RefObject<HTMLElement>,
  shouldLock: boolean | (() => boolean),
) => {
  const { getPrefixCls } = useContext(ConfigContext);
  const BODY_LOCK_CLASS = getPrefixCls('overflow-hidden');
  const touch = useTouch();

  const onTouchMove = (event: TouchEvent) => {
    touch.move(event);

    const direction = touch.deltaY.current > 0 ? '10' : '01';
    const element = getScrollParent(
      event.target as Element,
      rootRef.current!,
    ) as HTMLElement;
    const { scrollHeight, offsetHeight, scrollTop } = element;
    let status = '11';

    if (scrollTop === 0) {
      status = offsetHeight >= scrollHeight ? '00' : '01';
    } else if (scrollTop + offsetHeight >= scrollHeight) {
      status = '10';
    }

    if (
      status !== '11' &&
      touch.isVertical() &&
      !(parseInt(status, 2) & parseInt(direction, 2))
    ) {
      preventDefault(event, true);
    }
  };

  const lock = () => {
    document.addEventListener('touchstart', touch.start);
    document.addEventListener(
      'touchmove',
      onTouchMove,
      supportsPassive ? { passive: false } : false,
    );

    if (!totalLockCount) {
      document.body.classList.add(BODY_LOCK_CLASS);
    }

    totalLockCount++;
  };

  const unlock = () => {
    if (totalLockCount) {
      document.removeEventListener('touchstart', touch.start);
      document.removeEventListener('touchmove', onTouchMove);

      totalLockCount--;

      if (!totalLockCount) {
        document.body.classList.remove(BODY_LOCK_CLASS);
      }
    }
  };

  useEffect(() => {
    if (isFunction(shouldLock) ? shouldLock() : shouldLock) {
      lock();
      return () => {
        unlock();
      };
    }
  }, [shouldLock]);
};

export default useScrollLock;
