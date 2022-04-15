import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image ,ScrollView,ImageBackground,Animated} from 'react-native'
import customData from './JSON/news'
import ReadMore from 'react-native-read-more-text';


export default class News extends React.Component {

    render() {
        return ( 
            <View>
                <ImageBackground source={require('../image/newsBanner1.jpg')} resizeMode="cover" style={styles.image}>
                    <Text style={styles.textHeader}>ข่าวประชาสัมพันธ์</Text>
                </ImageBackground>
                <View style={{color:'#00ffffff'}}>
                    <View style={styles.cardContract}>
                
                        {customData.reverse().map((data) => { 
                                return (
                                
                                    <View style={{alignItems:'center',paddingBottom:20,}}>
                                        {/* Topic NEWS  --> red*/}
                                        <View style = { styles.row } >
                                            <Image 
                                                source = { require('../image/mocLogo.png') }
                                                style = { styles.box1 }
                                            />  
                                            <Text style = { styles.box2 } >
                                                <Text style = {{ color: 'black' } } >{data.title } </Text>   
                                                <Text >{ "\n" } </Text>    
                                            </Text> 
                                        </View>  

                                        {/* Content NEWS */}
                                        <SafeAreaView style={styles.safe}>
                                            <View style={styles.root}>
                                                <ReadMore
                                                numberOfLines={3}
                                                renderTruncatedFooter={this._renderTruncatedFooter}
                                                renderRevealedFooter={this._renderRevealedFooter}
                                                onReady={this._handleTextReady}>
                                                    <Text>
                                                        {data.desciption}
                                                    </Text>
                                                </ReadMore>
                                            </View>
                                        </SafeAreaView>
                                        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
                                            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                                        </View>
                                    </View>
                    
                            
                                )
                            }
                    
                        )}
           
                    </View> 
                </View>
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
        paddingLeft:16,
        paddingRight:16,
    },
    cardContract: {
        backgroundColor:'white',
        width:'100%',
        borderRadius:20,
        borderWidth:1
    
      },
      image:{
        height:150,
        width:'107%',
        paddingLeft:20,
       
      },
      textHeader:{
        color:'white',
        fontSize:35,
        paddingTop:70,
        paddingLeft:5,

      }

});