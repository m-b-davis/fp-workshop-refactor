import { composeValidators } from "./helpers/validations.utils";

/**
 * @typedef Validator
 * @type {(input: string) => boolean}
 */

/**
 * Excercise: 
 * - Convert below functions to pointfree style
 * - Note - you may need use bind here
 */

/** @type Validator */
export const containsNumber = term => {
  return /\d+/.test(term);
}

/** @type Validator */
export const containsSpaces = term => {
  return /\s+/.test(term);
}

/** @type Validator */
export const containsVowel = term => {
  return /[aeiou]+/.test(term);
}

/** @type Validator */
export const containsUppercase = term => {
  return /[A-Z]+/.test(term);
}

/** @type Validator */
export const containsLowercase = term => {
  return /[a-z]+/.test(term);
}

/** @type Validator */
export const containsSpecialCharacters = term => {
  return /[!@£$%^&*()]+/.test(term);
}

/** @type Validator */
export const containsNoSpaces = term => {
  const result = containsSpaces(term);
  return !result;
}

/** @type Validator */
export const containsNoSpecialCharacters = term => {
  const result = containsSpecialCharacters(term);
  return !result;
}

/** @type Validator */
export const longerThan5Chars = term => {
  const len = term.length;
  return len > 5;
}

/** @type Validator */
export const longerThan10Chars = term => {
  const len = term.length;
  return len > 10;
}

/**
 * Composition
 * composeValidators() takes a series of validators and returns a validator which can be used to validate an input
 * 
 * Example:
 */ 

const containsSpacesAndNumber = composeValidators(
  containsSpaces,
  containsVowel,
);

/**
 * Use composeValidators to create a function which can be used to validate a password
 */

/**
 * Use composeValidators to create a function which can be used to validate a password
 * Password must
 *  - Contain number(s)
 *  - Contain upper and lowercase letters
 *  - Contain special characters
 *  - No spaces
 *  @type Validator */
export const isStrongPassword = composeValidators(
  () => true,
  () => false,
  () => true,
);


/**
 * Advanced: Write a function which requires validators (returns true if all validators pass on an input)
 * Alternative: import { composeValidatorsAny } from '../validation.utils';
 * @param  {...Validator} validators 
 * @returns { Validator }
 */
export function composeValidatorsAny(...validators) {
  return () => true;
}

/**
 * Use composeValidatorsAny to create a function which validates whether a password is a weak password
 * A weak strength password must have at least one of the following properties:
 *  - Contain number(s)
 *  - Contain upper and lowercase letters
 *  - no spaces
 * @type Validator */
export const isWeakPassword = () => false;

/**
 * Use composeValidators and composeValidatorsAny to create a validator which validates whether a password is a medium strength password
 * A medium strength password must:
 *  - Have 8 characters or more
 *  - No spaces
 * 
 *  - Contain:
 *     - At least one of the following:
 *        - A number
 *     - One or more of the following: 
 *        - Uppercase letter
 *        - Lowercase letter
 *
 * @type Validator */
export const isMediumStrengthPassword = composeValidatorsAny(
  () => true,
  () => false,
  () => true,
);

