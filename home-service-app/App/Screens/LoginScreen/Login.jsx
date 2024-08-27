import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import * as WebBrowser from 'expo-web-browser';
import useWarmUpBrowser from '../../Hooks/useWarmUpBrowser';
import { useAuth, useOAuth } from '@clerk/clerk-expo'
WebBrowser.maybeCompleteAuthSession()
export default function Login() {
    useWarmUpBrowser()
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
    
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/images/login.jpeg')} style={styles.loginImage} />
            <View style={styles.subContainer}>
                <Text style={{ fontSize: 27, color: Colors.WHITE, textAlign: 'center' }}>
                    let's find
                    <Text style={{ fontWeight: 'bold' }}> professional cleaning and repair </Text>
                    Services! </Text>
                <Text style={{ fontSize: 17, color: Colors.WHITE, textAlign: 'center', marginTop: 20 }}>
                    Best app to find services near you which deliver your a professional cleaners
                </Text>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={{fontSize:17, textAlign:'center',color:Colors.PRIMARY}}>Let's get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    loginImage: {
        width: 230,
        height: 450,
        marginTop: 60,
        borderWidth: 4,
        borderColor: Colors.BLACK,
        borderRadius: 20,
        overflow: 'hidden'
    },
    container: {
        alignItems: 'center',
    },
    subContainer: {
        width: '100%',
        backgroundColor: Colors.PRIMARY,
        height: "70%",
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },
    button: {
        padding: 20,
        backgroundColor: Colors.WHITE,
        borderRadius: 99,
        marginTop: 40,
    }
})