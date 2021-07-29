import React from "react";

function Search({ searchFunction }) { //setSearchVar, searchVar
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={searchFunction} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
