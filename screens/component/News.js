import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import customData from './JSON/news'

export default class News extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }

    componentDidMount() {
        return fetch ('https://dataapi.moc.go.th/ditp-activity-types')
            .then ((response) => response.json())
            .then ((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                })
                console.log("Data: ", this.state.dataSource)
                console.log("isloading: ", this.state.isLoading)
            })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.text}>
                    <Text>Loading Data...</Text>
                </View>
            )
        }

        else {
            return (
                <View>
                    { customData.map((data) =>{
                        return(
                            <>
                            <Text>{data.title}</Text>
                            <Image source = {{uri: data.photo }}style = {{ width: 300, height: 300, marginLeft:'auto', marginRight:'auto' }} />
                            </>
                        )})}
                </View>
            );
        }
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
});