import React, { Component } from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import ActionSheet from 'react-native-actionsheet';
import styles from './profile-picture.stylesheet';

class ProfilePicture extends Component {
  constructor(props) {
    super(props);

    this.state = { profilURI: null };
  }

  _onPhoto = (buttonIndex) => {
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
    const options = ['Camera', 'Gallery', 'Cancel'];
    const CANCEL_INDEX = 2;

    return (
      <View>
        <TouchableOpacity
          style={styles.photo}
          onPress={() => this.ActionSheet.show()}
        >
          {this.state.profilURI
            ? <Image
              style={styles.profilURI}
              source={{ uri: this.state.profilURI }}
            />
            : <Text style={styles.photoText}>Add Photo</Text>}
        </TouchableOpacity>
        <ActionSheet
          ref={actionSheet => this.ActionSheet = actionSheet}
          options={options}
          cancelButtonIndex={CANCEL_INDEX}
          onPress={this._onPhoto}
        />
      </View>
    );
  }
}

export default ProfilePicture;
