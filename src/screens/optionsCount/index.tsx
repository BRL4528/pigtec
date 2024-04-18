import { FlatList, Text, View } from "react-native";
import { Container, Header, SubTitle, TextOpt, SectionList, TouchableButton, ExitButton, TextSections, TextExit } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '../../routes/app.routes';
import { useAuth } from "@hooks/useAuth";
import { useProducers } from "@hooks/useProducer";

interface MenuOpts {
  section: string;
  item: [
    {
      title: string,
      icon: any,
      type: string
    }
  ]
}[]

const optionsData = [
  {
    section: 'Funções',
    item: [
      {
        title: 'Carregamento com destinação',
        icon: 'git-branch',
        type: 'destination_with_count',
      },
      {
        title: 'Contagem simples',
        icon: 'git-commit',
        type: 'simple_count',
      },
    ]
  },
  {
    section: 'Ferramentas',
    item: [
      {
        title: 'Histórico de contagem',
        icon: 'archive-outline',
        type: 'history',
      },
      {
        title: 'Central de configurações',
        icon: 'cog',
        type: 'config',
      }
    ]
  }
]


export function OptionsCount() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const { signOut } = useAuth();
  const { removeProducers } = useProducers();

  function handleRunDataForCounting(type: string) {
    if (type === 'simple_count') {
      navigation.navigate('dataForCounting', { type:  type});
      return
    }
    if(type === 'destination_with_count') {
    navigation.navigate('dataForCounting', { type:  type});
    }
    if(type === 'config') {
    navigation.navigate('config');
    }
    if(type === 'history') {
    navigation.navigate('history');
    }
  }


  function signUpApp() {
    signOut()
    removeProducers()
  }

  
  const renderItem = ({item}: any) => {
    return (
      
     <>
     <TextSections>{item.section}</TextSections>
     {item.item.map((opt: any) => (
      <TouchableButton
        key={opt.title}
        onPress={() => handleRunDataForCounting(opt.type)}
        >
        <SectionList>
          <Ionicons name={opt.icon} size={18} color="white" />
          <TextOpt> {opt.title}</TextOpt>
        </SectionList>
      </TouchableButton>
     ))}
        </>
    );
  };

  return (
    <Container>
     <Header>
      O que você deseja 
      fazer hoje?
     </Header>
     <SubTitle>
      Selecione entre as alternativas abaixo
     </SubTitle>

     <FlatList data={optionsData} renderItem={renderItem} />
     <ExitButton onPress={signUpApp}>
      <TextExit>
      Sair da aplicação
      </TextExit>
      <Ionicons name="exit-outline" size={18} color="#AA2834" />
      </ExitButton>
    </Container>
  )
}