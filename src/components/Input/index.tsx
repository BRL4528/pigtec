import { InputNatite, Title, Container } from './styles';

interface InputProps {
  onChangeText: (value: string) => void;
  text?: string;
  titleInput?: string;
  disabled?: boolean;
  placeholder?: string;
}

export function Input({ onChangeText, text, titleInput, disabled, placeholder, ...rest }: InputProps) {
  return (
    <Container>
      {titleInput !== '' ? <Title>{titleInput}</Title> : ''}
      <InputNatite onChangeText={onChangeText} value={text} placeholder={placeholder && placeholder} placeholderTextColor="#7C7C8A" editable={!disabled} {...rest}  />
    </Container>
  );
}
