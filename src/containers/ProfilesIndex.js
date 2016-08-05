import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { bindActionCreators } from 'redux';
import ProfilesList from '../components/ProfilesList';

const style = {
  page: {
    margin: 30,
  },
};



@connect(state => ({
  profiles: state.profiles.all
}), actions)
export default class ProfilesIndex extends React.Component {

  componentWillMount() {
    this.props.fetchProfiles();
  }


render() {
  if(!this.props.profiles) {
    return ( <div style={style.page}>Loading...</div>);
  }

  return (
        <div style={style.page}>
        <ProfilesList
          data={this.props.profiles}
            />
      </div>
    );
  }
}
