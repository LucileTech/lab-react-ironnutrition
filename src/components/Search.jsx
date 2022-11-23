import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search({ searchStringInput, setSearchString }) {
  const handleSearch = (e) => {
    setSearchString(e.target.value);
  };
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchStringInput} type="text" onChange={handleSearch} />
    </>
  );
}

export default Search;
