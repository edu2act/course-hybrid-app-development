# 第三方组件

### ActivityIndicator

```jsx
<ActivityIndicator size="large" color="#0000ff" />
```

### Animated

> 创建动画

```jsx
//1. 创建样式初始值
this.state = {
    	opacity: new Animated.Value(0)
}
//2.定时样式值变化
Animated.timing(
  // timing方法使动画值随时间变化
  this.state.opacity, // 要变化的动画值
  {
    	toValue: 1, // 最终的动画值
      	duration: 500,
      	delay: 0
  },
).start( callback ); // 动画完成后可调用 callback 
// *timing可以换成spring，有反弹效果动画
//3.使用 <Animated.View></Animated.View> 组件
```

### WebView

```jsx
yarn add react-native-webview
react-native link react-native-webview
//在 android/gradle.properties  中添加 
android.useAndroidX=true
android.enableJetifier=true

import { WebView } from 'react-native-webview';

<WebView source={{ uri: 'https://www.baidu.com' }} />;
```

### [react-native-image-picker](https://github.com/react-native-community/react-native-image-picker)

- 安装并 link

```jsx
yarn add react-native-image-picker

react-native link react-native-image-picker
```

- 在 项目\android\app\src\main\AndroidManifest.xml 添加

```jsx
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```

- 在 项目\android\app\src\main\java\com\项目名\MainActivity 中添加

```jsx
//开头
import com.imagepicker.permissions.OnImagePickerPermissionsCallback; // <- add this import
import com.facebook.react.modules.core.PermissionListener; // <- add this import

// MainActivity 中添加
 private PermissionListener listener;
```

- 使用

```jsx
import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        return;
      } else if (response.error) {
        console.log('Error:', response.error);
      } else if (response.customButton) {
        console.log('custom:', response.customButton);
      } else {
          
        const source = { uri: response.uri };
        this.setState({
          avatarSource: source,
        });
      }
    });

<Image source={this.state.avatarSource} style={{width:200,height:200}} />
```

### [react-native-image-crop-picker](https://github.com/ivpusic/react-native-image-crop-picker)

```jsx

yarn add react-native-image-crop-picker
react-native link react-native-image-crop-picker

ImagePicker.openCamera({
  width: 300,
  height: 400,
  cropping: true,
}).then(image => {
  this.setState({imgUrl:image.path})
});
```

### [react-native-button](https://github.com/ide/react-native-button)

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

### [react-native-message-bar](https://github.com/KBLNY/react-native-message-bar)

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

### [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

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

### [react-native-swiper](https://github.com/leecade/react-native-swiper)

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

### [react-native-elements](https://react-native-elements.github.io/react-native-elements/docs/getting_started.html)





