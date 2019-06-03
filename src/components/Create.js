import React, { Component } from 'react';
import axios from 'axios'
import Dropzone from 'react-dropzone';
import request from 'superagent'
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core/Dialog';

const CLOUDINARY_UPLOAD_PRESET = 'k4zdtfen'
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dhowdfbmx/upload'

class CreateProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      uploadedFile: null,
      uploadedFileCloudinayrUrl: '',
      name: '',
    }
    this.onImageDrop = this.onImageDrop.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0],
    })
    this.handleImageUpload(files[0])
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file)
    upload.end((err, response) => {
      if (err) {
        console.error(err)
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinayrUrl: response.body.secure_url,
        })
      }
    })
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({
      open: false,
      uploadedFile: null,
      uploadedFileCloudinayrUrl: '',
    });
  };
  handleSubmit(e) {
    e.preventDefault()
    let {
      uploadedFileCloudinayrUrl,
      name,
    } = this.state
    axios.post('/api/postProfile', {
      uploadedFileCloudinayrUrl, name,
    })
      .then((res) => {
        this.setState({
          open: false,
          uploadedFile: null,
          uploadedFileCloudinayrUrl: '',
          name: '',
        })
        this.props.setProfileData(res.data)
      })
  }


  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Create Profile</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create your own profile here</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="name"
              vaule={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
              fullWidth
            />
            {this.state.uploadedFileCloudinayrUrl === '' ?

              <Dropzone
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop}
              >
                <div>Drop an image or click to select a file to upload.</div>
              </Dropzone>
:
              <Dropzone
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop}
              >
                <img alt="pic" src={this.state.uploadedFileCloudinayrUrl} />

              </Dropzone>
}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({

})
const styles = {

}
export default (withStyles(styles)(CreateProfile))