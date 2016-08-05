import React from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../actions/index';
import Dashboard from '../components/Dashboard';


@connect(state => ({
  profile: state.profiles.profile
}), { fetchProfile })
export default class ProfileEach extends React.Component {

  componentWillMount(){
    this.props.fetchProfile(this.props.params.id);
  }

  render() {
    if(!this.props.profile) {
      return <div> Loading...</div>;
    }

    return (
        <div>
          <Dashboard
            data={this.props.profile[0]}
            dispose={this.props.params.id}
              />
        </div>
      );
    }
  }
