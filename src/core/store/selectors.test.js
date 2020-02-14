import { selectUsers, selectNumberOfUsers, selectNames, selectNamesLowercase, selectFirstFiveUsers, selectFirstFiveSlogans, selectTotalAge, selectUniqueAges, selectAverageAge } from "./selectors";
import { mockStore } from "./mockStore";

describe('selectors', () => {
  test('selectUsers', () => {
    const expected = mockStore.users;
    const result =  selectUsers(mockStore);

    expect(result).toEqual(expected);
  });

  test('selectNumberOfUSers', () => {
    const expected = mockStore.users.length
    const result =  selectNumberOfUsers(mockStore);

    expect(result).toEqual(expected);
  });

  test('selectNames', () => {
    const expected = mockStore.users.map(user => user.personal.fullName);
    const result =  selectNames(mockStore);

    expect(result).toEqual(expected);
  });

  test('selectNamesLowercase', () => {
    const expected = mockStore.users.map(user => user.personal.fullName.toLowerCase());
    const result =  selectNamesLowercase(mockStore);

    expect(result).toEqual(expected);
  });

  test('selectFirstFiveUsers', () => {
    const expected = mockStore.users.slice(0, 5);
    const result =  selectFirstFiveUsers(mockStore);

    expect(result).toEqual(expected);
  });

  test('selectFirstFiveSlogans', () => {
    const expected = mockStore.users.slice(0, 5).map(user => user.about.slogan);
    const result =  selectFirstFiveSlogans(mockStore);

    expect(result).toEqual(expected);
  });

  test('selectTotalAge', () => {
    const expected = mockStore.users.map(user => user.personal.age).reduce((a, b) => a + b, 0);
    const result =  selectTotalAge(mockStore);

    expect(result).toEqual(expected);
  });

  test('selectUniqueAges', () => {
    const expected = Array.from(new Set(mockStore.users.map(user => user.personal.age)));
    const result =  selectUniqueAges(mockStore);

    expect(result).toEqual(expected);
  });

  test('selectAverageAge', () => {
    const expected = mockStore.users
      .map(user => user.personal.age)
      .reduce((a, b) => a + b, 0)
    / mockStore.users.length;

    const result =  selectAverageAge(mockStore);

    expect(result).toEqual(expected);
  });
});


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
