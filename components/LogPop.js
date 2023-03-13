import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const LogPop = ({ isVisible, toggleModal }) => {


    const handleLogin = () => {
        // Insérez ici le code pour gérer la connexion de l'utilisateur
        console.log('Adresse email :', email);
        console.log('Mot de passe :', password);
      };
    
      const handleFacebookLogin = () => {
        // Insérez ici le code pour gérer la connexion avec Facebook
        console.log('Connexion avec Facebook');
      };
    
      const handleGoogleLogin = () => {
        // Insérez ici le code pour gérer la connexion avec Google
        console.log('Connexion avec Google');
      };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View>
            <View style={styles.overlay}>
                <View style={styles.popup}>
                      <View style={styles.formContainer}>
                      <Image style={[styles.logo_popup, {width: 137, height: 110}]} source={require('../assets/LOGO_White.png')}/>
                        <Text style = {{marginRight: '80%', fontWeight: '700', color:'#747474'}}>Email</Text>
                        <View style={styles.inputContainer}>
                          <TextInput
                            style={styles.input}
                            placeholder="Please enter your email adress"
                            placeholderTextColor="#BBBBBB"
                            onChangeText={text => setEmail(text)}
                          />
                        </View>
                        <Text style = {{marginRight: '71.5%', fontWeight: '700', color:'#747474'}}>Password</Text>
                        <View style={styles.inputContainer}>
                          <TextInput
                            style={styles.input}
                            placeholder="Please enter your password"
                            placeholderTextColor="#BBBBBB"
                            secureTextEntry={true}
                            onChangeText={text => setPassword(text)}
                          />
                        </View>
                        <TouchableOpacity style={styles.buttonSignIn} onPress={handleLogin}>
                          <Text style={styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                        <View>
                          <Text style={{width: 50, textAlign: 'center', fontWeight: 'bold'}}>Or</Text>
                        </View>
                        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                      </View>
                      <TouchableOpacity style={[styles.button, {borderColor: 'black', borderWidth: 1, marginTop: '7%'}]} onPress={toggleModal}>
                        <Text style={[styles.buttonText, {color: 'black'}]}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, {borderColor: 'black', borderWidth: 1}]} onPress={handleFacebookLogin}>
                          <Text style={[styles.buttonText, {color: 'black'}]}><AntDesign name="facebook-square" size={24} color="black" /> Connect with Facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, {borderColor: 'black', borderWidth: 1}]} onPress={handleGoogleLogin}>
                          <Text style={[styles.buttonText, {color: 'black', justifyContent: 'center'}]}><AntDesign name="google" size={24} color="black" /> Connect with Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, {borderColor: 'black', borderWidth: 1}]} onPress={toggleModal}>
                        <Text style={[styles.buttonText, {color: 'black'}]}>Continue without login</Text>
                        </TouchableOpacity>
                      </View>
                </View>
            </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    mainContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    overlay: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    popup: {
        width: '85%',
        height: '70%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    formContainer: {
      width: '80%',
      height: '90%',
      maxWidth: 400,
      alignItems: 'center',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#DDDDDD',
      paddingHorizontal: 10,
    },
    input: {
      flex: 1,
      marginLeft: 10,
      height: 40,
    },
    logo_popup: {
      marginBottom: 37,
      
    },
    button: {
      borderRadius: 30,
      marginTop: 10,
      width: 245,
      height: 40,
      justifyContent: 'center'
      
    },
    buttonSignIn: {
      backgroundColor: '#e9bd1f',
      padding: 10,
      width: 127,
      borderRadius: 20,
      marginTop: 20,
      marginBottom:20,
      
    },
    buttonText: {
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 'auto'
    },
    })

export default LogPop;