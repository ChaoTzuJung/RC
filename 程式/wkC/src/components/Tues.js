import React, { PureComponent } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Mon from './Mon';
import Tue from './Tue';
import Wed from './Wed';
import Thu from './Thu';
import Fri from './Fri';
import Sat from './Sat';
import Sun from './Sun';
const {width, height} = Dimensions.get('window')
const FirstRoute = () => <Mon/>;
const SecondRoute = () => <Tue/>;
const ThirdRoute = () => <Wed/>;
const ForthRoute = () => <Thu/>;
const FifthRoute = () => <Fri/>;
const SixthRoute = () => <Sat/>;
const SeventhRoute = () => <Sun/>;


export default class Tues extends PureComponent {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Mon' },
      { key: '2', title: 'Tue' },
      { key: '3', title: 'Wed' },
      { key: '4', title: 'Thu' },
      { key: '5', title: 'Fri' },
      { key: '6', title: 'Sat' },
      { key: '7', title: 'Sun' },
    ],
  };
  //index控制起始畫面
  _handleChangeTab = index => this.setState({ index });

  _renderFooter = props => <TabBar {...props} scrollEnabled tabStyle={styles.tab} indicatorStyle={styles.indicator} style={styles.tabbar} labelStyle={styles.label} />;

  _renderScene = SceneMap({
    '1': FirstRoute,
    '2': SecondRoute,
    '3': ThirdRoute,
    '4': ForthRoute,
    '5': FifthRoute,
    '6': SixthRoute,
    '7': SeventhRoute,

  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderFooter={this._renderFooter}
        onRequestChangeTab={this._handleChangeTab}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6'
  },
  tab: {
    width: width/3 ,
  },
  indicator: {
    backgroundColor: '#FF8050',
    height: 5
  },
  tabbar: {
    backgroundColor: '#fff',
  },
  label: {
    color: '#FF8050',
    fontWeight: '400',
  }
});

