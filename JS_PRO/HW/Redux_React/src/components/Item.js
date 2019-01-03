import React from 'react'
import withItem from "./withItem";

const Item = ({items}) => items.map((item, i) => <li key={i} data-index={i}>{item.title}</li>);

export default withItem(Item);
