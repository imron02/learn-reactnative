import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  Text,
  ActionSheetIOS
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import styles from './profile-picture.stylesheet';

class ProfilePicture extends Component {
  constructor(props) {
    super(props);

    this.state = { profilURI: null };
  }

  _onPhoto = () => {
    ActionSheetIOS.showActionSheetWithOptions({
      options: ['Camera', 'Gallery', 'Cancel'],
      cancelButtonIndex: 2
    }, (buttonIndex) => {
      // Open camera
      if (buttonIndex === 0) {
        this._imagePicker(true)
          .then(image => this.setState({ profilURI: image.path }))
          .catch(error => console.log(error));
      }

      // Open gallery
      if (buttonIndex === 1) {
        this._imagePicker(false)
          .then(image => this.setState({ profilURI: image.path }))
          .catch(error => console.log(error));
      }
    });
  }

  _imagePicker(bool) {
    let options = {
      width: 170,
      height: 170,
      cropping: true,
      cropperCircleOverlay: true
    };

    if (bool) {
      return ImagePicker.openCamera(options);
    } else {
      options = {
        ...options,
        mediaType: 'photo'
      };

      return ImagePicker.openPicker(options);
    }
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.photo}
        onPress={this._onPhoto}
      >
        {this.state.profilURI
          ? <Image
            style={styles.profilURI}
            source={{ uri: this.state.profilURI }}
          />
          : <Text style={styles.photoText}>Add Photo</Text>}
      </TouchableOpacity>
    );
  }
}

export default ProfilePicture;
