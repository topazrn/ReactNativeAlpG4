import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import TextComponent from "../atom/Text";
import ImageComponent from "../atom/Image";
import { useNavigation } from "@react-navigation/native";


const FlatListBooks = ({data}) => {
    const navigation = useNavigation();

    return (
        <FlatList
            numColumns={2}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity style={styles.card} onPress={() => {navigation.navigate('BookDetails', {bookId : item.id})}}>
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