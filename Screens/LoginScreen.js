import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import styles from '../Styles/Styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import LogoImage from '../images/logo.png';

const LoginScreen = ({ children }) => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);

  const inputStyles2 = {
    ...styles.input,
    backgroundColor: isFocused2 ? 'white' : '#F6F6F6',
    borderColor: isFocused2 ? '#FF6C00' : '#E8E8E8',
  };

  const inputStyles3 = {
    ...styles.input,
    backgroundColor: isFocused3 ? 'white' : '#F6F6F6',
    borderColor: isFocused3 ? '#FF6C00' : '#E8E8E8',
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [fontsLoaded] = useFonts({
    'Roboto': require('../assets/fonts/Roboto.ttf'),
    'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf')
  });
  if (!fontsLoaded) {
    return null;
  }



  return (
    <ImageBackground source={LogoImage} resizeMode="cover" style={styles.image}>
      <KeyboardAwareScrollView style={styles.container} contentContainerStyle={styles.contentContainer} keyboardShouldPersistTaps="handled">
        {children}
        <View style={styles.overlayLogin}>
          <View style={styles.registrationContainer}>
            <Text style={styles.text}>Увійти</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={inputStyles2}
                placeholder="Адреса електронної пошти"
                keyboardType="email-address"
                autoCapitalize="none"
                onFocus={() => setIsFocused2(true)}
                onBlur={() => setIsFocused2(false)}
              />
              <View style={styles.passwordInputContainer}>
                <TextInput
                  style={inputStyles3}
                  placeholder="Пароль"
                  secureTextEntry={!showPassword}
                  onFocus={() => setIsFocused3(true)}
                  onBlur={() => setIsFocused3(false)}
                />
                <TouchableOpacity style={styles.showPasswordButton} onPress={toggleShowPassword} activeOpacity={0.8}>
                  <Text style={styles.showPasswordButtonText}>{showPassword ? 'Приховати' : 'Показати'}</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.roundButton}>
                <Text style={styles.buttonText}>Увійти</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
                <Text style={styles.login}>Немає аккаунту? <Text style={{ textDecorationLine: 'underline' }}>Зареєструватись</Text></Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default LoginScreen;
