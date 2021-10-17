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

const BookDetails = ({id, route}) => {
  
  if (id === undefined) id = route.params.bookId;
  console.log(id);
  const [details, setDetails] = useState({});
  const UrlGetData =
    'https://u73olh7vwg.execute-api.ap-northeast-2.amazonaws.com/staging/book?nim=2201752893';

  useEffect(() => {
    axios
      .get(UrlGetData)
      .then(res => {
        setDetails(res.data.products.filter(x => x.id == id)[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageComponent data={details.img} />
      <View style={styles.header}>
        <View>
          <TextComponent data={details.author} />
          <TextComponent typeText={'name'} data={details.name} />
          <TextComponent typeText={'price'} data={details.price} />
        </View>
        <FavoriteButton />
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
