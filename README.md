# react-native-arraylist-view

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

<ViewList
  arrayData={[]}
  rowStyle={styles.rowStyle}
  rowLabelStyle={styles.rowLabelStyle}
  rowValueStyle={styles.rowValueStyle}
  containerStyle={styles.containerStyle}
  isDeleted={true}
  onSelectDelete={(item, index) => {
    console.log(item, index);
  }}
  isEdited={false}
  onSelectEdit={(item, index) => {
    console.log(item, index);
  }}
/>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerStyle: {
    marginHorizontal: '2%',
    borderRadius: 0,
    marginVertical: '2%',
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 3,
  },
  rowStyle: {
    width: '100%',
  },
  rowLabelStyle: {
    width: '35%',
    fontSize: 13,
    borderColor: '#000',
    color: '#000',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRightWidth: 1,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  rowValueStyle: {
    width: '65%',
    paddingHorizontal: 5,
    paddingVertical: 3,
    color: '#000',
    borderColor: '#000',
    fontSize: 13,
    textTransform: 'capitalize',
  },
});
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
