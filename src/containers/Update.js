import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Grid, Row, Col, Image, Button, FormGroup, Form, ControlLabel, FormControl, Panel, Label, Input, HelpBlock } from 'react-bootstrap';

const style = {
  backgrounds: {
    backgroundColor: '#fafafa',
  },
};


const validate = formProps => {
  const errors = {};
  if (!formProps.name) {
     errors.name = 'Oops...need your name please';
   }
  if(!formProps.description) {
    errors.description = 'Opps...just need a short description about yourself';
  }
  return errors;
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




@reduxForm({
  form: 'ProfileForm',
  fields: ['name', 'description'],
  validate
})

export default class Update extends React.Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    error: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    //initial state
    this.state = ({
      file: ''
    });
   }

  onFileChange(e) {
    this.setState({
      file: e.target.files[0]
    });
  }


  handleFormSubmit(formProps) {
    this.props.createProfile(formProps);
  }

render() {
  const { fields: { name, description }, handleSubmit, error, resetForm } = this.props;

  return (
    <div>
    <Grid>
      <Row>
        <Col xs={6} md={6}>
        <Panel style={style.backgrounds}>

         <Form onSubmit={handleSubmit(this.handleFormSubmit)}>

           <FormGroup bsSize="small" controlId="formControlsName" validationState={ name.touched && name.error ? 'error' : ''}>
             <ControlLabel>What is your name?</ControlLabel>
             <FormControl {...name} type="text" placeholder="First Name Last Name"/>
             {name.touched && name.error &&
             <div className="text text-danger">
               {name.error}</div>}
             </FormGroup>


           <FormGroup bsSize="small" controlId="formControlsDescription" validationState={ description.touched && description.error ? 'error' : ''}>
             <ControlLabel srOnly={true}/>
             <FormControl {...description} type="text" componentClass="textarea" rows='5' placeholder="Share me a brief description about yourself..." />
             {description.touched && description.error && <div className="text text-danger">{description.error}</div>}
              </FormGroup>

              <FormGroup>
                <FieldGroup
                id="formControlsFile"
                type="file"
                label="Profile Photo"
                help="Upload your profile photo here."
                onChange={this.onFileChange.bind(this)}
                />
                </FormGroup>
                <hr/>


            <Button bsSize="small" type="submit">Submit</Button>&nbsp;
            <Button bsSize="small" onClick={resetForm}>Clear</Button>
          </Form>
        </Panel>
        </Col>
      </Row>
    </Grid>
    </div>
  );
}
}
