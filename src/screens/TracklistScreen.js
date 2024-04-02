import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native'

const TracklistScreen = ({navigation})=>{
    return (
        <>
        <Text style={{fontSize:48}}>TracklistScreen</Text>
        <Button
        title = "go to Track Detail"
        onPress={()=>navigation.navigate('TrackDetail')}
        />
        </>

    )
};

const styles = StyleSheet.create({

});

export default TracklistScreen;