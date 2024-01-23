# react-native-arraylist-view

## TOC

- [Installation](#installation)
- [Usage](#usage)
- [Properties](#properties)
- [Sample Data](#sample-data)
- [Contributing](#contributing)
- [LICENSE](#license)

## Installation

```shell
npm i react-native-arraylist-view --save
```

## Usage

```js
import ViewList from 'react-native-arraylist-view';

<ViewList
  arrayData={[]}
  rowStyle={styles.rowStyle}
  rowLabelStyle={styles.rowLabelStyle}
  rowValueStyle={styles.rowValueStyle}
  containerStyle={styles.containerStyle}
/>;
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

| Prop            | Default | Type     | Description                                          | Required/Optional |
| --------------- | ------- | -------- | ---------------------------------------------------- | ----------------- |
| arrayData       | []      | array    | Array of objects                                     | Required          |
| rowStyle        | -       | object   | Customize row style                                  | Optional          |
| titleLabelStyle | -       | object   | Customize item title text style                      | Optional          |
| titleValueStyle | -       | object   | Customize item value text style                      | Optional          |
| containerStyle  | -       | object   | Customize container style                            | Optional          |
| isEdited        | false   | boolean  | Customize container style                            | Optional          |
| onSelectEdit    | -       | function | Callback function received value from list selection | Optional          |
| isDeleted       | false   | boolean  | Customize container style                            | Optional          |
| onSelectDelete  | -       | function | Callback function received value from list selection | Optional          |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
