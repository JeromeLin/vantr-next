import * as React from 'react';

const useIsomorphicEffect =
  typeof document !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export default useIsomorphicEffect;
