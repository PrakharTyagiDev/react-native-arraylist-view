import {
  Animated,
  Dimensions,
  Image,
  Modal,
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

const ViewList = ({
  arrayData,
  containerStyle,
  rowStyle,
  rowLabelStyle,
  rowValueStyle,
  isEdited,
  isDeleted,
  onSelectDelete,
  onSelectEdit,
  editImage,
  deleteImage
}) => {
  const [visible, setIsVisible] = useState(false);
  const [image, setImage] = useState('');

  const renderViewData = ({ item, index }) => {
    var object = Object.keys(item);
    var len = Object.keys(item).length;
    return (
      <View style={[styles.itemContainer, containerStyle]}>
        {object.map((a, i) => {
          return (
            <View style={[styles.rowStyle, rowStyle]}>
              {object[i].toUpperCase() === 'IMAGE' ? (
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
                      { borderBottomWidth: i === len - 1 ? 0 : 1 },
                    ]}
                  >
                    {object[i]}{' '}
                  </Text>
                  <Text
                    style={[
                      styles.rowValueStyle,
                      rowValueStyle,
                      { borderBottomWidth: i === len - 1 ? 0 : 1 },
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
                  <View style={styles.iconStyle}>
                    {editImage ||
                      <Image
                        source={require('./assets/edit.png')}
                        height={'100%'}
                        width={'100%'}
                        tintColor={'grey'}
                        style={{
                          alignSelf: 'center',
                          marginVertical: 5,
                          height: 25,
                          width: 25
                        }}
                      />
                    }
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
                  <View style={styles.iconStyle}>
                    {deleteImage ||
                      <Image
                        source={require('./assets/delete.png')}
                        height={'100%'}
                        width={'100%'}
                        tintColor={'grey'}
                        style={{
                          alignSelf: 'center',
                          marginVertical: 5,
                          height: 25,
                          width: 25
                        }}
                      />
                    }
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ) : null}
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
                  { borderBottomWidth: i === len - 1 ? 0 : 1 },
                ]}
              >
                {object[i]}{' '}
              </Text>

              <Text
                style={[
                  styles.rowValueStyle,
                  rowValueStyle,
                  {
                    borderBottomWidth: i === len - 1 ? 0 : 1,
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
                      <Text style={{ color: '#336199' }}> View</Text>
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
        backgroundColor: 'white',
        flex: 1,
      }}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={arrayData}
        renderItem={renderViewData}
        keyExtractor={(item) => item.id}
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
            </SafeAreaView>
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
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
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
  itemContainer: {
    marginHorizontal: '2%',
    borderRadius: 0,
    marginVertical: '2%',
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 3,
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
  root: {
    alignItems: 'flex-end',
    height: '10%',
  },
  closeButton: {
    marginRight: 8,
    marginTop: 8,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    backgroundColor: '#000000',
  },
  closeText: {
    lineHeight: 22,
    fontSize: 19,
    textAlign: 'center',
    color: '#FFF',
    includeFontPadding: false,
  },
  iconStyle: {
    backgroundColor: '#fff',
    borderRadius: 50,
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 3,
    alignSelf: 'center',
    elevation: 1,
  },
});

export default ViewList;
