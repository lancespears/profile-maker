import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Image, Button, FormGroup, ControlLabel, HelpBlock, FormControl, Panel } from 'react-bootstrap';

const style = {
  backgrounds: {
    backgroundColor: '#fafafa',
  },
};



function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}


export default class Update extends React.Component {
render() {
  return (
    <div>
    <Grid>
      <Row>
        <Col xs={6} md={6}>
        <Panel style={style.backgrounds}>
          <form>
            <FieldGroup id="formControlsText" type="text" label="Name" placeholder="name" />
            <Button bsSize="small" type="submit">Submit</Button>
          </form>
        </Panel>

        <Panel style={style.backgrounds}>
          <form>
            <FieldGroup id="formControlsFile" type="file" label="Profile Photo" help="Select image file from your computer."
            />
            <Button bsSize="small" type="submit">Submit</Button>&nbsp;
          </form>
        </Panel>

        <Panel style={style.backgrounds}>
          <form>
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Description</ControlLabel>
              <FormControl componentClass="textarea" rows={5} placeholder="description" />
            </FormGroup>
            <Button bsSize="small" type="submit">Submit</Button>&nbsp;
          </form>
        </Panel>
        </Col>
      </Row>
    </Grid>
    </div>
  );
}
}
