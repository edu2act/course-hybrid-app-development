# 基础组件

## View

> 创建 UI 时最基础的组件，直接对应一个平台的原生视图，IOS中的 UIView、Android中的android.view和Web中的div等

## Text

> - 一个用于显示文本的 RN 组件，支持嵌套、样式，以及触摸处理，可继承样式
> - `<Text>`元素在布局上不同于其它组件：在Text内部的元素不再使用flexbox布局，而是采用文本布局。

## Image

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