"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.put = exports.post = exports.get = void 0;
const buildQueryString = (params) => {
    if (!params)
        return '';
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => query.append(key, String(value)));
    return `?${query.toString()}`;
};
const httpClient = async (url, options = {}) => {
    const { method = 'GET', headers, body, params, signal } = options;
    const fullUrl = url + buildQueryString(params);
    const fetchOptions = {
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
        throw new Error(`HTTP ${response.status} - ${response.statusText}: ${JSON.stringify(errorData)}`);
    }
    return response.json();
};
// Shortcut methods
const get = (url, params) => httpClient(url, { method: 'GET', params });
exports.get = get;
const post = (url, body) => httpClient(url, { method: 'POST', body });
exports.post = post;
const put = (url, body) => httpClient(url, { method: 'PUT', body });
exports.put = put;
const del = (url, body) => httpClient(url, { method: 'DELETE', body });
exports.del = del;
exports.default = httpClient;
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
