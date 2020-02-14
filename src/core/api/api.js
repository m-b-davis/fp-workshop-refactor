import { HttpClient } from '../../_do_not_look_/http-client'
import { config } from '../../config';

/**
 * Excercise:
 * 
 * Refactor this file to reduce repetition. Techniques:
 *  - Extract repeated code
 *  - Point free style
 *  - Currying and/or partial application (ramda provided)
 * 
 * Make sure all functions still work the same - same inputs = same results.
 */

// General api request

function request(method, url, body) {
  const requestBody = body || {} ;
  return HttpClient.request(url, { method, body: requestBody});
}

// Specific http methods
const put = (url, body) => {
  return request('PUT', url, body);
}

const get = (url) => {
  return request('GET', url, undefined);
}

const post = (url, body) => {
  return request('POST', url, body);
}

// App specific functions

const getUsers = () => {
  const url = `${config.baseUrl}${config.endpoints.users}`;
  return request('GET', url);
}

const addUser = (user) => {
  const url = `${config.baseUrl}${config.endpoints.addUser}`;
  return request('POST', url, { user });
}

// export required for tests!
export const apiClient = {
  put,
  get,
  post,
  request,
  addUser,
  getUsers,
};