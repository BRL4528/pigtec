import AsyncStorage from "@react-native-async-storage/async-storage";
import { AUTH_TOKEN_STORAGE } from './storageConfig';

export async function storageAuthTokenSaVe(token: string) {
  await AsyncStorage.setItem(AUTH_TOKEN_STORAGE, token);
}

export async function storageAuthTokenGet() {
  const token = await AsyncStorage.getItem(AUTH_TOKEN_STORAGE);

  return token;
}

export async function storageTokenRemove() {
  await AsyncStorage.removeItem(AUTH_TOKEN_STORAGE)
}