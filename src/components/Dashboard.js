import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Image, Button, Panel, Media } from 'react-bootstrap';

const style = {
  frontpage: {
    marginTop: 20,
  },
};


export default class Dashboard extends React.Component {
  render() {
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
            <Media.Heading>Media heading</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
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
