import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const FavoriteButton = ({onPressHeart, active}) => {

  return (
    <TouchableOpacity onPress={onPressHeart}>
      <Text style={[styles.heart, active ? styles.bgRed : null]} >&#x2764;</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  heart: {
    fontSize: 24
  },
  bgRed: {
    backgroundColor: "#D3D3D3",
  }
});

export default FavoriteButton;
