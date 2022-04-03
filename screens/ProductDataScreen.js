import { DrawerItemList } from '@react-navigation/drawer';
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
import {Picker} from '@react-native-picker/picker';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Header from './component/Header';
import { getProductData, getProductList } from './services/productData'

const ProductDataScreen = ({navigation, route}) => {
    const [table,setTable] = useState(
        {
            tableHead: ['ลำดับ', 'รายการ', 'ราคา\n(สูงสุด-ต่ำสุด)\nเฉลี่ย', 'ราคาเฉลี่ย', 'หน่วย'],
            tableData: [
            //     [1, leftAlign("เนื้อหมู"), "30.00 - 35.00", "32.50", "บาท/กก."],
            //     [2, leftAlign("เนื้อวัว"), "60.00 - 65.00", "62.50", "บาท/กก."],
            ]
        }  
    )

    const [list, setList] = useState([]);

    const [selectedType, setSelectedType] = useState();

    const [productList, setProductList] = useState({
        "1": "11",
        "2": "22",
        "3": "33",
    });

    function leftAlign(value) {
        return (
          <Text style={{alignSelf: "flex-start", marginLeft: 5}}>{value}</Text>
        );
    }

    function setTableData(type) {
        setSelectedType(type)
        let mounted = true;
        getProductList()
        .then(items => {
            if (mounted) {
                const test = items[1].product_name
                const test2 = items[2].product_name
                const test3 = items[3].product_name

                const newArr = {
                    test: test,
                    test2: test2,
                    test3: test3,
                }

                // for (var i=1; i<items.length; i++) {
                //     const data = items[i].product_name
                //     newArr.i = data
                // }

                setProductList(newArr)
            }
        })
    }

    function addTableData(newData) {
        const newArr = [...table.tableData];
        newData.forEach(element => {
            newArr.push(element);
        });
        setTable({tableHead: [...table.tableHead], tableData: newArr});
    }

    useEffect(() => {
        // let mounted = true;
        //     getProductData("P11001")
        //     .then(items => {
        //         if (mounted) {
        //             setList(items)
        //             const min = items.price_min_avg;
        //             const max = items.price_max_avg;
        //             addTableData([[
        //                 1,
        //                 leftAlign(items.product_name),
        //                 min+" - "+max,
        //                 (max+min)/2,
        //                 items.unit
        //             ]])
        //         }
        //     })
        // return () => mounted = false;
    }, [])
    
    function addProduct(id) {
       
    }

    return (
        <View style={styles.container}>
            <Header/>

            <View style={styles.titleContainer}>
                <Image
                    source={route.params.coverImage}
                />

                <Text style={styles.textTitle}>{route.params.name}</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={selectedType}
                        mode={'dropdown'}
                        style={styles.typePicker}
                        dropdownIconColor="#fff"
                        onValueChange={(itemValue, itemIndex) =>
                            setTableData(itemValue)
                        }
                    >
                        <Picker.Item label="ประเภท..." value="none" style={{color: '#bbb'}}/>
                        <Picker.Item label="ขายปลีก" value="retail" style={styles.item}/>
                        <Picker.Item label="ขายส่ง" value="wholesale" style={styles.item}/>
                    </Picker>

                    <Picker
                        selectedValue={selectedType}
                        mode={'dropdown'}
                        style={styles.productPicker}
                        dropdownIconColor="#fff"
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }
                    >
                        <Picker.Item label="ชื่อสินค้า..." value="none" style={{color: '#bbb'}}/>
                        {Object.keys(productList).map((key) => {
                            return (
                                <Picker.Item 
                                    label={productList[key]}
                                    value={key}
                                    style={styles.item}
                                />
                            )
                        })}
                    </Picker>
                </View>
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
        width: '100%',
        height: 140,
    },
    splitLine: {
        backgroundColor: 'rgba(29, 59, 134, 1)',
        padding: 4,
        width: '100%',
    },
    splitLineText: {
        color:'white',
        marginLeft: 20,
    },
    tableContainer: {
        flex: 1,  
        backgroundColor: '#fff',
        width: '100%',
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
    pickerContainer: {
        position: 'absolute',
        backgroundColor: '#00000000',
        borderBottomWidth: 2.5,
        borderBottomColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        height: 50,
        bottom: 1,
    },
    typePicker: {
        color: '#fff',
        width: '35%',
    },
    productPicker: {
        color: '#fff',
        width: '65%',
    },
    item: {

    }
});

export default ProductDataScreen;