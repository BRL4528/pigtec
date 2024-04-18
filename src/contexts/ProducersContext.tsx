import { createContext, ReactNode, useEffect, useState } from 'react';
import { ProducerDTO } from '@dtos/UserDTO';
// import { api } from '@services/api';

import {
  storageProducerSave,
  storageProducerGet,
  storageProducerRemove,
} from '@storage/storageProducer';
import axios from 'axios';

export type AuthContextDataProps = {
  producer: ProducerDTO;
  addProducers: () => Promise<void>;
  removeProducers: () => Promise<void>;
  isLoadingProducerStorageData: boolean;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const ProducersContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function ProducerContextProvider({ children }: AuthContextProviderProps) {
  const [producer, setproducer] = useState<ProducerDTO>({} as ProducerDTO);
  const [isLoadingProducerStorageData, setisLoadingProducerStorageData] =
    useState(true);

  async function addProducers() {
    try {
      const { data } = await axios.get('http://167.71.20.221/producers');
      if (data.length > 0) {
        setisLoadingProducerStorageData(true);
        await storageProducerSave(data);
        setproducer(data)
      }
    } catch (error) {
      throw error;
    } finally {
      setisLoadingProducerStorageData(false);
    }
  }

  async function loadProducerData() {
    try {
      setisLoadingProducerStorageData(true);

      const producerData = await storageProducerGet();

      if (producerData) {
        setproducer(producerData);
      }
    } catch (error) {
      throw error;
    } finally {
      setisLoadingProducerStorageData(false);
    }
  }

  useEffect(() => {
    loadProducerData();
  }, []);

  async function removeProducers() {
    try {
      setisLoadingProducerStorageData(true);
      setproducer({} as ProducerDTO);
      await storageProducerRemove();
      await storageProducerRemove();
    } catch (error) {
      throw error;
    } finally {
      setisLoadingProducerStorageData(false);
    }
  }

  return (
    <ProducersContext.Provider
      value={{
        producer,
        addProducers,
        isLoadingProducerStorageData,
        removeProducers,
      }}
    >
      {children}
    </ProducersContext.Provider>
  );
}
