import React from 'react';
import DebounceInput from './SearchInput';
import List from './List';

export default function Search({ query, onChange, data }) {
  return (
      <div>
        <DebounceInput value={query} onChange={onChange} />
        {data && (
            <List data={data}/>
        )}
      </div>
  );
}
