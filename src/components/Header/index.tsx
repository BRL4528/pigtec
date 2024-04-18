import { Container, Title } from './styled';

export function Header({title}: any) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}