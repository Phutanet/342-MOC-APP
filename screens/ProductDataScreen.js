import * as React from 'react';
import {useContext, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Header from './component/Header';
import { getProductData } from './services/productData'

const ProductDataScreen = ({navigation, route}) => {
    const [table,setTable] = useState(
        {
            tableHead: ['ลำดับ', 'รายการ', 'ราคา\n(สูงสุด-ต่ำสุด)\nเฉลี่ย', 'ราคาเฉลี่ย', 'หน่วย'],
            tableData: [
                [1, leftAlign("เนื้อหมู"), "30.00 - 35.00", "32.50", "บาท/กก."],
                [2, leftAlign("เนื้อวัว"), "60.00 - 65.00", "62.50", "บาท/กก."],
            ]
        }  
    )

    const [productData, setProductData] = useState(
        {
            test: "test"
        }
    )

    function leftAlign(value) {
        return (
          <Text style={{alignSelf: "flex-start", marginLeft: 5}}>{value}</Text>
        );
    }

    function addTableData(newData) {
        const newArr = [...table.tableData];
        newData.forEach(element => {
            newArr.push(element);
        });
        setTable({tableHead: [...table.tableHead], tableData: newArr});
    }

    useEffect(() => {
        getProductData("P11001","2022-03-29","2022-03-29")
            .then(items => {
                setProductData({test: items.unit})
            })
        
        const data = [];
        for (let i=0; i<10; i++) {
            // const rowData = [];
            // for (let j=0; j<5; j++) {
            //     rowData.push(i);
            // }
            const rowData = [i,leftAlign(i),i,i,i];
            data.push(rowData);
        }
        addTableData(data);
    }, [])
    
    return (
        <View style={styles.container}>
            <Header/>

            <View style={styles.titleContainer}>
                <Image
                    source={route.params.coverImage}
                />
                <Text style={styles.textTitle}>{route.params.name} {productData.test}</Text>
            
            </View>

            <View style={styles.splitLine}>
                <Text style={styles.splitLineText}>ราคา: {route.params.name}-/category_name/ (ข้อมูล ณ วันที่ /date/ )</Text>
            </View>

            <View style={styles.dataWrapper}>
                <Table>
                    <Row 
                        data={table.tableHead}
                        style={styles.tableHead} 
                        flexArr={[1, 2.5, 2, 1.5, 1.5]}
                        textStyle={styles.tableText}
                    />
                </Table>
            </View>

            <ScrollView>
                <Table borderStyle={{borderWidth: 0}}>
                    {
                        table.tableData.map((rowData, index) => (
                            <Row
                                key={index}
                                data={rowData}
                                style={[styles.tableRow, index%2 && {backgroundColor: '#fff'}]}
                                flexArr={[1, 2.5, 2, 1.5, 1.5]}
                                textStyle={styles.tableText}
                            />
                        ))
                    }
                </Table>
            </ScrollView>
        </View>  
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textTitle: {
        position: 'absolute',
        fontSize:25,
        fontWeight:'bold',
        textAlign:'left',
        padding:20,
        paddingTop:40,
        color:'white',
    },
    titleContainer: {
        backgroundColor: 'gray',
        width: "100%",
        height: 140,
    },
    splitLine: {
        backgroundColor: 'rgba(29, 59, 134, 1)',
        padding: 4,
        width: "100%",
    },
    splitLineText: {
        color:'white',
        marginLeft: 20,
    },
    tableContainer: {
        flex: 1,  
        backgroundColor: '#fff',
        width: "100%",
    },
    tableHead: {
        height: 70, 
        backgroundColor: '#fff',
    },
    tableText: {
        margin: 6,
        textAlign: 'center',
    },
    tableRow: { 
        height: 40, 
        backgroundColor: '#E7E6E1'
    },
    dataWrapper: { 
        borderBottomWidth: 3,
        borderBottomColor: '#DDDDDD',
    },
});

export default ProductDataScreen;