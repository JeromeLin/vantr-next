import * as React from 'react';
import * as ReactDOM from 'react-dom';
import type { GetContainer } from './base-props';
import { canUseDocument, getContainer } from './dom';

export interface PortalProps {
  container: GetContainer;
}

const Portal: React.FC<PortalProps> = (props) => {
  const { container, children } = props;
  const containerRef = React.useRef<HTMLElement | null>();

  const initRef = React.useRef(false);
  if (!initRef.current && canUseDocument()) {
    containerRef.current = getContainer(container);
    initRef.current = true;
  }

  return containerRef.current
    ? ReactDOM.createPortal(children, containerRef.current)
    : null;
};

export default Portal;
