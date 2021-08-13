import * as React from 'react';
import { canUseDocument } from '.';

export function stopPropagation(event: Event | React.SyntheticEvent) {
  event.stopPropagation();
}

export function preventDefault(
  event: Event | React.SyntheticEvent,
  isStopPropagation?: boolean,
) {
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}

export function trigger(target: Element, type: string) {
  const inputEvent = document.createEvent('HTMLEvents');
  inputEvent.initEvent(type, true, true);
  target.dispatchEvent(inputEvent);
}

export let supportsPassive = false;

if (canUseDocument()) {
  try {
    const options = {};
    Object.defineProperty(options, 'passive', {
      get() {
        supportsPassive = true;
      },
    });
    window.addEventListener('test-passive', null as any, options);
    // eslint-disable-next-line no-empty
  } catch {}
}
