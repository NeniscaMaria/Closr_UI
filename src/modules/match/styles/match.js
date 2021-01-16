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
    top: windowHeight / 8,
    paddingLeft: 20,
    paddingRight: 50,
    left: 0
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 36,
    textAlign: 'left'
  },
  cardsContainer: {
    width: 290,
    height: 450,
    position: 'absolute',
    top: windowHeight / 2 + 15,
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
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-evenly',
    left: 0,
    top: windowHeight/1.2
  },
  bioView:{
    borderRadius: 20,
    backgroundColor: '#FFF8F1',
    height: 383,
    width: 290,
    marginTop: 65
  },
  name: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
  location:{
    fontSize:12,
    marginLeft: 20,
  },
  textInput:{
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 30,
    backgroundColor: 'rgba(120, 132, 117, 0.1)',
    height: 160,
    position: 'absolute',
    width: 250,
    top: 30,
    zIndex: 1,
    paddingLeft: 20,
    color: 'rgba(36, 32, 56, 0.8)',
    fontWeight: 'normal',
    fontSize: 10,
    marginLeft: 23
  },
  textOverInput: {
    color: '#242038',
    fontSize: 16,
    marginLeft: 43,
    marginTop: 20,
    zIndex: 2,
    paddingLeft: 5,
    backgroundColor:'#FFF8F1',
    borderRadius: 20,
    width: 35,
  },
  medCond:{
    fontSize: 14,
    fontWeight:'normal',
    color:"black",
    marginTop: 170,
    marginLeft: 20
  },
  bubble: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 70,
    height: 20,
    backgroundColor: 'rgba(120, 132, 117, 0.3)',
    borderRadius: 20,
    marginRight: 10,
    marginLeft: 5,
    marginTop: 5
  },
  textBubble: {
    fontWeight: '100',
    fontSize: 12,
    color: '#242038',
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  containerBubble: {
    flex:1,
    flexDirection: 'row',
    width: 290,
    marginLeft: 10
  }
});
