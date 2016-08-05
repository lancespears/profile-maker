import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { Grid, Row, Col, Image, Button, Panel, Media } from 'react-bootstrap';

const style = {
  frontpage: {
    marginTop: 20,
  },
};

@connect(state => { 
  profile: state.profiles.profile;
}, actions)
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }


  // componentWillMount(){
  //   this.props.fetchProfile(this.props.params.id);
  // }
  //
  // onDeleteClick() {
  //   this.props.deleteProfile(this.props.params.id);
  // }


  render() {
    const { profile } = this.props;
    if( !profile ) { return <Grid><Panel>Loading...</Panel></Grid>; }

    return (
      <div>
      <Grid>
      <Row style={style.frontpage}>
      <Panel>
        <Col xs={12} md={10}>
          <Media.List>
            <Media.ListItem>
            <Media.Left>
            <img width={200} height={200} src="/assets/thumbnail.png" alt="Photo"/>
            </Media.Left>
            <Media.Body>

            <Media.Heading>{profile.name}</Media.Heading>

            <p>{profile.description}</p>

            </Media.Body>
            </Media.ListItem>
            </Media.List>
            </Col>
            </Panel>
        </Row>
      </Grid>
    </div>
    );
  }
}
