import React,{ Component } from 'react';
import { StackNavigator, DrawerNavigator, TabNavigator, navigate, DrawerView } from 'react-navigation';
import { View, Image, Text, ScrollView, TextInput } from 'react-native'; 
import { Icon, Avatar } from 'react-native-elements';
import LoginScreen from './screens/LoginScreen';
import UserScreen from './screens/UserScreen';
import SettingScreen from './screens/SettingScreen';
import CreateScreen from './screens/CreateScreen';
import ClassScreen from './screens/ClassScreen';
import Sat from './components/Sat';
import Mon from './components/Mon';
import Tues from './components/Tues';
import Setting from './components/Setting';
import Open from './components/Open';
import project from './components/project';
import GoPpt2 from './components/GoPpt2';
import GoPpt1 from './components/GoPpt1';
import Modals from './components/Modals';
import indexX from './components/indexX';

class Router extends Component {
  constructor(props) {
    super(props);
  }
}
state = {
    modalVisible: true,
  };

//onPress讀不到
setModalVisible = () => {
  console.log('good');
  this.setState({ modalVisible:true });
}

 onSignOut = () => {
    firebase.auth().signOut();
    this.props.navigation.navigate('LoginScreen');
  }
   


//登入到主畫面＆＆登入到創帳號
export const LoginStack = StackNavigator({
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            header: {
                style: { position: "absolute" },
                //header: { visible: false } 
            }
        },
    },
    
    //第一個控制漢堡選單跳出抽屜的地方
    UserScreen: {
        screen: Tues,
        navigationOptions: {
        header: ({ navigate }) => ({
            headerTitle: <Modals visible={this.state.modalVisible} />,
            title: <Image source={require('./img/RC-icon@1x.png')} />, 
            style: { backgroundColor: '#01C497',  height: 69, },
            right: (
                <Icon name='search' color='#fff' size={36} iconStyle={{ marginRight: 10 }}  onPress={() => this.setModalVisible }/>//不能加括弧
            ),
            left: (
                <Icon name='menu' color='#fff' size={36} iconStyle={{ marginLeft: 10 }} onPress={() => navigate('DrawerOpen')}/>
            ),
        })
        },
    },
    CreateScreen: {
        screen: CreateScreen,
        navigationOptions: {
            header: ({ goBack }) => ({
                style: { position: "absolute", top: 10, left: 20,},
                left: (
                <Icon name='clear' color='#fff' size={20} iconStyle={{ marginRight: 10 }} onPress={() => { goBack() }}/>            
                ),
            }),
        },
    },
},
    {
        //headerMode: 'none',
        mode:'modal'
        
    }
);

//----------------------------------------------------------------------------------------------------StackNavigator_1__從「我的講義」到「下載ppt」
export const PptStack = StackNavigator({
  project: {
    screen: project,
        navigationOptions: {
        header: ({ navigate }) => ({
        title: <Image source={require('./img/RC-icon@1x.png')} />,
        style: {
          backgroundColor: '#01C497',
          height: 69
        },
        
        left: (
          <Icon
            name='menu'
            color='#fff'
            size={36}
            iconStyle={{ marginLeft: 10 }}
            onPress={() => navigate('DrawerOpen')}
          />

        ),
      })
    },
  },
    GoPpt1:{
     screen:GoPpt1,
        navigationOptions: {
        header: ({ goBack }) => ({
        title: <Image source={require('./img/RC-icon@1x.png')} />,
        style: {
          backgroundColor: '#01C497',
          height: 69
        },
  
        left: (
          <Icon
            name='keyboard-arrow-left'
            color='#fff'
            size={36}
            iconStyle={{ marginLeft: 10 }}
            onPress={() => { goBack() }}
          />

        ),
      })
    },
  },
  GoPpt2:{
     screen:GoPpt2,
        navigationOptions: {
        header: ({ goBack }) => ({
        title: <Image source={require('./img/RC-icon@1x.png')} />,
        style: {
          backgroundColor: '#01C497',
          height: 69
        },
  
        left: (
          <Icon
            name='keyboard-arrow-left'
            color='#fff'
            size={36}
            iconStyle={{ marginLeft: 10 }}
            onPress={() => { goBack() }}
          />

        ),
      })
    },
  }
},
{
  //headerMode: 'none'    //加了叉叉會不見
}
);

