import { useState } from "react";
import { Input } from "@components/Input";
import { Container, Text, SectionForm, Image, Button, Title, TextCopyright, Footer, ImageLogo } from "./styles";
import { Controller, useForm } from 'react-hook-form';
//@ts-ignore
import Logo from '@assets/logo.png';
//@ts-ignore
// import Logo from '@assets/logo1.svg';
//@ts-ignore
import BackgroundImg from '../../assets/background.png';
import { useAuth } from "@hooks/useAuth";
import { useProducers } from "@hooks/useProducer";
import { Loading } from "@components/Loading";
import axios from "axios";
import { storageProducerSave } from "@storage/storageProducer";

type FormData = {
  nickname: string;
}


export function SignIn() {
  // const [cpf, setCpfUser] = useState('')
  const [loading, setLoading] = useState(false)
  const { signInUser } = useAuth();
  const { addProducers } = useProducers();

  const { control, handleSubmit, formState: {errors} } = useForm<FormData>();

  // const handleSignIn = useCallback(async () => {
  //   try {
  //     setLoading(true)
  //     console.log('cpf', cpf)
  //     await signInUser(cpf)
  //   } catch (err) {
  //     console.log('Error', err)
  //   } finally {
  //     setLoading(false)
  //   }
  // }, [cpf])
  async function handleSignIn({ nickname }: FormData) {
    try {
      setLoading(true)
      
      await signInUser(nickname)
      await addProducers()
    } catch (err) {
      console.log('Error', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
    <Container>
      <Image
        source={BackgroundImg}
        style={{ resizeMode: 'contain' }}
        />
      <ImageLogo
        source={Logo}
        
        style={{ resizeMode: 'contain' }}
        />

      
      <Text>Realise seu login</Text>
      <SectionForm>
        <Controller 
          control={control}
          name="nickname"
          rules={{ required: "Informe o apelido da granja!"}}
          render={({field: { onChange }}) => (
              <Input 
                titleInput="Digite o apelido de sua granja"
                onChangeText={onChange}
            />
          )}
          />
        {/* <Input onChangeText={setCpfUser} text={cpf} titleInput="Digite seu CPF" /> */}
        <Button onPress={handleSubmit(handleSignIn)}>
          {loading ? (
            <Loading />
          ) : (
            <Title>Acessar</Title>
          )}
        </Button>
      </SectionForm>
    </Container>
      <Footer>
      <TextCopyright>Copyright © 2024 Inovagrotec ®</TextCopyright>
      </Footer>
      </>
  )
}