import { selectUsers, selectNumberOfUsers, selectNames, selectNamesLowercase, selectFirstFiveUsers, selectFirstFiveSlogans, selectTotalAge, selectUniqueAges, selectAverageAge, selectNamesString } from './solution.selectors';
import { mockStore } from '../mockStore';

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

  test('selectNamesString', () => {
    const expected = mockStore.users.map(user => user.personal.fullName).join(', ');
    const result =  selectNamesString(mockStore);

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
