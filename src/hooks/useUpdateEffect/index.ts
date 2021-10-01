import { useRef } from 'react';
import useIsomorphicEffect from '../useIsomorphicEffect';

const useUpdateEffect: typeof useIsomorphicEffect = (effect, deps) => {
  const isMounted = useRef(false);

  useIsomorphicEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useIsomorphicEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, deps);
};

export default useUpdateEffect;
