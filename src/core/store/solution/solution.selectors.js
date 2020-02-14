import { pipe, map, reduce, mean } from 'ramda';

/**
 * Helper functions 
 */

/** @param {string} str  */
const lowercase = str => str.toLowerCase();

/** @param {*[]} arr  */
const selectLength = arr => arr.length;

/** @type {(divider: string) => (arr: *[]) => string } */
const join = divider => arr => arr.join(divider);

/** @param {User} user  */
const selectUsersName = user => user.personal.fullName;

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
export const selectUsers = store => store.users;

export const selectNumberOfUsers = pipe(
  selectUsers,
  selectLength,
);

export const selectNames = pipe(
  selectUsers,
  map(selectUsersName),
);

export const selectNamesString = pipe(
  selectNames,
  join(', '),
);

export const selectNamesLowercase = pipe(
  selectNames,
  map(lowercase)
);

/** @type {(num: number) => (arr: *[]) => *[] } */
const takeElements = num => arr => arr.slice(0, num);

export const selectFirstFiveUsers = pipe(
  selectUsers,
  takeElements(5),
);

/** @param {User} user */
const getSlogan = user => user.about.slogan;

export const selectFirstFiveSlogans = pipe(
  selectFirstFiveUsers,
  map(getSlogan),
)

/** @param {User} user */
const getAge = user => user.personal.age;

const add = (a, b) => a + b;
const sum = reduce(add, 0);

const selectUserAges = pipe(
  selectUsers,
  map(getAge),
);

export const selectTotalAge = pipe(
  selectUserAges,
  sum,
);

/** @type {(arr: *[]) => *[]} arr */
const selectUnique = pipe(
  arr => new Set(arr),
  Array.from
);

export const selectUniqueAges = pipe(
  selectUserAges,
  selectUnique,
);

// with ramda
export const selectAverageAge = pipe(selectUserAges, mean);

// alternate
/** @param { number[] } nums */
const average = nums => nums.reduce((avg, value, _, arr) => {
  return avg + value / arr.length;
}, 0);

const selectAverageAgeReduce = pipe(selectUserAges, average);

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