# 常用组件

## 样式处理

> - 使用 JavaScript 来写样式，所有的核心组件都接受名为 style 的属性，要求使用驼峰命名法，例如将`background-color`改为`backgroundColor`
>
> - style 属性可以是一个普通的 JavaScript 对象，也可使用`StyleSheet.create` 来集中定义组件的样式（推荐）

```jsx
export default class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text 
            style={
                [styles.bigBlue, styles.red]
            }
         >
            bigBlue, then red
         </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
```

## 基础组件

### View

> 创建 UI 时最基础的组件，直接对应一个平台的原生视图，IOS中的 UIView、Android中的android.view和Web中的div等

### Text

> - 一个用于显示文本的 RN 组件，支持嵌套、样式，以及触摸处理，可继承样式
> - `<Text>`元素在布局上不同于其它组件：在Text内部的元素不再使用flexbox布局，而是采用文本布局。

### Image

> 用于显示多种不同类型图片的 React 组件，包括网络图片、静态资源、base64图片等。

```JSx
export default class DisplayAnImage extends Component {
  render() {
    return (
      <View>
        <Image
          source={require('../assets/logo.png')}
        />
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
        />
        <Image
          style={{width: 66, height: 58}}
          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
        />
      </View>
    );
  }
}

```

> ### 属性：resizeMode
>
> 决定当组件尺寸和图片尺寸不成比例的时候如何调整图片的大小。默认值为`cover`。
>
> - `cover`: 在保持图片宽高比的前提下缩放图片，直到宽度和高度都大于等于容器视图的尺寸（如果容器有 padding 内衬的话，则相应减去）。
> - `contain`: 在保持图片宽高比的前提下缩放图片，直到宽度和高度都小于等于容器视图的尺寸（如果容器有 padding 内衬的话，则相应减去）。**译注**：这样图片完全被包裹在容器中，容器中可能留有空白。
> - `stretch`: 拉伸图片且不维持宽高比，直到宽高都刚好填满容器。
> - `repeat`: 重复平铺图片直到填满容器。图片会维持原始尺寸，但是当尺寸超过容器时会在保持宽高比的前提下缩放到能被容器包裹。
> - `center`: 居中不拉伸。

### ImageBackground

> 添加背景色，必须指定 width 和 height，通过 source 属性指定 背景图片

```jsx
 <ImageBackground 
     source={...} 
     style={{width: '100%', height: '100%'}}
 >
    <Text>Inside</Text>
 </ImageBackground>
```



### TextInput

> - 用户在应用中通过键盘输入文本的基本组件,必须通过 onChangeText事件来读取用户的输入
> - value
> - onChangeText
> - onSubmitEditing
> - onFocus

### ScrollView

> 封装了平台的ScrollView（滚动视图）的组件

## 交互组件

### Button

> 跨平台的按钮组件

```jsx
<Button
  onPress={()=>{}}
  title="按钮"
  color="#841584"
/>
```

### TouchableOpacity

> 不透明度会变化的按钮



## 列表组件

### FlatList

> 高性能的简单列表组件
>
> - onRefresh：下拉刷新
>
> - refreshing：下拉刷新时的图标
>
> - onEndReached: 上拉加载
>
> - onEndReachedThreshold: （0-1之间的数）距离底部多少距离触发上拉加载函数
>
> - keyExtractor: 为 item 指定key
>

```jsx
<FlatList
    data={[{key: 'a'}, {key: 'b'}]}
    renderItem={({item}) => <Text>{item.key}</Text>}
/>
```

### SectionList

> 高性能的分组(section)列表组件

```jsx
<SectionList
  renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
  renderSectionHeader={({ section: { title } }) => (
    <Text style={{ fontWeight: "bold" }}>{title}</Text>
  )}
  sections={[
    { title: "Title1", data: ["item1", "item2"] },
    { title: "Title2", data: ["item3", "item4"] },
    { title: "Title3", data: ["item5", "item6"] }
  ]}
  keyExtractor={(item, index) => item + index}
/>
```



## Android 独有组件

### BackHandler

### ToastAndroid

### ToolbarAndroid

### DrawerLayoutAndroid

### ProgressBarAndroid

### ViewPagerAndroid

### DatePickerAndroid

### TimePickerAndroid

