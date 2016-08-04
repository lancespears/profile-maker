import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Image, Button, Panel } from 'react-bootstrap';


export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
      <Grid>
        <Row>
          <Col>
          <p>Hello</p>
          <Col xs={6} md={4}>
       <Image src="/assets/thumbnail.png" thumbnail />
     </Col>
          </Col>
        </Row>
      </Grid>
    </div>
    );
  }
}
