import { apiClient } from '../api/api';

/**
 * @typedef PersonalInfo
 * @type {object}
 * @property {number} id 
 * @property {object} name
 * @property {number} age
 */

/**
* @typedef Favourites
* @type {object}
* @property {string} film
* @property {string} hobby
*/

/**
* @typedef AccountInfo
* @type {object}
* @property {string} avatar 
*/

/**
* @typedef About
* @type {object}
* @property {string} slogan 
* @property {object} favourites
* @property {number} age
* @property {AccountInfo} account
*/

/**
 * @typedef User
 * @type {object}
 * @property {number} id 
 * @property {PersonalInfo} personal
 * @property {number} age
 */

/**
 * @typedef Store
 * @type {object}
 * @property {User[]} users
 */

const initStore = () => {
  /** @type Store */ let store = {
    users: [],
  };

  apiClient.getUsers().then(({ response }) => {
    /** @type User[] */ const users = response.users;

    store = {
      ...store,
      users: [...users],
    };
  });

  return {
    getState: () => {
      return store;
    }
  };
}

export const store = initStore();
