# 打包发布

### 生成一个签名密钥

```
 keytool -genkeypair -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

> 这条命令会要求你输入密钥库（keystore）和对应密钥的密码，然后设置一些发行相关的信息。最后它会生成一个叫做`my-release-key.keystore`的密钥库文件。
>
> 在运行上面这条语句之后，密钥库里会生成一个单独的密钥，有效期为 10000 天。--alias 参数后面的别名将来为应用签名时需要用到，所以必须记住这个别名。

### 设置 gradle 变量

> 1. 把`my-release-key.keystore`文件放到你工程中的`android/app`文件夹下
>
> 2. 编辑项目目录/android/gradle.properties，加上如下代码
>
>    ```
>    MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
>    MYAPP_RELEASE_KEY_ALIAS=my-key-alias
>    MYAPP_RELEASE_STORE_PASSWORD=*****
>    MYAPP_RELEASE_KEY_PASSWORD=*****
>    ```

### 把签名配置加入到项目的 gradle 配置中

> 编辑项目目录下的`android/app/build.gradle`，添加如下签名配置：
>
> ```
> ...
> android {
>     ...
>     defaultConfig { ... }
>     signingConfigs {
>         release {
>             if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
>                 storeFile file(MYAPP_RELEASE_STORE_FILE)
>                 storePassword MYAPP_RELEASE_STORE_PASSWORD
>                 keyAlias MYAPP_RELEASE_KEY_ALIAS
>                 keyPassword MYAPP_RELEASE_KEY_PASSWORD
>             }
>         }
>     }
>     buildTypes {
>         release {
>             ...
>             signingConfig signingConfigs.release
>         }
>     }
> }
> ...
> ```

### 生成发行 APK 包

> 进到项目的 android 目录，执行如下命令
>
> ```
> ./gradlew assembleRelease
> ```
>
> 在 项目\android\app\build\outputs\apk\release下出现一个app-release.apk 即成功

### 更换 logo 图标

> 将项目 android\app\src\main\res下的文件夹中图片都换掉，重新打包即可。
>
> 可用如下地址生成各个尺寸的图片。
>
> 地址：https://icon.wuruihong.com/

### 更换项目名称

> 将项目目录下的 android\app\src\main\res\values 中的 strings.xml 中的名称改掉即可

### react-native-splash-screen

> 1、yarn add react-native-splash-screen
>
> 2、yarn react-native link react-native-splash-screen
>
> 3、更新 MainActivity.java
>
> ```
> import android.os.Bundle; // here，不要放在第一行
> import com.facebook.react.ReactActivity;
> // react-native-splash-screen >= 0.3.1
> import org.devio.rn.splashscreen.SplashScreen; // here
> 
> public class MainActivity extends ReactActivity {
>    @Override
>     protected void onCreate(Bundle savedInstanceState) 	  {
>         SplashScreen.show(this);  // here
>         super.onCreate(savedInstanceState);
>     }
>     // ...other code
> }
> 
> ```
>
> 4、在  `android/app/src/main/res/layout` 下创建一个`launch_screen.xml`文件,添加如下代码
>
> ```
> <?xml version="1.0" encoding="utf-8"?>
> <RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
>     android:orientation="vertical" android:layout_width="match_parent"
>     android:layout_height="match_parent">
>     <ImageView android:layout_width="match_parent" android:layout_height="match_parent" android:src="@drawable/launch_screen" android:scaleType="centerCrop" />
> </RelativeLayout>
> ```
>
> 5、在`android/app/src/main/res/values/styles.xml` 
>
> ```
> <resources>
>     <!-- Base application theme. -->
>     <style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">
>         <!-- Customize your theme here. -->
>         <!--添加如下代码，设置透明背景-->
>         <item name="android:windowIsTranslucent">true</item>
>     </style>
> </resources>
> ```

