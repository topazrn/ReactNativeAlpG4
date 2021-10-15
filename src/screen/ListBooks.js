import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import FlatListBooks from "../molecules/FlatListBooks";


const ListBooks = () => {
    return (
        <SafeAreaView style={styles.container}>
           <FlatListBooks />
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
