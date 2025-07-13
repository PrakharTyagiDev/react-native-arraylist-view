# react-native-arraylist-view

[![npm version](https://badge.fury.io/js/react-native-arraylist-view.svg)](http://badge.fury.io/js/react-native-arraylist-view)
[![npm total downloads](https://img.shields.io/npm/dt/react-native-arraylist-view.svg)](https://img.shields.io/npm/dt/react-native-arraylist-view.svg)
[![license MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://img.shields.io/badge/license-MIT-blue.svg)

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Sample Data](#sample-data)
- [Properties](#properties)
- [Contributing](#contributing)
- [License](#license)

## Description
`react-native-arraylist-view` is a simple and efficient library for rendering arrays of data in a scrollable list view in React Native. This library takes an array of data and automatically generates a list view, making it an ideal solution for displaying dynamic content such as contact lists, to-do items, and product catalogs.

The component is flexible and can be customized easily with props to modify how the list and its items are rendered, including optional edit and delete buttons for interaction. Whether you're building a small app or handling large datasets, this library is optimized for performance and ease of use.

## Installation
Install the library using npm or yarn:

```sh
npm install react-native-arraylist-view --save
```
or
```sh
yarn add react-native-arraylist-view
```

## Usage
To use react-native-arraylist-view, simply import the component and pass an array of data to it. You can also customize the appearance of each list item through the renderItem function and use additional props to control the display of edit and delete buttons.

# Example
```sh
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ArrayListView from 'react-native-arraylist-view';

// Sample data for rendering in the list
const data = [
  {
    id: '1',
    name: 'John Doe',
    age: 30,
    isDeleted: true,
    isEdited: true,
    images: [
      {
        'before Image':
          'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
        'after Image':
          'https://pixabay.com/images/download/people-2944065_640.jpg',
      },
    ],
  },
  {
    id: '2',
    name: 'Jane Smith',
    age: 25,
    isDeleted: false,
    isEdited: true,
    images: [
      {
        'before Image':
          'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
        'after Image':
          'https://pixabay.com/images/download/people-2944065_640.jpg',
      },
    ],
  },
  {
    id: '3',
    name: 'Alice Johnson',
    age: 35,
    isDeleted: true,
    isEdited: false,
    images: [
      {
        'before Image':
          'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
        'after Image':
          'https://pixabay.com/images/download/people-2944065_640.jpg',
      },
    ],
  },
];

const App = () => {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <ArrayListView
        arrayData={data}
        isEdited={true}
        isDeleted={true}
        onSelectEdit={(item) => console.log('Edit clicked on:', item)}
        onSelectDelete={(item) => console.log('Delete clicked on:', item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  rowLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rowValue: {
    fontSize: 14,
    color: '#555',
  },
});

export default App;
```

## Sample Data
This is an example of how your data should be structured. You can pass any array of objects with any shape to the component.
```sh
const data = [
  {
    id: '1',
    name: 'John Doe',
    age: 30,
    isDeleted: false,
    isEdited: false,
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
    id: '2',
    name: 'Jane Smith',
    age: 25,
    isDeleted: true,
    isEdited: false,
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
    id: '3',
    name: 'Alice Johnson',
    age: 35,
    isDeleted: true,
    isEdited: true,
    image: [
      {
        'before Image':
          'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
        'after Image':
          'https://pixabay.com/images/download/people-2944065_640.jpg',
      },
    ],
  },
];
```


## Properties
### ListView
| Prop           | Default | Type      | Description                                                              | Required/Optional |
| -------------- | ------- | --------- | ------------------------------------------------------------------------ | ----------------- |
| arrayData      | []      | Array     | Array of objects to be displayed                                         | **Required**      |
| hidden         | []      | Array     | Array of keys to be hidden from display                                  | Optional          |
| borderColor    | #000000 | String    | Border color for styling                                                 | Optional          |
| isEdited       | false   | Boolean   | Determines if the edit button is shown                                   | Optional          |
| isDeleted      | false   | Boolean   | Determines if the delete button is shown                                 | Optional          |
| onSelectEdit   | -       | Function  | Callback function triggered when an item is edited                       | Optional          |
| onSelectDelete | -       | Function  | Callback function triggered when an item is deleted                      | Optional          |
| deleteImage    | -       | -         | Delete button icon image source                                          | Optional          |
| editImage      | -       | -         | Edit button icon image source                                            | Optional          |
| listHeader     | -       | Component | Custom component to be displayed at the list header                      | Optional          |
| itemSeperator  | -       | Component | Custom separator between list items                                      | Optional          |
| listFooter     | -       | Component | Custom component to be displayed at the list footer                      | Optional          |
| onEndReached   | -       | Component | Callback function triggered when reaching the end of the list            | Optional          |
| endThreshold   | -       | Component | Defines how close to the end of the list before onEndReached is called   | Optional          |
| refreshControl | -       | Component | Refresh control for pull-to-refresh functionality                        | Optional          |

### Style Props
| Prop                        | Description                                         | Type   |
| --------------------------- | --------------------------------------------------- | ------ |
| **itemCardStyle**           | Custom style for each item card                     | Object |
| **containerStyle**          | Custom style for the container                      | Object |
| **rowStyle**                | Custom style for each row                           | Object |
| **rowLabelContainerStyle**  | Custom style for row labels container               | Object |
| **rowLabelStyle**           | Custom style for row labels                         | Object |
| **rowValueContainerStyle**  | Custom style for row values container               | Object |
| **rowValueStyle**           | Custom style for row values                         | Object |
| **iconButtonStyle**         | Custom style for icon buttons                       | Object |
| **iconImageStyle**          | Custom style for images inside icon buttons         | Object |

## Contributing
See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License
MIT
