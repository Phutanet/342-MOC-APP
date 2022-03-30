import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


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
                    <View style={styles.newsContainer}>
                        <Text style={styles.title}>
                            {this.state.dataSource[0].id}
                        </Text>
                        <Text style={styles.date}>
                            {this.state.dataSource[0].name_th}
                        </Text>
                        <Text style={styles.newsDescription}>
                            {this.state.dataSource[0].name_en}
                        </Text>

                        <Text style={styles.title}>
                            {this.state.dataSource[1].id}
                        </Text>
                        <Text style={styles.date}>
                            {this.state.dataSource[1].name_th}
                        </Text>
                        <Text style={styles.newsDescription}>
                            {this.state.dataSource[1].name_en}
                        </Text>

                        <Text style={styles.title}>
                            {this.state.dataSource[2].id}
                        </Text>
                        <Text style={styles.date}>
                            {this.state.dataSource[2].name_th}
                        </Text>
                        <Text style={styles.newsDescription}>
                            {this.state.dataSource[2].name_en}
                        </Text>
                    </View>
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