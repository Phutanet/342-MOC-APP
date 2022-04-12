import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native'
import customData from './JSON/news'
import ReadMore from 'react-native-read-more-text';

export default class News extends React.Component {

    render() {
        return ( 
            <View >
            <Image 
            style = { styles.banner }
            source = { require('.././image/HomBanner.jpg') }
            /> 
            {customData.reverse().map((data) => {
                    return (
                        <>
                            <View style = { styles.row } >
                                <Image 
                                    source = { require('../image/mocLogo.png') }
                                    style = { styles.box1 }
                                />  
                                <Text style = { styles.box2 } >
                                    <Text style = {{ color: 'black' } } >{ data.title } </Text>   
                                    <Text >{ "\n" } </Text>    
                                </Text> 
                            </View>  
                            <SafeAreaView style={styles.safe}>
                                <View style={styles.root}>
                                    <ReadMore
                                    numberOfLines={3}
                                    renderTruncatedFooter={this._renderTruncatedFooter}
                                    renderRevealedFooter={this._renderRevealedFooter}
                                    onReady={this._handleTextReady}>
                                        <Text style={styles.teat}>
                                            {data.desciption}
                                        </Text>
                                    </ReadMore>
                                </View>
                            </SafeAreaView>
                           
                        </>
                    )
                })
            }

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
        justifyContent: 'center',
        alignItems: 'center',
    },
    banner: {
        width: 450,
        height: 140,
        opacity: 0.8
    },
    box1: {
        width: 45,
        height: 47,
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
    },
    box2: {
        width: "80%",
        height: 'auto',
    },
    row: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-between',
        marginTop: 10,
    },
    textStyle: {
        fontSize: 14,
        width:"100%",
    },
    safe: {
        flex: 1,
    },
    root: {
        flex: 1,
        padding: 16,
    },

});