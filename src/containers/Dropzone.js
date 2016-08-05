import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';

export default class PhotoUpload extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        files: []
      };
    }
    onDrop(files) {
      console.log('Received files: ', files[0].preview);
      //TODO:save to the database
      this.setState({
         files
       });

    }

    render() {
      return (
          <div>
            <Dropzone
            multiple={false}
            accept='image/*'
            onDrop={this.onDrop}>
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>

            {this.state.files.length > 0 ? <div>
               <h2>Uploading {this.state.files.length} files...</h2>
               <div>{this.state.files.map((file) => <img src={file.preview} /> )}</div>
               </div> : null}
          </div>
      );
    }
};
