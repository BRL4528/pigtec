import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useEffect, useState, useRef, useMemo } from 'react';
import { setStatusBarHidden } from 'expo-status-bar'
import { format } from "date-fns";
import { ptBR } from 'date-fns/locale/pt-BR';
import * as ScreenOrientation from 'expo-screen-orientation'
import { Container, ContainerFlag, SectionFlag, SectionList, TextCount, TextFlag, SectionVideo, SectionHeader, Button, SectionHeaderButton, ButtonReturn } from './styles';
import {
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { ResizeMode } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import { Header } from '../../components/Header';
import { AppNavigatorRoutesProps } from '../../routes/app.routes';
import { toastNative } from '../../components/Toast';
import { api } from '../../services/api';

type RouteParamsProps = {
  scoreId: string;
};

type ScorePrps = {
  id: string;
  quantity: number,
  weight: number,
  duration: { hours: number, minutes: number },
  file_url: string,
  start_date: string,
  created_at: string;
  file: string,
  markings: {
    id: string,
    sequence: string,
    quantity: string,
    weight: string
  }[],
}

interface Config {
  rout: string;
}
interface During {
  hours: number;
  minutes: number
}

export function Score() {
  const [score, setScore] = useState<ScorePrps>({} as ScorePrps);
  const [isLoading, setIsloading] = useState(true);
  const [inFullscreen2, setInFullsreen2] = useState(false)
  const refVideo2 = useRef<any>()
  const routes = useRoute();
  const { scoreId } = routes.params as RouteParamsProps;
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  async function fetchScoreDetails() {
    try {
      const data = await AsyncStorage.getItem('@DataConfig');
      if (data !== null) {
        setIsloading(true);
        const dataJson: Config = JSON.parse(data);

        const response = await api.get<ScorePrps>(`/scores/show`, {
          params: {
            id: scoreId
          }
        });
        response.data.markings.sort((a, b) => Number(a.sequence) - Number(b.sequence));

        setScore(response.data);

      }
    } catch (e) {
      console.log('Error', e)
    } finally {
      setIsloading(false);
    }
  }

  
  function handleReturnHistory() {
    navigation.navigate('history');
  }

  function formatDuring({ hours, minutes }: During) {
    if (hours === 0 && minutes === 0) {
      return '00h 00m'
    } else if (hours <= 9 && minutes <= 9) {
      return `0${hours}h 0${minutes}m`
    } else if (hours > 9 && minutes > 9) {
      return `${hours}h ${minutes}m`
    } else if (hours === 0 && minutes <= 9) {
      return `0${hours}h 0${minutes}m`
    } else if (hours === 0 && minutes > 9) {
      return `0${hours}h ${minutes}m`
    }
  }

  useEffect(() => {
    fetchScoreDetails();
  }, [scoreId]);

  async function handleReturnScreen() {
    setStatusBarHidden(false, 'fade')
    setInFullsreen2(!inFullscreen2)
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
  }

  const dataFormated = useMemo(() => {
    if (score.created_at) {
      return format(new Date(score.created_at), 'dd/MM/yyyy', {
        locale: ptBR
      })
    }
  }, [score])

  function handleVideoError() {
    toastNative({ title: 'Upload ainda não concluido', description: 'O video ainda esta sendo carregado' })
  }

  return (
    <>
      {
        inFullscreen2 ? (

          <Button onPress={handleReturnScreen}>
            <Ionicons name="arrow-back" size={25} color='white' />
          </Button>
        ) : (
            <SectionHeaderButton>
            <ButtonReturn onPress={handleReturnHistory}>
              <Ionicons name="arrow-back" size={25} color='white' />
            </ButtonReturn>
          </SectionHeaderButton>
        )
      }

      {!inFullscreen2 && (
        <Container>
          <Header title={`Contagem do dia ${dataFormated}`} />
          <SectionHeader>
            <TextCount>Quantidade: {score.quantity}</TextCount>
            <TextCount>Peso total: {score.weight}kg</TextCount>
            <TextCount>Peso médio: {score.weight / score.quantity}kg</TextCount>
            <TextCount>Tempo de carregamento: {formatDuring({ hours: score.duration?.hours, minutes: score.duration?.minutes })}</TextCount>
          </SectionHeader>
        </Container>
      )}

      <SectionVideo>
        {score.file !== null ? (
          <>
            <VideoPlayer
              errorCallback={() =>  handleVideoError}
              videoProps={{
                ref: refVideo2,
                shouldPlay: false,
                resizeMode: ResizeMode.CONTAIN,
                // ❗ source is required https://docs.expo.io/versions/latest/sdk/video/#props
                source: {
                  uri: `${score.file_url}`,
                },
              }}

              fullscreen={{
                inFullscreen: inFullscreen2,
                enterFullscreen: async () => {
                  setStatusBarHidden(true, 'fade')
                  setInFullsreen2(!inFullscreen2)
                  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT)
                  refVideo2.current.setStatusAsync({
                    shouldPlay: true,
                  })
                },
                exitFullscreen: async () => {
                  setStatusBarHidden(false, 'fade')
                  setInFullsreen2(!inFullscreen2)
                  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
                },
              }}
              style={{
                videoBackgroundColor: '#6b6b6b',
                height: inFullscreen2 ? Dimensions.get('window').width - 16 : 340,
                width: inFullscreen2 ? Dimensions.get('window').height : 340,
              }}
            />
            {/* <Video
            ref={video}
            shouldPlay
            source={{
              uri: `${score.file_url}`,
            }}
            style={{ width: 300, height: 300, }}
            useNativeControls
            isLooping
          /> */}
          </>
        ) : (
          <TextFlag>Sem video</TextFlag>
        )
        }
      </SectionVideo>
      {!inFullscreen2 && (
        <ContainerFlag>
          <SectionFlag>
            <FlatList
              keyExtractor={(item) => item.sequence}
              data={score.markings}
              ListEmptyComponent={() => (
                <TextFlag>Sem marcações para esta contagem</TextFlag>
              )}
              renderItem={(item) => (
                <>
                  <TouchableOpacity>
                    <SectionList>
                      <Ionicons name="flag" size={15} color="white" />
                      <TextFlag>Marcação: {item.item.sequence}</TextFlag>
                      <TextFlag>Quantidade: {item.item.quantity}</TextFlag>
                      <TextFlag>Peso: {Number(item.item.weight)} Kg</TextFlag>
                    </SectionList>
                  </TouchableOpacity>
                </>
              )}
            />
          </SectionFlag>
        </ContainerFlag>
      )}
    </>
  );
}
