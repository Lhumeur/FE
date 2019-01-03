import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {handleClick} from "../actions";

const withList = Component => {
  const WrappedComponent = props => {
    return <Component {...props} />
  };

  const mapDispatchToProps = dispath => {
    return bindActionCreators({item: handleClick}, dispath);
  };

  return connect(
    null,
    mapDispatchToProps
  )(WrappedComponent);
};

export default withList;
