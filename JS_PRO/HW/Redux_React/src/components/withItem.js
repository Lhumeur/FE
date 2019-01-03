import React from "react";
import {connect} from "react-redux";

const withItem = Component => {
  const WrappedComponent = props => {
    if (props.side === "leftList") {
      return <Component items={props.leftList}/>
    } else {
      return <Component items={props.rightList}/>
    }
  };

  const mapStateToProps = state => {
    const {ViewTodoList} = state;
    const {leftList, rightList} = ViewTodoList;
    return {
      leftList,
      rightList
    };
  };

  return connect(
    mapStateToProps,
    null
  )(WrappedComponent);
};

export default withItem;
