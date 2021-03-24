import { AUTH_TOKEN_KEY } from '../settings';

const KEY_PREFIX = '@emerge-link/';

export const getToken = () => {
  if (window !== undefined) {
    return window.localStorage.getItem(AUTH_TOKEN_KEY);
  }
};

export const authenticate = (data) => {
  if (window !== undefined) {
    window.localStorage.setItem(AUTH_TOKEN_KEY, data.token);
    window.localStorage.setItem(`${KEY_PREFIX}user-id`, data.id);
    window.localStorage.setItem(`${KEY_PREFIX}user-name`, data.name);
    window.localStorage.setItem(`${KEY_PREFIX}user-email`, data.email);
  }
};

export const logoff = () => {
  if (window !== undefined) {
    window.localStorage.removeItem(AUTH_TOKEN_KEY);
    window.localStorage.removeItem(`${KEY_PREFIX}user-id`);
    window.localStorage.removeItem(`${KEY_PREFIX}user-name`);
    window.localStorage.removeItem(`${KEY_PREFIX}user-email`);
  }
};
