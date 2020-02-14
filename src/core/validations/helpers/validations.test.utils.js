import { composeValidators } from "./validations.utils";

test('composeValidators', () => {
  test('composeValidators should return false if any validator returns false', () => {
    const validator = composeValidators(
      () => false,
      () => false,
      () => true,
    );

    expect(validator('foo')).toEqual(false);
  });

  test('composeValidators should return true if all validators returns true', () => {
    const validator = composeValidators(
      () => true,
      () => true,
      () => true,
    );

    expect(validator('foo')).toEqual(true);
  });

  test('composeValidators should return false if all validators returns false', () => {
    const validator = composeValidators(
      () => false,
      () => false,
      () => false,
    );

    expect(validator('foo')).toEqual(false);
  });
});
