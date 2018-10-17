import React from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  KeyboardAvoidingView,
  Image,
} from 'react-native';

import Form from './app-front/components/Form.js';
export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
        <Text style={styles.header}> Sign in </Text>
        <Form />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  header: {
    marginTop: 20,
    fontSize: 38,
    color: '#042049',
    fontWeight: 'bold',
    marginBottom: 50,
  }
});
