import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { SectionBody, Button, Container } from "./styles";
import WebView from "react-native-webview";
import { Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useCallback, useState } from "react";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { api } from "@services/api";

export function Camera() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const [errorWebView, setErrorWebView] = useState(false)

  function handleReturnHome() {
    navigation.navigate('home', {});
  }

  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  }

  useFocusEffect(
    useCallback(() => {
      changeScreenOrientation();
    }, [])
  );

  return (
    <>

      <Button onPress={handleReturnHome}>
        <Ionicons name="arrow-back" size={25} color={errorWebView ? 'black' : 'white'} />
      </Button>

      {/* <SectionVideo> */}
      {!errorWebView ? (
        <WebView
        style={{ width: '100%', paddingTop: -20 }}
        source={{ uri: `http://192.168.101.36:8080/bgr` }}
        onError={() => setErrorWebView(true)}
      />
      ): (
        <SectionBody>
        <Ionicons name="warning" size={25} color="black" />
        <Text>Problemas ao acessar câmera remota!</Text>
        </SectionBody>

      )}
      
      {/* </SectionVideo> */}
    </>
  )
}