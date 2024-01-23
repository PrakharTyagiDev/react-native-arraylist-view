import { StyleSheet, View } from 'react-native';
import React from 'react';
import { ViewList } from 'react-native-arraylist-view';

const App = () => {
  return (
    <View style={styles.container}>
      <ViewList
        arrayData={[
          {
            name: 'mahesh',
            password: 'password1',
            profession: 'teacher',
            id: 1,
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
            name: 'suresh',
            password: 'password2',
            profession: 'librarian',
            id: 2,
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
            name: 'ramesh',
            password: 'password3',
            profession: 'clerk',
            id: 3,
            image: [
              {
                'before Image':
                  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
                'after Image':
                  'https://www.yttags.com/blog/wp-content/uploads/2023/02/image-urls-for-testing.webp',
              },
            ],
          },
        ]}
        rowStyle={styles.rowStyle}
        titleLabelStyle={styles.titleLabelStyle}
        titleValueStyle={styles.titleValueStyle}
        containerStyle={styles.containerStyle}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerStyle: {
    marginHorizontal: '2%',
    borderRadius: 0,
    marginVertical: '2%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 3,
  },
  rowStyle: {
    width: '100%',
  },
  titleLabelStyle: {
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
  titleValueStyle: {
    width: '65%',
    paddingHorizontal: 5,
    paddingVertical: 3,
    color: '#000',
    borderColor: '#000',
    fontSize: 13,
    textTransform: 'capitalize',
  },
});
