import { containsNumber, containsSpaces, containsVowel, containsUppercase, containsLowercase, containsSpecialCharacters, containsNoSpaces, isStrongPassword, isMediumStrengthPassword, composeValidatorsAny, isWeakPassword, containsNoSpecialCharacters, longerThan5Chars, longerThan10Chars } from './validations';

describe.skip('validations', () => {
  test('containsNumber', () => {
    const shouldMatch = ['0', 'abc1', '1abc'];
    const shouldNotMatch = ['a', '', 'abc'];
    const validator = containsNumber;

    shouldMatch.forEach(input => {
      const result = validator(input);
      if (!result) {
        console.log('containsNumber should return true for:', input);
      }
      expect(result).toBeTruthy();
    });

    shouldNotMatch.forEach(input => {
      const result = validator(input);
      if (result) {
        console.log('containsNumber should return false for:', input);
      }
      expect(result).toBeFalsy();
    });
  });

  test('containsSpaces', () => {
    const shouldMatch = [' ', 'ab c1', '1abc '];
    const shouldNotMatch = ['a', '', 'abc'];
    const validator = containsSpaces;


    shouldMatch.forEach(input => {
      const result = validator(input);
      if (!result) {
        console.log('containsSpaces should return true for:', input);
      }
      expect(result).toBeTruthy();
    });

    shouldNotMatch.forEach(input => {
      const result = validator(input);
      if (result) {
        console.log('containsSpaces should return false for:', input);
      }
      expect(result).toBeFalsy();
    });
  });

  test('containsVowel', () => {
    const shouldMatch = ['a', 'abc1', '1ec ', 'i', 'o', 'u'];
    const shouldNotMatch = ['z', 'dvx', '', 'zbc'];

    const validator = containsVowel;
  
    shouldMatch.forEach(input => {
      const result = validator(input);
      if (!result) {
        console.log('containsVowel should return true for:', input);
      }
      expect(result).toBeTruthy();
    });

    shouldNotMatch.forEach(input => {
      const result = validator(input);
      if (result) {
        console.log('containsVowel should return false for:', input);
      }
      expect(result).toBeFalsy();
    });
  });

  test('containsUppercase', () => {
    const shouldMatch = ['A', 'Badgvc', 'xvcvD'];
    const shouldNotMatch = ['z', 'dvx', '', 'zbc'];
    const validator = containsUppercase;

    shouldMatch.forEach(input => {
      const result = validator(input);
      if (!result) {
        console.log('containsUppercase should return true for:', input);
      }
      expect(result).toBeTruthy();
    });

    shouldNotMatch.forEach(input => {
      const result = validator(input);
      if (result) {
        console.log('containsUppercase should return false for:', input);
      }
      expect(result).toBeFalsy();
    });
  });

  test('containsLowercase', () => {
    const shouldMatch = ['z', 'dvx', 'ab', 'zbc'];
    const shouldNotMatch = ['A', 'B1234', 'CED', ''];
    const validator = containsLowercase;

    shouldMatch.forEach(input => {
      const result = validator(input);
      if (!result) {
        console.log('containsLowercase should return true for:', input);
      }
      expect(result).toBeTruthy();
    });

    shouldNotMatch.forEach(input => {
      const result = validator(input);
      if (result) {
        console.log('containsLowercase should return false for:', input);
      }
      expect(result).toBeFalsy();
    });
  });


  test('containsSpecialCharacters', () => {
    const shouldMatch = ['z$', '^vx', '@', 'z(bc', ')', '!', '&', '*'];
    const shouldNotMatch = ['A', 'Badgvc', 'xvcvD'];
    const validator = containsSpecialCharacters;

    shouldMatch.forEach(input => {
      const result = validator(input);
      if (!result) {
        console.log('containsSpecialCharacters should return true for:', input);
      }
      expect(result).toBeTruthy();
    });

    shouldNotMatch.forEach(input => {
      const result = validator(input);
      if (result) {
        console.log('containsSpecialCharacters should return false for:', input);
      }
      expect(result).toBeFalsy();
    });
  });

  test('containsNoSpaces', () => {
    const shouldMatch = ['a', '', 'abc'];
    const shouldNotMatch = [' ', 'ab c1', '1abc '];
    const validator = containsNoSpaces;

    
    shouldMatch.forEach(input => {
      const result = validator(input);
      if (!result) {
        console.log('containsNoSpaces should return true for:', input);
      }
      expect(result).toBeTruthy();
    });

    shouldNotMatch.forEach(input => {
      const result = validator(input);
      if (result) {
        console.log('containsNoSpaces should return false for:', input);
      }
      expect(result).toBeFalsy();
    });
  });

  test('containsNoSpecialCharacters', () => {
    const shouldMatch = ['A', 'Badgvc', 'xvcvD'];
    const shouldNotMatch = ['z$', '^vx', '@', 'z(bc', ')', '!', '&', '*'];
    const validator = containsNoSpecialCharacters;

    shouldMatch.forEach(input => {
      const result = validator(input);
      if (!result) {
        console.log('containsNoSpecialCharacters should return true for:', input);
      }
      expect(result).toBeTruthy();
    });

    shouldNotMatch.forEach(input => {
      const result = validator(input);
      if (result) {
        console.log('containsNoSpecialCharacters should return false for:', input);
      }
      expect(result).toBeFalsy();
    });});

  

  test('longerThan5Chars', () => {
    const shouldMatch = ['abc123', 'agimwegkpmeweg', '12414k21o4'];
    const shouldNotMatch = ['abc12', 'ab', ''];
    const validator = longerThan5Chars;
    
    shouldMatch.forEach(input => {
      const result = validator(input);
      if (!result) {
        console.log('longerThan5Chars should return true for:', input);
      }
      expect(result).toBeTruthy();
    });

    shouldNotMatch.forEach(input => {
      const result = validator(input);
      if (result) {
        console.log('longerThan5Chars should return false for:', input);
      }
      expect(result).toBeFalsy();
    });
  });


  test('longerThan10Chars', () => {
    const shouldMatch = ['abc123abc12', 'agimwegkpmeweg', '12414k21o41'];
    const shouldNotMatch = ['12414k21o4', 'ab', ''];
    const validator = longerThan10Chars;
    
    shouldMatch.forEach(input => {
      const result = validator(input);
      if (!result) {
        console.log('longerThan10Chars should return true for:', input);
      }
      expect(result).toBeTruthy();
    });

    shouldNotMatch.forEach(input => {
      const result = validator(input);
      if (result) {
        console.log('longerThan10Chars should return false for:', input);
      }
      expect(result).toBeFalsy();
    });
  });

  test('isStrongPassword', () => {
    const shouldMatch = ['A$b1Ab1Ab1@'];
    const shouldNotMatch = ['Ab1Ab1Ab1', 'a$b1ab1ab1@', 'A$B1AB1AB1@', 'A$baAbaAba@', 'A$b1Ab1A@'];

    const validator = isStrongPassword;
   
    shouldMatch.forEach(input => {
      const result = validator(input);
      if (!result) {
        console.log('isStrongPassword should return true for:', input);
      }
      expect(result).toBeTruthy();
    });

    shouldNotMatch.forEach(input => {
      const result = validator(input);
      if (result) {
        console.log('isStrongPassword should return false for:', input);
      }
      expect(result).toBeFalsy();
    });
  });

  test('composeValidatorsAny should return true if any validator returns true', () => {
    const validator = composeValidatorsAny(
      () => false,
      () => false,
      () => true,
    );

    expect(validator('foo')).toBeTruthy();
  });

  test('composeValidatorsAny should return true if all validators returns true', () => {
    const validator = composeValidatorsAny(
      () => true,
      () => true,
      () => true,
    );

    expect(validator('foo')).toBeTruthy();
  });

  test('composeValidatorsAny should return false if all validators returns false', () => {
    const validator = composeValidatorsAny(
      () => false,
      () => false,
      () => false,
    );

    expect(validator('foo')).toBeFalsy();
  });

  test('isWeakPassword', () => {
    const shouldMatch = ['ab123', '1', 'A', 'a', 'a1'];
    const shouldNotMatch = ['', '...', '$'];

    const validator = isWeakPassword;
  
    shouldMatch.forEach(input => {
      const result = validator(input);
      if (!result) {
        console.log('isWeakPassword should return true for:', input);
      }
      expect(result).toBeTruthy();
    });

    shouldNotMatch.forEach(input => {
      const result = validator(input);
      if (result) {
        console.log('isWeakPassword should return false for:', input);
      }
      expect(result).toBeFalsy();
    });
  });

  test('isMediumStrengthPassword', () => {
    const shouldMatch = ['abcdefe8sf', 'ABVECDE8SF', 'ABVsCDE8SF'];
    const shouldNotMatch = ['abcdefesf', 'abcdefes', 'abcde fe8s', '888888888'];

    const validator = isMediumStrengthPassword;
    
    shouldMatch.forEach(input => {
      const result = validator(input);
      if (!result) {
        console.log('isMediumStrengthPassword should return true for:', input);
      }
      expect(result).toBeTruthy();
    });

    shouldNotMatch.forEach(input => {
      const result = validator(input);
      if (result) {
        console.log('isMediumStrengthPassword should return false for:', input);
      }
      expect(result).toBeFalsy();
    });
  });
});