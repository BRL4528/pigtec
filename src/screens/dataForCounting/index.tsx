import { useEffect, useMemo, useState } from "react";

import SelectDropdown from 'react-native-select-dropdown'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container, Header, SubTitle, Section, TitleSelect, ButtonReturn, SectionHeader, SectionFooter, ButtonRunCount, TitleButton } from './styles'
import { Input } from '../../components/Input';
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { useProducers } from '@hooks/useProducer';
import { useAuth } from '@hooks/useAuth';
import { getISOWeek } from 'date-fns';

type RouteParamsProps = {
  type: string
}

interface Producers {
  id: string;
  name: string;
}

export function DataForCounting() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const [productorid, onChangeproductorid] = useState('');
  const [productorName, onChangeproductorName] = useState('');
  const [farmName, onchangeFarmSelected] = useState('');
  const [farmId, onchangeFarmIdSelected] = useState('');
  // const [nf, onChangeNf] = useState('');
  const [lote, onChangeLote] = useState('');
  const [nameCounting, setNameCounting] = useState('');
  const [farmsProductors, setFarmsProductors] = useState([]);

  // const [producers, setProducers] = useState<Producers[]>([]);
  const routes = useRoute();
  const { type } = routes.params as RouteParamsProps;
  const { producer } = useProducers();

  useEffect(() => {
    onChangeLote(String(getISOWeek(new Date())));
  }, [])

  function handleReturnOptions() {
    navigation.navigate('options');
  }
  function handleCouting() {
    if(type === 'destination_with_count') {
      navigation.navigate('home', { productor_id:  productorid, productorName: productorName, number_nf: '0', type, lote: lote, farmName, farmId});
    }
    if(type === 'simple_count') {
      navigation.navigate('home', { productor_id:  '0', number_nf: '0', type, lote: lote, name: nameCounting});
    }
  }

  const butonDisabled = useMemo(() => {
    if (type === 'destination_with_count' && productorid !== '' && lote !== '' && farmsProductors.length > 0) {
      return false
    }
    if (type === 'simple_count' && lote !== '') {
      return false
    }
    return true
  }, [productorid, lote])


  return (
    <>  
        <SectionHeader>
          <ButtonReturn onPress={handleReturnOptions}>
            <Ionicons name="arrow-back" size={25} color='white' />
          </ButtonReturn>
        </SectionHeader>
      <Container>
      {type === 'destination_with_count' && (
             <>
             <Header>
             Informações de destino
            </Header>
           <SubTitle>
             Insira as informações de destino
             para iniciar a contagem
           </SubTitle>
 
           <Section>
             <Input
               titleInput="Lote"
               placeholder="Numero do lote"
               onChangeText={onChangeLote}
               text={lote}
             />
 
             <TitleSelect>
               Produtor
             </TitleSelect>
             <SelectDropdown
               data={producer}
               buttonStyle={{
                 'marginBottom': 15,
                 'backgroundColor': 'transparent',
                 'borderColor': '#7C7C8A',
                 'borderWidth': 1,
                 'borderRadius': 6,
                 'height': 50,
                 // 'margin': 12,
                 // 'borderWidth': 1,
                 'padding': 10,
                 'width': '100%',
               }}
               buttonTextStyle={{
                 'fontSize': 14,
                 'color': `${productorid !== '' ? '#fff' : '#7C7C8A'}`,
                 'textAlign': 'left',
                 'left': 8,
               }}
               dropdownStyle={{
                 'borderRadius': 6
               }}
               searchPlaceHolderColor="#333"
               selectedRowTextStyle={{
                 color: 'red',
               }}
               search
               onSelect={(selectedItem, index) => {
                 onChangeproductorid(selectedItem.id)
                 onChangeproductorName(selectedItem.name)
                 setFarmsProductors(selectedItem.farms)
               }}
 
               defaultButtonText="Selecione um produtor"
 
               buttonTextAfterSelection={(selectedItem, index) => {
                 // text represented after item is selected
                 // if data array is an array of objects then return selectedItem.property to render after item is selected 
                 return selectedItem.name
               }}
               rowTextForSelection={(item, index) => {
                 // text represented for each item in dropdown
                 // if data array is an array of objects then return item.property to represent item in dropdown
                 return item.name
               }}
               disableAutoScroll
             />
             <TitleSelect>
               Granja
             </TitleSelect>
             <SelectDropdown
               data={farmsProductors}
               buttonStyle={{
                 'marginBottom': 15,
                 'backgroundColor': 'transparent',
                 'borderColor': '#7C7C8A',
                 'borderWidth': 1,
                 'borderRadius': 6,
                 'height': 50,
                 // 'margin': 12,
                 // 'borderWidth': 1,
                 'padding': 10,
                 'width': '100%',
               }}
               buttonTextStyle={{
                 'fontSize': 14,
                 'color': `${productorid !== '' ? '#fff' : '#7C7C8A'}`,
                 'textAlign': 'left',
                 'left': 8,
               }}
               dropdownStyle={{
                 'borderRadius': 6
               }}
               searchPlaceHolderColor="#333"
               selectedRowTextStyle={{
                 color: 'red',
               }}
               search
               onSelect={(selectedItem, index) => {
                 onchangeFarmSelected(selectedItem.name)
                 onchangeFarmIdSelected(selectedItem.id)
               }}
 
               defaultButtonText="Selecione um produtor"
 
               buttonTextAfterSelection={(selectedItem, index) => {
                 return selectedItem.name
               }}
               rowTextForSelection={(item, index) => {
                 return item.name
               }}
               disableAutoScroll
             />
            </Section>
           </>
        ) }
        {type === 'simple_count' && (
            <>
              <Header>
              Informações da contagem
             </Header>
            <SubTitle>
              Insira as informações da contagem
            </SubTitle>
  
            <Section>
              <Input
                titleInput="Lote"
                placeholder="Numero do lote"
                onChangeText={onChangeLote}
                text={lote}
              />
              <Input
                titleInput="Nome da contagem"
                placeholder="Adicione um nome para esta contagem"
                onChangeText={setNameCounting}
                text={nameCounting}
              />
             
             </Section>
            </>
          
        )}
     

      </Container>
      <SectionFooter>
        <ButtonRunCount onPress={() => handleCouting()} disabled={butonDisabled}>
          <TitleButton disabled={butonDisabled}>
            Ir para contagem
          </TitleButton>
        </ButtonRunCount>
      </SectionFooter>
    </>
  )
}