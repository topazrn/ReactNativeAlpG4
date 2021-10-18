import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
} from 'react-native';
import TextComponent from '../atom/Text';
import ImageComponent from '../atom/Image';
import axios from 'axios';
import FavoriteButton from '../atom/FavoriteButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FAVORITE_BOOK_KEY } from '../constants';

const BookDetails = ({id, route}) => {
  
  if (id === undefined) id = route.params.bookId;
  console.log(id)

  const [details, setDetails] = useState({});
  const [active, setActive] = useState(false);

  const UrlGetData =
    'https://u73olh7vwg.execute-api.ap-northeast-2.amazonaws.com/staging/book/' + id + '?nim=2201752893';

  useEffect(() => {
    axios
      .get(UrlGetData)
      .then(res => {
        setDetails(res.data.products[0]);
      })
      .catch(err => {
        console.log(err);
      });
    
  }, []);

  useEffect(() => {
    try {
      isExistFav()
    } catch (error) {
      console.log(error)
    }
  }, [details.name])

  const isExistFav = async() => {
    const existingFav = JSON.parse(await AsyncStorage.getItem(FAVORITE_BOOK_KEY))
    let isFav = existingFav.filter(obj => {return obj.id === details.id})
    if (isFav.length > 0){
      setActive(true)
    }
  }

  const onPressHeart = async () => {
    if(!active){
      //Add to Favorite
      const existingFav = await AsyncStorage.getItem(FAVORITE_BOOK_KEY)
      let newFav = JSON.parse(existingFav)
      if( !newFav ){
        newFav = []
      }
      newFav.push(details)

      await AsyncStorage.setItem(FAVORITE_BOOK_KEY, JSON.stringify(newFav))
    }
    else if(active){
      //Remove from Favorite
      const existingFav = await AsyncStorage.getItem(FAVORITE_BOOK_KEY)
      let newFav = JSON.parse(existingFav)
      const filteredFav = newFav.filter(obj => { return obj.id !== details.id });

      await AsyncStorage.setItem(FAVORITE_BOOK_KEY, JSON.stringify(filteredFav))
    }
    setActive(!active);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageComponent data={details.img} />
      <View style={styles.header}>
        <View>
          <TextComponent data={details.author} />
          <TextComponent typeText={'name'} data={details.name} />
          <TextComponent typeText={'price'} data={details.price} />
        </View>
        <FavoriteButton onPressHeart={onPressHeart} active={active}/>
      </View>
      <TextComponent typeText={'description'} data={details.description} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  header: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default BookDetails;
