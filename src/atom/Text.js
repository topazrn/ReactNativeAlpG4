import React from "react";
import { Text,  StyleSheet } from "react-native";

const TextComponent = (props) => {
return(
<Text 
style={props.typeText === 'name' ? styles.textName : props.typeText === 'price' ? styles.textPrice : ''}
numberOfLines={props.typeText === 'description' ? 0 : 2}>
    {props.typeText === 'price' ? '$ ' : ''}{props.data}
</Text>
)
}

const styles = StyleSheet.create({
    textName:{
        color:"black",
        fontSize:16
    },
    textPrice:{
        color:"green",
        fontSize:18,
        fontWeight:"400",
    }
});

export default TextComponent;
