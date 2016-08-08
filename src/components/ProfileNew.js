import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createProfile } from '../actions/index';
import { Grid, Row, Col, Image, Button, FormGroup, Form, ControlLabel, FormControl, Panel, Label, Input, HelpBlock } from 'react-bootstrap';
import PhotoUpload from '../containers/Dropzone';

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
}, null, { createProfile })
export default class ProfileNew extends React.Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    error: PropTypes.string,
  }

  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
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
    this.props.createProfile(formProps)
    .then(() => {
        this.context.router.push('/');
      });
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

           <FormGroup bsSize="small" controlId="formControlsName" >
             <ControlLabel>What is your name?</ControlLabel>
             <FormControl {...name} type="text" placeholder="First Name Last Name"/>
             {name.touched && name.error &&
             <div className="text text-danger">
               {name.error}</div>}
             </FormGroup>


           <FormGroup bsSize="small" controlId="formControlsDescription">
             <ControlLabel srOnly={true}/>
             <FormControl {...description} type="text" componentClass="textarea" rows='5' placeholder="Share me a brief description about yourself..." />
             {description.touched && description.error && <div className="text text-danger">{description.error}</div>}
              </FormGroup>


                <hr/>

            <Button bsSize="small" type="submit">Submit</Button>&nbsp;
            <Button bsSize="small" onClick={resetForm}>Clear</Button>
          </Form>
        </Panel>
        </Col>

        <Col xs={6} md={6}>
          <Panel style={style.backgrounds}>
          <FormGroup>
            <PhotoUpload/>
            </FormGroup>
          </Panel>
        </Col>
      </Row>
    </Grid>
    </div>
  );
}
}
