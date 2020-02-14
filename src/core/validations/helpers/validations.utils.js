/**
 * @typedef Validator
 * @type {(input: string) => boolean}
 */

/**
 * Takes a series of validators and returns a validator which is the composed result of all validators 
 * @param  {...Validator} validators 
 * @returns { Validator }
 */
export function composeValidators(...validators) {
  return (input) => {
    let isValid = true;

    for (let validator of validators) {
      if (!validator(input)) {
        isValid = false;
      }
    }

    return isValid;
  }
}

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
