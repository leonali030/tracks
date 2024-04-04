import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native'
import {Text, Input, Button} from 'react-native-elements'
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';

const SignupScreen = ({navigation})=>{
  const {state, signup} = useContext(AuthContext)
  console.log(state);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View style={styles.centeredView}>
        <Spacer><Text h4>Sign UP</Text></Spacer>
        <Spacer><Input 
        label='Email'
        value = {email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        /></Spacer>
        <Spacer><Input 
        label="Password" 
        value = {password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true} /></Spacer>
        <Spacer>
          <Button
        title = "go to signin"
        onPress={()=>navigation.navigate('Signin')}
        />
        </Spacer>
         <Spacer>
        <Button
        title = "submit"
        onPress={()=>signup({email, password})}
        />
        </Spacer>
        </View>
      );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100,
      },
});

export default SignupScreen;