import React from "react";
import { StyleSheet, Image, } from "react-native";

const ImageComponent = (props) => {
    return (
        <Image
            style={styles.book}
            source={{
                uri: props.data
            }}
        />
    )
}

const styles = StyleSheet.create({
    book: {
        height: "55%",
        resizeMode: "contain",
        marginBottom: "10%"
    },
});

export default ImageComponent;