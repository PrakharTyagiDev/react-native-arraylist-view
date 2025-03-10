import {
  Animated,
  Dimensions,
  Image,
  Modal,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
const SCREEN = Dimensions.get('window');

const SCREEN_WIDTH = SCREEN.width;
const SCREEN_HEIGHT = SCREEN.height;

const ArrayListView = ({
  arrayData = [],
  hidden = ['id'],
  borderColor = '#000000',
  itemCardStyle,
  containerStyle,
  rowStyle,
  rowLabelStyle,
  rowValueStyle,
  isEdited = false,
  isDeleted = false,
  onSelectDelete,
  onSelectEdit,
  editImage = require('./assets/edit.png'),
  deleteImage = require('./assets/delete.png'),
  listHeader,
  itemSeperator,
  listFooter,
  onEndReached,
  endThreshold,
  refreshControl,
  iconButtonStyle,
  iconImageStyle,
}) => {
  const [visible, setIsVisible] = useState(false);
  const [image, setImage] = useState('');

  const filteredData = arrayData.map((item) => {
    const newItem = { ...item };
    hidden.forEach((key) => {
      delete newItem[key];
    });
    return newItem;
  });
  const renderViewData = ({ item, index }) => {
    var object = Object.keys(item);
    var len = Object.keys(item).length;
    return (
      <View style={[styles.card, itemCardStyle]}>
        <View
          style={[
            styles.containerStyle,
            containerStyle,
            { borderColor: borderColor },
          ]}
        >
          {object.map((a, i) => {
            return (
              <View style={styles.rowStyle}>
                {object[i].toUpperCase() === 'IMAGES' ? (
                  <>
                    {item[object[i]].length > 0 && (
                      <RenderImage data={item[object[i]]} />
                    )}
                  </>
                ) : (
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      display: 'flex',
                    }}
                  >
                    <Text
                      style={[
                        styles.rowLabelStyle,
                        rowLabelStyle,
                        {
                          borderBottomWidth: i === len - 1 ? 0 : 1,
                          borderColor: borderColor,
                        },
                      ]}
                    >
                      {object[i]}
                    </Text>
                    <Text
                      style={[
                        styles.rowValueStyle,
                        rowValueStyle,
                        {
                          borderBottomWidth: i === len - 1 ? 0 : 1,
                          borderColor: borderColor,
                        },
                      ]}
                    >
                      {item[object[i]]}
                    </Text>
                  </View>
                )}
              </View>
            );
          })}
          {isEdited || isDeleted ? (
            <View style={[styles.rowStyle, { borderTopWidth: 1 }, rowStyle]}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  display: 'flex',
                }}
              >
                {isEdited && (
                  <TouchableOpacity
                    style={{ width: '50%' }}
                    onPress={() => {
                      setSelectedEditIndex(item, index);
                    }}
                  >
                    <View style={[styles.iconButtonStyle, iconButtonStyle]}>
                      <Image
                        source={editImage}
                        height={'100%'}
                        width={'100%'}
                        tintColor={'grey'}
                        style={[styles.iconImageStyle, iconImageStyle]}
                      />
                    </View>
                  </TouchableOpacity>
                )}
                {isDeleted && (
                  <TouchableOpacity
                    style={{ alignSelf: 'center', width: '50%' }}
                    onPress={() => {
                      setSelectedDeleteIndex(item, index);
                    }}
                  >
                    <View style={[styles.iconButtonStyle, iconButtonStyle]}>
                      <Image
                        source={deleteImage}
                        height={'100%'}
                        width={'100%'}
                        tintColor={'grey'}
                        style={[styles.iconImageStyle, iconImageStyle]}
                      />
                    </View>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ) : null}
        </View>
      </View>
    );
  };

  const setSelectedDeleteIndex = (index, item) => {
    onSelectDelete(index, item);
  };
  const setSelectedEditIndex = (index, item) => {
    onSelectEdit(index, item);
  };
  const RenderImage = ({ data }) => {
    var object = Object.keys(data[0]);
    var len = Object.keys(data[0]).length;
    return (
      <>
        {object.map((a, i) => {
          return (
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                display: 'flex',
              }}
            >
              <Text
                style={[
                  styles.rowLabelStyle,
                  rowLabelStyle,
                  {
                    borderBottomWidth: i === len - 1 ? 0 : 1,
                    borderColor: borderColor,
                  },
                ]}
              >
                {object[i]}
              </Text>

              <Text
                style={[
                  styles.rowValueStyle,
                  rowValueStyle,
                  {
                    borderBottomWidth: i === len - 1 ? 0 : 1,
                    borderColor: borderColor,
                  },
                ]}
              >
                <TouchableOpacity
                  onPress={() => {
                    setImage(data[0][object[i]]);
                    setIsVisible(true);
                  }}
                >
                  {data[0][object[i]] != '' ? (
                    <View>
                      <Text style={{ color: '#336199' }}>View</Text>
                    </View>
                  ) : null}
                </TouchableOpacity>
              </Text>
            </View>
          );
        })}
      </>
    );
  };
  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        flex: 1,
      }}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredData}
        renderItem={renderViewData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
        ListHeaderComponent={listHeader}
        ItemSeparatorComponent={itemSeperator}
        ListFooterComponent={listFooter}
        onEndReached={onEndReached}
        onEndReachedThreshold={endThreshold}
        refreshControl={refreshControl}
      />
      <Modal
        transparent={true}
        visible={visible}
        animationType={'fade'}
        supportedOrientations={['portrait']}
        hardwareAccelerated
      >
        <View
          style={{
            flex: 1,
            backgroundColor: '#7d7d7d',
            height: '100%',
            zIndex: 1,
          }}
        >
          <Animated.View
            style={{
              width: '100%',
            }}
          >
            <SafeAreaView style={styles.root}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setIsVisible(false)}
                hitSlop={{ top: 16, left: 16, bottom: 16, right: 16 }}
              >
                <Text style={styles.closeText}>✕</Text>
              </TouchableOpacity>
              <Animated.View
                style={{ height: SCREEN_HEIGHT * 0.8, width: SCREEN_WIDTH }}
              >
                <Animated.Image
                  source={{ uri: image + '?' + new Date(), cache: 'reload' }}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  resizeMode={'contain'}
                />
              </Animated.View>
            </SafeAreaView>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 3,
    borderRadius: 5,
    margin: 5,

    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  containerStyle: {
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
  },
  rowStyle: {
    width: '100%',
  },
  rowLabelStyle: {
    width: '35%',
    fontSize: 12,
    color: '#000000',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRightWidth: 1,
    fontWeight: '600',
    textTransform: 'capitalize',
    backgroundColor: '#d9d8d7',
  },
  rowValueStyle: {
    width: '65%',
    paddingHorizontal: 5,
    paddingVertical: 3,
    color: '#000000',
    fontSize: 13,
    textTransform: 'capitalize',
  },
  iconButtonStyle: {
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 3,
    alignSelf: 'center',
    elevation: 1,
  },
  iconImageStyle: {
    alignSelf: 'center',
    marginVertical: 5,
    height: 15,
    width: 15,
  },
  root: {
    alignItems: 'flex-end',
    height: '10%',
  },
  closeButton: {
    marginRight: 8,
    marginTop: 8,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    backgroundColor: '#000000',
  },
  closeText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFF',
    includeFontPadding: false,
  },
});

export default ArrayListView;
