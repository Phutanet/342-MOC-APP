import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import customData from './JSON/news'

export default class News extends React.Component {

    render() {        
        return (
            <View>
                <Image
                style={styles.banner}
                source={require('.././image/HomwBanner.jpg')}
            />
                { customData.map((data) =>{
                    return(
                        <>
                        <Text>{data.title}</Text>
                        <Image source = {{uri: data.photo }}style = {styles.image} />
                        </>
                    )})}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    newsContainer: {
        padding: 10
    },
    title: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: "600"
    },
    newsDescription: {
        fontSize: 16,
        marginTop: 10
    },
    date: {
        fontSize: 14
    },
    image: { 
        width: 350, 
        height: 320, 
        marginLeft:'auto', 
        marginRight:'auto', 
        marginTop:20,
    },
    banner: {
        width: 450, 
        height:140,
        opacity: 0.8
    }
});