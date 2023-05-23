import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

const Home = ({ scannedFiles, onFileAdded }) => {
  const renderFileItem = ({ item }) => (
    <View style={styles.fileItem}>
      <FontAwesomeIcon icon={faFile} style={styles.fileIcon} />
      <Text style={styles.fileName}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={scannedFiles}
        renderItem={renderFileItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.fileList}
      />
    </View>
  );
};


const styles = {
  container: {
    flex: 1,
    padding: 16,
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    alignItems: 'center',
    marginBottom: 16,
    flexDirection: 'row',
  },
  buttonIcon: {
    marginRight: 8,
  },
  buttonText: {
    fontSize: 16,
  },
  fileList: {
    flexGrow: 1,
  },
  fileItem: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  fileIcon: {
    marginRight: 8,
  },
  fileName: {
    fontSize: 16,
  },
};

export default Home;
