import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getTodoList} from '../actions';

import List from '../components/List';

import "./App.css";


class App extends Component {

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getTodoList())
  }

  render() {
    return (
      <div className="App">
        <List items={this.props.leftList}/>
        <List items={this.props.rightList}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {ViewTodoList} = state;
  const {leftList, rightList} = ViewTodoList;

  return {
    leftList,
    rightList
  }
};

export default connect(mapStateToProps)(App);
