import React from 'react';
import { connect } from 'react-redux';
import Navigator from './Navigator';

export default class App extends React.Component {
  render() {
    return (
      <div>
      <Navigator/>
      {this.props.children}
      </div>
    );
  }
}
