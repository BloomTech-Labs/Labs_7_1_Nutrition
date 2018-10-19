// import React from 'react';
// import { 
//   StyleSheet,
//   Text, 
//   View,
//   TextInput,
// } from 'react-native';

// import Button from '../common/button.js';

// export default class SignIn extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: '',
//       isLoggingIn: false,
//       message: ''
//     }
//   }
//   componentDidMount() {
//     this.loadInitialState.done();
//   }
//   _loadInitialState= async() => {
//     var value = await AsyncStorage.getItem('user');
//     if(value!== null) {
//       this.props.navigation.navigation('Main')
//     }
//   }
//   render() {
//     return (
//       <View style={styles.formContainer}>
//         <TextInput 
//           placeholder="Username..."
//           placeholderTextColor='#292929' 
//           style={styles.textInput}
//           value={this.state.username}
//           onChangeText={(text) => this.setState({username: text})}/>

//         <TextInput 
//           placeholder="Password..." 
//           placeholderTextColor='#292929'
//           secureTextEntry={true} 
//           style={styles.textInput}
//           value={this.state.password}
//           onChangeText={(text) => this.setState({password: text})}/>

//         <Button text={'Sign In'} onPress={this.login} />
//       </View>
//     );
//   }
//   login =() => {
//     //log the user in
//    fetch('192.168.1.7.', {

//      method: 'POST',
//      headers: {
//        'Authorization': 'Token ' + '54354545345435dffgfvgf df', 
//       //  random token 
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//      },
//      body: JSON.stringify({
//        username: this.state.username,
//        password: this.state.password,
//      })
//    })
//    .then((response) => response.json())
//    .then((res) => {
//      if(res.success === true) {
//        AsyncStorage.setItem('user', res.user);
//        this.props.navigation.navigate('Main');
//      }
//      else {
//        alert(res.message);
//      }
//    })
//    .done();
//   }
   }

// const styles = StyleSheet.create({
//   formContainer: {
//     alignSelf: 'stretch',
//     paddingLeft: 20,
//     paddingRight: 20,
//   },
//   textInput: {
//     alignSelf: 'stretch',
//     padding: 20,
//     backgroundColor: 'rgba(128,128,128,0.3)',
//     marginBottom: 20,
//     borderWidth: 1,
//     borderColor: '#000',
//   },
// });



// // underlineColorAndroid={'transparent'}