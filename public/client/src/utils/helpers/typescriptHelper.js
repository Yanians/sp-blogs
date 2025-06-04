"use strict";
async function postJSON(url, data) {
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!res.ok) {
        throw new Error(`Request failed: ${res.statusText}`);
    }
    return res.json();
}
async function getJSON(url, data) {
    const res = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!res.ok) {
        throw new Error(`Request failed: ${res.statusText}`);
    }
    return res.json();
}
