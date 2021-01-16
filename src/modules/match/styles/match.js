import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export const matchStyles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    position: 'relative'
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  header: {
    position: 'absolute',
    top: windowHeight / 10,
    paddingLeft: 20,
    paddingRight: 50,
    left: 0
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 23,
    textAlign: 'left'
  },
  cardsContainer: {
    width: 290,
    height: 450,
    position: 'absolute',
    top: windowHeight / 2,
    left: windowWidth / 2
  },
  profileCard: {
    width: 290,
    height: 450,
    position: 'absolute',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ACA9A9',
    borderRadius: 20,
    overflow: 'hidden'
  },
  cardDetails: {
    position: 'absolute',
    left: 145,
    bottom: 16
  },
  cardDetailsHeader: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  },
  cardDetailsSubheader: {
    color: '#FFFFFF',
    textAlign: 'center'
  },
  actionsContainer: {
    width: windowWidth,
    height: 42,
    display: 'flex',
    position: 'absolute',
    left: 0,
    bottom: 16
  },
  button: {
    width: 42,
    height: 42
  }
});
