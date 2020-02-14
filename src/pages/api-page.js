import React from 'react';
import { useState } from 'react';
import { apiClient } from '../core/api/api';
import { config } from '../config';

export function ApiPage() {

  const [results, setResults] = useState({
    apiMethod: undefined,
    value: undefined,
  });

  const getUrl = endpoint => `${config.baseUrl}${endpoint}`;

  const getCall = key => {
    switch(key) {
      case 'request': {
        return () => apiClient.request('DELETE', getUrl(config.endpoints.users), {});
      }
      case 'put': {
        return () => apiClient.put(getUrl(config.endpoints.users), { foo: 123 });
      }
      case 'get': {
        return () => apiClient.get(getUrl(config.endpoints.users));
      }
      case 'post': {
        return () => apiClient.post(getUrl(config.endpoints.users), { foo: 123 });
      }
      case 'getUsers': {
        return () => apiClient.getUsers();
      }
      case 'addUser': {
        return () => apiClient.addUser({ name: 'andy '});
      }
    }
  }
  
  const setApiCall = (key) => {
    const method = getCall(key);

    method && method().then(value => {
      /** @type {any} */
      const update = {
        apiMethod: key,
        value,
      };

      setResults(update);
    });
 
  };

  const getOnClick = key => () => setApiCall(key);

  return (
    <div>
      <div className="row">
        <div className="col-2">
        <h1>Api Client</h1>
          <ul className="list-group list-group">
            <ApiButton method={'request'} getOnClick={getOnClick} />
            <ApiButton method={'put'} getOnClick={getOnClick} />
            <ApiButton method={'get'} getOnClick={getOnClick} />
            <ApiButton method={'post'} getOnClick={getOnClick} />
            <ApiButton method={'getUsers'} getOnClick={getOnClick} />
            <ApiButton method={'addUser'} getOnClick={getOnClick} />
          </ul>
        </div>

        <div className="col-10">
          <h1>Api method used: {results.apiMethod || 'None'}</h1>
          <textarea rows={50} cols={200} value={JSON.stringify(results.value, undefined, 4)}>
          </textarea>
        </div>
      </div>
    </div>
  );
};

const ApiButton = props => {
  const { method, getOnClick } = props;

  return (
    <li className="list-group-item"><button className="btn btn-primary"  value={method} onClick={getOnClick(method)}>{`${method}()`}</button></li>
  );
};
