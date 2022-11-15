import React from "react";

// props : {name: book, movie or surprise, data: "" or api data}
export default function Widget({ name, data, clickHandler }) {
  return (
    <div className={name}>
      {data ? (
        <h3>{data}</h3>
      ) : (
        <button
          className={`button-${name}`}
          name={name}
          onClick={(event) => clickHandler(event)}
        >
          Get A {name[0].toUpperCase() + name.slice(1)}
        </button>
      )}
    </div>
  );
}
