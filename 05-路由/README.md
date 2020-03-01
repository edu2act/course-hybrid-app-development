# React-Native 路由选择

> - react-navigation 适合 App，react-router-dom 适合网页
> - react-navigation 默认提供的比如 Header、StackNavigator 和TabNavigator 都是开发 App 时必备的，而 react-router不提供
> - react-router 地址改变，切换到另一个 route 后，原有的 route 就被销毁，包括组件的 state，如果这时返回，原有的 route 需要重新实例化，而 react-navigation 不是这样，原route依然存在
>
>

## react-navigation

### 安装

```
yarn add react-navigation react-native-gesture-handler react-native-reanimated and react-native-screens
```

> 添加代码到 android/app/build.gradle：
>
> implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
> implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'

## react-native-router-flux

> [react-native-router-flux](https://github.com/aksonov/react-native-router-flux) 是一个基于 [react-navigation](https://github.com/react-navigation/react-navigation) 路由框架，进一步简化了页面跳转的步骤，并且一直随着 [react-navigation](https://github.com/react-navigation/react-navigation)升级更新版本。而且使用这个框架的话，可以将全部的页面跳转的处理逻辑都写在一个地方，方便了后续的维护。

### 安装

```
 yarn add react-native-router-flux@4.0.6
```

#### 基础使用

```jsx
...
import {Router, Scene} from "react-native-router-flux";
const Root = () => {
  return (
    <Router>
      {/* 将全部的跳转页面都放在Root下面 */}
      <Scene key="root">
        {/* key 就是给页面的标签,供Actions使用 */}
        {/* component 设置关联的页面 */}
        {/* title 就是给页面标题 */}
        {/* initial 就是设置默认页面*/}
        <Scene
          key="one"
          component={PageOne}
          title="PageOne"
          initial={true}
        />
        <Scene 
            key="two" 
            component={PageTwo} 
            title="PageTwo" 
        />
      </Scene>
    </Router>
  );
};
```

#### 路由跳转

```jsx
...
//导入Actions,处理页面跳转
import { Actions } from 'react-native-router-flux';
 
const PageOne = () => {
  return (
    <View style={styles.container}>
      <Text onPress={()=>Actions.two()}>
        我是Page One
      </Text>
    </View>
  );
};

//数据传递和刷新
export default class PageTwo extends Component {
  render() {
    const data = this.props.data || "null";
    return (
      <View style={styles.container}>
        <Text
          style={styles.welcome}
          onPress={
              () => Actions.three({
                  		data: "从 two 传递到 three"
              		})
          }>
            我是Page Two 
        </Text>
        <Text
          style={styles.refresh}
          onPress={() => Actions.refresh({
            data: 'Changed data',
          })}
        >refresh:{data}</Text>
      </View>
    )
  }
}

```

#### Tabs 功能

```jsx
...
import { Tabs } from 'react-native-router-flux';

//设置tab选中时的字体颜色和标题
const TabIcon = ({focused , title}) => {
  return (
    <Text 
        style={{color: focused  ? 'blue' : 'black'}}
    >
          {title}
    </Text>
  );
};
 
const Root = () => {
  return (
      <Router>
        <Scene hideNavBar>
          <Tabs
            key="tabbar"
            // 是否显示标签栏文字
            showLabel={false}
            tabBarStyle={{backgroundColor: "#eee"}}
            //tab选中的颜色
            activeBackgroundColor="white"
            //tab没选中的颜色
            inactiveBackgroundColor="red"
          >
            <Scene
              key="one"
              icon={TabIcon}
              component={PageOne}
              title="PageOne"
            />

            <Scene
              key="two"
              component={PageTwo}
              title="PageTwo"
              icon={TabIcon}
            />

            <Scene
              key="three"
              component={PageThree}
              title="PageThree"
              icon={TabIcon}
            />
          </Tabs>
      </Scene>
  </Router>)
};

```







