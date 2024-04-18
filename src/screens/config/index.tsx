import React, { useCallback, useState } from 'react';
import { Title, Container, Button, Section, TitleSub, SectionHeader, ButtonReturn } from './styles';
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';
import Ionicons from '@expo/vector-icons/Ionicons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import * as ScreenOrientation from 'expo-screen-orientation';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

interface Config {
  rout: string;
  cfg: string;
  names: string;
  weights: string;
  routViewVideo: string;
  mountVideo: string;
  rangeForMarking: string;
  markingAutomatic: string;
  isSelectedViewVideo: string;
}

export function Config() {
  const [rout, onChangeRout] = useState('');
  const [cfg, setCfg] = useState('');
  const [names, setNames] = useState('');
  const [weights, setWeights] = useState('');
  const [routViewVideo, setRoutViewVideo] = useState('');
  const [mountVideo, setMountVideo] = useState('');
  const [isSelectedViewVideo, setSelectionViewVideo] = useState('not');
  const [rangeForMarking, setRangeForMarking] = useState('');
  const [markingAutomatic, setMarkingAutomatic] = useState('not');
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleAddinfo = useCallback(async () => {
    const formatedData = {
      rout: rout,
      cfg: cfg,
      names: names,
      weights: weights,
      routViewVideo: routViewVideo,
      mountVideo: mountVideo,
      rangeForMarking: rangeForMarking,
      markingAutomatic: markingAutomatic,
      isSelectedViewVideo: isSelectedViewVideo
    }
    await AsyncStorage.setItem('@DataConfig', JSON.stringify(formatedData));
    alert('Dados atualizados!');
  }, [rout, cfg, names, weights, routViewVideo, mountVideo, rangeForMarking, isSelectedViewVideo, markingAutomatic]);

  useFocusEffect(
    useCallback(() => {
      getItemFunction();
    }, [])
  );

  async function getItemFunction() {
    const data = await AsyncStorage.getItem('@DataConfig');
    
    if (data !== null) {
      const dataJson: Config = JSON.parse(data);
      onChangeRout(dataJson.rout);
      setCfg(dataJson.cfg);
      setNames(dataJson.names);
      setWeights(dataJson.weights);
      setRoutViewVideo(dataJson.routViewVideo);
      setMountVideo(dataJson.mountVideo);
      setRangeForMarking(dataJson.rangeForMarking);
      setSelectionViewVideo(dataJson.isSelectedViewVideo);
      setMarkingAutomatic(dataJson.markingAutomatic)
       console.log('eeeee', dataJson)
    }
  }

  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
  }

  useFocusEffect(
    useCallback(() => {
      changeScreenOrientation();
    }, [])
  );

  return (
    <>
    <SectionHeader>
        <ButtonReturn onPress={() => navigation.navigate('options')}>
        <Ionicons name="arrow-back" size={25} color='white' />
      </ButtonReturn>
    </SectionHeader>
    <Container>
      <ScrollView>
        <Section>
          <Title>Configurações de Comunicação</Title>

          <Input
            titleInput="Rota HTTP WebSocket"
            onChangeText={onChangeRout}
            text={rout}
          />
        </Section>
        <Section>
          <Title>Configurações da analise de imagens</Title>

          <Input
            titleInput="Pacotes de .CFG"
            onChangeText={setCfg}
            text={cfg}
          />
          <Input
            titleInput="Pacotes de .NAMES"
            onChangeText={setNames}
            text={names}
          />
          <Input
            titleInput="Pacotes de WEIGHTS"
            onChangeText={setWeights}
            text={weights}
          />
        </Section>
        <Section>
          <Title>Configurações de saida</Title>

          <BouncyCheckbox
            text="Gerar video de saida"
            fillColor="green"
            textStyle={{
              textDecorationLine: 'none',
              color: '#fff',
            }}
            style={{
              marginBottom: 25,
              marginTop: 25,
            }}
            isChecked={true}
            onPress={(isChecked: boolean) => {
              setSelectionViewVideo(isChecked ? 'yes' : 'not');
            }}
          />

          <Input
            disabled={!(isSelectedViewVideo === 'yes' ? true : false)}
            titleInput="Caminho do video de analise"
            onChangeText={setRoutViewVideo}
            text={routViewVideo}
          />
          <Input
            disabled={!(isSelectedViewVideo === 'yes' ? true : false)}
            titleInput="Caminho de montagem do video"
            onChangeText={setMountVideo}
            text={mountVideo}
          />
        </Section>

        <Section>
          <Title>Configurações de marcações</Title>

          <BouncyCheckbox
            text="Permitir marcações automaticas"
            fillColor="green"
            textStyle={{
              textDecorationLine: 'none',
              color: '#fff',
            }}
            style={{
              marginBottom: 25,
              marginTop: 25,
            }}
            isChecked={markingAutomatic === 'yes' ? true : false}
            onPress={(isChecked: boolean) => {
              setMarkingAutomatic(isChecked ? 'yes' : 'not');
            }}
          />

          <Input
            titleInput="Range da marcação automatica"
            onChangeText={setRangeForMarking}
            text={rangeForMarking}
            disabled={!(markingAutomatic === 'yes' ? true : false)}
          />
        </Section>


        <Button onPress={handleAddinfo}>
          <TitleSub>Salvar</TitleSub>
        </Button>
      </ScrollView>
    </Container>
    </>
  );
}
