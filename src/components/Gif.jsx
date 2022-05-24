import React from "react";

const Gif = (props) => {
   return (
    <div key={props.id}>
      <img alt="gif" src={props.url} />
      <button className="btn btn-sm btn-primary float-end" onClick={() => {props.saveToLocalStorage(props.id, props.url)}}>Spara</button>
    </div>
  );
};

export default Gif;