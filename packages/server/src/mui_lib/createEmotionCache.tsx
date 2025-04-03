import createCache from '@emotion/cache';

export default function createEmotionCache() {
  return createCache({
     key: 'css',
     prepend:true // important to insert style before MUI
    });
}
