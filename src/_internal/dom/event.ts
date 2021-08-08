import { SyntheticEvent } from 'react';

export function stopPropagation(event: SyntheticEvent) {
  event.stopPropagation();
}

export function preventDefault(
  event: SyntheticEvent,
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
