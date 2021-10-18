import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import FlatListBooks from "../molecules/FlatListBooks";
import axios from "axios";

const ListBooks = () => {
    
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
        <SafeAreaView style={styles.container}>
           <FlatListBooks data={posts} />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#F5F5F5"
    }
});

export default ListBooks;
