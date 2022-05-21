import { View, Text } from "react-native";
import React from "react";
import { assets, COLORS, FONTS, SHADOWS, SIZES } from "../constants";

export const NFTTitle = () => {
  return (
    <View>
      <Text>SubInfo</Text>
    </View>
  );
};

export const EthPrice = () => {
  return (
    <View>
      <Text>SubInfo</Text>
    </View>
  );
};

export const ImageCmp = () => {
  return (
    <View>
      <Text>SubInfo</Text>
    </View>
  );
};

export const People = () => {
  return (
    <View style={{flexDirection: "row"}}>
      {[assets.person02, assets.person03, assets.person04].map(
          (imgUrl, index) => (
              <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
          )
      )}
    </View>
  );
};

export const EndDate = () => {
  return (
    <View style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        justifyContent: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%"
    }}>
      <Text style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary,
      }}>Ending in: </Text>

      <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
      }}>
          12h 30m
      </Text>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: 'space-between'
    }}>
      <People />
      <EndDate/>
    </View>
  );
};
