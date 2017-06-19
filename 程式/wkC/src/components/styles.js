import {StyleSheet,Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  swipeout: {
    backgroundColor: '#dbddde',
    overflow: 'hidden',
  },
  swipeoutBtnTouchable: {
    flex: 1,
  },
  swipeoutBtn: {
    alignItems: 'center',
    backgroundColor: '#b6bec0',
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  swipeoutBtnText: {
    color: '#fff',
    textAlign: 'center',
  },
  swipeoutBtns: {
    bottom: 0,
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  swipeoutContent: {
  },
  colorDelete: {
    backgroundColor: '#fb3d38',
  },
  colorPrimary: {
    backgroundColor: '#006fff'
  },
  colorSecondary: {
    backgroundColor: '#fd9427'
  },
  //--------------------------------
   scrollView: {
    backgroundColor: '#F3F4F6',
    width: width,
  },
  block: {
    backgroundColor: '#fff',
    width: width,
    height: height * 0.132,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 0,
    paddingLeft: 0,

  },
  subtitle: {
    color: '#000',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 3,
    marginLeft: 0,
    paddingLeft: 0,

  },
  class_time: {
    color: '#9B9B9B',
    fontSize: 10,
    fontWeight: '400',
    marginTop: 3,
    marginLeft: 0,
    paddingLeft: 0,
  },
  class_list: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: width * 0.053
  },
  image_icon: {
    width: width * 0.08,
    height: height * 0.045,
    //flexDirection: 'row',
    //alignSelf: 'flex-end',會往下跑
    //alignItems: 'flex-end', 
    marginLeft: width * 0.92
  }
})

export default styles;


