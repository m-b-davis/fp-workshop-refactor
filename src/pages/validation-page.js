
import React, { useEffect } from 'react';
import * as validations from '../core/validations/validations';
import { store } from '../core/store/create-store';
import { useState } from 'react';

const fieldNames = [
  'containsNumber',
  'containsSpaces',
  'containsVowel',
  'containsUppercase',
  'containsLowercase',
  'containsSpecialCharacters',
  'containsNoSpaces',
  'containsNoSpecialCharacters',
  'longerThan5Chars',
  'longerThan10Chars',
  'isStrongPassword',
  'isWeakPassword',
  'isMediumStrengthPassword',
];

export function ValidationsPage() {

  const initialState = Object.fromEntries(fieldNames.map(field => [field, '']));

  const [fields, updateFields] = useState(initialState);
  console.log(fields);

  const updateField = key => e => {
    /** @type {any} */
    const update = {
      ...fields,
      [key]: e.target.value,
    };

    updateFields(update);
  }

  return (
    <div>
      <div className="row">
        <div className="col-4 offset-4">
          <h1>Test validations</h1>
          <ul className="list-group list-group">
            {fieldNames.map(name =>
              <ValidationTest validator={name} update={updateField} fields={fields} />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ValidationTest = props => {
  const { validator, update, fields } = props;
  const value = fields[validator];
  const onChange = update(validator);
  const validClass = validations[validator](value) ? 'is-valid' : 'is-invalid';
  
  return (
    <li className="list-group-item">
      <h3>{validator}</h3>
      <input className={`form-control ${validClass}`}  value={value} onChange={onChange}></input>
    </li>
  );
};
