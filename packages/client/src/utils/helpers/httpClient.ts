type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface RequestOptions {
  method?: HttpMethod;
  headers?: HeadersInit;
  body?: any;
  params?: Record<string, string | number>;
  signal?: AbortSignal;
}

const buildQueryString = (params?: Record<string, string | number>) => {
  if (!params) return '';
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) =>
    query.append(key, String(value))
  );
  return `?${query.toString()}`;
};

const httpClient = async <T = any>(
  url: string,
  options: RequestOptions = {}
): Promise<T> => {
  const { method = 'GET', headers, body, params, signal } = options;

  const fullUrl = url + buildQueryString(params);

  const fetchOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    signal,
  };

  if (body && method !== 'GET') {
    fetchOptions.body = JSON.stringify(body);
  }

  const response = await fetch(fullUrl, fetchOptions);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      `HTTP ${response.status} - ${response.statusText}: ${JSON.stringify(errorData)}`
    );
  }

  return response.json() as Promise<T>;
};

// Shortcut methods
export const get = <T = any>(url: string, params?: Record<string, string | number>) =>
  httpClient<T>(url, { method: 'GET', params });

export const post = <T = any>(url: string, body?: any) =>
  httpClient<T>(url, { method: 'POST', body });

export const put = <T = any>(url: string, body?: any) =>
  httpClient<T>(url, { method: 'PUT', body });

export const del = <T = any>(url: string, body?: any) =>
  httpClient<T>(url, { method: 'DELETE', body });

export default httpClient;

// Example usage...

/**
 * 
 * import { post, get, put, del } from './utils/httpClient';

// POST
const registerUser = async () => {
  const data = await post('/api/register', {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@example.com',
    password: 'secure1234',
  });
  console.log(data);
};

// GET
const fetchUser = async (userId: string) => {
  const user = await get(`/api/users/${userId}`);
  console.log(user);
};

// PUT
const updateUser = async (userId: string) => {
  const updated = await put(`/api/users/${userId}`, {
    firstName: 'Janet',
  });
  console.log(updated);
};

// DELETE
const deleteUser = async (userId: string) => {
  const result = await del(`/api/users/${userId}`);
  console.log(result);
};

 * 
 */