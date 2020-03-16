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
    add(data:T):T[]{
        this.list.push(data);
        return this.list;
    }
}
let data1 = new AddData<number>()
data1.list.push(1)

```

