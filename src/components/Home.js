import React from 'react';
import { connect } from 'react-redux';

const style = {
  page: {
    margin: 30,
  },
};

export default class Home extends React.Component {
render() {
  return(
        <div>
         <h3 style={style.page}>Welcome Home!</h3>
        </div>
    );
  }
}
