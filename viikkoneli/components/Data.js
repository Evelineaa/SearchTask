import { FlatList, SafeAreaView, StyleSheet} from "react-native";

export default function Data() { 

const executeSearch = (search) => {
    const searchArray = Data.filter((item) => item.lastname.startsWith(search));
    setItems(searchArray);
      }

    return (
        <SafeAreaView style = {StyleSheet.container}>
            <search executeSearch={executeSearch} />
            <FlatList
            data={items}
            renderItem= {({item}) => (
                <Row person = {item}/>
            )}>
            </FlatList>
        </SafeAreaView>
    )
}
