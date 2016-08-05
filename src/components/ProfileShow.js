import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchProfile, deleteProfile } from '../actions/index';
import { Grid, Row, Col, Image, Button, Panel, Media } from 'react-bootstrap';

const style = {
  frontpage: {
    marginTop: 20,
  },
  buttons: {
    float: 'right',
    borderRadius: '10px',
    letterSpacing: '0.1em',
  },
};

@connect(state => ({
  profile: state.profiles.profile
}), { fetchProfile, deleteProfile })
export default class ProfileShow extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };


  onDeleteClick() {
    const one = this.props.dispose;
    this.props.deleteProfile(one)
      .then(() => {
        this.context.router.push('/');
      });
    }


  render() {
    const profile = this.props.data;

    return (
      <div>
      <Grid>
      <Row style={style.frontpage}>
      <Panel>
        <Col xs={12} md={10}>
          <Media.List>
            <Media.ListItem>
            <Media.Left>
            <Image width={175} height={175} src="image/lance2.png" alt="Photo"/>
            </Media.Left>
            <Media.Body>

            <Media.Heading>{profile.name}</Media.Heading>

            <p>{profile.description}</p>

            </Media.Body>
            </Media.ListItem>
            </Media.List>
            </Col>
            <Button
              bsStyle="danger"
              bsSize="small"
              style={style.buttons}
              onClick={this.onDeleteClick.bind(this)}>
                  Delete Profile
            </Button>
            </Panel>
        </Row>
      </Grid>
    </div>
    );
  }
}
