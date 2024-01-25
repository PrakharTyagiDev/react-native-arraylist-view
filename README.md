# react-native-arraylist-view

[![npm version](https://badge.fury.io/js/react-native-arraylist-view.svg)](http://badge.fury.io/js/react-native-arraylist-view)
[![npm total downloads](https://img.shields.io/npm/dt/react-native-arraylist-view.svg)](https://img.shields.io/npm/dt/react-native-arraylist-view.svg)
[![licence MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://img.shields.io/badge/license-MIT-blue.svg)

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Sample Data](#sample-data)
- [Properties](#properties)
- [Contributing](#contributing)
- [LICENSE](#license)

## Installation

```shell
npm i react-native-arraylist-view --save
```

## Usage

```js
import ViewList from 'react-native-arraylist-view';

<ViewList arrayData={[]} />;
```

## Sample Data

```js
[
  {
    name: 'rakesh',
    password: 'password1',
    profession: 'layer',
    address: 'address1',
    image: [
      {
        'before Image':
          'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
        'after Image':
          'https://pixabay.com/images/download/people-2944065_640.jpg',
      },
    ],
  },
  {
    name: 'jagesh',
    password: 'password2',
    profession: 'doctor',
    address: 'address2',
    image: [
      {
        'before Image':
          'https://pixabay.com/images/download/people-2944065_640.jpg',
        'after Image':
          'https://www.yttags.com/blog/wp-content/uploads/2023/02/image-urls-for-testing.webp',
      },
    ],
  },
  {
    name: 'yogesh',
    password: 'password3',
    profession: 'teacher',
    address: 'address2',
    image: [
      {
        'before Image':
          'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
        'after Image':
          'https://www.yttags.com/blog/wp-content/uploads/2023/02/image-urls-for-testing.webp',
      },
    ],
  },
];
```

## Properties

### ListView

| Prop           | Default | Type     | Description                                          | Required/Optional |
| -------------- | ------- | -------- | ---------------------------------------------------- | ----------------- |
| **arrayData**  | []      | Array    | Array of objects                                     | **Required**      |
| isEdited       | false   | Boolean  | Show and hide edit button                            | Optional          |
| onSelectEdit   | -       | Function | Callback function received value from list selection | Optional          |
| isDeleted      | false   | Boolean  | Show and hide delete button                          | Optional          |
| onSelectDelete | -       | Function | Callback function received value from list selection | Optional          |
| deleteImage    | -       | -        | Delete Image                                         | -                 |
| editImage      | -       | -        | Edit Image                                           | -                 |

### Style Props

| Prop               | Description               | Type   |
| ------------------ | ------------------------- | ------ |
| **rowStyle**       | Customize row style       | Object |
| **rowLabelStyle**  | Customize row title style | Object |
| **rowValueStyle**  | Customize row value style | Object |
| **containerStyle** | Customize container style | Object |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
