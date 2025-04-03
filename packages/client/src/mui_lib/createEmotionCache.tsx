import createCache from '@emotion/cache';

export default function createEmotionCache(nonce?:string) {
  return createCache({ 
    key: 'css',
    nonce:nonce || undefined,
    prepend:true,
  });
}
