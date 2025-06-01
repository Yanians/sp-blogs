
export function OpenPopup(url: string, width = 600, height = 700): Window | null {
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;

  return window.open(
    url,
    '_blank',
    `width=${width},height=${height},top=${top},left=${left},resizable,scrollbars=yes,status=1`
  );
}