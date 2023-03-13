import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, SafeAreaView, Modal, Text, Switch } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/header';
import Footer from '../components/footer';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [filters, setFilters] = useState({
    filter1: true,
    filter2: false,
    filter3: true,
  });

  const handleSearch = () => {
    // Do something with searchText
  };

  const handleFilterToggle = (filterName) => {
    setFilters({
      ...filters,
      [filterName]: !filters[filterName],
    });
  };

  const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

  return (
    <SafeAreaView style={styles.BigContainer}>
    <Header showButton={true}/>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <FontAwesome name="filter" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>Filters</Text>
          <View style={styles.filterContainer}>
            <Text>Filter 1</Text>
            <Switch
              value={filters.filter1}
              onValueChange={() => handleFilterToggle('filter1')}
            />
          </View>
          <View style={styles.filterContainer}>
            <Text>Filter 2</Text>
            <Switch
              value={filters.filter2}
              onValueChange={() => handleFilterToggle('filter2')}
            />
          </View>
          <View style={styles.filterContainer}>
            <Text>Filter 3</Text>
            <Switch
              value={filters.filter3}
              onValueChange={() => handleFilterToggle('filter3')}
            />
          </View>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.modalClose}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {/* <Footer/> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  BigContainer: {
    backgroundColor: 'white',
    },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    height: 50,
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    fontSize: 16,
  },
  modal: {
    backgroundColor: '#fff',
    marginTop: 90,
    height: "80%",
    width: "95%",
    alignSelf: 'center',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  modalClose: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007aff',
    textAlign: 'center',
  },
});

export default Search;
