import React, { useState, useEffect } from "react";
import { View, SafeAreaView, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import FlatListBooks from "../molecules/FlatListBooks";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FAVORITE_BOOK_KEY } from "../constants";

const ListFavoriteBook = () => {
    const [posts, setPosts] = useState([]);

    async function getFavoriteBook(){
        try {
            let fav = JSON.parse(await AsyncStorage.getItem(FAVORITE_BOOK_KEY))
            setPosts(fav)
        } catch (error) {
            console.log(error)
        }
    }
    getFavoriteBook()

    return (
        <SafeAreaView style={styles.container}>
           <FlatListBooks data={posts} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    itemContainer: {
        marginBottom: 12,
    }
})

export default ListFavoriteBook