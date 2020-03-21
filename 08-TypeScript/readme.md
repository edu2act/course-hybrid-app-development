# 使用 TypeScript 进行开发

## 项目搭建

- 使用 TypeScript 模板创建新项目

```
react-native init MyApp --template react-native-template-typescript
```

- 现有项目添加 TypeScript

  1. ```
     yarn add --dev typescript @types/jest @types/react @types/react-native @types/react-test-renderer
     ```

  2. 在项目根目录下创建一个 TypeScript 配置文件（**tsconfig.json**）

     ```
     {
       "compilerOptions": {
         "allowJs": true,
         "allowSyntheticDefaultImports": true,
         "esModuleInterop": true,
         "isolatedModules": true,
         "jsx": "react",
         "lib": ["es6"],
         "moduleResolution": "node",
         "noEmit": true,
         "strict": true,
         "target": "esnext"
       },
       "exclude": [
         "node_modules",
         "babel.config.js",
         "metro.config.js",
         "jest.config.js"
       ]
     }
     ```

  3. 在项目根目录创建一个**jest.config.js**文件

     ```
     module.exports = {
       preset: 'react-native',
       moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
     };
     ```

  4. 重命名一个 JavaScript 文件为 ***.tsx**

## TypeScript 语法

### 基础类型

> number、string、boolean、
>
> Array<number>（number[ ]）、object
>
> Tuple（元组 ）、enum（枚举）
>
> any、void、null 、undefined

```js
let isDone: boolean = false;
```

### 接口

> interface ：描述一个对象的取值规范，不实现具体的对象

- 属性接口

```tsx
interface User {
  name: string;
  age?: number;
}

const user1: User = {
  name: "lili",
  age: 18
};
```

- 函数接口

```tsx
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let myFunc: SearchFunc = function(source: string, subString: string){
    ...
    return true;
}
```

- 类接口

```tsx
interface User {
  name: string;
  age?: number;
}
  
class user1 implements User{
    name='zhangsan'  
}
```

- 继承

```tsx
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
```

### 类

- 定义
- 继承
- 静态属性和静态方法（static）
- 访问修饰符
  - public
  - private
  - protected

### 泛型

> 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
>
> 使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据

- 泛型函数

```tsx
function identity<T>(arg: T): T {
    return arg;
}
identity<string>('params1')
identity<number>(100)
```

- 泛型接口

```tsx
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
```

- 泛型类

```tsx
class AddData<T>{
    list:T[] = [];
    num:number;
    add(data:T):T[]{
        this.list.push(data);
        return this.list;
    }
}
let data1 = new AddData<number>()
data1.list.push(1)

```

### 装饰器

> *装饰器*是一种特殊类型的声明，它能够被附加到类声明、方法、属性或参数上。 装饰器使用`@expression`这种形式，`expression`求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入。

#### 配置

```
yarn add -D @babel/plugin-proposal-decorators

//添加配置
// 创建 .babelrc 文件
{
    "presets": ["module:metro-react-native-babel-preset"],
    "plugins":[["@babel/plugin-proposal-decorators", { "legacy": true }]]
}

// tsconfig.json中添加 "experimentalDecorators": true
{
    "compilerOptions": {
        "target": "ES5",
        "experimentalDecorators": true
    }
}
```

#### 定义

```tsx
// 普通装饰器（无参数）
function helloWord(target: any) {
    console.log('hello Word!');
}
@helloWord
class HelloWordClass {

}
// 装饰器工厂 （带参数）
function helloWord(p:string) {
    return function (target) { //  这才是真正装饰器
         console.log(p)
    }
}
@helloWord('hello')
class HelloWordClass {

}
```

#### 分类

- 类装饰器

  > 参数是类的构造函数
  >
  > 如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明

- 方法装饰器

  > 方法装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
  >
  > 1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
  > 2. 成员的名字。
  > 3. 成员的属性描述符。

  ```tsx
  function enumerable(value: boolean) {
      return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
          descriptor.enumerable = value;
      };
  }
  class Greeter {
      greeting: string;
      constructor(message: string) {
          this.greeting = message;
      }
  
      @enumerable(false)
      greet() {
          return "Hello, " + this.greeting;
      }
  }																												
  ```

- 属性装饰器

  > 属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
  >
  > 1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
  >
  > 2、成员的名字

  ```tsx
  function DefaultValue(value: string) {
      return function (target: any, propertyName: string) {
          target[propertyName] = value;
      }
  }
  
  class Hello {
      @DefaultValue("Hello") greeting: string;
  }
  
  console.log(new Hello().greeting);
  ```

- 参数装饰器

  > 参数装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
  >
  > 1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
  > 2. 成员的名字。
  > 3. 参数在函数参数列表中的索引。

#### 装饰器组合

> 当多个装饰器应用在一个声明上时会进行如下步骤的操作：
>
> 1. 由上至下依次对装饰器表达式求值。
> 2. 求值的结果会被当作函数，由下至上依次调用