import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

const style = {
  backgrounds: {
    backgroundColor: '#fafafa',
  },
};
export default class ProfilesList extends React.Component{

  renderProfiles(){
    return this.props.profiles.map((profile) => {
      return (
          <ListGroupItem style={style.backgrounds} key={profile.id}>
            <Link to={ "profiles/" + profile.id}>
              <h4>{profile.name}</h4>
            </Link>
          </ListGroupItem>
        );
      });
    }

  render() {
    return (
          <Col sm={4} smOffset={4}>
              <h4>Profiles</h4>
                  <br/>
                    <Link to="/profiles/new">Add a Profile</Link>
                    <hr/>
                  <ListGroup style={style.backgrounds}>
                  {this.renderProfiles()}
               </ListGroup>
          </Col>
        );
    }
}
