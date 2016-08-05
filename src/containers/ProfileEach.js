import React from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../actions/index';
import Dashboard from '../components/Dashboard';

const style = {
  page: {
    margin: 30,
  },
};

@connect(state => ({
  profile: state.profiles.profile
}), { fetchProfile })
export default class ProfileEach extends React.Component {

  componentWillMount(){
    this.props.fetchProfile(this.props.params.id);
  }

  render() {
    if(!this.props.profile) {
      return <h4 style={style.page}> Loading...</h4>;
    }

    return (
        <div style={style.page}>
          <Dashboard
            data={this.props.profile[0]}
            dispose={this.props.params.id}
              />
        </div>
      );
    }
  }
