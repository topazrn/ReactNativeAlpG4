import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import TextComponent from "../atom/Text";
import ImageComponent from "../atom/Image";
import axios from "axios";


const FlatListBooks = () => {
    const [posts, setPosts] = useState([]);
    const UrlGetData = 'https://u73olh7vwg.execute-api.ap-northeast-2.amazonaws.com/staging/book?nim=2201752893';

    useEffect(() => {
        axios.get(UrlGetData)
            .then(res => {
                setPosts(res.data.products)
            }).catch(err => {
                console.log(err)
            })

    }, [])

    return (
        <FlatList
            numColumns={2}
            showsVerticalScrollIndicator={false}
            data={posts}
            renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity style={styles.card}>
                        <ImageComponent data={item.img}/>
                        <TextComponent data={item.author} />
                        <TextComponent typeText={'name'} data={item.name} />
                        <TextComponent typeText={'price'} data={item.price} />
                    </TouchableOpacity>
                )
            }}
            keyExtractor={(item) => item.id} >

        </FlatList>
    )
}

const widthCard = Dimensions.get("screen").width / 2 - 20
const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFFFFF",
        height: 300,
        width: widthCard,
        marginHorizontal: 5,
        borderRadius: 10,
        padding: 15,
        margin: 10
    },
});

export default FlatListBooks;