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
            tableHead: ['วันที่', 'ราคา\nสูงสุด - ต่ำสุด', 'ราคาเฉลี่ย', 'หน่วย'],
            tableData: [
                // ["01/01/2001", "30.00 - 35.00", "32.50", "บาท/กก."],
            ]
        }  
    )

    const [list, setList] = useState([]);

    const [selectedType, setSelectedType] = useState();

    const [selectedProduct, setSelectedProduct] = useState();

    const [productList, setProductList] = useState({});

    function leftAlign(value) {
        return (
          <Text style={{alignSelf: "flex-start", marginLeft: 5}}>{value}</Text>
        );
    }

    function setItemData(type) {
        setSelectedType(type)
        let mounted = true;
        getProductList()
        .then(items => {
            if (mounted) {
                const newArr = {}
                items.forEach(element => {
                    if (element.sell_type == type && element.category_name == route.params.name) {
                        const data = element.product_name
                        newArr[data] = data
                    }
                })

                setProductList(newArr)
            }
        return () => mounted = false
        })
    }

    function setListData(data) {
        setSelectedProduct(data)
        let mounted = true;
        getProductData(data.product_id)
        .then(items => {
            if (mounted) {

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
                            setItemData(itemValue)
                        }
                    >
                        <Picker.Item label="ประเภท..." value="none" style={{}}/>
                        <Picker.Item label="ขายปลีก" value="ขายปลีก" style={styles.item}/>
                        <Picker.Item label="ขายส่ง" value="ขายส่ง" style={styles.item}/>
                    </Picker>

                    <Picker
                        selectedValue={selectedProduct}
                        mode={'dropdown'}
                        style={styles.productPicker}
                        dropdownIconColor="#fff"
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }
                    >
                        <Picker.Item label="  ชื่อสินค้า..." value="none" style={{}}/>
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
                        flexArr={[2, 1.5, 1.5, 1]}
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
                                flexArr={[2, 1.5, 1.5, 1]}
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