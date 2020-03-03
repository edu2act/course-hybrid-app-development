# 第三方组件

## [react-native-button](https://github.com/ide/react-native-button)

```jsx
yarn add react-native-button

import Button from 'react-native-button';

<Button 
    style={{
        width:100,height: 40,
        borderRadius: 20,
        textAlignVertical: 'center',
        backgroundColor:'red',
        color: '#fff'
    }}
>文本</Button>
```

## [react-native-message-bar](https://github.com/KBLNY/react-native-message-bar)

```jsx
yarn add react-native-message-bar

import React from 'react';
import { MessageBar, MessageBarManager } from 'react-native-message-bar';

export default class extends React.Component {
  componentDidMount() {
  MessageBarManager.registerMessageBar(this.refs.alert);
  }

  componentWillUnmount() {
    MessageBarManager.unregisterMessageBar();
  }
    
  render() {
    return <MessageBar ref="alert" />;
  }
}


```

## [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

[图标地址](https://oblador.github.io/react-native-vector-icons/)

```jsx
 //1. 安装
yarn add react-native-vector-icons
 //2. link，执行完在 项目\android\app\src\main\assets\fonts 文件夹下会多出 ttf 格式的图标文件
react-native link react-native-vector-icons
 //3. 卸载 App，重新 react-native run-android
 //4. 引入 Icon 组件，注意后面的 / ,后面是哪个文件，将来就在 图标地址 哪一栏找图标名字
import Icon from 'react-native-vector-icons/FontAwesome';

<Icon name="rocket" size={30} color="#900" />;
```

## [react-native-swiper](https://github.com/leecade/react-native-swiper)

```jsx
yarn add react-native-swiper@nightly

import Swiper from 'react-native-swiper';

<Swiper style={styles.wrapper} showsButtons={true}>
    <View style={styles.slide1}>
        <Text style={styles.text}>Hello Swiper</Text>
    </View>
    <View style={styles.slide2}>
        <Text style={styles.text}>Beautiful</Text>
    </View>
    <View style={styles.slide3}>
        <Text style={styles.text}>And simple</Text>
    </View>
</Swiper>
```

## [react-native-elements](https://react-native-elements.github.io/react-native-elements/docs/getting_started.html)

