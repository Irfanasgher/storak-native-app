import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Colors from '../../Common/Colors';
const SearchBarC = () => {
  const [search, setSearch] = useState('');
  return (
    <View>
      <SearchBar
        placeholder="Search"
        placeholderTextColor={Colors.gold}
        onChangeText={text => setSearch(text)}
        value={search}
        textAlign={'left'}
        containerStyle={styles.container}
        inputStyle={styles.input}
        inputContainerStyle={styles.inputContainer}
        searchIcon={{size: 25, color: Colors.gold, width: 20, marginLeft: 5}}
        clearIcon={{color: Colors.gold}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  input: {
    color: Colors.gold,
    fontSize: 16,
  },
  inputContainer: {
    backgroundColor: Colors.lightWhite,
    borderRadius: 15,
    width: '100%',
    // paddingLeft: -10,
  },
});
export default SearchBarC;
