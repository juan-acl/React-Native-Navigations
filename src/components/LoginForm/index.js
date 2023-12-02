import React, {useState} from 'react';
import PropTypes from 'prop-types'
import { View, Text, TextInput, Button } from 'react-native';

const LoginForm = ( props ) => {

    const { state } = props

    const handleOnPress = () => {
        console.log( 'Estos son los valores de las props', state )
    }

    return (
        <View>
            <Text>Login Form </Text>
            <TextInput placeholder='Email' keyboardType='email-address' />
            <Button title='Confirmar' onPress={handleOnPress} >Login Form </Button>
        </View  >
    )
}

LoginForm.propTypes = {
    state: PropTypes.object.isRequired
}

export default LoginForm;