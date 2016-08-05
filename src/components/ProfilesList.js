import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Col, ListGroup, ListGroupItem, Badge, Button } from 'react-bootstrap';


const styles = {
  badge: {
    fontWeight: '500',
    textTransform: 'lowercase',
  },
  backdrop: {
    backgroundColor: '#333333',
    opacity: '0.9',
  },
};

export default class ProfilesList extends React.Component{




  renderProfiles(){
      return this.props.data.map((profile) => {
      return (
          <ListGroupItem
            style={styles.backdrop}
            key={profile.id}
            >
            <Link to={ "profiles/" + profile.id}>
              <h4>{profile.title}
              <Badge pullRight style={styles.badge}>
              {profile.categories}
              </Badge></h4>
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
          <Link to="/profiles/new">
            Add a Profile
          </Link>
          <hr/>
          <ListGroup
            style={styles.backdrop}
            >
            {this.renderProfiles()}
          </ListGroup>

          </Col>
          );
    }
}
