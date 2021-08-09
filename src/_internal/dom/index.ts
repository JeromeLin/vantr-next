import type { GetContainer } from '../base-props';
import { isFunction, isObject, isString } from '../utils';

export const canUseDocument = () =>
  !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );

export const getContainer = (container: GetContainer): HTMLElement | null => {
  if (!canUseDocument()) return null;
  if (isString(container)) {
    return document.querySelector(container);
  }

  if (isFunction(container)) {
    return container();
  }

  if (isObject(container) && container instanceof HTMLElement) {
    return container;
  }

  return document.body;
};

type ScrollElement = HTMLElement | Window;

const overflowScrollReg = /scroll|auto/i;
const defaultRoot = canUseDocument() ? window : undefined;

function isElement(node: Element) {
  const ELEMENT_NODE_TYPE = 1;
  return (
    node.tagName !== 'HTML' &&
    node.tagName !== 'BODY' &&
    node.nodeType === ELEMENT_NODE_TYPE
  );
}

export function getScrollParent(
  element: Element,
  root: ScrollElement | undefined = defaultRoot,
) {
  let node = element;

  while (node && node !== root && isElement(node)) {
    const { overflowY } = window.getComputedStyle(node);
    if (overflowScrollReg.test(overflowY)) {
      return node;
    }
    node = node.parentNode as Element;
  }

  return root;
}
