import React from "react";

const Gif = (props) => {
   return (
    <div key={props.id}>
      <img alt="gif" src={props.url} onClick={() => {props.saveToLocalStorage(props.id, props.url)}}/>
    </div>
  );
};

export default Gif;