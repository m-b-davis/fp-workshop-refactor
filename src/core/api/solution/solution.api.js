import { HttpClient } from '../../../_do_not_look_/http-client'
import { config } from '../../../config';
import * as R from 'ramda';

const { baseUrl, endpoints } = config;

// Helper to construct urls
const createUrl = endpoint => `${baseUrl}${endpoint}`;

const urls = {
  users: createUrl(endpoints.users),
  addUser: createUrl(endpoints.addUser),
};

// General api request
function baseRequest(method, url, body) {
  return HttpClient.request(url, { method, body: body || {} });
}

// Curried request(): method => url => body => request(method, url, body);
const request = R.curry(baseRequest);

// Partially apply method to get more specific request function
// put(): url => body => request('PUT', url, body);
const put = request('PUT');
const get = request('GET', R.__, undefined);
const post = request('POST');

// Apply url to get function function to request specific endpoint
// addUser(): body => request('POST', urls.addUser, body);
const addUser = post(urls.addUser);

const getUsers = () => get(urls.users);

const baseMethods = { put, get, post, request };

export const apiClient = { 
  ...baseMethods,
  addUser,
  getUsers,
};