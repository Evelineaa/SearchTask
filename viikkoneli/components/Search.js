import React, {useState} from 'react';
import { View, TextInput } from 'react-native';

export default function Search({executeSearch}) {
    const [ search, setSearch] = useState('');

    return (
        <View style={styles.searchBox}>
            <TextInput
                value={search}
                onChangeText={text => setSearch(text)}
                placeholder="Search..."
                returnKeytype="search"
                onSubmitEditing={() => executeSearch(search)}
                />
      </View>
    );
  }

  const styles = Stylesheet.create({
    searchBox: {
      marginBottom: 20,
      borderColor: '#333',
      borderWidth: 1,
      padding: 5,
    }
  })