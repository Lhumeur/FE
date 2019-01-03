import React from "react";
import withList from './withList'
import Item from "./Item";

const List = props => {
  return (
    <ul side={props.side} onClick={props.item}>
      <Item side={props.side}/>
    </ul>
  );
};

export default withList(List);
