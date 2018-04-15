import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  photo: {
    flex: 1,
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignSelf: 'center',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  profilURI: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 50
  },
  photoText: {
    fontSize: 15,
    fontWeight: 'bold',
    width: 45,
    textAlign: 'center',
    color: 'rgba(255,255,255,0.7)'
  }
});

export default styles;
