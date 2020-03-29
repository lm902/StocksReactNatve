import React from 'react'
import { StyleSheet, View, TextInput} from 'react-native'
import { Ionicons} from '@expo/vector-icons';
import Colors from '../../constants/Colors'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View stlye={styles.background}>
            <Ionicons style={styles.icon} name="ios-search" size={25} color={Colors.GREY} />
            <TextInput
        value={term}
        style={styles.input}
        placeholder="Search"
        onChangeText={newTerm => onTermChange(newTerm)}
        onSubmitEditing={() => onTermSubmit()} />
        </View>
    )
}

const styles= StyleSheet.create({
    background: {
        height: 50,
        borderRadius: 6,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        color: '#444',

    },
    icon: {
        fontSize: 25,
        alignSelf: 'flex-start',
        //marginHorizontal: 15
    }
})

export default SearchBar