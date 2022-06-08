import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import Button from './Button';

const ErrorOverlay = ({message, onConfirm}) => {
return <View style={styles.container}>
        <Text style={[styles.text, styles.title]}>An Error occurred!</Text>
        <Text style={styles.text}>{message}</Text>
        
</View>
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
    },
    text:{
        color: 'white',
        textAlign: 'center',
        marginBottom: 8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})

export default ErrorOverlay;