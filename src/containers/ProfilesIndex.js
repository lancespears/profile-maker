import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { bindActionCreators } from 'redux';
import ProfilesList from '../components/ProfilesList';


@connect(state => ({
  profiles: state.profiles.all
}), actions)
export default class ProfilesIndex extends React.Component {

  componentWillMount() {
    this.props.fetchProfiles();
  }


render() {
  if(!this.props.profiles) {
    return ( <div>>Loading...</div>);
  }

  return (
        <div>
        <ProfilesList
          data={this.props.profiles}
            />
      </div>
    );
  }
}
