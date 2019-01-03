import React, {Component} from 'react';
import {connect} from 'react-redux';
import App from "./App";
import {getTodoList} from "../actions";

class AppContainer extends Component {

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getTodoList())
  }

  render() {
    return (
      <App/>
    )
  }
}

export default connect(null)(AppContainer);
