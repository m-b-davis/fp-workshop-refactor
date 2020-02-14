import { apiClient } from './api';
import users from '../../_do_not_look_/users.json';
import { config } from '../../config';

const methods = [
  'put',
  'get',
  'post',
  'request',
  'addUser',
  'getUsers',
];

describe.only('api tests', () => {
  test('exports correct methods', () => {
    methods.forEach(method => {
      expect(apiClient).toHaveProperty(method);
      expect(apiClient[method]).toBeInstanceOf(Function);
    });
  });

  test('exported methods are functions', () => {
    methods.forEach(method => {
      expect(apiClient).toHaveProperty(method);
      expect(apiClient[method]).toBeInstanceOf(Function);
    });
  });

  const url = config.baseUrl;
  const endpoint = '/foo-bar';
  const body = { foo: 123 };

  const baseResult = {
    url: `${url}${endpoint}`,
    response: {},
    body,
  }

  test('request returns correct values', done => {
    apiClient.request('FOO', `${url}${endpoint}`, body).then(result => {
      expect(result).toEqual({
        ...baseResult,
        options: {
          method: 'FOO',
        }
      });

      done();
    });
  });

  test('put returns correct values', done => {
    apiClient.put(`${url}${endpoint}`, body).then(result => {
      expect(result).toEqual({
        ...baseResult,
        options: {
          method: 'PUT',
        }
      });

      done();
    });
  });


  test('post returns correct values', done => {
    apiClient.post(`${url}${endpoint}`, body).then(result => {
      expect(result).toEqual({
        ...baseResult,
        options: {
          method: 'POST',
        }
      });

      done();
    });
  });

  test('get returns correct values', done => {
    apiClient.get(`${url}/users`, body).then(({ response }) => {
      expect(response.users).toBeDefined();
      expect(response.users.length).toEqual(users.users.length);
      expect(response.users[0]).toEqual(users.users[0]);
      expect(response.users[100]).toEqual(users.users[100]);

      done();
    });
  });

  test('getUsers returns correct values', done => {
    apiClient.getUsers().then(({ response }) => {
      expect(response.users).toBeDefined();
      expect(response.users.length).toEqual(users.users.length);
      expect(response.users[0]).toEqual(users.users[0]);
      expect(response.users[100]).toEqual(users.users[100]);

      done();
    });
  });
});
