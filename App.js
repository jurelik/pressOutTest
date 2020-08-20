import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  TouchableWithoutFeedback
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableWithoutFeedback
          onPress={() => console.warn('onPress')}
          onPressOut={() => console.warn('onPressOut')}
        >
          <View style={{ flex: 1, borderColor: 'red', borderWidth: 5 }}>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </>
  );
};


export default App;
