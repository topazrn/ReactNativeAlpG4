import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import FlatListBooks from "../molecules/FlatListBooks";
import SearchBar from "../atom/SearchBar";
import axios from "axios";

const ListBooks = () => {
    
    const [posts, setPosts] = useState([]);
    const UrlGetData = 'https://u73olh7vwg.execute-api.ap-northeast-2.amazonaws.com/staging/book?nim=2201752893';
    const [searchText, setSearchText] = useState("");
    const [originalData, setOriginalData] = useState([]);

    useEffect(() => {
        axios.get(UrlGetData)
            .then(res => {
                setPosts(res.data.products)
                setOriginalData(res.data.products);
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const searchBook = (search) => {
        if (search) {
            setSearchText(search);
            let filtered = originalData.filter(bookObj => bookObj.name.toLowerCase().includes(search.toLowerCase()))
            setPosts(filtered);
        }
        else {
            setSearchText('');
            setPosts(originalData);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar searchText={searchText} searchBook={searchBook}/>
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
