"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenPopup = OpenPopup;
function OpenPopup(url, width = 500, height = 600) {
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    const popup = window.open(url, 'oauthPopup', `width=${width},height=${height},top=${top},left=${left},resizable,scrollbars=yes,status=1`);
    if (!popup) {
        alert('Popup blocked');
        return;
    }
    const handleMessage = (event) => {
        if (event.origin !== window.location.origin)
            return;
        if (event.data?.token && event.data?.user) {
            // onSuccess(event.data);
            popup.close();
            window.removeEventListener('message', handleMessage);
        }
    };
    window.addEventListener('message', handleMessage);
}
