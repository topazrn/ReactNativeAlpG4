import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const SearchBar = (props) => {
    return (
        <TextInput style={styles.input} value={props.searchText} onChangeText={(search) => props.searchBook(search)} placeholder="Search book name.."/>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: '80%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
      },
});

export default SearchBar;