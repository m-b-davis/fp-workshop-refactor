import { complement } from "ramda";
import { composeValidators } from "../helpers/validations.utils";

/**
 * @typedef Validator
 * @type {(input: string) => boolean}
 */

/** Rebind 'this' to regex */
const regexValidator = regex => regex.test.bind(regex);

/** @type Validator */
export const containsNumber = regexValidator(/\d+/);

/** @type Validator */
export const containsSpaces = regexValidator(/\s+/);

/** @type Validator */
export const containsVowel = regexValidator(/[aeiou]+/);

/** @type Validator */
export const containsUppercase = regexValidator(/[A-Z]+/);

/** @type Validator */
export const containsLowercase = regexValidator(/[a-z]+/);

/** @type Validator */
export const containsSpecialCharacters = regexValidator(/[!@£$%^&*()]+/);

/** @type Validator */
export const containsNoSpaces = complement(containsSpaces);

/** @type Validator */
export const containsNoSpecialCharacters = complement(containsSpecialCharacters);

const lengthGreaterThan = len => str => str.length > len;

/** @type Validator */
export const longerThan10Chars = lengthGreaterThan(10);

/** @type Validator */
export const longerThan5Chars = lengthGreaterThan(5);

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
 *  - Contain 1 or more numbers
 *  - Contain upper and lowercase letters
 *  - Contain special characters
 *  - No spaces
 *  - More than 10 characters
 */
export const isStrongPassword = composeValidators(
  containsNumber,
  containsUppercase,
  containsLowercase,
  containsSpecialCharacters,
  containsNoSpaces,
  longerThan10Chars,
);

/**
 * Takes a series of validators and returns a validator which is the composed result of all validators 
 * @param  {...Validator} validators 
 * @returns { Validator }
 */
export function composeValidatorsAny(...validators) {
  return (input) => {
    let isValid = false;

    for (let validator of validators) {
      if (validator(input)) {
        isValid = true;
      }
    }

    return isValid;
  }
}

/**
 * Use composeValidatorsAny to create a function which validates whether a password is a weak password
 * A weak strength password must have at least one of the following properties:
 *  - Contain number(s)
 *  - Contain upper and lowercase letters
 *  - no spaces
 */
export const isWeakPassword = composeValidatorsAny(
  containsNumber,
  containsUppercase,
  containsLowercase,
);

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
 */
export const isMediumStrengthPassword = composeValidators(
  lengthGreaterThan(8),
  containsNoSpaces,
  containsNumber,
  composeValidatorsAny(
    containsUppercase,
    containsLowercase,
  ),
);

