
async function postJSON<T = any>(url: string, data: any): Promise<T> {
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

async function getJSON<T = any>(url: string, data: any): Promise<T> {
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