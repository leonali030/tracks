import React from 'react';
import {View, StyleSheet} from 'react-native'

const Spacer = ({children}) => {
return <View style={styles.view}>{children}</View>
}

const styles = StyleSheet.create({
    view: {
        margin:3,
        padding:3,
    }
})

export default Spacer;