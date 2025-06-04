import React, { useCallback, memo } from "react";
import {
  FlatList,
  Image,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const ArrayListView = ({
  arrayData = [],
  hidden = ["id"],
  borderColor = "#000",
  itemCardStyle,
  containerStyle,
  rowStyle,
  rowLabelContainerStyle,
  rowLabelStyle,
  rowValueContainerStyle,
  rowValueStyle,
  isEdited = false,
  isDeleted = false,
  isView = false,
  onSelectDelete,
  onSelectEdit,
  onSelectView,
  editImage = require("./assets/edit.png"),
  deleteImage = require("./assets/delete.png"),
  viewImage = require("./assets/view.png"),
  showsVerticalScrollIndicator = false,
  listHeader,
  itemSeperator,
  listFooter,
  onEndReached,
  endThreshold = 0.5,
  refreshControl,
  iconButtonStyle,
  iconImageStyle,
}) => {
  const hiddenUpper = hidden.map(h => h.toUpperCase());

  const getBorderStyle = useCallback((index, length) => ({
    borderBottomWidth: index === length - 1 ? 0 : 1,
    borderColor,
  }), [borderColor]);

  const handleLinkPress = useCallback(url => {
    if (url) Linking.openURL(url);
  }, []);

  const RenderImage = memo(({ data }) => {
    const keys = Object.keys(data[0] || {});
    return keys.map((key, i) => (
      <View style={styles.rowStyle} key={key}>
        <View style={[styles.rowLabelContainerStyle, rowLabelContainerStyle, getBorderStyle(i, keys.length)]}>
          <Text style={[styles.rowLabelStyle, rowLabelStyle]}>{key}</Text>
        </View>
        <View style={[styles.rowValueContainerStyle, rowValueContainerStyle, getBorderStyle(i, keys.length)]}>
          <TouchableOpacity onPress={() => handleLinkPress(data[0][key])}>
            {data[0][key] ? <Text style={{ color: "#336199" }}>View</Text> : null}
          </TouchableOpacity>
        </View>
      </View>
    ));
  });

  const renderItem = useCallback(({ item, index }) => {
    const keys = Object.keys(item);

    return (
      <View style={[styles.card, itemCardStyle]}>
        <View style={[styles.containerStyle, containerStyle, { borderColor }]}>
          {keys.map((key, i) => {
            const upperKey = key.toUpperCase();
            if (hiddenUpper.includes(upperKey) || ["ISDELETED", "ISEDITED"].includes(upperKey)) return null;

            return (
              <View key={key} style={styles.rowStyle}>
                {upperKey === "IMAGES" ? (
                  item[key]?.length > 0 && <RenderImage data={item[key]} />
                ) : (
                  <View style={styles.rowContent}>
                    <View style={[styles.rowLabelContainerStyle, rowLabelContainerStyle, getBorderStyle(i, keys.length)]}>
                      <Text style={[styles.rowLabelStyle, rowLabelStyle]}>{key}</Text>
                    </View>
                    <View style={[styles.rowValueContainerStyle, rowValueContainerStyle, getBorderStyle(i, keys.length)]}>
                      <Text style={[styles.rowValueStyle, rowValueStyle]}>
                        {item[key]?.toString()}
                      </Text>
                    </View>
                  </View>
                )}
              </View>
            );
          })}

          {(isView || isEdited || isDeleted || item.isView || item.isEdited || item.isDeleted) && (
            <View style={[styles.rowStyle, { borderTopWidth: 1 }, rowStyle]}>
              <View style={styles.actionRow}>
                {[
                  { show: isView || item.isView, icon: viewImage, action: () => onSelectView?.(item, index) },
                  { show: isEdited || item.isEdited, icon: editImage, action: () => onSelectEdit?.(item, index) },
                  { show: isDeleted || item.isDeleted, icon: deleteImage, action: () => onSelectDelete?.(item, index) },
                ].map((btn, idx) =>
                  btn.show ? (
                    <TouchableOpacity key={idx} style={styles.flexOne} onPress={btn.action}>
                      <View style={[styles.iconButtonStyle, iconButtonStyle]}>
                        <Image source={btn.icon} style={[styles.iconImageStyle, iconImageStyle]} tintColor="grey" />
                      </View>
                    </TouchableOpacity>
                  ) : null
                )}
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }, [arrayData, isView, isEdited, isDeleted, borderColor]);

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={arrayData}
        renderItem={renderItem}
        keyExtractor={(item, index) => item?.id?.toString() ?? index.toString()}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        ListHeaderComponent={listHeader}
        ItemSeparatorComponent={itemSeperator}
        ListFooterComponent={listFooter}
        onEndReached={onEndReached}
        onEndReachedThreshold={endThreshold}
        refreshControl={refreshControl}
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        removeClippedSubviews
        windowSize={5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#FFF",
    flex: 1,
  },
  card: {
    backgroundColor: "#FFF",
    padding: 3,
    borderRadius: 5,
    margin: 5,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
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
    backgroundColor: "#FFF",
    borderWidth: 2,
  },
  rowStyle: {
    width: "100%",
  },
  rowContent: {
    flexDirection: "row",
    width: "100%",
  },
  rowLabelContainerStyle: {
    width: "35%",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRightWidth: 1,
    backgroundColor: "#EEE",
  },
  rowLabelStyle: {
    fontSize: 12,
    fontWeight: "600",
    color: "#000",
    textTransform: "capitalize",
  },
  rowValueContainerStyle: {
    width: "65%",
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  rowValueStyle: {
    fontSize: 13,
    color: "#000",
    textTransform: "capitalize",
  },
  iconButtonStyle: {
    backgroundColor: "#FFF",
    borderRadius: 50,
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 3,
    alignSelf: "center",
    elevation: 1,
  },
  iconImageStyle: {
    height: 15,
    width: 15,
  },
  actionRow: {
    flexDirection: "row",
    width: "100%",
  },
  flexOne: {
    flex: 1,
  },
  container: {
    paddingBottom: 10,
  },
});

export default memo(ArrayListView);
