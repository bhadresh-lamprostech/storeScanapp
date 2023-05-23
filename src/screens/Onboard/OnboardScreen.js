import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OnboardScreen = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    console.log('heloooooo')
    navigation.navigate('HomeBase12');
  };

  return (
    <View>
      {/* Your onboard screen content here */}
      <Button title="Start" onPress={handleButtonPress} />
    </View>
  );
};

export default OnboardScreen;
