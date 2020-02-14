import { config } from '../config';
import users from './users.json';

const DELAY = !process.env.REACT_TEST;

export const HttpClient = {
  /**
   * @param { string } url
   * @param {{ method: string, body?: object }} options
   */
  request: (url, options = { method: 'GET '}) => {
    const { method, body } = options;

    return new Promise(res => {
      const networkDelay = DELAY ? (Math.random() * 200) + 250 : 0;
      setTimeout(() => {
        const [, endpoint] = url.split(config.baseUrl);
  
        const { endpoints } = config;
        console.log('Api client got request:');
        console.log({ url, endpoint, method, body });

        switch (method) {
          // Get users
          case 'GET': {
            switch(endpoint) {
              case endpoints.users: {
                return res(users);
              }
            }
          }

          case 'POST': {
            switch(endpoint) {
              case endpoints.addUser: {
                console.log('add user hit!');
                // Add new user
                const userId = Math.round((Math.random() * 100000));
                return res({ userId });
              }
            }
          }
        }

        return res({});

      }, networkDelay);

      // Parse to response
    }).then(response => ({
      url,
      response,
      options: { method },
      body,
    }));
  }
}