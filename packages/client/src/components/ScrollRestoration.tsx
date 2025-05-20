
// ScrollRestoration.tsx
import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// const scrollPositions = new Map<string, number>();

// export default function ScrollRestoration() {
//   const location = useLocation();
//   const path = location.pathname;
//   const prevPath = useRef(path);

//   // Save scroll position on unmount or path change
//   useEffect(() => {
//     return () => {
//       scrollPositions.set(prevPath.current, window.scrollY);
//     };
//   }, []);

//   useLayoutEffect(() => {
//     const pos = scrollPositions.get(path) ?? 0;
//     window.scrollTo(0, pos);
//     prevPath.current = path;
//   }, [path]);

//   return null;
// }

// packages/client/src/components/ScrollRestoration.tsx

// import { useEffect, useLayoutEffect, useRef } from 'react';
// import { useLocation } from 'react-router-dom';

const scrollPositions = new Map<string, number>();

export default function ScrollRestoration() {
  const { pathname } = useLocation();
  const prevPath = useRef(pathname);

  // Save scroll position on path change
  useEffect(() => {
    return () => {
      scrollPositions.set(prevPath.current, window.scrollY);
    };
  }, []);

  useLayoutEffect(() => {
    const scrollY = scrollPositions.get(pathname) ?? 0;
    window.scrollTo({ top: scrollY, left: 0 });
    prevPath.current = pathname;
  }, [pathname]);

  return null;
}
