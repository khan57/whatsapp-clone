import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    // alert('login called');
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.text}>Welcome to Whatsapp 5.0</Text>
        <Image
          style={styles.image}
          source={{
            uri: 'https://www.businessinsider.in/thumb.cms?msid=73228727&width=1200&height=900',
          }}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          mode="outlined"
          style={styles.inputs}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
          style={styles.inputs}
          placeholder="Enter your password"
          autoCapitalize="none"
        />
        <Button title="Login" style={styles.btn} onPress={() => {}} />
        <TouchableOpacity>
          <Text>Dont have an account?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 22,
    color: 'green',
    margin: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  box1: {
    alignItems: 'center',
  },
  inputs: {
    borderWidth: 2,
    borderColor: 'green',
    marginBottom: 10,
    borderRadius: 5,
  },
  inputView: {
    marginTop: 30,
    width: 300,
    alignSelf: 'center',
  },
  btn: {
    backgroundColor: 'green',
  },
  btnView: {
    marginBottom: 10,
    borderRadius: 10,
  },
});
