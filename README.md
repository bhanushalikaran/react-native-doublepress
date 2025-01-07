# React Native DoublePress

# Version 1 🚀

We are excited to release **Version 1** of the React Native DoublePress library:
- Combines bounce animations with single, double, and long-press gesture handling 😍
- Intuitive and highly customizable functionality 💡

---

# Description

**React Native DoublePress** is a versatile and easy-to-use library that enhances user interaction by combining gesture recognition (single, double, and long press) with smooth animations. With its customizable props, you can tailor the bounce effects and gestures to perfectly match your app's design and functionality. Ideal for creating responsive and visually engaging UI elements in your React Native applications.

---

# Installation

Add the dependency:

```bash
npm i @bhanushalikaran/react-native-doublepress
OR
yarn add @bhanushalikaran/react-native-doublepress

```

---

# Usage

## Import

```tsx
import DoublePress from "@bhanushalikaran/react-native-doublepress";
```

## Basic Usage

Wrap any component inside the **DoublePress** component to add bounce effects and handle single, double, and long-press gestures.

```tsx
<DoublePress
  onPress={() => console.log("Single press")}
  onDoublePress={() => console.log("Double press")}
  onLongPress={() => console.log("Long press")}
  bounceEffectIn={0.9}
  bounceEffectOut={1}
  bounceVelocityIn={0.2}
  bounceVelocityOut={0.5}
  bouncinessIn={5}
  bouncinessOut={10}
  style={{ backgroundColor: "lightblue", padding: 10, borderRadius: 5 }}
>
  <Text>Press Me</Text>
</DoublePress>
```

---

# Configuration - Props

| Property           |   Type   |  Default  | Description                                              |
| ------------------ | :------: | :-------: | -------------------------------------------------------- |
| onPress            | function | undefined | Callback for single press functionality                  |
| onDoublePress      | function | undefined | Callback for double press functionality                  |
| onLongPress        | function | undefined | Callback for long press functionality                    |
| disableDoublePress | boolean  |   false   | Disables the double press detection                      |
| doublePressDelay   |  number  |    250    | Custom delay for double press detection in milliseconds  |
| bounceEffectIn     |  number  |   0.93    | Scale value for the bounce effect when pressed in        |
| bounceEffectOut    |  number  |     1     | Scale value for the bounce effect when released          |
| bounceVelocityIn   |  number  |    0.1    | Velocity of the bounce animation when pressed in         |
| bounceVelocityOut  |  number  |    0.4    | Velocity of the bounce animation when released           |
| bouncinessIn       |  number  |     0     | Determines the "bounciness" when pressed in              |
| bouncinessOut      |  number  |     0     | Determines the "bounciness" when released                |
| useNativeDriver    | boolean  |   true    | Determines if the animation should use the native driver |
| style              |  style   | undefined | Custom style for the wrapper container                   |

---

# License

React Native DoublePress is available under the MIT license. See the LICENSE file for more info.

