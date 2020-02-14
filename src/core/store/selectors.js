import { pipe, map } from 'ramda';

/**
 * Helper functions 
 */

/** @param {string} str  */
const lowercase = str => str.toLowerCase();

/** @param {number} age  */
const getAgeDisplayString = age => `${age} years old`;

/** @param {User} user  */
const selectPersonalInfo = user => user.personal;

/** @param {PersonalInfo} personalInfo  */
const selectAge = personalInfo => personalInfo.age;

/** @param {*[]} arr  */
const selectLength = arr => arr.length;

/** @type {(divider: string) => (arr: *[]) => string } */
const join = divider => arr => arr.join(divider);

/**
 * Excercise:
 *  - Think about how the below functions could be re-written using pipes
 *  - Extract repeated sections to new functions
 *  - Try to make each part of the pipe as generic as possible (think - point free)
 * 
 * Techniques:
 *  - Composition
 *  - Piping
 *  - Point free
 */

/** @param {Store} store  */
export const selectUsers = (/** @type Store */ store) => {
  return store.users;
}

/** @param {Store} store  */
export const selectNumberOfUsers = (store) => {
  const users = store.users;
  return users.length;
}

/** @param {Store} store  */
export const selectNames = (store) => {
  const users = store.users;
  const names = users.map(user => user.personal.fullName);
  return names;
}

/** @param {Store} store  */
export const selectUserNameString = store => {
  const users = store.users;
  const names = users.map(user => user.personal.fullName);
  return names.join(', ');
}

/** @param {Store} store  */
export const selectNamesLowercase = (store) => {
  const users = store.users;
  const names = users.map(user => user.personal.fullName);
  const lowercaseNames = names.map(name => lowercase(name));
  return lowercaseNames;
} 

/** @param {Store} store  */
export const selectFirstFiveUsers = store => {
  const users = store.users;  
  const firstFiveUsers = users.slice(0, 5);

  return firstFiveUsers;
}

/** @param {Store} store  */
export const selectFirstFiveSlogans = store => {
  const users = store.users;  
  const firstFiveUsers = users.slice(0, 5);

  const slogans = firstFiveUsers.map(user => {
    return user.about.slogan;
  });

  return slogans;
}

/** @param {Store} store  */
export const selectTotalAge = store => {
  const users = store.users;  

  const ages = users.map(user => user.personal.age);
  const total = ages.reduce((a, b) => a + b, 0);

  return total;
}

/** @param {Store} store  */
export const selectUniqueAges = store => {
  const users = store.users;
  const ages = users.map(user => user.personal.age);
  const deduped = ages.reduce((prev, next) => prev.includes(next) ? prev : [...prev, next ], [ages[0]]);

  return deduped;
}

/** @param {Store} store  */
export const selectAverageAge = store => {
  const users = store.users;  

  const ages = users.map(user => user.personal.age);
  const totalAge = ages.reduce((a, b) => a + b, 0);
  const average = totalAge / users.length;

  return average;
}

/**
 * JSDoc types
 */

/**
 * @typedef PersonalInfo
 * @type {object}
 * @property {string} fullName
 * @property {string} email
 * @property {string} gender
 * @property {string} address
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
* @property {AccountInfo} account
*/

/**
 * @typedef User
 * @type {object}
 * @property {number} id
 * @property {PersonalInfo} personal
 * @property {About} about
 */

/**
 * @typedef Store
 * @type {object}
 * @property {User[]} users
 */
