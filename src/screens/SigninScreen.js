import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native'

const SigninScreen = ({navigation})=>{
    return (
        <>
        <Text style={{fontSize:48}}>SigninScreen</Text>
        <Button
        title = "go to tracks"
        onPress={()=>navigation.navigate('TrackList')}
        />
        </>

    )
};

const styles = StyleSheet.create({

});

export default SigninScreen;