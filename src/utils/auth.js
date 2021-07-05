import cookie from "js-cookie";

const token = "admin_toKen";
const usernameKey = "username";

export function getToKen() {
  return cookie.get(token);
}

export function setToKen(payload) {
  return cookie.set(token, payload);
}

export function removeToken() {
  return cookie.remove(token);
}

export function getUserName() {
  return cookie.get(usernameKey);
}

export function setUserName(value) {
  return cookie.set(usernameKey, value);
}

export function removeUserName() {
  return cookie.remove(usernameKey);
}
