import AsyncStorage from '@react-native-async-storage/async-storage';

import { ProducerDTO } from '@dtos/UserDTO';
import { PRODUCER_STORAGE } from './storageConfig';

export async function storageProducerSave(producer: ProducerDTO) {
  await AsyncStorage.setItem(PRODUCER_STORAGE, JSON.stringify(producer));
}

export async function storageProducerGet() {
  const storage = await AsyncStorage.getItem(PRODUCER_STORAGE);

  const producer: ProducerDTO = storage ? JSON.parse(storage) : {};

  return producer
}

export async function storageProducerRemove() {
  console.log('STORAGE PRODUTOR APAGADA')

  await AsyncStorage.removeItem(PRODUCER_STORAGE)
}
