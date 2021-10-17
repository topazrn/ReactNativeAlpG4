import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const FavoriteButton = () => {
  const [active, setActive] = useState(false);
  const onPressHeart = () => {
    // TODO: save to database first
    // and then setActive
    setActive(!active);
  };

  return (
    <TouchableOpacity onPress={onPressHeart}>
      <View style={[styles.heart, active ? styles.bgRed : null]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // TODO: turn heart into an actual heart
  // shape instead of just circle 
  heart: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "grey",
  },
  bgRed: {
    backgroundColor: "red",
  }
});

export default FavoriteButton;
