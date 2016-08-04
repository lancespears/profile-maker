import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavItem} from 'react-bootstrap';

export default class Navigator extends React.Component {
  render() {
    return(
      <div>
        <Navbar inverse>
          <Navbar.Toggle/>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Profile-Maker</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav bsStyle="tabs" pullRight>
            <IndexLinkContainer to="/"><NavItem eventKey={1}>Dashboard</NavItem></IndexLinkContainer>
            <LinkContainer to="/Update"><NavItem eventKey={2}>Update</NavItem></LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
