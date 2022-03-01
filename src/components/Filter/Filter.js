import React from "react";


function Filter({category, title}) {
  return (
    <div>
      <h2>{title}</h2>
      {category.map((cat) => {
        return (
          <div key={cat}>
            <input type="checkbox" id={cat}></input>
            <label htmlFor={cat}>{cat}</label>
          </div>
        );
      })}
    </div>
  );
}

export default Filter;