//---------------------------------------------------------------------------------------------------------StackNavigator_2__從「我要開課」到「我的帳戶」
export const OpenStack = StackNavigator({
  Open: {
    screen: Open,
    navigationOptions: {
        header: ({ navigate }) => ({
        title: <Image source={require('./img/RC-icon@1x.png')} />,
        style: {
          backgroundColor: '#01C497',
          height: 69
        },

        left: (
          <Icon
            name='menu'
            color='#fff'
            size={36}
            iconStyle={{ marginLeft: 10 }}
            onPress={() => navigate('DrawerOpen')}
          />

        ),
      })
    },
  },
},
{
  //headerMode: 'none'    //加了叉叉會不見
}
);
export const SettingStack = StackNavigator({
  Setting: {
    screen: Setting,
        navigationOptions: {
        header: ({ navigate }) => ({
        title: <Image source={require('./img/RC-icon@1x.png')} />,
        style: {
          backgroundColor: '#01C497',
          height: 69
        },
        left: (
          <Icon
            name='menu'
            color='#fff'
            size={36}
            iconStyle={{ marginLeft: 10 }}
            onPress={() => navigate('DrawerOpen')}
          />

        ),
      })
    },
  },
},
{
  //headerMode: 'none'    //加了叉叉會不見
}
);

//DrawerRouter＿ 漢堡選單
export const DrawerRouter = DrawerNavigator(
  {
    //我的課程
    classStack: {
      screen: LoginStack,
      navigationOptions: {
        drawer: {
          label: '我的課程',
          icon: ({ tintColor }) => <Image source={require('./img/book.png')} />,
        },
      },
    },
    //我的講義
    pptStack: {
      screen: PptStack,
      navigationOptions: {
        drawer: {
          label: '我的講義',
          icon: ({ tintColor }) => <Image source={require('./img/hw.png')} />,
        },
      },
    },
    //我要開課
    openStack: {
      screen: OpenStack,
      navigationOptions: {
        drawer: {
          label: '我要開課',
          icon: ({ tintColor }) => <Image source={require('./img/pencil.png')} />,
        },
      },
    },

    //我的帳戶         
    settingStack: {
      screen: indexX,
      navigationOptions: {
        drawer: {
          label: '我要帳戶',
          icon: ({ tintColor }) => <Image source={require('./img/person.png')} />,
        },
      },
    },
    //登出
    LogoutStack: {
      screen: LoginStack,
      navigationOptions: {
        drawer: {
          label: '登出',
          icon: ({ tintColor }) => <Image source={require('./img/log-out.png')} />
          
        },
      },
    },
  },

  {
    initialRouteName: 'classStack',
    contentOptions: {
      activeTintColor: '#fff',
      //activeBackgroundColor:'#3CCEB0',
      inactiveTintColor: '#fff',
      style: {
      },
      //labelStyle
    },
    drawerWidth: 300,
    // drawerPosition: 'right',
    contentComponent:
    props => (
      <ScrollView style={styles.container}>
        <View >
          <DrawerView.Items {...props} />
          <Text style={styles.texts}>國立臺北教育大學</Text>
          <Text style={styles.texts1}>110319022</Text>
          <Text style={styles.texts2}>趙子榮</Text>
          <Avatar
            width={60}
            height={60}
            rounded       
            source={require('./img/profile.jpg')}
            containerStyle={{position: 'absolute', bottom: -350, right: 70}}//圖片底下的底圖移動
          />
        </View>
      </ScrollView>
    )
  }
);



//創帳號到主畫面
export const CreateStack = StackNavigator({
    CreateScreen: {
        screen: CreateScreen,
    },
    UserScreen: {
        screen: Tues,
            navigationOptions: {
                header: ({ navigate }) => ({
                    title: <Image source={require('./img/RC-icon@1x.png')} />,
                    style: {
                        backgroundColor: '#01C497',
                        height: 69
                    },
                left: (
                    <Icon
                        name='menu'
                        color='#fff'
                        size={36}
                        iconStyle={{ marginLeft: 10 }}
                        onPress={() => navigate('DrawerOpen')}
                    />
                ),
            })
        },
    },
},
    {
        //headerMode: 'none',
    }
);


//DrawerRouter的Style
const styles = {

  container: {
    backgroundColor: '#3CCEB0'
  },
  texts:{
    fontSize:14,
    color:'white',
    position: 'absolute', bottom: -340 , left:40 
  },
  texts1:{
    fontSize:14,
    color:'white',
    position: 'absolute', bottom: -365 , left:40 
  },
  texts2:{
    fontSize:14,
    color:'white',
    position: 'absolute', bottom: -385 , left:40 
  }
}


