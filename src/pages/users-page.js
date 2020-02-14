
import React, { useEffect } from 'react';
import * as selectors from '../core/store/selectors';
import { store } from '../core/store/create-store';
import { useState } from 'react';

export function UsersPage() {

  const [results, setResults] = useState({
    selectorName: undefined,
    value: store.getState(),
  });

  const setSelector = (key) => {
    const selector = selectors[key];
    const result = selector(store.getState());

    console.log(result);
    setResults({
      selectorName: key,
      value: result,
    });
  };

  const getOnClick = selector => () => setSelector(selector);

  return (
    <div>
      <div className="row">
        <div className="col-4">
        <h1>Selectors</h1>
          <ul className="list-group list-group">
            <SelectorButton selector={'selectUsers'} getOnClick={getOnClick} />
            <SelectorButton selector={'selectNumberOfUsers'} getOnClick={getOnClick} />
            <SelectorButton selector={'selectNames'} getOnClick={getOnClick} />
            <SelectorButton selector={'selectUserNameString'} getOnClick={getOnClick} />
            <SelectorButton selector={'selectNamesLowercase'} getOnClick={getOnClick} />
            <SelectorButton selector={'selectFirstFiveUsers'} getOnClick={getOnClick} />
            <SelectorButton selector={'selectFirstFiveSlogans'} getOnClick={getOnClick} />
            <SelectorButton selector={'selectTotalAge'} getOnClick={getOnClick} />
            <SelectorButton selector={'selectUniqueAges'} getOnClick={getOnClick} />
            <SelectorButton selector={'selectAverageAge'} getOnClick={getOnClick} />
          </ul>
        </div>

        <div className="col-8">
          <h1>Selector used: {results.selectorName || 'None'}</h1>
          <textarea rows={50} cols={200} value={JSON.stringify(results.value, undefined, 4)}>
          </textarea>
        </div>
      </div>
    </div>
  );
};

const SelectorButton = props => {
  const { selector, getOnClick } = props;

  return (
    <li className="list-group-item"><button className="btn btn-primary" value={selector} onClick={getOnClick(selector)}>{`${selector}()`}</button></li>
  );
};
