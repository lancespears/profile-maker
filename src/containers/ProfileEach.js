import React from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../actions/index';
import ProfileShow from '../components/ProfileShow';

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
          <ProfileShow
            data={this.props.profile[0]}
            dispose={this.props.profile[0].id}
              />
        </div>
      );
    }
  }
